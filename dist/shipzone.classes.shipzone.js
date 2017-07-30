"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const plugins = require("./shipzone.plugins");
const paths = require("./shipzone.paths");
// classes
const shipzone_classes_szconnection_1 = require("./shipzone.classes.szconnection");
class ShipZone {
    constructor() {
        this.szConnection = new shipzone_classes_szconnection_1.SzConnection();
    }
    /**
     * gathers project data
     */
    gatherProjectData() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.readDirectory();
            yield this.readEnv();
            yield this.buildShipzoneData();
            yield this.connectToServeZone();
        });
    }
    /**
     * deploys an app to servezone
     */
    deployToServezone() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.gatherProjectData();
        });
    }
    // =================
    // private functions
    // =================
    /**
     * reads a directory to make sense of whats at cwd
     */
    readDirectory() {
        return __awaiter(this, void 0, void 0, function* () {
            // handle appJson
            if (yield plugins.smartfile.fs.fileExists(paths.projectAppJson)) {
                this.appJson = plugins.smartfile.fs.toObjectSync(paths.projectAppJson);
            }
            else {
                plugins.beautylog.error(`no app json found! Shipzone needs it!`);
                process.exit(1);
            }
        });
    }
    /**
     * reads the environment and tries to match it against app.json
     */
    readEnv() {
        return __awaiter(this, void 0, void 0, function* () {
            for (let key in this.appJson.env) {
            }
        });
    }
    /**
     * check integrity of the gathered data
     */
    buildShipzoneData() {
        return __awaiter(this, void 0, void 0, function* () {
            // build the environment data
            let spDockerEnv = {};
            for (let appJsonEnvVar of this.appJson.env) {
                let envVarResult;
                // lets determine the result
                if (appJsonEnvVar.value) {
                    envVarResult = appJsonEnvVar.value;
                }
                else if (appJsonEnvVar.generator) {
                    let parsedGenerator = appJsonEnvVar.generator.split('|');
                    let generatorType = parsedGenerator[0];
                    let generatorDescription = parsedGenerator[1];
                    switch (generatorType) {
                        case 'ENV':
                            envVarResult = process.env[generatorDescription];
                            break;
                        case 'URL':
                            // TODO:
                            break;
                    }
                }
                // set it to the dockerEnv object
                spDockerEnv[appJsonEnvVar.name] = envVarResult;
            }
            // Get the docker data that is used to obtain the built app
            let spDockerImagePath;
            let spDockerDeploymentKey;
            // the ShipzoneData object
            this.shipzoneData = {
                dockerImagePath: spDockerImagePath,
                dockerDeploymentKey: spDockerImagePath,
                dockerEnv: spDockerEnv
            };
        });
    }
    /**
     * connect to a servezone instance
     */
    connectToServeZone() {
        return __awaiter(this, void 0, void 0, function* () {
            this.szConnection = new shipzone_classes_szconnection_1.SzConnection();
        });
    }
}
exports.ShipZone = ShipZone;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hpcHpvbmUuY2xhc3Nlcy5zaGlwem9uZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3RzL3NoaXB6b25lLmNsYXNzZXMuc2hpcHpvbmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLDhDQUE2QztBQUM3QywwQ0FBeUM7QUFNekMsVUFBVTtBQUNWLG1GQUE4RDtBQUU5RDtJQUtFO1FBQ0UsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLDRDQUFZLEVBQUUsQ0FBQTtJQUN4QyxDQUFDO0lBRUQ7O09BRUc7SUFDRyxpQkFBaUI7O1lBQ3JCLE1BQU0sSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFBO1lBQzFCLE1BQU0sSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFBO1lBQ3BCLE1BQU0sSUFBSSxDQUFDLGlCQUFpQixFQUFFLENBQUE7WUFDOUIsTUFBTSxJQUFJLENBQUMsa0JBQWtCLEVBQUUsQ0FBQTtRQUNqQyxDQUFDO0tBQUE7SUFFRDs7T0FFRztJQUNHLGlCQUFpQjs7WUFDckIsTUFBTSxJQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQTtRQUNoQyxDQUFDO0tBQUE7SUFFRCxvQkFBb0I7SUFDcEIsb0JBQW9CO0lBQ3BCLG9CQUFvQjtJQUVwQjs7T0FFRztJQUNXLGFBQWE7O1lBQ3pCLGlCQUFpQjtZQUNqQixFQUFFLENBQUMsQ0FBQyxNQUFNLE9BQU8sQ0FBQyxTQUFTLENBQUMsRUFBRSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUNoRSxJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQyxTQUFTLENBQUMsRUFBRSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsY0FBYyxDQUFDLENBQUE7WUFDeEUsQ0FBQztZQUFDLElBQUksQ0FBQyxDQUFDO2dCQUNOLE9BQU8sQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLHVDQUF1QyxDQUFDLENBQUE7Z0JBQ2hFLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUE7WUFDakIsQ0FBQztRQUNILENBQUM7S0FBQTtJQUVEOztPQUVHO0lBQ1csT0FBTzs7WUFDbkIsR0FBRyxDQUFDLENBQUMsSUFBSSxHQUFHLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1lBRW5DLENBQUM7UUFDSCxDQUFDO0tBQUE7SUFFRDs7T0FFRztJQUNXLGlCQUFpQjs7WUFDN0IsNkJBQTZCO1lBQzdCLElBQUksV0FBVyxHQUFHLEVBQUUsQ0FBQTtZQUNwQixHQUFHLENBQUMsQ0FBQyxJQUFJLGFBQWEsSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7Z0JBQzNDLElBQUksWUFBNkIsQ0FBQTtnQkFFakMsNEJBQTRCO2dCQUM1QixFQUFFLENBQUMsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztvQkFDeEIsWUFBWSxHQUFHLGFBQWEsQ0FBQyxLQUFLLENBQUE7Z0JBQ3BDLENBQUM7Z0JBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO29CQUNuQyxJQUFJLGVBQWUsR0FBRyxhQUFhLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQTtvQkFDeEQsSUFBSSxhQUFhLEdBQUcsZUFBZSxDQUFDLENBQUMsQ0FBQyxDQUFBO29CQUN0QyxJQUFJLG9CQUFvQixHQUFHLGVBQWUsQ0FBQyxDQUFDLENBQUMsQ0FBQTtvQkFDN0MsTUFBTSxDQUFDLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQzt3QkFDdEIsS0FBSyxLQUFLOzRCQUNSLFlBQVksR0FBRyxPQUFPLENBQUMsR0FBRyxDQUFDLG9CQUFvQixDQUFDLENBQUE7NEJBQ2hELEtBQUssQ0FBQTt3QkFDUCxLQUFLLEtBQUs7NEJBQ1IsUUFBUTs0QkFDUixLQUFLLENBQUE7b0JBQ1QsQ0FBQztnQkFDSCxDQUFDO2dCQUVELGlDQUFpQztnQkFDakMsV0FBVyxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsR0FBRyxZQUFZLENBQUE7WUFDaEQsQ0FBQztZQUVELDJEQUEyRDtZQUMzRCxJQUFJLGlCQUF5QixDQUFBO1lBQzdCLElBQUkscUJBQTZCLENBQUE7WUFFakMsMEJBQTBCO1lBQzFCLElBQUksQ0FBQyxZQUFZLEdBQUc7Z0JBQ2xCLGVBQWUsRUFBRSxpQkFBaUI7Z0JBQ2xDLG1CQUFtQixFQUFFLGlCQUFpQjtnQkFDdEMsU0FBUyxFQUFFLFdBQVc7YUFDdkIsQ0FBQTtRQUNILENBQUM7S0FBQTtJQUVEOztPQUVHO0lBQ1csa0JBQWtCOztZQUM5QixJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksNENBQVksRUFBRSxDQUFBO1FBQ3hDLENBQUM7S0FBQTtDQUNGO0FBcEdELDRCQW9HQyJ9
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
        // TODO:
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hpcHpvbmUuY2xhc3Nlcy5zaGlwem9uZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3RzL3NoaXB6b25lLmNsYXNzZXMuc2hpcHpvbmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLDhDQUE2QztBQUM3QywwQ0FBeUM7QUFNekMsVUFBVTtBQUNWLG1GQUE4RDtBQUU5RDtJQUtFO1FBQ0UsUUFBUTtJQUNWLENBQUM7SUFFRDs7T0FFRztJQUNHLGlCQUFpQjs7WUFDckIsTUFBTSxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUE7WUFDMUIsTUFBTSxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUE7WUFDcEIsTUFBTSxJQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQTtZQUM5QixNQUFNLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxDQUFBO1FBQ2pDLENBQUM7S0FBQTtJQUVEOztPQUVHO0lBQ0csaUJBQWlCOztZQUNyQixNQUFNLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFBO1FBQ2hDLENBQUM7S0FBQTtJQUVELG9CQUFvQjtJQUNwQixvQkFBb0I7SUFDcEIsb0JBQW9CO0lBRXBCOztPQUVHO0lBQ1csYUFBYTs7WUFDekIsaUJBQWlCO1lBQ2pCLEVBQUUsQ0FBQyxDQUFDLE1BQU0sT0FBTyxDQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ2hFLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxjQUFjLENBQUMsQ0FBQTtZQUN4RSxDQUFDO1lBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ04sT0FBTyxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsdUNBQXVDLENBQUMsQ0FBQTtnQkFDaEUsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQTtZQUNqQixDQUFDO1FBQ0gsQ0FBQztLQUFBO0lBRUQ7O09BRUc7SUFDVyxPQUFPOztZQUNuQixHQUFHLENBQUMsQ0FBQyxJQUFJLEdBQUcsSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7WUFFbkMsQ0FBQztRQUNILENBQUM7S0FBQTtJQUVEOztPQUVHO0lBQ1csaUJBQWlCOztZQUM3Qiw2QkFBNkI7WUFDN0IsSUFBSSxXQUFXLEdBQUcsRUFBRSxDQUFBO1lBQ3BCLEdBQUcsQ0FBQyxDQUFDLElBQUksYUFBYSxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztnQkFDM0MsSUFBSSxZQUE2QixDQUFBO2dCQUVqQyw0QkFBNEI7Z0JBQzVCLEVBQUUsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO29CQUN4QixZQUFZLEdBQUcsYUFBYSxDQUFDLEtBQUssQ0FBQTtnQkFDcEMsQ0FBQztnQkFBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7b0JBQ25DLElBQUksZUFBZSxHQUFHLGFBQWEsQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFBO29CQUN4RCxJQUFJLGFBQWEsR0FBRyxlQUFlLENBQUMsQ0FBQyxDQUFDLENBQUE7b0JBQ3RDLElBQUksb0JBQW9CLEdBQUcsZUFBZSxDQUFDLENBQUMsQ0FBQyxDQUFBO29CQUM3QyxNQUFNLENBQUMsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDO3dCQUN0QixLQUFLLEtBQUs7NEJBQ1IsWUFBWSxHQUFHLE9BQU8sQ0FBQyxHQUFHLENBQUMsb0JBQW9CLENBQUMsQ0FBQTs0QkFDaEQsS0FBSyxDQUFBO3dCQUNQLEtBQUssS0FBSzs0QkFDUixRQUFROzRCQUNSLEtBQUssQ0FBQTtvQkFDVCxDQUFDO2dCQUNILENBQUM7Z0JBRUQsaUNBQWlDO2dCQUNqQyxXQUFXLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxHQUFHLFlBQVksQ0FBQTtZQUNoRCxDQUFDO1lBRUQsMkRBQTJEO1lBQzNELElBQUksaUJBQXlCLENBQUE7WUFDN0IsSUFBSSxxQkFBNkIsQ0FBQTtZQUVqQywwQkFBMEI7WUFDMUIsSUFBSSxDQUFDLFlBQVksR0FBRztnQkFDbEIsZUFBZSxFQUFFLGlCQUFpQjtnQkFDbEMsbUJBQW1CLEVBQUUsaUJBQWlCO2dCQUN0QyxTQUFTLEVBQUUsV0FBVzthQUN2QixDQUFBO1FBQ0gsQ0FBQztLQUFBO0lBRUQ7O09BRUc7SUFDVyxrQkFBa0I7O1lBQzlCLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSw0Q0FBWSxFQUFFLENBQUE7UUFDeEMsQ0FBQztLQUFBO0NBQ0Y7QUFwR0QsNEJBb0dDIn0=
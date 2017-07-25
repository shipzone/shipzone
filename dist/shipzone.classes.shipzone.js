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
            yield this.checkIntegrity();
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
    checkIntegrity() {
        return __awaiter(this, void 0, void 0, function* () {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hpcHpvbmUuY2xhc3Nlcy5zaGlwem9uZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3RzL3NoaXB6b25lLmNsYXNzZXMuc2hpcHpvbmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLDhDQUE2QztBQUM3QywwQ0FBeUM7QUFNekMsVUFBVTtBQUNWLG1GQUE4RDtBQUU5RDtJQUtFO1FBQ0UsUUFBUTtJQUNWLENBQUM7SUFFRDs7T0FFRztJQUNHLGlCQUFpQjs7WUFDckIsTUFBTSxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUE7WUFDMUIsTUFBTSxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUE7WUFDcEIsTUFBTSxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUE7WUFDM0IsTUFBTSxJQUFJLENBQUMsa0JBQWtCLEVBQUUsQ0FBQTtRQUNqQyxDQUFDO0tBQUE7SUFFRDs7T0FFRztJQUNHLGlCQUFpQjs7WUFDckIsTUFBTSxJQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQTtRQUNoQyxDQUFDO0tBQUE7SUFFRCxvQkFBb0I7SUFDcEIsb0JBQW9CO0lBQ3BCLG9CQUFvQjtJQUVwQjs7T0FFRztJQUNXLGFBQWE7O1lBQ3pCLGlCQUFpQjtZQUNqQixFQUFFLENBQUMsQ0FBQyxNQUFNLE9BQU8sQ0FBQyxTQUFTLENBQUMsRUFBRSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUNoRSxJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQyxTQUFTLENBQUMsRUFBRSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsY0FBYyxDQUFDLENBQUE7WUFDeEUsQ0FBQztZQUFDLElBQUksQ0FBQyxDQUFDO2dCQUNOLE9BQU8sQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLHVDQUF1QyxDQUFDLENBQUE7Z0JBQ2hFLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUE7WUFDakIsQ0FBQztRQUNILENBQUM7S0FBQTtJQUVEOztPQUVHO0lBQ1csT0FBTzs7WUFDbkIsR0FBRyxDQUFDLENBQUMsSUFBSSxHQUFHLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1lBRW5DLENBQUM7UUFDSCxDQUFDO0tBQUE7SUFFRDs7T0FFRztJQUNXLGNBQWM7O1FBRTVCLENBQUM7S0FBQTtJQUVEOztPQUVHO0lBQ1csa0JBQWtCOztZQUM5QixJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksNENBQVksRUFBRSxDQUFBO1FBQ3hDLENBQUM7S0FBQTtDQUNGO0FBakVELDRCQWlFQyJ9
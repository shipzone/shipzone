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
            // TODO:
        });
    }
    /**
     * reads the environment and tries to match it against app.json
     */
    readEnv() {
        return __awaiter(this, void 0, void 0, function* () {
            // TODO:
        });
    }
    /**
     * check integrity of the gathered data
     */
    checkIntegrity() {
        return __awaiter(this, void 0, void 0, function* () {
        });
    }
}
exports.ShipZone = ShipZone;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hpcHpvbmUuY2xhc3Nlcy5zaGlwem9uZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3RzL3NoaXB6b25lLmNsYXNzZXMuc2hpcHpvbmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUtBO0lBRUU7UUFDRSxRQUFRO0lBQ1YsQ0FBQztJQUVEOztPQUVHO0lBQ0csaUJBQWlCOztZQUNyQixNQUFNLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQTtZQUMxQixNQUFNLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQTtZQUNwQixNQUFNLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQTtRQUM3QixDQUFDO0tBQUE7SUFFRDs7T0FFRztJQUNHLGlCQUFpQjs7WUFDckIsTUFBTSxJQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQTtRQUNoQyxDQUFDO0tBQUE7SUFFRCxvQkFBb0I7SUFDcEIsb0JBQW9CO0lBQ3BCLG9CQUFvQjtJQUVwQjs7T0FFRztJQUNXLGFBQWE7O1lBQ3pCLFFBQVE7UUFDVixDQUFDO0tBQUE7SUFFRDs7T0FFRztJQUNXLE9BQU87O1lBQ25CLFFBQVE7UUFDVixDQUFDO0tBQUE7SUFFRDs7T0FFRztJQUNXLGNBQWM7O1FBRTVCLENBQUM7S0FBQTtDQUNGO0FBOUNELDRCQThDQyJ9
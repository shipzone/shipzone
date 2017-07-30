"use strict";
// this file contains the the logic
// for connecting to a servezone instance
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
class SzConnection {
    /**
     * constructor of the SzConnection class
     */
    constructor() {
        this.smartSocket = new plugins.smartsocket.SmartsocketClient({
            alias: 'ShipZoneCi',
            url: '',
            password: '',
            port: 4567,
            role: 'ci'
        });
    }
    /**
     * connect to the instance
     */
    connect() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.smartSocket.connect();
        });
    }
    /**
     * disconnect to the instance
     */
    disconnect() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.smartSocket.disconnect();
        });
    }
}
exports.SzConnection = SzConnection;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hpcHpvbmUuY2xhc3Nlcy5zemNvbm5lY3Rpb24uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi90cy9zaGlwem9uZS5jbGFzc2VzLnN6Y29ubmVjdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsbUNBQW1DO0FBQ25DLHlDQUF5Qzs7Ozs7Ozs7OztBQUV6Qyw4Q0FBNkM7QUFLN0M7SUFLRTs7T0FFRztJQUNIO1FBQ0UsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLE9BQU8sQ0FBQyxXQUFXLENBQUMsaUJBQWlCLENBQUM7WUFDM0QsS0FBSyxFQUFFLFlBQVk7WUFDbkIsR0FBRyxFQUFFLEVBQUU7WUFDUCxRQUFRLEVBQUUsRUFBRTtZQUNaLElBQUksRUFBRSxJQUFJO1lBQ1YsSUFBSSxFQUFFLElBQUk7U0FDWCxDQUFDLENBQUE7SUFDSixDQUFDO0lBRUQ7O09BRUc7SUFDRyxPQUFPOztZQUNYLE1BQU0sSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLEVBQUUsQ0FBQTtRQUNsQyxDQUFDO0tBQUE7SUFFRDs7T0FFRztJQUNHLFVBQVU7O1lBQ2QsTUFBTSxJQUFJLENBQUMsV0FBVyxDQUFDLFVBQVUsRUFBRSxDQUFBO1FBQ3JDLENBQUM7S0FBQTtDQUNGO0FBL0JELG9DQStCQyJ9
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
const index_1 = require("./index");
exports.shipzoneCli = new plugins.smartcli.Smartcli();
exports.shipzoneCli.addCommand('deploy').then((argvArg) => __awaiter(this, void 0, void 0, function* () {
    yield index_1.standardShipZone.deployToServezone();
}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hpcHpvbmUuY2xpLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vdHMvc2hpcHpvbmUuY2xpLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSw4Q0FBNkM7QUFHN0MsbUNBQTBDO0FBRS9CLFFBQUEsV0FBVyxHQUFHLElBQUksT0FBTyxDQUFDLFFBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FBQTtBQUN4RCxtQkFBVyxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBTSxPQUFPO0lBQ2pELE1BQU0sd0JBQWdCLENBQUMsaUJBQWlCLEVBQUUsQ0FBQTtBQUM1QyxDQUFDLENBQUEsQ0FBQyxDQUFBIn0=
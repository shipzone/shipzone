import * as plugins from './shipzone.plugins';
import { SzConnection } from './shipzone.classes.szconnection';
export declare class ShipZone {
    appJson: plugins.smartapp.IAppJSON;
    shipzoneData: plugins.servezoneInterfaces.IShipZoneData;
    szConnection: SzConnection;
    constructor();
    /**
     * gathers project data
     */
    gatherProjectData(): Promise<void>;
    /**
     * deploys an app to servezone
     */
    deployToServezone(): Promise<void>;
    /**
     * reads a directory to make sense of whats at cwd
     */
    private readDirectory();
    /**
     * reads the environment and tries to match it against app.json
     */
    private readEnv();
    /**
     * check integrity of the gathered data
     */
    private buildShipzoneData();
    /**
     * connect to a servezone instance
     */
    private connectToServeZone();
}

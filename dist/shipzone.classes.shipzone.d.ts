import * as plugins from './shipzone.plugins';
export declare class ShipZone {
    appJson: plugins.smartapp.IAppJSON;
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
    private checkIntegrity();
}

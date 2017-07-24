export declare class ShipZone {
    constructor();
    /**
     * gathers project data
     */
    gatherProjectData(): void;
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
}

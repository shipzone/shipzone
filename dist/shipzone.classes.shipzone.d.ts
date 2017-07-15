export declare class ShipZone {
    constructor();
    /**
     * reads a directory to make sense of whats at cwd
     */
    readDirectory(): Promise<void>;
    /**
     * deploys an app to servezone
     */
    deployToServezone(): Promise<void>;
}

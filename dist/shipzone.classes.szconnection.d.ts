import * as plugins from './shipzone.plugins';
export declare class SzConnection {
    smartSocket: plugins.smartsocket.SmartsocketClient;
    /**
     * constructor of the SzConnection class
     */
    constructor();
    /**
     * connect to the instance
     */
    connect(): Promise<void>;
    /**
     * disconnect to the instance
     */
    disconnect(): Promise<void>;
}

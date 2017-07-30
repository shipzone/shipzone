// this file contains the the logic
// for connecting to a servezone instance

import * as plugins from './shipzone.plugins'

// interfaces
import { SmartsocketClient } from 'smartsocket'

export class SzConnection {

  // 
  smartSocket: plugins.smartsocket.SmartsocketClient
  
  /**
   * constructor of the SzConnection class
   */
  constructor () {
    this.smartSocket = new plugins.smartsocket.SmartsocketClient({
      alias: 'ShipZoneCi',
      url: '',
      password: '',
      port: 4567,
      role: 'ci'
    })
  }

  /**
   * connect to the instance
   */
  async connect () {
    await this.smartSocket.connect()
  }

  /**
   * disconnect to the instance
   */
  async disconnect () {
    await this.smartSocket.disconnect()
  }
}

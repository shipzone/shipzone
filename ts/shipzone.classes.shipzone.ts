import * as plugins from './shipzone.plugins'
import * as paths from './shipzone.paths'

// interfaces
import { IAppJSON } from 'smartapp'
import { IShipZoneData } from 'servezone-interfaces'

// classes
import { SzConnection } from './shipzone.classes.szconnection'

export class ShipZone {
  appJson: plugins.smartapp.IAppJSON
  shipzoneData: plugins.servezoneInterfaces.IShipZoneData
  szConnection: SzConnection
  
  constructor () {
    // TODO:
  }

  /**
   * gathers project data
   */
  async gatherProjectData () {
    await this.readDirectory()
    await this.readEnv()
    await this.checkIntegrity()
    await this.connectToServeZone()
  }

  /**
   * deploys an app to servezone
   */
  async deployToServezone () {
    await this.gatherProjectData()
  }

  // =================
  // private functions
  // =================

  /**
   * reads a directory to make sense of whats at cwd
   */
  private async readDirectory () {
    // handle appJson
    if (await plugins.smartfile.fs.fileExists(paths.projectAppJson)) {
      this.appJson = plugins.smartfile.fs.toObjectSync(paths.projectAppJson)
    } else {
      plugins.beautylog.error(`no app json found! Shipzone needs it!`)
      process.exit(1)
    }
  }

  /**
   * reads the environment and tries to match it against app.json
   */
  private async readEnv () {
    for (let key in this.appJson.env) {
      
    }
  }

  /**
   * check integrity of the gathered data
   */
  private async checkIntegrity () {

  }

  /**
   * connect to a servezone instance
   */
  private async connectToServeZone () {
    this.szConnection = new SzConnection()
  }
}

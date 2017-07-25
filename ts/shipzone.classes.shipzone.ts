import * as plugins from './shipzone.plugins'
import * as paths from './shipzone.paths'

import { IAppJSON } from 'smartapp'

export class ShipZone {
  appJson: plugins.smartapp.IAppJSON
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
    // TODO:
  }

  /**
   * reads the environment and tries to match it against app.json
   */
  private async readEnv () {
    // TODO:
  }

  /**
   * check integrity of the gathered data
   */
  private async checkIntegrity () {

  }
}

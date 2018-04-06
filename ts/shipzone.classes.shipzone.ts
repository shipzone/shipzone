import * as plugins from './shipzone.plugins';
import * as paths from './shipzone.paths';

// interfaces
import { IAppJSON } from 'smartapp';
import { IShipZoneData } from 'servezone-interfaces';

// classes
import { SzConnection } from './shipzone.classes.szconnection';

export class ShipZone {
  appJson: plugins.smartapp.IAppJSON;
  shipzoneData: plugins.servezoneInterfaces.IShipZoneData;
  szConnection: SzConnection;

  constructor() {
    this.szConnection = new SzConnection();
  }

  /**
   * gathers project data
   */
  async gatherProjectData() {
    await this.readDirectory();
    await this.readEnv();
    await this.buildShipzoneData();
    await this.connectToServeZone();
  }

  /**
   * deploys an app to servezone
   */
  async deployToServezone() {
    await this.gatherProjectData();
  }

  // =================
  // private functions
  // =================

  /**
   * reads a directory to make sense of whats at cwd
   */
  private async readDirectory() {
    // handle appJson
    if (await plugins.smartfile.fs.fileExists(paths.projectAppJson)) {
      this.appJson = plugins.smartfile.fs.toObjectSync(paths.projectAppJson);
    } else {
      plugins.beautylog.error(`no app json found! Shipzone needs it!`);
      process.exit(1);
    }
  }

  /**
   * reads the environment and tries to match it against app.json
   */
  private async readEnv() {
    for (let key in this.appJson.env) {
    }
  }

  /**
   * check integrity of the gathered data
   */
  private async buildShipzoneData() {
    // build the environment data
    let spDockerEnv = {};
    for (let appJsonEnvVar of this.appJson.env) {
      let envVarResult: string | number;

      // lets determine the result
      if (appJsonEnvVar.value) {
        envVarResult = appJsonEnvVar.value;
      } else if (appJsonEnvVar.generator) {
        let parsedGenerator = appJsonEnvVar.generator.split('|');
        let generatorType = parsedGenerator[0];
        let generatorDescription = parsedGenerator[1];
        switch (generatorType) {
          case 'ENV':
            envVarResult = process.env[generatorDescription];
            break;
          case 'URL':
            // TODO:
            break;
        }
      }

      // set it to the dockerEnv object
      spDockerEnv[appJsonEnvVar.name] = envVarResult;
    }

    // Get the docker data that is used to obtain the built app
    let spDockerImagePath: string;
    let spDockerDeploymentKey: string;

    // the ShipzoneData object
    this.shipzoneData = {
      dockerImagePath: spDockerImagePath,
      dockerDeploymentKey: spDockerImagePath,
      dockerEnv: spDockerEnv
    };
  }

  /**
   * connect to a servezone instance
   */
  private async connectToServeZone() {
    this.szConnection = new SzConnection();
  }
}

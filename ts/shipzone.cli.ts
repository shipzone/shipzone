import * as plugins from './shipzone.plugins';
import { Smartcli } from 'smartcli';

import { standardShipZone } from './index';

export let shipzoneCli = new plugins.smartcli.Smartcli();
shipzoneCli.addCommand('deploy').then(async argvArg => {
  await standardShipZone.deployToServezone();
});

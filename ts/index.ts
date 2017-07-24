export * from './shipzone.classes.shipzone'

import { ShipZone } from './shipzone.classes.shipzone'
import * as shipzoneCli from './shipzone.cli'

shipzoneCli.run()

let standardShipZone = new ShipZone()

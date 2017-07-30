import { expect, tap } from 'tapbundle'
import * as shipzone from '../ts/index'

let testShipzone: shipzone.ShipZone

tap.test('should create a valid instance of shipzone', async () => {
  console.log('hey')
  testShipzone = new shipzone.ShipZone()
  expect(testShipzone).to.be.instanceof(shipzone.ShipZone)
})

tap.test('should connect to servezone', async () => {
  testShipzone.szConnection
})

tap.start()

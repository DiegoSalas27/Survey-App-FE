import { SetStorage } from '@data/protocols/cache/set-storage'
import { LocalStoragerAdapter } from '@infrastructure/cache/local-storage.adapter'

export const makeLocalStorageAdapter = (): SetStorage => {
  return new LocalStoragerAdapter()
}

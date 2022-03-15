import { LocalStoragerAdapter } from '@infrastructure/cache/local-storage.adapter'

export const makeLocalStorageAdapter = (): LocalStoragerAdapter => {
  return new LocalStoragerAdapter()
}

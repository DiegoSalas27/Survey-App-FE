import { SetStorage } from '@data/protocols/cache/set-storage'

export class LocalStoragerAdapter implements SetStorage {
  set(key: string, value: object): void {
    localStorage.setItem(key, JSON.stringify(value))
  }
}

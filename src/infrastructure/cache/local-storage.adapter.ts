import { GetStorage } from '@data/protocols/cache'
import { SetStorage } from '@data/protocols/cache/set-storage'

export class LocalStoragerAdapter implements SetStorage, GetStorage {
  get(key: string): any {
    return JSON.parse(localStorage.getItem(key))
  }

  set(key: string, value: object): void {
    if (value) localStorage.setItem(key, JSON.stringify(value))
    else localStorage.removeItem(key)
  }
}

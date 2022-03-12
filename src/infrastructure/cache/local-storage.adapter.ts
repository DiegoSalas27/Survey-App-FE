import { SetStorage } from '@data/protocols/cache/set-storage'

export class LocalStoragerAdapter implements SetStorage {
  async set(key: string, value: any): Promise<void> {
    localStorage.setItem(key, value)
  }
}

import { SetStorage } from '@data/protocols/cache/set-storage'
import { SaveAccessToken } from '@domain/usecases/save-access-token'
import { UnexpectedError } from '../authentication/remote-authentication-protocols'

export class LocalSaveAccessToken implements SaveAccessToken {
  constructor(private readonly setStorage: SetStorage) {}

  async save(accessToken: string): Promise<void> {
    if (!accessToken) {
      throw new UnexpectedError()
    }
    await this.setStorage.set('accessToken', accessToken)
  }
}

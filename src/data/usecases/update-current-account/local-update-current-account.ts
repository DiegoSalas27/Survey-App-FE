import { SetStorage } from '@data/protocols/cache/set-storage'
import { UpdateCurrentAccount } from '@domain/usecases/update-current-account'
import { AccountModel, UnexpectedError } from '../authentication/remote-authentication-protocols'

export class LocalUpdateCurrentAccount implements UpdateCurrentAccount {
  constructor(private readonly setStorage: SetStorage) {}

  async save(account: AccountModel): Promise<void> {
    if (!account?.accessToken) {
      throw new UnexpectedError()
    }
    await this.setStorage.set('account', JSON.stringify(account))
  }
}

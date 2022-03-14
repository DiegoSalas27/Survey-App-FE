import { SetStorageMock } from '@data/test/mock-cache'
import { mockAccountModel, UnexpectedError } from '../authentication/remote-authentication-protocols'
import { LocalUpdateCurrentAccount } from './local-update-current-account'

type SutTypes = {
  setStorage: SetStorageMock
  sut: LocalUpdateCurrentAccount
}

const makeSut = (): SutTypes => {
  const setStorage = new SetStorageMock()
  const sut = new LocalUpdateCurrentAccount(setStorage)

  return {
    setStorage,
    sut
  }
}

describe('LocalUpdateCurrentAccount UseCase', () => {
  test('Should call SetStorage with correct value', async () => {
    const { setStorage, sut } = makeSut()
    const account = mockAccountModel()
    await sut.save(account)
    expect(setStorage.key).toBe('account')
    expect(setStorage.value).toBe(JSON.stringify(account))
  })

  test('Should throw if  SetStorage throws', async () => {
    const { setStorage, sut } = makeSut()
    jest.spyOn(setStorage, 'set').mockRejectedValueOnce(new Error())
    const promise = sut.save(mockAccountModel())
    await expect(promise).rejects.toThrow(new Error())
  })

  test('Should throw if accessToken is falsy', async () => {
    const { sut } = makeSut()
    const promise = sut.save(undefined)
    await expect(promise).rejects.toThrow(new UnexpectedError())
  })
})

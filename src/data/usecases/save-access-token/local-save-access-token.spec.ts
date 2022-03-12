import { SetStorageSpy } from '@data/test/mock-storage'
import faker from '@faker-js/faker'
import { LocalSaveAccessToken } from './local-save-access-token'

type SutTypes = {
  setStorage: SetStorageSpy
  sut: LocalSaveAccessToken
}

const makeSut = (): SutTypes => {
  const setStorage = new SetStorageSpy()
  const sut = new LocalSaveAccessToken(setStorage)

  return {
    setStorage,
    sut
  }
}

describe('LocalSaveAccessToken UseCase', () => {
  test('Should call SetStorage with correct value', async () => {
    const { setStorage, sut } = makeSut()
    const accessToken = faker.datatype.uuid()
    await sut.save(accessToken)
    expect(setStorage.key).toBe('accessToken')
    expect(setStorage.value).toBe(accessToken)
  })
})

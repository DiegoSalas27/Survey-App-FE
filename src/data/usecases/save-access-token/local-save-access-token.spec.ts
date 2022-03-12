import { SetStorageMock } from '@data/test/mock-storage'
import faker from '@faker-js/faker'
import { LocalSaveAccessToken } from './local-save-access-token'

type SutTypes = {
  setStorage: SetStorageMock
  sut: LocalSaveAccessToken
}

const makeSut = (): SutTypes => {
  const setStorage = new SetStorageMock()
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

  test('Should throw if  SetStorage throws', async () => {
    const { setStorage, sut } = makeSut()
    jest.spyOn(setStorage, 'set').mockRejectedValueOnce(new Error())
    const promise = sut.save(faker.datatype.uuid())
    await expect(promise).rejects.toThrow(new Error())
  })
})

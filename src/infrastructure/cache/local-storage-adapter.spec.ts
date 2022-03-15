import { AccountModel } from '@domain/models'
import faker from '@faker-js/faker'
import 'jest-localstorage-mock'
import { LocalStoragerAdapter } from './local-storage.adapter'

const makeSut = (): LocalStoragerAdapter => new LocalStoragerAdapter()

describe('LocalStoragerAdapter', () => {
  beforeEach(() => {
    localStorage.clear()
  })

  test('Should call localStorage with correct values', () => {
    const sut = makeSut()
    const key = faker.database.column()
    const value = JSON.parse(faker.datatype.json())
    sut.set(key, value)
    expect(localStorage.setItem).toHaveBeenCalledWith(key, JSON.stringify(value))
  })
})

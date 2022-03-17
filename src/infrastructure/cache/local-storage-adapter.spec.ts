import { AccountModel } from '@domain/models'
import faker from '@faker-js/faker'
import 'jest-localstorage-mock'
import { stringify } from 'querystring'
import { LocalStoragerAdapter } from './local-storage.adapter'

const makeSut = (): LocalStoragerAdapter => new LocalStoragerAdapter()

describe('LocalStoragerAdapter', () => {
  beforeEach(() => {
    localStorage.clear()
  })

  test('Should call localStorage.setItem with correct values', () => {
    const sut = makeSut()
    const key = faker.database.column()
    const value = JSON.parse(faker.datatype.json())
    sut.set(key, value)
    expect(localStorage.setItem).toHaveBeenCalledWith(key, JSON.stringify(value))
  })

  test('Should call localStorage.removeItm if value is null', () => {
    const sut = makeSut()
    const key = faker.database.column()
    sut.set(key, undefined)
    expect(localStorage.removeItem).toHaveBeenCalledWith(key)
  })

  test('Should call localStorage.getItem with correct values', () => {
    const sut = makeSut()
    const key = faker.database.column()
    const value = JSON.parse(faker.datatype.json())
    const getItemSpy = jest.spyOn(localStorage, 'getItem').mockReturnValueOnce(JSON.stringify(value))
    const obj = sut.get(key)
    expect(obj).toEqual(value)
    expect(getItemSpy).toHaveBeenCalledWith(key)
  })
})

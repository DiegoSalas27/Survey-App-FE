import { UnexpectedError } from '@domain/errors'
import { mockAccountModel } from '@domain/test'
import { LocalStoragerAdapter } from '@infrastructure/cache/local-storage.adapter'
import { setCurrentAccountAdapter } from './current-account-adapter'

// we don't care what LocalStorageAdapter does inside
// mock it's functions to be dummy (they don't do anything) (we don't store in localstorage)
jest.mock('@infrastructure/cache/local-storage.adapter')

describe('CurrentAccountAdapter', () => {
  test('Should call LocalStorageAdapter with correct values', () => {
    const account = mockAccountModel()
    const setSpy = jest.spyOn(LocalStoragerAdapter.prototype, 'set')
    setCurrentAccountAdapter(account)
    expect(setSpy).toHaveBeenCalledWith('account', account)
  })

  test('Should throw UnexpectedError if an invalid account is provided', () => {
    expect(() => {
      setCurrentAccountAdapter(undefined)
    }).toThrow(new UnexpectedError())
  })
})

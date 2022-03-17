import { UnexpectedError } from '@domain/errors'
import { mockAccountModel } from '@domain/test'
import { LocalStoragerAdapter } from '@infrastructure/cache/local-storage.adapter'
import { setCurrentAccountAdapter, getCurrentAccountAdapter } from './current-account-adapter'

// we don't care what LocalStorageAdapter does inside
// mock it's functions to be dummy (they don't do anything) (we don't store in localstorage)
jest.mock('@infrastructure/cache/local-storage.adapter')

describe('CurrentAccountAdapter', () => {
  test('Should call LocalStorageAdapter.set with correct values', () => {
    const account = mockAccountModel()
    const setSpy = jest.spyOn(LocalStoragerAdapter.prototype, 'set')
    setCurrentAccountAdapter(account)
    expect(setSpy).toHaveBeenCalledWith('account', account)
  })

  test('Should call LocalStorageAdapter.get with correct values', () => {
    const account = mockAccountModel()
    const getSpy = jest.spyOn(LocalStoragerAdapter.prototype, 'get').mockReturnValueOnce(account)
    const result = getCurrentAccountAdapter()
    expect(getSpy).toHaveBeenCalledWith('account')
    expect(result).toEqual(account)
  })
})

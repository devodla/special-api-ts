import {
  makeSignUpValidation,
  makeDbAuthentication,
  makeDbAddAccount,
  makeLogControllerDecorator
} from '@/main/factories'
import { Controller } from '@/presentation/protocols'
import { SingUpController } from '@/presentation/controllers'

export const makeSignUpController = (): Controller => {
  const controller = new SingUpController(makeDbAddAccount(), makeSignUpValidation(), makeDbAuthentication())
  return makeLogControllerDecorator(controller)
}

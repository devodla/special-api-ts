import { Controller } from '@/presentation/protocols'
import { ApolloError, AuthenticationError, ForbiddenError, UserInputError } from 'apollo-server-errors'

export const adaptResolver = async (controller: Controller, args?: any, context?: any): Promise<any> => {
  const request = {
    ...(args || {}),
    accountId: context?.req?.accountId
  }
  const httResponse = await controller.handle(request)
  switch (httResponse.statusCode) {
    case 200:
    case 204: return httResponse.body
    case 400: throw new UserInputError(httResponse.body.message)
    case 401: throw new AuthenticationError(httResponse.body.message)
    case 403: throw new ForbiddenError(httResponse.body.message)
    default: throw new ApolloError(httResponse.body.message)
  }
}

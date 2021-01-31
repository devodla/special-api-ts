import { loginPath } from '@/main/docs/paths'
import { badRequest, unauthorized, serverError, notFound } from '@/main/docs/components'
import { accountSchema, loginParamsSchema, errorSchema } from '@/main/docs/schemas'

export default {
  openapi: '3.0.0',
  info: {
    title: 'Special API TS',
    description: 'With NodeJs, TypeScript, TDD and special architecture clean, learning Udemy course of @rmanguinho',
    version: '1.0.0',
    license: {
      name: 'MIT License',
      url: 'https://github.com/onlyreynaldo/special-api-ts/blob/main/LICENSE'
    }
  },
  servers: [{
    url: '/api'
  }],
  tags: [{
    name: 'Login'
  }],
  paths: {
    '/login': loginPath
  },
  schemas: {
    account: accountSchema,
    loginParams: loginParamsSchema,
    error: errorSchema
  },
  components: {
    badRequest,
    unauthorized,
    serverError,
    notFound
  }
}

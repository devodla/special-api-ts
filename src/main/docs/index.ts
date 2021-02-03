import { loginPath, surveyPath, signUpPath } from '@/main/docs/paths'
import {
  badRequest,
  unauthorized,
  serverError,
  notFound,
  forbidden
} from '@/main/docs/components'
import {
  accountSchema,
  loginParamsSchema,
  errorSchema,
  surveyAnswerSchema,
  surveySchema,
  surveysSchema,
  addSurveyParamsSchema,
  apiKeyAuthSchema,
  signUpParamsSchema
} from '@/main/docs/schemas'

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
  }, {
    name: 'Enquete'
  }],
  paths: {
    '/login': loginPath,
    '/signup': signUpPath,
    '/surveys': surveyPath
  },
  schemas: {
    account: accountSchema,
    loginParams: loginParamsSchema,
    signUpParams: signUpParamsSchema,
    error: errorSchema,
    surveyAnswer: surveyAnswerSchema,
    survey: surveySchema,
    surveys: surveysSchema,
    addSurveyParams: addSurveyParamsSchema
  },
  components: {
    securitySchemes: {
      apiKeyAuth: apiKeyAuthSchema
    },
    badRequest,
    unauthorized,
    serverError,
    notFound,
    forbidden
  }
}

import paths from '@/main/docs/paths'
import components from '@/main/docs/components'
import schemas from '@/main/docs/schemas'

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
  paths,
  schemas,
  components
}

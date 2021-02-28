import { AddAccount } from '@/domain/usecases'
import {
  Hasher,
  AddAccountRepository,
  LoadAccountByEmailRepository
} from '@/data/protocols'

export class DbAddAccount implements AddAccount {
  constructor (
    private readonly hasher: Hasher,
    private readonly addAccountRepository: AddAccountRepository,
    private readonly loadAccountByEmailRepository: LoadAccountByEmailRepository
  ) {}

  async add (accountData: AddAccount.Params): Promise<AddAccount.Result> {
    const existAccount = await this.loadAccountByEmailRepository.loadByEmail(accountData.email)
    let isValid = false
    if (!existAccount) {
      const hashedPassword = await this.hasher.hash(accountData.password)
      isValid = await this.addAccountRepository
        .add({ ...accountData, password: hashedPassword })
    }
    return isValid
  }
}

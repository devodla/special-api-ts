import { AddAccount } from '@/domain/usecases'
import {
  Hasher,
  AddAccountRepository,
  LoadAccountByEmailRepository
} from '@/data/protocols'
import { AccountModel } from '@/domain/models'

export class DbAddAccount implements AddAccount {
  constructor (
    private readonly hasher: Hasher,
    private readonly addAccountRepository: AddAccountRepository,
    private readonly loadAccountByEmailRepository: LoadAccountByEmailRepository
  ) {}

  async add (accountData: AddAccount.Params): Promise<AddAccount.Result> {
    const existAccount = await this.loadAccountByEmailRepository.loadByEmail(accountData.email)
    let account: AccountModel = null
    if (!existAccount) {
      const hashedPassword = await this.hasher.hash(accountData.password)
      account = await this.addAccountRepository
        .add({ ...accountData, password: hashedPassword })
    }
    return account !== null
  }
}

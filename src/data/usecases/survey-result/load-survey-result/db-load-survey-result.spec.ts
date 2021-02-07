import { DbLoadSurveyResult } from './db-load-survey-result'
import { mockSurveyResultModel } from '@/domain/test'
import { SurveyResultModel, LoadSurveyResultRepository } from './db-load-survey-result-protocols'

describe('DbLoadSurveyResult UseCase', () => {
  test('Should call LoadSurveyResultRepository', async () => {
    class LoadSurveyResultRepositoryStub implements LoadSurveyResultRepository {
      async loadBySurveyId (surveyId: string): Promise<SurveyResultModel> {
        return await Promise.resolve(mockSurveyResultModel())
      }
    }
    const loadSurveyResultRepositoryStub = new LoadSurveyResultRepositoryStub()
    const sut = new DbLoadSurveyResult(loadSurveyResultRepositoryStub)
    const loadBySurveyIdSpy = jest.spyOn(loadSurveyResultRepositoryStub, 'loadBySurveyId')
    await sut.load('any_survey_id')
    expect(loadBySurveyIdSpy).toHaveBeenCalledWith('any_survey_id')
  })
})

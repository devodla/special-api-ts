import { SurveyModel } from '@/domain/models/survey'
import { AddSurveyParams } from '@/domain/usecases/survey/add-survey'

export const mockSurveyModel = (): SurveyModel => ({
  id: 'any_survey_id',
  question: 'any_question',
  answers: [{
    answer: 'any_answer'
  }, {
    answer: 'other_answer',
    image: 'any_image'
  }],
  date: new Date()
})

export const mockAddSurveyParams = (): AddSurveyParams => ({
  question: 'any_question',
  answers: [{
    image: 'any_image',
    answer: 'any_answer_1'
  }, {
    answer: 'any_answer_2'
  }, {
    answer: 'any_answer_3'
  }],
  date: new Date()
})

export const mockAddSurveysParams = (): AddSurveyParams[] => ([
  mockAddSurveyParams(), {
    question: 'other_question',
    answers: [{
      image: 'other_image',
      answer: 'other_answer'
    }],
    date: new Date()
  }
])

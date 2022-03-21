import { makeRemoteLoadSurveyResult } from '@main/factories/usecases'
import { makeRemoteSaveSurveyResult } from '@main/factories/usecases/save-survey-result/remote-save-survey-result-factory'
import { SurveyResult } from '@presentation/pages'
import React from 'react'
import { useParams } from 'react-router-dom'

export const makeSurveyResult: React.FC = () => {
  const { id } = useParams() as any
  return (
    <SurveyResult
      loadSurveyResult={makeRemoteLoadSurveyResult(id)}
      saveSurveyResultSpy={makeRemoteSaveSurveyResult(id)}
    />
  )
}

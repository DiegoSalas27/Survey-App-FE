import { LoadSurveyResult, SaveSurveyResult } from '@domain/usecases'
import { Error, Footer, Header, Loading } from '@presentation/components'
import { useErrorHandler } from '@presentation/hooks'
import React, { useEffect, useState } from 'react'
import { SurveyResultContext, SurveyResultData } from './components'
import Styles from './survey-result-styles.scss'

type Props = {
  loadSurveyResult: LoadSurveyResult
  saveSurveyResultSpy: SaveSurveyResult
}

const SurveyResult: React.FC<Props> = ({ loadSurveyResult, saveSurveyResultSpy }) => {
  const handleError = useErrorHandler((error: Error) => {
    setState({ ...state, surveyResult: null, error: error.message })
  })

  const [state, setState] = useState({
    isLoading: false,
    error: '',
    reload: false,
    surveyResult: null as LoadSurveyResult.Model
  })

  useEffect(() => {
    loadSurveyResult
      .load()
      .then(surveyResult => setState(prev => ({ ...prev, surveyResult })))
      .catch(handleError)
  }, [state.reload])

  const onAnswer = (answer: string): void => {
    setState(prev => ({ ...prev, isLoading: true }))
    saveSurveyResultSpy.save({ answer }).then().catch()
  }

  const reload = (): void => {
    setState(prev => ({
      surveyResult: null,
      error: '',
      reload: !prev.reload,
      isLoading: false
    }))
  }

  return (
    <div className={Styles.surveyResultWrap}>
      <Header />
      <SurveyResultContext.Provider value={{ onAnswer }}>
        <div data-testid="survey-result" className={Styles.contentWrap}>
          {state.surveyResult && <SurveyResultData surveyResult={state.surveyResult} />}

          {state.isLoading && <Loading />}
          {state.error && <Error error={state.error} reload={reload} />}
        </div>
      </SurveyResultContext.Provider>

      <Footer />
    </div>
  )
}

export default SurveyResult

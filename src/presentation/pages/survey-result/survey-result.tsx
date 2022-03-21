import { LoadSurveyResult } from '@domain/usecases'
import { Error, Footer, Header, Loading } from '@presentation/components'
import { useErrorHandler } from '@presentation/hooks'
import React, { useEffect, useState } from 'react'
import { SurveyResultData } from './components'
import Styles from './survey-result-styles.scss'

type Props = {
  loadSurveyResult: LoadSurveyResult
}

const SurveyResult: React.FC<Props> = ({ loadSurveyResult }) => {
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
      <div data-testid="survey-result" className={Styles.contentWrap}>
        {state.surveyResult && <SurveyResultData surveyResult={state.surveyResult} />}

        {state.isLoading && <Loading />}
        {state.error && <Error error={state.error} reload={reload} />}
      </div>
      <Footer />
    </div>
  )
}

export default SurveyResult

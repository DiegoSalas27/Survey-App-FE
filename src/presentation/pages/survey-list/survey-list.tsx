import { AccessDeniedError } from '@domain/errors'
import { SurveyModel } from '@domain/models'
import { LoadSurveyList } from '@domain/usecases'
import { Footer } from '@presentation/components'
import Header from '@presentation/components/header/header'
import { ApiContext } from '@presentation/context'
import React, { useContext, useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { SurveyContext, SurveyError, SurveyListItem } from './components'
import Styles from './survey-list-styles.scss'

type Props = {
  loadSurveyList: LoadSurveyList
}

const SurveyList: React.FC<Props> = ({ loadSurveyList }) => {
  const history = useHistory()
  const { setCurrentAccount } = useContext(ApiContext)

  const [state, setState] = useState({
    surveys: [] as SurveyModel[],
    error: '',
    reload: false
  })

  useEffect(() => {
    loadSurveyList
      .loadAll()
      .then(surveys => setState({ ...state, surveys }))
      .catch(error => {
        if (error instanceof AccessDeniedError) {
          setCurrentAccount(undefined)
          history.replace('/login')
        } else {
          setState({ ...state, error: error.message })
        }
      })
  }, [state.reload])

  return (
    <div className={Styles.surveyListWrap}>
      <Header />
      <div className={Styles.contentWrap}>
        <h2>Polls</h2>
        <SurveyContext.Provider value={{ state, setState }}>
          {state.error ? <SurveyError /> : <SurveyListItem />}
        </SurveyContext.Provider>
      </div>
      <Footer />
    </div>
  )
}

export default SurveyList

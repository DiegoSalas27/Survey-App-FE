import { LoadSurveyList } from '@domain/usecases'
import { Footer } from '@presentation/components'
import Header from '@presentation/components/header/header'
import React, { useEffect } from 'react'
import { SurveyItemEmpty } from './components'
import Styles from './survey-list-styles.scss'

type Props = {
  loadSurveyList: LoadSurveyList
}

const SurveyList: React.FC<Props> = ({ loadSurveyList }) => {
  useEffect(() => {
    (async () => {
      loadSurveyList.loadAll()
    })()
  }, [])
  return (
    <div className={Styles.surveyListWrap}>
      <Header />
      <div className={Styles.contentWrap}>
        <h2>Polls</h2>
        <ul data-testid="survey-list">
          <SurveyItemEmpty />
        </ul>
      </div>
      <Footer />
    </div>
  )
}

export default SurveyList

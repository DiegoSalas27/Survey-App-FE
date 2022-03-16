import { Footer } from '@presentation/components'
import Header from '@presentation/components/header/header'
import React from 'react'
import Styles from './survey-list-styles.scss'

const SurveyList: React.FC = () => {
  return (
    <div className={Styles.surveyListWrap}>
      <Header />
      <div className={Styles.contentWrap}>
        <h2>Polls</h2>
        <ul></ul>
      </div>
      <Footer />
    </div>
  )
}

export default SurveyList

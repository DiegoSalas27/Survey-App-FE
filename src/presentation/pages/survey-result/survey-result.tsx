import { Footer, Header } from '@presentation/components'
import Spinner from '@presentation/components/spinner/spinner'
import React from 'react'
import FlipMove from 'react-flip-move'
import Styles from './survey-result-styles.scss'

const SurveyResult: React.FC = () => {
  return (
    <div className={Styles.surveyResultWrap}>
      <Header />
      <div className={Styles.contentWrap}>
        <h2>What's your favorite web framework?</h2>
        <FlipMove className={Styles.answersList}>
          <li>
            <img src="http://fordevs.herokuapp.com/static/img/logo-react.png" />
            <span className={Styles.answer}>ReactJS</span>
            <span className={Styles.percent}>50%</span>
          </li>
          <li className={Styles.active}>
            <img src="http://fordevs.herokuapp.com/static/img/logo-react.png" />
            <span className={Styles.answer}>ReactJS</span>
            <span className={Styles.percent}>50%</span>
          </li>
          <li>
            <img src="http://fordevs.herokuapp.com/static/img/logo-react.png" />
            <span className={Styles.answer}>ReactJS</span>
            <span className={Styles.percent}>50%</span>
          </li>
        </FlipMove>
        <button>Vote</button>
        <div className={Styles.loadingWrap}>
          <div className={Styles.loading}>
            <span>Please wait...</span>
            <Spinner isNegative />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default SurveyResult

import { Calendar, Footer, Header, Loading } from '@presentation/components'
import React from 'react'
import FlipMove from 'react-flip-move'
import Styles from './survey-result-styles.scss'

const SurveyResult: React.FC = () => {
  return (
    <div className={Styles.surveyResultWrap}>
      <Header />
      <div className={Styles.contentWrap}>
        {true && (
          <>
            <hgroup>
              <Calendar date={new Date()} className={Styles.calendarWrap} />
              <h2>What's your favorite web framework? hat's your favorite web framework?</h2>
            </hgroup>

            <FlipMove className={Styles.answersList}>
              <li>
                <img src="http://fordevs.herokuapp.com/static/img/logo-react.png" />
                <span className={Styles.answer}>ReactJS</span>
                <span className={Styles.percent}>50%</span>
              </li>
            </FlipMove>
            <button>Vote</button>
          </>
        )}

        {false && <Loading />}
      </div>
      <Footer />
    </div>
  )
}

export default SurveyResult

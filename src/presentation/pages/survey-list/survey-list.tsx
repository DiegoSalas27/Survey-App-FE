import { Footer, Logo } from '@presentation/components'
import React from 'react'
import Styles from './survey-list-styles.scss'

const SurveyList: React.FC = () => {
  return (
    <div className={Styles.surveyListWrap}>
      <header className={Styles.headerWrap}>
        <div className={Styles.headerContent}>
          <Logo />
          <div className={Styles.logoutWrap}>
            <span>Fala Galera Beleza</span>
            <a href="#">Logout</a>
          </div>
        </div>
      </header>
      <div className={Styles.contentWrap}>
        <h2>Polls</h2>
        <ul>
          <li>
            <div className={Styles.surveyContent}>
              <time>
                <span className={Styles.day}>22</span>
                <span className={Styles.month}>03</span>
                <span className={Styles.year}>2020</span>
              </time>
              <p>Is Angular more robust than React?</p>
            </div>
            <footer>View result</footer>
          </li>
          <li>
            <div className={Styles.surveyContent}>
              <time>
                <span className={Styles.day}>22</span>
                <span className={Styles.month}>03</span>
                <span className={Styles.year}>2020</span>
              </time>
              <p>Is Angular more robust than React?</p>
            </div>
            <footer>View result</footer>
          </li>
          <li>
            <div className={Styles.surveyContent}>
              <time>
                <span className={Styles.day}>22</span>
                <span className={Styles.month}>03</span>
                <span className={Styles.year}>2020</span>
              </time>
              <p>Is Angular more robust than React?</p>
            </div>
            <footer>View result</footer>
          </li>
          <li>
            <div className={Styles.surveyContent}>
              <time>
                <span className={Styles.day}>22</span>
                <span className={Styles.month}>03</span>
                <span className={Styles.year}>2020</span>
              </time>
              <p>Is Angular more robust than React?</p>
            </div>
            <footer>View result</footer>
          </li>
          <li>
            <div className={Styles.surveyContent}>
              <time>
                <span className={Styles.day}>22</span>
                <span className={Styles.month}>03</span>
                <span className={Styles.year}>2020</span>
              </time>
              <p>Is Angular more robust than React?</p>
            </div>
            <footer>View result</footer>
          </li>
          <li>
            <div className={Styles.surveyContent}>
              <time>
                <span className={Styles.day}>22</span>
                <span className={Styles.month}>03</span>
                <span className={Styles.year}>2020</span>
              </time>
              <p>Is Angular more robust than React?</p>
            </div>
            <footer>View result</footer>
          </li>
          <li>
            <div className={Styles.surveyContent}>
              <time>
                <span className={Styles.day}>22</span>
                <span className={Styles.month}>03</span>
                <span className={Styles.year}>2020</span>
              </time>
              <p>Is Angular more robust than React?</p>
            </div>
            <footer>View result</footer>
          </li>
        </ul>
      </div>
      <Footer />
    </div>
  )
}

export default SurveyList

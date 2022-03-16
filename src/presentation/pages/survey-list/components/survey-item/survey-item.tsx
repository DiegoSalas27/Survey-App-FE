import React from 'react'
import { Icon, IconName } from '@presentation/components'
import Styles from './survey-item-styles.scss'

const SurveyItem: React.FC = () => {
  return (
    <div className={Styles.surveyItemWrap}>
      <li>
        <div className={Styles.surveyContent}>
          <Icon className={Styles.iconWrap} iconName={IconName.thumbDown} />
          <time>
            <span className={Styles.day}>22</span>
            <span className={Styles.month}>03</span>
            <span className={Styles.year}>2020</span>
          </time>
          <p>Is Angular more robust than React?</p>
        </div>
        <footer>View result</footer>
      </li>
    </div>
  )
}

export default SurveyItem

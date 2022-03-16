import React from 'react'
import { Icon, IconName } from '@presentation/components'
import Styles from './survey-item-styles.scss'
import { SurveyModel } from '@domain/models'

type Props = {
  survey: SurveyModel
}

const SurveyItem: React.FC<Props> = ({ survey }) => {
  return (
    <div className={Styles.surveyItemWrap}>
      <li>
        <div className={Styles.surveyContent}>
          <Icon className={Styles.iconWrap} iconName={IconName.thumbUp} />
          <time>
            <span data-testid="day" className={Styles.day}>
              {survey.date.getDate()}
            </span>
            <span data-testid="month" className={Styles.month}>
              {survey.date.toLocaleString('es-PE', { month: 'short' }).slice(0, -1)}
            </span>
            <span data-testid="year" className={Styles.year}>
              {survey.date.getFullYear()}
            </span>
          </time>
          <p data-testid="question">{survey.question}</p>
        </div>
        <footer>View result</footer>
      </li>
    </div>
  )
}

export default SurveyItem

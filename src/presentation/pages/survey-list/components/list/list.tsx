import { SurveyModel } from '@domain/models'
import React from 'react'
import SurveyItemEmpty from '../item-empty/item-empty'
import SurveyItem from '../item/item'
import Styles from './list-styles.scss'

type Props = {
  surveys: SurveyModel[]
}

const List: React.FC<Props> = ({ surveys }) => {
  return (
    <ul className={Styles.listWrap} data-testid="survey-list">
      {surveys.length ? (
        surveys.map((survey: SurveyModel) => <SurveyItem key={survey.id} survey={survey} />)
      ) : (
        <SurveyItemEmpty />
      )}
    </ul>
  )
}

export default List

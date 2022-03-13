import React, { useContext, useRef } from 'react'
import Styles from './input-styles.scss'
import Context from '@presentation/context/form/form-context'

type Props = React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

const Input: React.FC<Props> = (props: Props) => {
  const { state, setState } = useContext(Context)
  const inputRef = useRef<HTMLInputElement>()
  const error = state[`${props.name}Error`]

  const enableInput = (e: React.FocusEvent<HTMLInputElement>): void => {
    e.target.readOnly = false
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setState({
      ...state,
      [e.target.name]: e.target.value
    })
  }

  const getStatus = (): string => {
    return error ? '😢' : '😃'
  }

  const getTitle = (): string => {
    return error || "It's all good"
  }

  return (
    <div
      data-testid={`${props.name}-wrap`}
      className={Styles.inputWrap}
      data-status={error ? 'invalid' : 'valid'}
    >
      <input
        {...props}
        ref={inputRef}
        title={error}
        placeholder=" "
        data-testid={props.name}
        readOnly
        onFocus={enableInput}
        onChange={handleChange}
      />
      <label
        data-testid={`${props.name}-label`}
        title={error}
        onClick={() => {
          inputRef.current.focus()
        }}
      >
        {props.placeholder}
      </label>
      <span data-testid={`${props.name}-status`} title={getTitle()} className={Styles.status}>
        {getStatus()}
      </span>
    </div>
  )
}

export default Input

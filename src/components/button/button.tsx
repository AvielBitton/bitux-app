import { FC, ReactNode } from 'react'
import { ButtonVariant } from './types'

interface ButtonProps {
  variant: ButtonVariant
  children: ReactNode
}

const Button: FC<ButtonProps> = ({ variant, children: text }) => {
  return (
    <button type='button' className={`btn btn-${variant}`} role='button'>
      {text}
    </button>
  )
}

export default Object.assign(Button, {
  Variant: ButtonVariant,
}) as typeof Button & {
  ID: string
  Variant: typeof ButtonVariant
}

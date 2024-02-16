import { FC, ReactNode } from 'react'
import { ButtonType, ButtonVariant } from './types'
import { BaseElement } from '../../foundation/types'
interface ButtonProps extends BaseElement {
  className?: string
  'aria-label'?: string
  variant?: ButtonVariant
  children?: ReactNode
  onClick?: () => void
  type?: ButtonType
}

const Button: FC<ButtonProps> = ({
  variant = ButtonVariant.primary,
  onClick,
  children: text,
  className,
  'aria-label': ariaLabel,
  type = ButtonType.button,
}) => {
  return (
    <button
      type={type}
      className={className || `btn btn-${variant}`}
      role='button'
      onClick={onClick}
      aria-label={ariaLabel}
    >
      {text}
    </button>
  )
}

export default Object.assign(Button, {
  Variant: ButtonVariant,
  Type: ButtonType,
}) as typeof Button & {
  ID: string
  Variant: typeof ButtonVariant
  Type: typeof ButtonType
}

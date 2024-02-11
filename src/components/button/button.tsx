import { ButtonHTMLAttributes, FC, ReactNode } from 'react'
import { ButtonVariant } from './types'
import { BaseElement } from '../../foundation/types'
interface ButtonProps extends BaseElement {
  className?: string
  'aria-label'?: string
  variant?: ButtonVariant
  children?: ReactNode
  onClick?: () => void
  type?: ButtonHTMLAttributes<HTMLButtonElement>['type']
}

const Button: FC<ButtonProps> = ({
  variant = ButtonVariant.primary,
  onClick,
  children: text,
  className,
  'aria-label': ariaLabel,
  type = 'button',
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
}) as typeof Button & {
  ID: string
  Variant: typeof ButtonVariant
}

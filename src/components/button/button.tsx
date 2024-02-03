import { FC, ReactNode } from 'react'
import { ButtonVariant } from './types'

interface ButtonProps {
  className?: string
  'aria-label'?: string
  variant?: ButtonVariant
  children?: ReactNode
  onClick?: () => void
}

const Button: FC<ButtonProps> = ({
  variant = ButtonVariant.primary,
  onClick,
  children: text,
  className,
  'aria-label': ariaLabel,
}) => {
  return (
    <button
      type='button'
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

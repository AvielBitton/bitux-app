import { FC, ReactNode } from 'react'
import { AlertVariant } from './types'

interface AlertProps {
  variant: AlertVariant
  children: ReactNode
}

const Alert: FC<AlertProps> = ({ variant, children: text }) => {
  return (
    <div className={`alert alert-${variant}`} role='alert'>
      {text}
    </div>
  )
}

export default Object.assign(Alert, {
  Variant: AlertVariant,
}) as typeof Alert & {
  ID: string
  Variant: typeof AlertVariant
}

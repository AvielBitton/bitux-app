import { FC, ReactNode } from 'react'
import { AlertVariant } from './types'
import Button from '../button/button'

interface AlertProps {
  variant?: AlertVariant
  children: ReactNode
  onClose?: () => void
}

const Alert: FC<AlertProps> = ({ variant = AlertVariant.primary, children: text, onClose }) => {
  return (
    <div className={`alert alert-${variant} alert-dismissible fade show`} role='alert'>
      {text}
      {onClose && <Button className='btn-close' data-bs-dismiss='alert' aria-label='close' onClick={onClose} />}
    </div>
  )
}

export default Object.assign(Alert, {
  Variant: AlertVariant,
}) as typeof Alert & {
  Variant: typeof AlertVariant
}

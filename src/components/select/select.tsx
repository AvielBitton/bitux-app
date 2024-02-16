import { ChangeEvent, FC, forwardRef } from 'react'
import { BaseElement } from '../../foundation/types'

const ID = 'select'
interface SelectProps extends BaseElement {
  label: string
  options: string[]
  onChange?: (event: ChangeEvent<HTMLSelectElement>) => void
  value?: string
}

export const Select: FC<SelectProps> = forwardRef<HTMLDivElement, SelectProps>(
  (
    { 'data-selector': dataSelector = ID, className, 'aria-label': ariaLabel, label, options, value, onChange },
    ref
  ) => {
    return (
      <div className={className} aria-label={ariaLabel} data-selector={dataSelector} ref={ref}>
        <label>{label}</label>
        <select className='form-control' onChange={onChange} value={value}>
          {options.map((option, index) => (
            <option key={index}>{option}</option>
          ))}
        </select>
      </div>
    )
  }
)

Select.displayName = 'Select'

export default Object.assign(Select, {
  ID,
}) as typeof Select & {
  ID: string
}

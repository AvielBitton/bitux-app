import { FC, forwardRef } from 'react'
import { BaseElement } from '../../foundation/types'
import { capitalizeFirstLetter } from '../../utils'
import { FieldErrors, FieldValues, RegisterOptions, UseFormRegister } from 'react-hook-form'
import { MdErrorOutline } from 'react-icons/md'
import { InputWrapper } from './styles'
import { InputType } from './types'

const ID = 'form-input'
interface FormInputProps extends BaseElement {
  name: string
  validation?: RegisterOptions
  type?: InputType
  register?: UseFormRegister<FieldValues>
  errors?: FieldErrors<FieldValues>
  list?: string[]
}

export const FormInput: FC<FormInputProps> = forwardRef<HTMLInputElement, FormInputProps>(
  (
    {
      'data-selector': dataSelector = ID,
      className,
      'aria-label': ariaLabel,
      register,
      errors,
      name,
      validation,
      type = InputType.text,
      list,
    },
    ref
  ) => {
    const showError = errors?.[name]?.message
    return (
      <div className={className} aria-label={ariaLabel} data-selector={dataSelector} ref={ref}>
        <div className='mb-3'>
          <label htmlFor={name} className='form-label'>
            {capitalizeFirstLetter(name)}
          </label>
          {list ? (
            <select {...register?.(name, validation)} className='form-control'>
              {list.map((option, index) => (
                <option key={index}>{option}</option>
              ))}
            </select>
          ) : (
            <input {...register?.(name, validation)} id={name} type={type} className='form-control' />
          )}
          {showError && (
            <InputWrapper className='text-danger'>
              <MdErrorOutline />
              {showError as string}
            </InputWrapper>
          )}
        </div>
      </div>
    )
  }
)

FormInput.displayName = 'FormInput'

export default Object.assign(FormInput, {
  ID,
  Type: InputType,
}) as typeof FormInput & {
  ID: string
  Type: typeof InputType
}

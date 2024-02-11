import { FC, forwardRef } from 'react'
import { BaseElement } from '../../foundation/types'
import { FieldValues, useForm } from 'react-hook-form'
import FormInput from './form-input'

const ID = 'Form'
interface FormProps extends BaseElement {
  onSubmit: (data: FieldValues) => void
}

export const Form: FC<FormProps> = forwardRef<HTMLFormElement, FormProps>(
  ({ 'data-selector': dataSelector = ID, className, 'aria-label': ariaLabel }, ref) => {
    const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm()
    const onSubmit = (data: FieldValues) => console.log(data)

    return (
      <form
        ref={ref}
        className={className}
        aria-label={ariaLabel}
        data-selector={dataSelector}
        onSubmit={handleSubmit(onSubmit)}
      >
        <FormInput
          register={register}
          errors={errors}
          name={'name'}
          type={FormInput.InputType.text}
          validation={{
            required: 'Name is required',
            minLength: {
              value: 3,
              message: 'Name must be at least 3 characters',
            },
            validate: {
              noNumber: value => !/\d/.test(value || '') || 'Name cannot contain numbers',
            },
          }}
        />
        <FormInput
          register={register}
          errors={errors}
          name={'age'}
          type={FormInput.InputType.number}
          validation={{
            required: 'Age is required',
            min: {
              value: 18,
              message: 'Age must be at least 18',
            },
          }}
        />
        <button className='btn btn-primary' type='submit'>
          Submit
        </button>
      </form>
    )
  }
)

Form.displayName = 'Form'

export default Object.assign(Form, {
  ID,
}) as typeof Form & {
  ID: string
}

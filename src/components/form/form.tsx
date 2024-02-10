import { FC, forwardRef } from 'react'
import { BaseElement } from '../../foundation/types'
import { capitalizeFirstLetter } from '../../utils'
import { FieldValues, useForm } from 'react-hook-form'
import { MdErrorOutline } from 'react-icons/md'
import { InputWrapper } from './styles'
import { Person } from './types'

const ID = 'Form'
interface FormProps extends BaseElement {}

export const Form: FC<FormProps> = forwardRef<HTMLFormElement, FormProps>(
  ({ 'data-selector': dataSelector = ID, className, 'aria-label': ariaLabel }, ref) => {
    const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm<Person>()
    const onSubmit = (data: FieldValues) => console.log(data)

    return (
      <form
        ref={ref}
        className={className}
        aria-label={ariaLabel}
        data-selector={dataSelector}
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className='mb-3'>
          <label htmlFor='name' className='form-label'>
            {capitalizeFirstLetter('name')}
          </label>
          <input
            {...register('name', {
              required: 'Name is required',
              minLength: {
                value: 3,
                message: 'Name must be at least 3 characters',
              },
              validate: {
                noNumber: value => !/\d/.test(value || '') || 'Name cannot contain numbers',
              },
            })}
            id='name'
            type='text'
            className='form-control'
          />
          {errors?.['name']?.message && (
            <InputWrapper className='text-danger'>
              <MdErrorOutline />
              {`${errors?.['name']?.message as string}`}
            </InputWrapper>
          )}
        </div>
        <div className='mb-3'>
          <label htmlFor='age' className='form-label'>
            {capitalizeFirstLetter('age')}
          </label>
          <input
            {...register('age', {
              required: 'Age is required',
              min: {
                value: 18,
                message: 'Age must be at least 18',
              },
            })}
            id='age'
            type='number'
            className='form-control'
          />{' '}
          {errors?.['age']?.message && (
            <InputWrapper className='text-danger'>
              <MdErrorOutline />
              {`${errors?.['age']?.message as string}`}
            </InputWrapper>
          )}
        </div>
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

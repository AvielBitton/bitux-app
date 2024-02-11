import { FC, forwardRef, Children, isValidElement } from 'react'
import { BaseElement } from '../../foundation/types'
import { FieldValues, useForm } from 'react-hook-form'
import FormInput from './form-input'
import Button from '../button'

const ID = 'Form'
interface FormProps extends BaseElement {
  onSubmit?: (data: FieldValues) => void
}

export const Form: FC<FormProps> = forwardRef<HTMLFormElement, FormProps>(
  ({ 'data-selector': dataSelector = ID, className, 'aria-label': ariaLabel, children, onSubmit = () => {} }, ref) => {
    const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm()

    const formInputs = Children.map(children, child => {
      if (!isValidElement(child)) {
        console.error('Skipping: Invalid child element.')
        return null
      }

      const { type, props } = child
      const { name } = props
      const { ID } = type as { ID?: string }

      if (!ID || ID.toLowerCase() !== 'form-input') {
        console.error("Skipping: Child element is not a 'FormInput' component with ID 'form-input'.")
        return null
      }

      if (!name) {
        console.error("Skipping: 'FormInput' component lacks a 'name' prop.")
        return null
      }

      return <FormInput register={register} errors={errors} {...props} />
    })

    return (
      <form
        ref={ref}
        className={className}
        aria-label={ariaLabel}
        data-selector={dataSelector}
        onSubmit={handleSubmit(onSubmit)}
      >
        {formInputs}
        <Button type={Button.Type.submit}>Submit</Button>
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

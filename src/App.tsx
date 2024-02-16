import { ChangeEvent, useState } from 'react'
import './App.css'
import Select from './components/select'
import Form from './components/form'
import { FieldValues } from 'react-hook-form'
import { JSONObject } from './foundation/types'

const options = ['Option 1', 'Option 2', 'Option 3']

interface FormData {
  description: string
  amount: string
  category: 'Option 1' | 'Option 2' | 'Option 3'
}

const formInputs: { [index: string]: JSONObject } = {
  description: {
    type: Form.Input.Type.text,
    validation: {
      required: 'Name is required',
      minLength: {
        value: 3,
        message: 'Name must be at least 3 characters',
      },
      validate: {
        noNumber: (value: string) => !/\d/.test(value || '') || 'Name cannot contain numbers',
      },
    },
  },
  amount: {
    type: Form.Input.Type.number,
    validation: {
      required: 'Amount is required',
      min: {
        value: 10,
        message: 'Amount must be at least 10',
      },
    },
  },
  category: {
    list: options.filter(option => option !== 'All'),
    validation: {
      required: 'Category is required',
    },
  },
}

const App = () => {
  const [selectedOption, setSelectedOption] = useState<string | undefined>(options[0])
  const [data, setData] = useState<FormData[]>([{ description: 'description', amount: 'amount', category: 'Option 1' }])

  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const {
      target: { value: selectedValue },
    } = event
    setSelectedOption(selectedValue)
  }
  const handleSubmit = (formData: FormData) => {
    console.log(formData)

    setData(currentDataTable => {
      const isDuplicate = currentDataTable.some(item => item.description === formData.description)
      if (isDuplicate) {
        return currentDataTable
      }
      return [...currentDataTable, formData]
    })
  }

  return (
    <>
      <Form onSubmit={handleSubmit as (data: FieldValues) => void} className='app-form'>
        {Object.keys(formInputs).map(input => (
          <Form.Input key={input} name={input} {...formInputs[input]} />
        ))}
      </Form>
      <Select className='app-form' label='chose your category' options={options} onChange={handleChange} />
    </>
  )
}

export default App

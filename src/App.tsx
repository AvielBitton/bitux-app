import { useState } from 'react'
import Form from './components/form'
import Button from './components/button'
import './App.css'
import { FieldValues } from 'react-hook-form'
import { JSONObject } from './foundation/types'

interface FormData {
  Description: string
  Amount: string
  Category: string
}

const optionsList = ['Option 1', 'Option 2', 'Option 3']

const validateOption = (value: string) => {
  if (!optionsList.includes(value)) {
    return 'Please select a valid option'
  }
  return true
}

const formInputs: { [index: string]: JSONObject } = {
  Description: {
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
  Amount: {
    type: Form.Input.Type.number,
    validation: {
      required: 'Amount is required',
      min: {
        value: 10,
        message: 'Amount must be at least 10',
      },
    },
  },
  Category: {
    list: optionsList,
    validation: {
      required: 'Category is required',
      validate: validateOption,
    },
  },
}

const App = () => {
  const [dataTable, setDataTable] = useState<FormData[]>([])

  const handleSubmit = (formData: FormData) => {
    setDataTable(currentDataTable => {
      const isDuplicate = currentDataTable.some(item => item.Description === formData.Description)
      if (isDuplicate) {
        return currentDataTable
      }
      return [...currentDataTable, formData]
    })
  }

  const handleDelete = (description: string) => {
    setDataTable(prevData => prevData.filter(item => item.Description !== description))
  }

  return (
    <>
      <Form onSubmit={handleSubmit as (data: FieldValues) => void} className='app-form'>
        {Object.keys(formInputs).map(input => (
          <Form.Input key={input} name={input} {...formInputs[input]} />
        ))}
      </Form>

      <table className='table'>
        <thead className='thead-light'>
          <tr>
            {Object.keys(formInputs).map(input => (
              <th key={input}>{input}</th>
            ))}
          </tr>
        </thead>

        <tbody>
          {dataTable.map((item, index) => (
            <tr key={index}>
              {Object.values(item).map((td, tdIndex) => (
                <td key={tdIndex}>{td}</td>
              ))}
              <td>
                <Button variant={Button.Variant.danger} onClick={() => handleDelete(item.Description)}>
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  )
}

export default App

import { useEffect, useState } from 'react'
import './App.css'
import Button from './components/button'
import { User, getAllUser } from './services/user-service'
import { AxiosError } from './services/api-client'


const App = () => {
  const [users, setUsers] = useState<User[]>()
  const [error, setError] = useState<AxiosError | undefined>()
  const [isLoading, setIsLoading] = useState<boolean>(false)

  useEffect(() => {
    setIsLoading(true)
    const fetchUserData = async () => {
      try {
        const response = await getAllUser()
        const userData = response.data
        setUsers(userData)
      } catch (error) {
        setError(error as AxiosError)
      } finally {
        setIsLoading(false)
      }
    }

    fetchUserData()

    return () => {
      // Cleanup code can be added here if necessary
    }
  }, [])

  if (isLoading) {
    return <div className='spinner-border' />
  }

  if (error) {
    return <p className='danger-text'>{error.message}</p>
  }

  return (
    <ul className='list-group'>
      {users?.map(currentUser => (
        <li key={currentUser.id} className='list-group-item d-flex justify-content-between'>
          {currentUser.name}
          <Button
            variant={Button.Variant.danger}
            onClick={() => {
              setUsers(prevUsers => (prevUsers as User[]).filter(user => user.id !== currentUser.id))
            }}
          >
            Remove
          </Button>
        </li>
      ))}
    </ul>
  )
}

const nested = [{ id: 1, name: 'item', children: [{ id: 2, name: 'item' }] }]
const flat = [
  { id: 1, name: 'item' },
  { id: 2, name: 'item', parent: 1 },
]

export default App

import { useState } from 'react'
import Alert from './components/alert'
import Button from './components/button'
import { IoCalendarClear } from 'react-icons/io5'
import Like from './components/like'

const App = () => {
  const [showAlert, setShowAlert] = useState<boolean>(false)

  const handleButtonClick = () => {
    setShowAlert(true)
  }

  const handleCloseAlert = () => {
    setShowAlert(false)
  }

  return (
    <>
      {showAlert && <Alert onClose={handleCloseAlert}>Check Alert</Alert>}
      <IoCalendarClear size={40} />
      <Button onClick={handleButtonClick}>Click Me</Button>
      <Like
        onClick={() => {
          console.log('clicked')
        }}
      />
    </>
  )
}

export default App

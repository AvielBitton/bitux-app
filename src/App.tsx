import { useState } from 'react'
import Alert from './components/alert/alert'
import Button from './components/button/button'

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
      <Button onClick={handleButtonClick}>Click Me</Button>
    </>
  )
}

export default App

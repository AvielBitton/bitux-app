import React from 'react'
import ReactDOM from 'react-dom/client'
import { ChakraProvider, ColorModeScript, extendTheme } from '@chakra-ui/react'
import App from './App'
import useInitialColorMode from './hooks/use-color-mode.hook'

const Root = () => {
  const colorMode = useInitialColorMode('chakra-ui-color-mode')

  return (
    <React.StrictMode>
      <ChakraProvider theme={extendTheme({ config: { initialColorMode: colorMode } })}>
        <ColorModeScript initialColorMode={colorMode} />
        <App />
      </ChakraProvider>
    </React.StrictMode>
  )
}

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(<Root />)

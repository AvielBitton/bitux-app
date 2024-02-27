import { useState, useEffect } from 'react'

type ColorMode = 'light' | 'dark'

const useColorMode = (localStorageItem: string): ColorMode => {
  const [colorMode, setColorMode] = useState<ColorMode>('light')

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: light)')
    const handleChange = (e: MediaQueryListEvent) => {
      const newColorMode = e.matches ? 'light' : 'dark'
      setColorMode(newColorMode)
      localStorage.setItem(localStorageItem, newColorMode)
    }

    mediaQuery.addEventListener('change', handleChange)
    return () => mediaQuery.removeEventListener('change', handleChange)
  }, [])

  return colorMode
}

export default useColorMode

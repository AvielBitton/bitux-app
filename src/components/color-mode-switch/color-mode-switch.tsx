import { FC, forwardRef } from 'react'
import { BaseElement } from '../../foundation/types'
import { HStack, Switch, Text, useColorMode } from '@chakra-ui/react'
import { ColorMode } from './types'

const ID = 'color-mode-switch'
interface ColorModeSwitchProps extends BaseElement {}

export const ColorModeSwitch: FC<ColorModeSwitchProps> = forwardRef<HTMLDivElement, ColorModeSwitchProps>(
  ({ 'data-selector': dataSelector = ID, className, 'aria-label': ariaLabel }, ref) => {
    const { toggleColorMode, colorMode } = useColorMode()

    return (
      <HStack className={className} aria-label={ariaLabel} data-selector={dataSelector} ref={ref}>
        <Switch colorScheme='purple' isChecked={colorMode === ColorMode.dark} onChange={toggleColorMode} />
        <Text>{colorMode === ColorMode.light ? `Dark Mode` : `Light Mode `}</Text>
      </HStack>
    )
  }
)

ColorModeSwitch.displayName = 'ColorModeSwitch'

export default Object.assign(ColorModeSwitch, {
  ID,
}) as typeof ColorModeSwitch & {
  ID: string
}

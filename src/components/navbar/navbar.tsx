import { FC, forwardRef } from 'react'
import { BaseElement } from '../../foundation/types'
import { HStack, Image } from '@chakra-ui/react'
import logo from '../../assets/bitux.svg'
import ColorModeSwitch from '../color-mode-switch'
const ID = 'navbar'
interface NavbarProps extends BaseElement {}

export const Navbar: FC<NavbarProps> = forwardRef<HTMLDivElement, NavbarProps>(
  ({ 'data-selector': dataSelector = ID, className, 'aria-label': ariaLabel }, ref) => {
    return (
      <HStack
        className={className}
        aria-label={ariaLabel}
        data-selector={dataSelector}
        ref={ref}
        justifyContent={'space-between'}
        padding={'10px'}
      >
        <Image src={logo} boxSize='60px' />
        <ColorModeSwitch />
      </HStack>
    )
  }
)

Navbar.displayName = 'Navbar'

export default Object.assign(Navbar, {
  ID,
}) as typeof Navbar & {
  ID: string
}

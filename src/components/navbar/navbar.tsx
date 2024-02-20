import { FC, forwardRef } from 'react'
import { BaseElement } from '../../foundation/types'
import { HStack, Image, Text } from '@chakra-ui/react'
import logo from '../../assets/bitux.svg'
import { capitalizeFirstLetter } from '../../utils'
const ID = 'navbar'
interface NavbarProps extends BaseElement {}

export const Navbar: FC<NavbarProps> = forwardRef<HTMLDivElement, NavbarProps>(
  ({ 'data-selector': dataSelector = ID, className, 'aria-label': ariaLabel }, ref) => {
    return (
      <HStack className={className} aria-label={ariaLabel} data-selector={dataSelector} ref={ref}>
        <Image src={logo} boxSize='60px' />
        <Text>{`${capitalizeFirstLetter('navbar')}`}</Text>
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

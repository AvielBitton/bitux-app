import { FC, MouseEventHandler } from 'react'

export interface ListItemProps {
  text: string
  onClick?: MouseEventHandler<HTMLLIElement>
}

const ListItem: FC<ListItemProps> = ({ text, onClick }) => {
  return (
    <li className='list-group-item' onClick={onClick}>
      {text}
    </li>
  )
}

export default ListItem

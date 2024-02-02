import { FC, MouseEventHandler } from 'react'

export interface ListItemProps {
  selected: boolean
  onClick: MouseEventHandler<HTMLLIElement>
  children: string
}

const ListItem: FC<ListItemProps> = ({ selected, onClick, children: text }) => {
  return (
    <li className={`list-group-item ${selected && 'active'}`} onClick={onClick}>
      {text}
    </li>
  )
}

export default ListItem

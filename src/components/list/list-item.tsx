import { FC, MouseEventHandler, ReactNode } from 'react'

export interface ListItemProps {
  selected: boolean
  onClick: MouseEventHandler<HTMLLIElement>
  children: ReactNode
}

const ListItem: FC<ListItemProps> = ({ selected, onClick, children: text }) => {
  return (
    <li className={`list-group-item ${selected && 'active'}`} onClick={onClick}>
      {text}
    </li>
  )
}

export default ListItem

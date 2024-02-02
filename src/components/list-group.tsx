import { FC } from 'react'
import ListItem, { ListItemProps } from './list-item'

interface ListGroupProps {
  items: ListItemProps[]
  title: string
}

const NoItemsFound: FC = () => {
  return <p>No items found</p>
}

const ListGroup: FC<ListGroupProps> = ({ items, title }) => {
  return (
    <>
      <h1>{title}</h1>
      {items.length === 0 && <NoItemsFound />}
      <ul className='list-group'>
        {items.map((item, index) => (
          <ListItem key={index} {...item} />
        ))}
      </ul>
    </>
  )
}

export default ListGroup

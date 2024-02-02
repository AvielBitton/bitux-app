import { FC, useState } from 'react'
import ListItem from './list-item'

interface ListGroupProps {
  items: string[]
  title: string
  onSelectItem?: (item: string) => void
}

const NoItemsFound: FC = () => <p>No items found</p>

const ListGroup: FC<ListGroupProps> = ({ items, title, onSelectItem }) => {
  const [selectedIndex, setSelectedIndex] = useState<number>(-1)

  const onItemClick = (index: number) => {
    setSelectedIndex(index)
  }

  return (
    <>
      <h1>{title}</h1>
      {items.length === 0 && <NoItemsFound />}
      <ul className='list-group'>
        {items.map((item, index) => (
          <ListItem
            key={index}
            selected={selectedIndex === index}
            onClick={() => {
              onItemClick(index)
              onSelectItem?.(item)
            }}
          >
            {item}
          </ListItem>
        ))}
      </ul>
    </>
  )
}

export default ListGroup

import { FC, useState } from 'react'
import { Heart, FilledHeart } from './style'

interface LikeProps {
  size?: number
  onClick?: () => void
}

const Like: FC<LikeProps> = ({ size = 25, onClick }) => {
  const [selected, setSelected] = useState<boolean>(true)

  const toggleSelection = () => {
    setSelected(!selected)
    onClick?.()
  }

  if (selected) {
    return <Heart size={size} onClick={toggleSelection} />
  }
  return <FilledHeart size={size} onClick={toggleSelection} />
}

export default Like

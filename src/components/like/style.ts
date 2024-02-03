import style, { css } from 'styled-components'
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai'

const BaseHeart = css`
  cursor: pointer;
`

export const FilledHeart = style(AiFillHeart)`
  ${BaseHeart}
  color: pink;
`

export const Heart = style(AiOutlineHeart)`
  ${BaseHeart}
`

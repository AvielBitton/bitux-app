import { FC, forwardRef, useState } from 'react'
import { BaseElement } from '../../foundation/types'
import Button from '../button'

const ID = 'ExpandableText'

interface ExpandableTextProps extends BaseElement {
  maxChars?: number
  children: string
}

export const ExpandableText: FC<ExpandableTextProps> = forwardRef<HTMLDivElement, ExpandableTextProps>(
  ({ 'data-selector': dataSelector = ID, className, 'aria-label': ariaLabel, children, maxChars = 10 }, ref) => {
    const [isExpanded, setIsExpanded] = useState<boolean>(false)
    const isLongerText = children.length > maxChars
    const slicedText = (children as string).slice(0, maxChars).trim() + '...'
    const text = isExpanded ? children : slicedText

    const toggleExpansion = () => {
      setIsExpanded(!isExpanded)
    }

    return (
      <>
        <span className={className} aria-label={ariaLabel} data-selector={dataSelector} ref={ref}>
          {text}
        </span>
        {isLongerText && <Button onClick={toggleExpansion}>{isExpanded ? 'Show less' : 'Show more'}</Button>}
      </>
    )
  }
)

ExpandableText.displayName = 'ExpandableText'

export default Object.assign(ExpandableText, {
  ID,
}) as typeof ExpandableText & {
  ID: string
}

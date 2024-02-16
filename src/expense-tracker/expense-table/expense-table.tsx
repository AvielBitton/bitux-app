import { FC, forwardRef } from 'react'
import { BaseElement } from '../../foundation/types'
import Button from '../../components/button'

const ID = 'expense-table'
interface ExpenseTableProps extends BaseElement {
  titles: string[]
  data: object[]
  onDelete: (item: object) => void
}

export const ExpenseTable: FC<ExpenseTableProps> = forwardRef<HTMLTableElement, ExpenseTableProps>(
  ({ 'data-selector': dataSelector = ID, className, 'aria-label': ariaLabel, titles, data, onDelete }, ref) => {
    return (
      <table className={'table' || className} aria-label={ariaLabel} data-selector={dataSelector} ref={ref}>
        <thead className='thead-light'>
          <tr>
            {titles.map(title => (
              <th key={title}>{title}</th>
            ))}
          </tr>
        </thead>

        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              {Object.values(item).map((td, index) => (
                <td key={index}>{td}</td>
              ))}
              <td>
                <Button variant={Button.Variant.danger} onClick={() => onDelete(item)}>
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    )
  }
)

ExpenseTable.displayName = 'ExpenseTable'

export default Object.assign(ExpenseTable, {
  ID,
}) as typeof ExpenseTable & {
  ID: string
}

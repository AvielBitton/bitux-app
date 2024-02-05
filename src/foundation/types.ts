import { ForwardedRef, ReactNode } from 'react'
export type JSONObject<T = any> = { [key: string]: T }

export interface BaseElement {
  /** External reference that will be added to the native DOM element */
  ref?: ForwardedRef<any>
  /** External style */
  style?: JSONObject
  /** HTML tabindex property */
  tabIndex?: number
  /** HTML class name */
  className?: string
  /** Developer's attribute used to find this element in DOM */
  'data-selector'?: string
  /** React children */
  children?: ReactNode
  /** ARIA label for accessibility */
  'aria-label'?: string
}

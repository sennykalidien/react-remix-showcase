import { Booleanish } from '~/types/component'

export enum SortDirection {
  Ascending = 'ASCENDING',
  Descending = 'DESCENDING',
}

export interface InputComponentProps {
  id: string
  name: string
  hasError: boolean
  defaultValue?: string
  autoFocus: boolean
  autocomplete?: string
  autocorrect?: string
  spellcheck?: Booleanish
}

import { ChangeEvent } from "react";

export enum SortDirection {
  Ascending = "ASCENDING",
  Descending = "DESCENDING"
}

export interface InputComponentProps {
  id: string
  name: string
  hasError: boolean
  defaultValue?: string
}


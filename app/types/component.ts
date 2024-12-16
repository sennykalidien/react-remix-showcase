export type Booleanish = 'true' | 'false'

export interface CommonComponentProps {
  className?: string
  focusable?: Booleanish | 'auto' | undefined
}

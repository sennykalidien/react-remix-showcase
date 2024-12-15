const minimumLengthQuery = 3

export const validateQuery = (query: string) => {
  return query.length >= minimumLengthQuery
}

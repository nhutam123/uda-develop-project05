type percenOption = {
  value: number
  name: string
}

export const percenOption = () => {
  const array: percenOption[] = []
  for (let i = 0; i <= 100; i++) {
    array.push({ value: i / 100, name: i + '%' })
  }
  return array
}

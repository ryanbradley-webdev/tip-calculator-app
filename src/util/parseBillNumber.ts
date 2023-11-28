export const parseBillNumber = (bill: number) => {
  const billStr = bill.toString()
  const decimalIndex = billStr.indexOf('.')

  if (decimalIndex < 0) {
    return billStr + '.00'
  }

  if (billStr.length > decimalIndex + 3) {
    return billStr.slice(0, decimalIndex + 3)
  }

  if (billStr.length < decimalIndex + 2) {
    return billStr + '0'
  }

  return billStr
}

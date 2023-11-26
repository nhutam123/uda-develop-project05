export type Stock = {
  stockName: string
  stockId: string
  purchasePrice: number
  sellPrice: number
  profitTakingPrice: number
  stopLossPrice: number
  quantity: number
  totalPrice: number
  purchaseDay: string
  sellDay: string
  isDiscipline: boolean
  description: string
  timing: string
}

export type CreateStockRequest = {
  purchasePrice: number
  sellPrice: number
  profitTakingPrice: number
  stopLossPrice: number
  quantity: number
  totalPrice: number
  stockName: string
  purchaseDay: string
  sellDay: string
  isDiscipline: boolean
  description: string
  timing: string
}

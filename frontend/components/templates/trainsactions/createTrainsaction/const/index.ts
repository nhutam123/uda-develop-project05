import { CreateStockRequest } from '../../../../../shares/types/stocks'

export const defaultValue: CreateStockRequest = {
  stockName: '',
  purchasePrice: 0,
  sellPrice: 0,
  profitTakingPrice: 0,
  stopLossPrice: 0,
  quantity: 0,
  totalPrice: 0,
  purchaseDay: '',
  sellDay: '',
  isDiscipline: true,
  description: '',
  timing: ''
}

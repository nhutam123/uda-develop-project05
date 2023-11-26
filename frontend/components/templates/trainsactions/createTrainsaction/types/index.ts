import { CreateStockRequest } from '../../../../../shares/types/stocks'

export type CreateTrainsactionProps = {
  handleSubmit: (trainsaction: CreateStockRequest) => Promise<void>
}

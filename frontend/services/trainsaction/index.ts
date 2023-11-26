import Axios from 'axios'
import { CreateStockRequest } from '../../shares/types/stocks'
import { apiEndpoint } from '../../shares/apiClient'

export const CreateTrainsactionApi = async (
  idToken: string,
  newTrainsaction: CreateStockRequest
): Promise<CreateStockRequest> => {
  const response = await Axios.post(
    `${apiEndpoint}/stocks`,
    JSON.stringify(newTrainsaction),
    {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${idToken}`
      }
    }
  )
  return response.data.item
}

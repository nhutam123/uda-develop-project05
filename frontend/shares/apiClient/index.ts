import axios, { AxiosError, AxiosResponse, AxiosInstance } from 'axios'

const apiId = 'fsw1opx1z6'
export const apiEndpoint = `https://${apiId}.execute-api.us-east-1.amazonaws.com/test`

export const authConfig = {
  domain: 'dev-6rgjb6aw1wxxfpk4.us.auth0.com', // Auth0 domain
  clientId: 'MR68tIC2wH6bOv6Jvvn3xmkuRGyKVD5C', // Auth0 client id
  callbackUrl: 'http://tamln.click/callback'
}

export const apiClient = (idToken: string): AxiosInstance => {
  const axiosInstance = axios.create({
    baseURL: apiEndpoint,
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${idToken}`
    }
  })

  axiosInstance.interceptors.request.use(
    (request) => request,

    (error: AxiosError) => Promise.reject(error)
  )
  return axiosInstance
}

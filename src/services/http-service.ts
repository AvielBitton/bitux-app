import apiClient from './api-client'

export const getAll = <T>({ endpoint }: { endpoint: string }) => {
  return apiClient.get<T[]>(endpoint)
}

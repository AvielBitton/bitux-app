import axios, { AxiosError } from 'axios'

export { AxiosError }

export default axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com/',
  timeout: 10000,
})

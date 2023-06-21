import Medusa from "@medusajs/medusa-js"
import { QueryClient } from "@tanstack/react-query"
import * as process from "process"

// Defaults to standard port for Medusa server
let MEDUSA_BACKEND_URL = "http://localhost:9000"
const NEXT_PUBLIC_MEDUSA_API_KEY = process.env.NEXT_PUBLIC_MEDUSA_API_KEY

if (process.env.NEXT_PUBLIC_MEDUSA_BACKEND_URL) {
  MEDUSA_BACKEND_URL = process.env.NEXT_PUBLIC_MEDUSA_BACKEND_URL
}

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      staleTime: 1000 * 60 * 60 * 24,
      retry: 1,
    },
  },
})

const medusaClient = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3, publishableApiKey: NEXT_PUBLIC_MEDUSA_API_KEY })

export { MEDUSA_BACKEND_URL, NEXT_PUBLIC_MEDUSA_API_KEY, queryClient, medusaClient }

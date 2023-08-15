import type { AppRouter } from '@aiabit/trpc'
import { createTRPCReact } from '@trpc/react-query'

export const api = createTRPCReact<AppRouter>()

export { type RouterInputs, type RouterOutputs } from '@aiabit/trpc'

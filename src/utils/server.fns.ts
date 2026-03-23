import { createServerFn } from '@tanstack/react-start'

export const getServerMsg = createServerFn().handler(async () => {
    return 'Hello from the server'
})

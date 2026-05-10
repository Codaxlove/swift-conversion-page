import type { Config } from '@netlify/functions'

// @ts-ignore - generated during the build step (npm run build)
import handler from '../../dist/server/index.js'

export default async (req: Request): Promise<Response> => {
  return handler.fetch(req, {}, {
    waitUntil: (_promise: Promise<unknown>) => {},
    passThroughOnException: () => {},
  })
}

export const config: Config = {
  path: '/*',
  preferStatic: true,
}

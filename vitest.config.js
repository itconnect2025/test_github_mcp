import { defineConfig } from 'vitest/config'
import { VitestReporter } from 'tdd-guard-vitest'

export default defineConfig({
  test: {
    globals: true,
    reporters: [
      'default',
      new VitestReporter('/mnt/i/mcp_2nd'),
    ],
  },
})

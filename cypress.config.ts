import { defineConfig } from 'cypress'

export default defineConfig({
  component: {
    specPattern: ['src/components/**/__dev__/tests.*', 'src/components/**/__dev__/*.tests.*'],
    devServer: {
      framework: 'react',
      bundler: 'vite',
    },
  },
})

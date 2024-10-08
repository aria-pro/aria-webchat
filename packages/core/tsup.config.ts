import { defineConfig } from 'tsup';
import baseConfig from '../../tsup.base.config';

export default defineConfig({
  ...baseConfig,
  entry: {
    'botframework-webchat-core': './src/index.ts'
  },
  format: ['esm', 'cjs']
});

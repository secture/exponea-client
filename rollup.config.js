import typescript from '@rollup/plugin-typescript';
import dts from "rollup-plugin-dts";

const config = [
  {
    input: 'lib/index.js',
    output: {
      file: 'exponea-client.js',
      format: 'cjs',
      sourcemap: true,
    },
    plugins: [typescript()]
  }, {
    input: 'lib/index.d.ts',
    output: {
      file: 'exponea-client.d.ts',
      format: 'es'
    },
    plugins: [dts()]
  }
];

export default config;
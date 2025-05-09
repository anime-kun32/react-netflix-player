import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import dts from 'rollup-plugin-dts';
import { terser } from 'rollup-plugin-terser';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import path from 'path';
const packageJson = require('./package.json');

export default [
  // JavaScript + JSX/CJS/ESM Build
  {
    input: 'src/index.ts', // Ensure this file imports your ReactNetflixPlayer component
    output: [
      {
        file: packageJson.main,
        format: 'cjs',
        sourcemap: true,
      },
      {
        file: packageJson.module,
        format: 'esm',
        sourcemap: true,
      },
    ],
    external: ['react', 'react-dom', 'hls.js'],
    plugins: [
      peerDepsExternal(),
      resolve({ extensions: ['.js', '.jsx', '.ts', '.tsx'] }),
      commonjs(),
      typescript({
        tsconfig: './tsconfig.json',
        jsx: 'preserve', // 👈 Necessary for React
      }),
      terser(),
    ],
  },

  // Type Declarations (.d.ts)
  {
    input: 'dist/esm/index.d.ts',
    output: [{ file: 'dist/index.d.ts', format: 'esm' }],
    plugins: [dts()],
  },
];

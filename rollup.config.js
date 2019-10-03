import { terser } from 'rollup-plugin-terser'
import babel from 'rollup-plugin-babel'
import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'

export default [
  // normal
  {
    input: 'src/index.js',
    plugins: [
      resolve(),
      commonjs()
    ],
    output: [{
      file: 'umd/q-observe.js',
      format: 'umd',
      name: 'q-observe'
    }]
  },
  // minified
  {
    input: 'src/index.js',
    plugins: [
      terser(),
      resolve(),
      commonjs()
    ],
    output: [{
      file: 'umd/q-observe.min.js',
      format: 'umd',
      name: 'q-observe'
    }]
  },
  // polyfilled
  {
    input: 'src/index.js',
    plugins: [
      resolve(),
      commonjs(),
      babel()
    ],
    output: [{
      file: 'umd/q-observe.polyfill.js',
      format: 'umd',
      name: 'q-observe'
    }]
  },
  // polyfilled and minified
  {
    input: 'src/index.js',
    plugins: [
      terser(),
      resolve(),
      commonjs(),
      babel()
    ],
    output: [{
      file: 'umd/q-observe.polyfill.min.js',
      format: 'umd',
      name: 'q-observe'
    }]
  }
]

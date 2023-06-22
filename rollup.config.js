const commonjs = require('@rollup/plugin-commonjs')
const cssnano = require('cssnano')
const babel = require('@rollup/plugin-babel')
const postcss = require('rollup-plugin-postcss')
const nodeResolve  = require('@rollup/plugin-node-resolve')
const copy = require('rollup-plugin-copy')
const glslify = require('rollup-plugin-glslify')
const terser = require('@rollup/plugin-terser')
const nodePolyfills = require('rollup-plugin-polyfill-node')
const del = require('rollup-plugin-delete')

module.exports = {
  input: [
    'app/index.js',
    'styles/index.scss'
  ],
  output: {
    dir: 'public'
  },
  plugins: [
    del({ targets: 'public/*' }),
    nodeResolve (),
    commonjs(),
    nodePolyfills(),
    glslify(),
    babel({
      babelHelpers: 'bundled', 
      exclude: "node_modules/**"
    }),
    postcss({
      plugins: [cssnano()],
      extract: true,
      minimize: true
    }),
    copy({
      targets: [
        { src: './shared/*', dest: './public' },
        { src: './fonts/*', dest: './public' }
      ]
    }),
    terser()
  ]
}

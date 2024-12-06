const { babel } = require('@rollup/plugin-babel');
const resolve = require('@rollup/plugin-node-resolve');
const commonjs = require('@rollup/plugin-commonjs');
const typescript = require('@rollup/plugin-typescript');

module.exports = {
  input: 'src/lib/index.ts',
  output: [
    {
      file: 'dist/index.cjs',
      format: 'cjs',
      exports: 'named',
      generatedCode: {
        constBindings: false,
        arrowFunctions: false,
        reservedNamesAsProps: false
      }
    },
    {
      file: 'dist/index.mjs',
      format: 'es',
      exports: 'named',
      generatedCode: {
        constBindings: false,
        arrowFunctions: false,
        reservedNamesAsProps: false
      }
    }
  ],
  plugins: [
    typescript({
      tsconfig: './tsconfig.json',
      declaration: true,
      declarationDir: './dist'
    }),
    resolve(),
    commonjs(),
    babel({
      babelHelpers: 'bundled',
      extensions: ['.js', '.jsx', '.ts', '.tsx'],
      presets: [
        ['@babel/preset-env', {
          targets: {
            ie: '11'
          },
          useBuiltIns: 'usage',
          corejs: 3,
          modules: false
        }]
      ],
      exclude: 'node_modules/**'
    })
  ]
};

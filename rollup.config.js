// Rollup plugins
import babel from 'rollup-plugin-babel';
import eslint from 'rollup-plugin-eslint';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import replace from 'rollup-plugin-replace';

export default {
  entry: 'src/ReactMotionGroup.js',
  // format: 'umd',
  format: 'iife',
  dest: 'build/react-motion-group.js',
  sourceMap: 'inline',
  // moduleName: "CSSTransition",
  // external: ['react'],
  // plugins: [
  //   replace({
  //     exclude: 'node_modules/**',
  //     ENV: JSON.stringify(process.env.NODE_ENV || 'development'),
  //   }),      
  //   resolve({ jsnext: true, main: true }),
  //   // commonjs(),        
  //   commonjs({
  //     namedExports: {
  //       'node_modules/react/react.js': ['Children', 'Component', 'PropTypes', 'createElement'],
  //       'node_modules/react-dom/index.js': ['render']
  //     }      
  //   }),
  //   babel({
  //     exclude: 'node_modules/**',
  //   }),     
  //   eslint(),
  // ]

  plugins: [
     replace({
      // exclude: 'node_modules/**',
      // 'process.env.NODE_ENV': JSON.stringify('production'),
      // 'NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development'),
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development'),
      'ENVIRONMENT': JSON.stringify(process.env.NODE_ENV || 'development'),
    }),  

    resolve({
      jsnext: true,
      main: true,
      browser: true,
    }),
    commonjs({
      namedExports: {
        'node_modules/react/react.js': ['Children', 'Component', 'PropTypes', 'createElement'],
        'node_modules/react-dom/index.js': ['render']
      }      
    }),         
    babel({
      exclude: 'node_modules/**',
    }),

    // should follow behind babel
    eslint({
      exclude: [
        'src/styles/**',
      ]
    }),    
  ],
}

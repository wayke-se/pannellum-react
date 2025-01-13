/* eslint-disable no-console */
import { createRequire } from 'module';
import pkg from 'npm-dts';
const { Generator } = pkg;

import * as esbuild from 'esbuild';
const packageJSON = createRequire(import.meta.url)('../package.json');

const { dependencies, peerDependencies } = packageJSON;

import Common from './common.js';

const shared = {
  ...Common,
  minify: true,
  sourcemap: true,
  logLevel: 'info',
  external: Object.keys(dependencies || {}).concat(Object.keys(peerDependencies || {})),
};
await esbuild.build({
  ...shared,
  outfile: 'dist/index.js',
  outdir: undefined,
});

await esbuild.build({
  ...shared,
  outfile: 'dist/index.mjs',
  format: 'esm',
  outdir: undefined,
});

const timetaken = '⚡ Generating types done in';
console.time(timetaken);
new Generator({
  entry: 'src/index.tsx',
  output: 'dist/index.d.ts',
  help: true,
  logLevel: 'debug',
})
  .generate()
  .then(() => console.timeEnd(timetaken))
  .catch(() => console.log('Error occured while generating types'));

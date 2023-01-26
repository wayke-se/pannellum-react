/* eslint-disable no-console */
import * as esbuild from 'esbuild';
import Common from './common.js';

const ctx = await esbuild.context({
  ...Common,
  entryPoints: ['src/index-dev.tsx'],
  outdir: 'www',
});

await ctx.serve({
  servedir: 'www',
  port: 5000,
});
console.log('watching...');

export const Common = {
  entryPoints: ['src/index.tsx'],
  bundle: true,
  outdir: 'build',
  loader: {
    '.js': 'jsx',
    '.woff': 'file',
    '.woff2': 'file',
    '.gif': 'file',
    '.png': 'file',
    '.jpg': 'file',
    '.svg': 'file',
  },
};

export default Common;

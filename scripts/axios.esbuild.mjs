import { build } from 'esbuild';

/** @type {import('esbuild').BuildOptions} */
const dev = {
  entryPoints: ['./node_modules/axios/dist/axios.js'],
  format: 'esm',
  outfile: 'dist/libs/axios/axios.js',
  bundle: true,
  minify: false,
  legalComments: 'none',
  treeShaking: false,
};
/** @type {import('esbuild').BuildOptions} */
const prod = {
  entryPoints: ['./node_modules/axios/dist/axios.js'],
  format: 'esm',
  outfile: 'dist/libs/axios/axios.min.js',
  bundle: true,
  minify: true,
  legalComments: 'none',
  treeShaking: false,
};

export { dev, prod }

if (import.meta.url.endsWith(process.argv[1])) {
  // build dev
  console.log(`${dev.entryPoints} > ${dev.outfile}`)
  let re =  await build(dev);
  console.log(JSON.stringify(re, undefined, 2));
  // build prod
  console.log(`${prod.entryPoints} > ${prod.outfile}`)
  re = await build(prod);
  console.log(JSON.stringify(re, undefined, 2));
}

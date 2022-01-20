// const esbuild = require("esbuild")
import esbuild from 'esbuild'

const bundleEsm = esbuild.build({
  entryPoints: ["src/index.tsx"],
  outfile: "dist/index.js",
  bundle: true,
  sourcemap: true,
  // minify: true,
  external: ["react", "react-dom", "spacetime", "timezone-soft"],
  format: 'esm',
  loader: {".ts": "ts"}
})

const bundleCjs = esbuild.build({
  entryPoints: ["src/index.tsx"],
  outfile: "dist/index.cjs",
  bundle: true,
  sourcemap: true,
  // minify: true,
  external: ["react", "react-dom", "spacetime", "timezone-soft"],
  format: 'cjs',
  loader: {".ts": "ts"}
})

try {
  await Promise.all([bundleEsm, bundleCjs])
} catch (e) {
  console.error(e)
}

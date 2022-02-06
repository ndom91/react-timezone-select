;(async () => {
  const child = require('child_process')
  const { build } = require('esbuild')
  const pkg = require('./package.json')

  const shared = {
    entryPoints: ['src/index.tsx'],
    bundle: true,
    loader: { '.ts': 'ts', '.tsx': 'tsx' },
    platform: 'browser',
    external: [...Object.keys(pkg.peerDependencies)],
    target: ['esnext'],
  }

  const bundleEsm = build({
    ...shared,
    outfile: pkg.module,
    minify: true,
    format: 'esm',
  })

  const bundleCjs = build({
    ...shared,
    outfile: pkg.main,
    format: 'cjs',
  })

  try {
    await Promise.all([bundleEsm, bundleCjs])

    child.execSync('npm run tsc')
  } catch (e) {
    console.error(e)
    process.exit(1)
  }
})()

import { defineConfig } from "tsup"

export default defineConfig({
  entry: ["src/index.tsx"],
  format: ["esm"],
  clean: true,
  dts: true,
  banner: {
    js: '"use client"',
  },
})

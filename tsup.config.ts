import { defineConfig } from "tsup"

export default defineConfig({
  entry: ["src/index.tsx", "src/hook.ts"],
  format: ["esm"],
  clean: true,
  dts: false,
  banner: {
    js: '"use client"',
  },
})

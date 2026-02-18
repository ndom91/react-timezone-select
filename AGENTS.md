## Project Context

A TypeScript project using React. Contains 26 files across 6 directories.

## Stack

**Frameworks & Tools:**
- Vite (build)
- React (web)
- Vitest (testing)
- tsup (build)
- esbuild (build)

## Commands

```bash
pnpm dev  # dev
pnpm build  # build
pnpm build:example  # build:example
pnpm test  # test
pnpm test:watch  # test:watch
pnpm test:ci  # test:ci
```

## Conventions

- **Naming**: camelCase
- **File organization**: flat
- **Config files**: tsconfig.json
- **CI/CD**: .github/workflows/tests.yml

## Architecture

**Entry points:** src/index.tsx

**Key directories:**
- `example/`
- `src/` - Source code

## Boundaries

**Always:**
- Use pnpm, not npm or yarn
- Run `pnpm test` before committing changes
- Follow camelCase naming convention
- Follow flat file organization

**Ask first:**
- Adding new dependencies
- Changing project configuration files
- Modifying CI/CD pipelines

**Never:**
- Commit secrets, API keys, or .env files
- Delete or overwrite test files without understanding them
- Force push to main/master branch

<!-- agentseed:meta {"sha":"4396e24e461489ba6797a646354a71f2bd77ece7","timestamp":"2026-02-18T14:12:41.668Z","format":"agentseed-v1"} -->

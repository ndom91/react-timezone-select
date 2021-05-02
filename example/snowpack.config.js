/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  mount: {
    public: { url: '/', static: true },
    src: { url: '/dist' },
  },
  plugins: [
    '@snowpack/plugin-react-refresh',
    '@snowpack/plugin-typescript',
    '@snowpack/plugin-webpack',
  ],
  workspaceRoot: '../../',
  routes: [],
  packageOptions: {
    source: 'remote',
    types: true,
  },
  devOptions: {
    open: 'none',
  },
  buildOptions: {
    metaUrlPath: 'snowpack',
    baseUrl: './',
  },
};

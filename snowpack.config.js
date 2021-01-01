/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  mount: {
    public: { url: '/', static: true },
    src: { url: '/dist' },
  },
  plugins: [
    '@snowpack/plugin-react-refresh',
    '@snowpack/plugin-dotenv',
    '@snowpack/plugin-typescript',
    ['@snowpack/plugin-webpack', { sourceMap: false }],
  ],
  install: [
    /* ... */
  ],
  installOptions: {
    installTypes: true,
    polyfillNode: true,
  },
  devOptions: {
    /* ... */
  },
  buildOptions: {
    baseUrl: '/happy-2020',
  },
  proxy: {
    /* ... */
  },
  alias: {
    /* ... */
  },
};

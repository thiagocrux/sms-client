const { alias } = require('react-app-rewire-alias');

module.exports = function override(config) {
  alias({
    '@components': 'src/components',
    '@containers': 'src/containers',
    '@context': 'src/context',
    '@routes': 'src/routes',
    '@utils': 'src/utils',
  })(config);

  return config;
};

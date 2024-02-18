module.exports = ({ env }) => ({
  "strapi-plugin-populate-deep": {
    config: {
      defaultDepth: 5, // Default is 5
    },
  },
  "custom-plugin": {
    enabled: true,
    resolve: "./src/plugins/custom-plugin",
  },
  menus: {
    maxDepth: 5,
  },
});

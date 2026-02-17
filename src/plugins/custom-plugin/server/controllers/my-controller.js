'use strict';

module.exports = ({ strapi }) => ({
  index(ctx) {
    ctx.body = strapi
      .plugin('custom-plugin')
      .service('myService')
      .getWelcomeMessage();
  },
});

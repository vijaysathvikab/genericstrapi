'use strict';

/**
 * `activity-logger` middleware
 */

module.exports = (config, { strapi }) => {
  return async (ctx, next) => {
    const start = Date.now();

    await next();

    const delta = Math.ceil(Date.now() - start);
    
    // Log activity if authenticated
    if (ctx.state.user) {
        strapi.log.info(`User ${ctx.state.user.id} accessed ${ctx.request.url} in ${delta}ms`);
    }
  };
};

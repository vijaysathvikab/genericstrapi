'use strict';

/**
 * order controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::order.order', ({ strapi }) => ({
  async create(ctx) {
    const { user } = ctx.state;
    // Basic validation
    if (!user) {
        return ctx.unauthorized('You must be logged in to place an order.');
    }
    
    // Custom logic to calculate total from products could go here
    // For now, pass through
    const result = await super.create(ctx);
    return result;
  }
}));

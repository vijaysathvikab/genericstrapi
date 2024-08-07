'use strict';

/**
 * product service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::product.product', ({ strapi }) => ({
  async findOne(id, query) {
    // Custom logic to increment view count? (Mock)
    return super.findOne(id, query);
  }
}));

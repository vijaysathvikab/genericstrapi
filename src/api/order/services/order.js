'use strict';

/**
 * order service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::order.order', ({ strapi }) => ({
  async createPaymentIntent(amount) {
      // Mock payment intent creation
      return {
          client_secret: 'pi_test_secret_123456789',
          amount: amount,
          currency: 'usd'
      };
  },
  
  async confirmOrder(orderId) {
      return strapi.entityService.update('api::order.order', orderId, {
          data: { status: 'paid' }
      });
  }
}));

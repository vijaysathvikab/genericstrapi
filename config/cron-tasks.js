module.exports = {
  /**
   * Simple example.
   * Every monday at 1am.
   */
  '0 1 * * 1': async ({ strapi }) => {
    // Add your own logic here (e.g. send a queue of email, create a database backup, etc.)
    console.log('Running weekly cleanup task...');
    
    // Example: Delete abandoned carts older than 30 days
    // const thirtyDaysAgo = new Date();
    // thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);
    // await strapi.db.query('api::cart.cart').deleteMany({
    //   where: { updatedAt: { $lt: thirtyDaysAgo } }
    // });
  },
};

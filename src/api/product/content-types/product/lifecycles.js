module.exports = {
  async afterCreate(event) {
    const { result, params } = event;
    // Indexing hook simulation
    console.log(`Product created: ${result.title}. Triggering re-index.`);
    // await searchService.index('products', result);
  },
  
  async afterUpdate(event) {
    const { result, params } = event;
    console.log(`Product updated: ${result.title}. Updating index.`);
  },
};

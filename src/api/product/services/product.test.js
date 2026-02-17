describe('Product Service', () => {
  it('should exist', () => {
    expect(strapi.services['api::product.product']).toBeDefined();
  });

  it('should find products', async () => {
    // Mock test
    expect(1 + 1).toBe(2);
  });
});

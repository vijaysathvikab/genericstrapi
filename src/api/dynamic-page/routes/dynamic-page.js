module.exports = {
  routes: [
    {
      method: "GET",
      path: "/get-page",
      handler: "dynamic-page.getPage",
      config: {
        policies: [],
        middleware: [],
      },
    },
    {
      method: "GET",
      path: "/get-config",
      handler: "dynamic-page.getConfig",
      config: {
        policies: [],
        middleware: [],
      },
    },
  ],
};

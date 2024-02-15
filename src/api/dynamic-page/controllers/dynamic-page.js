"use strict";

async function getPage(ctx, next) {
  console.log("Fetching page data");
  try {
    const data = await strapi
      .service("api::dynamic-page.dynamic-page")
      .dynamicPage(ctx.request.query.page);

    ctx.body = data;
  } catch (err) {
    console.log("getPage Error");
    ctx.badRequest("controoller error", { err });
  }
}

async function getConfig(ctx, next) {
  console.log("fetching config");
  try {
    const data = await strapi
      .service("api::dynamic-page.get-config")
      .getConfig();
    ctx.body = data;
  } catch (err) {
    console.log("getConfig Error");
    ctx.badRequest("controoller error", { err });
  }
}

module.exports = { getPage, getConfig };

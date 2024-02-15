// @ts-nocheck
"use strict";

const dynamicComponentAssembly = require("./transformers/componentAssembly");

const { getPageData } = require("./helpers");
const page = require("./models/page");

const dynamicPage = async (targetPage) => {
  try {
    let pagePath = targetPage
      ? "/" + targetPage.substring(0, targetPage.lastIndexOf("/") + 1)
      : "/";
    let pageSlug = targetPage?.substring(
      targetPage.lastIndexOf("/") + 1,
      targetPage.length
    );
    if (!pagePath) {
      pagePath = "/";
    }
    if (!pageSlug) {
      pageSlug = "home";
    }
    console.log("fetching page", pagePath, pageSlug);
    const strapiPage = await getPageData("api::page.page", {
      filters: { slug: pageSlug },
    });
    console.log("page data", strapiPage);
    let pageData = new page.PageModel(strapiPage.title, strapiPage.slug);
    const assembledComponents = dynamicComponentAssembly.assembleComponents(
      strapiPage.components
    );
    pageData.addComponentArray(assembledComponents);
    return pageData;
  } catch (err) {
    strapi.log.error(err);
    return err;
  }
};

module.exports = { dynamicPage };

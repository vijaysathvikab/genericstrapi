// @ts-nocheck
"use-strict";
const header = require("./models/header");
const footer = require("./models/footer");

const getConfig = async () => {
  const headerConfigRaw = await strapi.entityService.findMany(
    "api::header-config.header-config",
    {
      filters: {},
      publicationState: "live",
      populate: "deep",
    }
  );

  const footerConfigRaw = await strapi.entityService.findMany(
    "api::footer-config.footer-config",
    {
      filters: {},
      publicationState: "live",
      populate: "deep",
    }
  );

  const headerMenu = await strapi.entityService.findOne(
    "plugin::menus.menu",
    headerConfigRaw?.headerMenu,
    {
      nested: true,
      populate: "deep",
    }
  );

  const headerMegaMenu = await strapi.entityService.findOne(
    "plugin::menus.menu",
    headerConfigRaw?.headerMegaMenu,
    {
      nested: true,
      populate: "deep",
    }
  );

  const footerMenuOne = await strapi.entityService.findOne(
    "plugin::menus.menu",
    footerConfigRaw?.footerMenuOne,
    {
      nested: true,
      populate: "deep",
    }
  );

  const footerMenuTwo = await strapi.entityService.findOne(
    "plugin::menus.menu",
    footerConfigRaw?.footerMenuTwo,
    {
      nested: true,
      populate: "deep",
    }
  );

  const footerMenuThree = await strapi.entityService.findOne(
    "plugin::menus.menu",
    footerConfigRaw?.footerMenuThree,
    {
      nested: true,
      populate: "deep",
    }
  );

  const headerConfig = new header.HeaderModel(
    headerConfigRaw,
    headerMenu,
    headerMegaMenu
  );

  const footerConfig = new footer.FooterModel(
    footerConfigRaw,
    footerMenuOne,
    footerMenuTwo,
    footerMenuThree
  );

  const configData = {
    header: headerConfig,
    footer: footerConfig,
  };

  return configData;
};

module.exports = { getConfig };

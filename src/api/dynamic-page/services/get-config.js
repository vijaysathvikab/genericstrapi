// @ts-nocheck
"use-strict";

const getConfig = async () => {
  const headerConfig = await strapi.entityService.findMany(
    "api::header-config.header-config",
    {
      filters: {},
      publicationState: "live",
      populate: "deep",
    }
  );

  const footerConfig = await strapi.entityService.findMany(
    "api::footer-config.footer-config",
    {
      filters: {},
      publicationState: "live",
      populate: "deep",
    }
  );

  const configData = {
    header: headerConfig,
    footer: footerConfig,
  };

  return configData;
};

module.exports = { getConfig };

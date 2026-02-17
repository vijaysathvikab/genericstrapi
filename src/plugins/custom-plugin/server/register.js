"use strict";

const pluginPkg = require("../package.json");

const plugin = pluginPkg.name.replace(
  /^(@[^-,.][\w,-]+\/|strapi-)plugin-/i,
  ""
);

module.exports = ({ strapi }) => {
  // register phase
  strapi.customFields.register({
    name: "menuSelector",
    plugin,
    type: "string",
  });
};

'use strict';

/**
 * header-config service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::header-config.header-config');

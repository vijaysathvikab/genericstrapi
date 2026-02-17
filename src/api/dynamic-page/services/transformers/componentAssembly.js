// @ts-ignore
const contentBlock = require("../models/contentBlock");
const form = require("../models/form");
const swiperBanner = require("../models/swiperBanner");
const swiperImages = require("../models/swiperImages");
const tabs = require("../models/tabs");

function assembleComponents(components) {
  const assembledComponents = components.map((component) => {
    const componentName = component.__component.split(".")[1];
    console.log(component);
    switch (componentName) {
      case "content-block":
        return new contentBlock.contentBlock(component.contentBody);
      case "form-config":
        return new form.FormModel(component);
      case "banners":
        return new swiperBanner.SwiperBanner(component);
      case "swiper-images":
        return new swiperImages.SwiperImages(component);
      case "tabs":
        return new tabs.Tabs(component);
      default:
        console.log("Component Not Found");
    }
  });

  return assembledComponents;
}

module.exports = { assembleComponents };

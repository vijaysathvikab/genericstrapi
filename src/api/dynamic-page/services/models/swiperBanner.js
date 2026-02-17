const helpers = require("./helpers");

class SwiperBanner {
  componentCode = "swiperBanner";
  slides = [];
  constructor(config) {
    this.slides = config.slides?.map((slide) => {
      return {
        ...slide,
        imageUrl: helpers.formatImageUrl(slide.image?.url),
      };
    });
  }
}

module.exports = { SwiperBanner };

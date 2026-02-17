const helpers = require("./helpers");
class SwiperImages {
  componentCode = "swiperImages";
  swiperStyle = "default";
  images = [];
  constructor(config) {
    this.swiperStyle = config.swiperStyle;
    this.images = config.images.map((image) => {
      return {
        url: helpers.formatImageUrl(image.url?.url),
        alt: image.alt,
        link: image.link,
      };
    });
  }
}

module.exports = { SwiperImages };

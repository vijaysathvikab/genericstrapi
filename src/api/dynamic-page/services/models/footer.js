const helpers = require("./helpers");
const menus = require("./menus");

class FooterModel {
  footerConfig = {
    footerRibbon: {
      icons: [],
      iconPosition: "left",
      backgroundColor: "#ff0000",
      color: "#ffffff",
    },
    footerMain: {
      logo: {},
      menus: [],
      logoPosition: "left",
      menuPostion: "right",
      backgroundColor: "#ff0000",
      color: "#ffffff",
    },
  };

  constructor(config, footerMenuOne, footerMenuTwo, footerMenuThree) {
    this.footerConfig.footerRibbon.icons = config.footerRibbonIcons?.map(
      (icon) => {
        return {
          alt: "icon",
          url: icon.iconCode,
          link: icon.iconLink,
        };
      }
    );
    this.footerConfig.footerRibbon.iconPosition = config.iconPosition;
    this.footerConfig.footerRibbon.backgroundColor =
      config.footerRibbonBackgroundColor;
    this.footerConfig.footerRibbon.color = config.footerRibbonTextColor;
    this.footerConfig.footerMain.logoPosition = config.logoPosition;
    this.footerConfig.footerMain.menuPostion = config.menuPostion;
    this.footerConfig.footerMain.backgroundColor = config.footerBackgroundColor;
    this.footerConfig.footerMain.color = config.footerTextColor;
    this.footerConfig.footerMain.logo = {
      url: helpers.formatImageUrl(config.footerLogo?.url),
      alt: "Company Logo",
      logoLink: "/",
    };

    this.footerConfig.footerMain.menus = [
      {
        title: footerMenuOne.title,
        items: new menus.MenuModel(footerMenuOne?.title, footerMenuOne?.items)
          .submenu,
      },
      {
        title: footerMenuTwo.title,
        items: new menus.MenuModel(footerMenuTwo?.title, footerMenuTwo?.items)
          .submenu,
      },
      {
        title: footerMenuThree.title,
        items: new menus.MenuModel(
          footerMenuThree?.title,
          footerMenuThree?.items
        ).submenu,
      },
    ];
  }
}

module.exports = { FooterModel };

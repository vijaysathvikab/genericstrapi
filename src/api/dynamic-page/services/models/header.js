const helpers = require("./helpers");

const menus = require("./menus");

class HeaderModel {
  headerConfig = {
    headerRibbon: {
      icons: [],
      iconPosition: "left",
      backgroundColor: "#ff0000",
      color: "#ffffff",
    },
    headerMain: {
      logo: {},
      tagline: "",
      menus: [],
      logoPosition: "center",
      menuPostion: "right",
      backgroundColor: "#ff0000",
      color: "#ffffff",
      //searchBar config to be added later
    },
    headerMegaMenu: {
      megaMenu: [],
      dropdownBgColor: "#ff0000",
      dropdownColor: "#ffffff",
      backgroundColor: "#ff0000",
      color: "#ffffff",
    },
  };

  constructor(config, headerMenu, headerMegaMenu) {
    this.headerConfig.headerRibbon.icons = config.headerRibbonIcons?.map(
      (icon) => {
        return {
          alt: "icon",
          url: icon.iconCode,
          link: icon.iconLink,
        };
      }
    );

    this.headerConfig.headerRibbon.iconPosition =
      config.headerRibbonIconPosition;
    this.headerConfig.headerRibbon.color = config.headerRibbonTextColor;
    this.headerConfig.headerRibbon.backgroundColor =
      config.headerRibbonBackgroundColor;
    this.headerConfig.headerMegaMenu.color = config.headerMegaMenuTextColor;
    this.headerConfig.headerMegaMenu.backgroundColor =
      config.headerMegaMenuBackgroundColor;
    this.headerConfig.headerMegaMenu.dropdownColor = config.dropdownTextColor;
    this.headerConfig.headerMegaMenu.dropdownBgColor =
      config.dropdownBackgroundColor;
    this.headerConfig.headerMegaMenu.megaMenu = new menus.MenuModel(
      headerMegaMenu?.title,
      headerMegaMenu?.items
    ).submenu;
    this.headerConfig.headerMain.menus = new menus.MenuModel(
      headerMenu?.title,
      headerMenu?.items
    ).submenu;
    this.headerConfig.headerMain.logoPosition = config.logoPosition;
    this.headerConfig.headerMain.tagline = config.tagline;
    this.headerConfig.headerMain.backgroundColor =
      config.headerMainBackgroundColor;
    this.headerConfig.headerMain.color = config.headerMainTextColor;
    this.headerConfig.headerMain.logo = {
      url: helpers.formatImageUrl(config.logo?.url),
      alt: "Company Logo",
      logoLink: "/",
    };
    this.headerConfig.headerMain.menuPostion = config.menuPosition;
  }
}

module.exports = { HeaderModel };

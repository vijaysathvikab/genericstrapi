const orderBy = require("lodash/orderBy");

class MenuModel {
  menuItems = [];
  submenu = [];
  menuName = "";
  constructor(menuName, menuItems) {
    this.menuName = menuName;
    this.menuItems = menuItems;

    let rootMenu = this.menuItems.filter((item) => !item.parent);
    rootMenu = orderBy(rootMenu, ["parent.id", "order"], ["desc", "asc"]);

    this.submenu = rootMenu.map((menuItem) => {
      return this.menuMap(menuItem);
    });
  }

  menuMap(menuItem) {
    const menuData = this.addMenuItem(menuItem);
    let childMenu = this.menuItems.filter(
      (item) => item.parent?.id === menuItem.id
    );
    childMenu = orderBy(childMenu, ["parent.id", "order"], ["desc", "asc"]);

    menuData.submenu = childMenu.map((item) => {
      return this.menuMap(item);
    });

    return menuData;
  }

  addMenuItem(menuItem) {
    const assembledMenu = new MenuItem(menuItem.title, menuItem.url);
    return assembledMenu;
  }
}

class MenuItem {
  label = "";
  link = "";
  submenu = [];
  constructor(label, link) {
    this.label = label;
    this.link = link;
  }
}

module.exports = { MenuModel, MenuItem };

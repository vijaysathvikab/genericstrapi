class Tabs {
  componentCode = "tabs";
  heading = "";
  orientation = "Horizontal";
  tabs = [];
  constructor(config) {
    this.heading = config.heading;
    this.orientation = config.orientation;
    this.tabs = config.tab?.map((tab) => {
      return {
        title: tab.title,
        body: tab.tabBody,
      };
    });
  }
}

module.exports = { Tabs };

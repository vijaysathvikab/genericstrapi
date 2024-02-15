class PageModel {
  pageData = {
    urlTitle: "",
    urlTitlePath: "",
    components: [],
  };

  constructor(pageTitle, pageSlug) {
    (this.pageData.urlTitle = pageTitle),
      (this.pageData.urlTitlePath = pageSlug);
  }

  addSingleComponent(component) {
    this.pageData.components.push(component);
  }

  addComponentArray(componentArray) {
    this.pageData.components = this.pageData.components.concat(componentArray);
  }
}

module.exports = { PageModel: PageModel };

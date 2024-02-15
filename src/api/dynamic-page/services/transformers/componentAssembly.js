// @ts-ignore
const contentBlock = require("../models/contentBlock");

function assembleComponents(components) {
  const assembledComponents = components.map((component) => {
    const componentName = component.__component.split(".")[1];
    switch (componentName) {
      case "content-block":
        return new contentBlock.contentBlock(component.contentBody);
      default:
        console.log("Component Not Found");
    }
  });

  return assembledComponents;
}

module.exports = { assembleComponents };

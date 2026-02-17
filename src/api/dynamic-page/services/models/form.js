class FormModel {
  componentCode = "form";
  formConfig = {
    formStyle: {},
    formClass: "",
  };
  headerText = "";

  buttonConfig = {
    buttonStyle: {},
    buttonClass: "",
  };
  formFields = {};
  constructor(config) {
    this.formConfig.formStyle = config.formStyle;
    this.formConfig.formClass = config.formClass;
    this.buttonConfig.buttonStyle = config.buttonStyle;
    this.buttonConfig.buttonClass = config.buttonClass;
    config.formFields?.map((formField) => {
      const fieldCode = formField.fieldCode;
      formField.width = `${formField.width}%`;
      this.formFields[fieldCode] = { ...formField };
    });
    this.headerText = config.headerText;
  }
}

module.exports = { FormModel };

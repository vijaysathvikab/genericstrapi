module.exports = (plugin) => {
  plugin.services.email.sendTemplatedEmail = async (options, template, data) => {
    // Custom email sending logic wrapper
    // e.g. Add company distinct header/footer
    const enhancedData = { ...data, companyName: 'StyleStore' };
    
    return strapi.plugin('email').service('email').send({
      ...options,
      subject: template.subject,
      text: template.text,
      html: template.html, // In real implementation, render with Lodash
    });
  };

  return plugin;
};

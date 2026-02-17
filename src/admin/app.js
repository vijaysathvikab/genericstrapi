export default {
  config: {
    locales: [
      // 'fr',
      // 'it',
    ],
    translations: {
      en: {
        "app.components.LeftMenu.navbrand.title": "StyleStore Dashboard",
        "app.components.LeftMenu.navbrand.workplace": "Admin Panel",
        "Auth.form.welcome.title": "Welcome to StyleStore",
        "Auth.form.welcome.subtitle": "Login to your account"
      },
    },
    tutorials: false,
    notifications: { release: false },
  },
  bootstrap(app) {
    console.log(app);
  },
};

async function getPageData(targetPageApi, searchFilters = { filters: {} }) {
  try {
    searchFilters.publicationState = "live";
    searchFilters.populate = "deep";

    const strapiPage = await strapi.entityService.findMany(
      targetPageApi,
      searchFilters
    );
    if (strapiPage?.length) {
      return strapiPage[0];
    } else {
      return strapiPage;
    }
  } catch (err) {
    console.log(err);
  }
}

module.exports = { getPageData };

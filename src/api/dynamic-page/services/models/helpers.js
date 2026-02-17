const getDomain = () => {
  let domain = strapi.requestContext
    .get()
    .request.href.match(new RegExp("^https?://(.*?)/"))[0];
  domain =
    domain.substring(domain.length - 1, domain.length) === "/"
      ? domain.substring(0, domain.length - 1)
      : domain;
  return domain;
};

const formatImageUrl = (url) => {
  if (!url) return "";
  if (url.indexOf("http") !== 0) {
    return `${getDomain()}${url}`;
  } else {
    return url;
  }
};

module.exports = { formatImageUrl };

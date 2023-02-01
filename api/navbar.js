import request from "./request";

async function getNavbar(language) {
  const QUERY = `
 {
   allNavbars(locale: it) {
    companyName
    logo {
      url
    }
    navbarItems {
      id
      name
      handle
      subItem {
        handle
        id
        name
      }
    }
  }
}
  `;

  return await request("datoCMS", QUERY);
}
async function getAllArticles() {
  const query = `
{
    allArticles(orderBy: _createdAt_ASC) {
          id
          title
          titlemagazine
          subtitle
          description
          handle
          imageArticlesList {
            blurUpThumb
            url
            alt
          }
          imageArticleSlider {
            blurUpThumb
            url
            alt
          }
    }
}
`;

  return await request("datoCMS", query);
}

export { getAllArticles, getNavbar };

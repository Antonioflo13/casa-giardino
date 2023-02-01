import request from "./request";

async function getWhyUsInfo() {
  const QUERY = `{
     allWhies {
        description
        headerImage {
          blurUpThumb
          url
        }
        collapsableMenu {
          id
          title
          description
        }
    }
}`;

  return await request("datoCMS", QUERY);
}

export default getWhyUsInfo;

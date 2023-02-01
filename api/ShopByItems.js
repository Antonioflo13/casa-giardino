import request from "./request";

async function getShopByItems() {
  const query = `{
    shopByItem {
      items {
        id
        title
        item {
          id
          item
          handle
        }
      }
    }
    sunglassesItem {
      items {
        id
        title
        item {
          id
          item
          handle
        }
      }
    }
    framesItem {
      items {
        id
        title
        item {
          id
          item
          handle
        }
      }
    }
    promotionItem {
      items {
        id
        title
        item {
          id
          item
          handle
        }
      }
    }
  }
`;

  return await request("datoCMS", query);
}

export default getShopByItems;

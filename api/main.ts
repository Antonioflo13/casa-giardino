import request from "./request";

async function getMain() {
  const QUERY: string = `
{
  allMains(locale: it) {
    description
    title
    backgroundImage {
      alt
      blurUpThumb
      url
    }
  }
}
  `;

  return await request("datoCMS", QUERY);
}
export default getMain;

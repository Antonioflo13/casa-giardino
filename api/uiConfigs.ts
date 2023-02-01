import request from "./request";

async function getUiConfigs() {
  const QUERY: string = `
 {
   uiConfig {
    primary {
      hex
    }
    secondary {
      hex
    }
  }
}
  `;

  return await request("datoCMS", QUERY);
}
export default getUiConfigs;

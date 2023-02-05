export interface uiConfigsResponse {
  data: {
    uiConfig: {
      primary: { hex: string };
      secondary: { hex: string };
      headerSticky: boolean;
    };
  };
}

export interface uiConfigs {
  primary: { hex: string };
  secondary: { hex: string };
  headerSticky: boolean;
}

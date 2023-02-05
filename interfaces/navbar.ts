export interface navbarResponse {
  data: {
    allNavbars: [
      {
        companyName: string;
        logo: { url: string };
        navbarItems: [
          {
            id: number;
            name: string;
            handle: string;
            subItem: [{ id: number; name: string; handle: string }];
          }
        ];
      }
    ];
  };
}
export interface navbar {
  companyName: string;
  logo: string;
  navbarItems: {
    id: number;
    name: string;
    handle: string;
    subItem: { id: number; name: string; handle: string }[];
  }[];
}

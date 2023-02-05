export interface mainResponse {
  data: {
    allMains: [
      {
        title: string;
        description: string;
        backgroundImage: {
          alt: string;
          blurUpThumb: string;
          url: string;
        };
      }
    ];
  };
}

export interface main {
  title: string;
  description: string;
  alt: string;
  url: string;
}

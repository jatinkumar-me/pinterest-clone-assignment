export type UnsplashImageType = {
  id: string,
  urls: {
    regular: string,
    small: string,
    thumb: string,
  },
  height: number,
  width: number,
  alt_description?: string,
};

export type UnsplashResponseType = UnsplashImageType[];

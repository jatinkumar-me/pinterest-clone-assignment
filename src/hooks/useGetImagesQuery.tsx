import { useEffect, useState } from "react";
import { UnsplashResponseType } from "../types";

export default function useGetImagesQuery(pageNumber: number) {
  const [images, setImages] = useState<UnsplashResponseType>([]);
  const [isError, setIsError] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const fetchImages = async () => {
    try {
      setIsLoading(true);
      setIsError(false);
      const response = await fetch(
        `https://api.unsplash.com/photos/random?client_id=${
          import.meta.env.VITE_API_ACCESS_KEY
        }&count=20`
      );
      const data: UnsplashResponseType = await response.json();
      setIsLoading(false);
      setImages((previousImages) => [...previousImages, ...data]);
    } catch (error) {
      setIsError(true);
      console.error("Error fetching images:", error);
    }
  };

  useEffect(() => {
    fetchImages();
    console.log(pageNumber);
  }, [pageNumber]);

  return { images, isLoading, isError };
}

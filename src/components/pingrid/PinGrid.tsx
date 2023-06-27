import { useCallback, useRef, useState } from "react";
import useGetImagesQuery from "../../hooks/useGetImagesQuery";
import styles from "./pingrid.module.css";
import Pin from "../pin/Pin";
import { PiSpinner } from "react-icons/pi";
import { IconContext } from "react-icons";

export default function PinGrid() {
  const [pageNumber, setPageNumber] = useState<number>(1);
  const { images, isLoading, isError } = useGetImagesQuery(pageNumber);
  const observer = useRef<IntersectionObserver | null>(null);

  const lastItem = useCallback(
    (currentDomNode: HTMLDivElement | null) => {
      if (isLoading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting)
          setPageNumber((previousPageNumber) => previousPageNumber + 1);
      });
      if (currentDomNode) observer.current.observe(currentDomNode);
    },
    [isLoading]
  );

  return (
    <main>
      <div className={styles.grid}>
        {images.map((image, index) => (
          <div
            key={`${image.id}${index}`}
            ref={index === images.length - 1 ? lastItem : null}
            className={styles.pinContainer}
            style={{
              gridRowEnd: `span ${Math.round(
                (300 * image.height) / (image.width * 10)
              )}`,
            }}
          >
            <Pin image={image} />
          </div>
        ))}
      </div>
      <IconContext.Provider value={{ size: "5rem" }}>
        {isError && <p>Error loading images!</p>}
        {isLoading && (
          <div className={styles.loadingContainer}>
            <PiSpinner className={styles.loading}/>
          </div>
        )}
      </IconContext.Provider>
    </main>
  );
}

import { UnsplashImageType } from "../../types";
import { GoArrowUpRight, GoUpload } from "react-icons/go";
import { BsThreeDots } from "react-icons/bs";
import styles from "./pin.module.css";
import { IconContext } from "react-icons";

type PropType = {
  image: UnsplashImageType;
};
export default function Pin({ image }: PropType) {
  return (
    <div key={image.id} className={styles.pin}>
      <div className={styles.overlay}>
        <IconContext.Provider value={{ size: "20px" }}>
          <button className={styles.saveButton}>Save</button>
          <div className={styles.bottomButtons}>
            <button>
              <GoArrowUpRight />
              {image.alt_description.slice(0,5)}
            </button>

            <div className={styles.bottomButtonsRight}>
              <button>
                <GoUpload />
              </button>
              <button>
                <BsThreeDots />
              </button>
            </div>
          </div>
        </IconContext.Provider>
      </div>
      <img
        className={styles.image}
        src={image.urls.small}
        alt={image.alt_description}
      />
    </div>
  );
}

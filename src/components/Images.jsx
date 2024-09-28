import React, { useContext } from "react";
import pixabayContext from "../PixaBay/PixabayContext";

const Images = () => {
  const { imageData } = useContext(pixabayContext);
  return (
    <div className="container my-5">
      <div className="flex">
        {imageData.map((image) => (
          <div key={image.id}>
            <div className="item">
              <img src={image.largeImageURL} alt="" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Images;

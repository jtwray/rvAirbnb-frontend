import React, { useEffect, useState } from "react";
import axios from "axios";
export function useFetchImg(images, setImages) {
  useEffect(() => {
    if (!images.length > 0) {
      axios
        .get(
          `https://api.unsplash.com/photos/random?query=camper+life&count=10&client_id=${process.env.REACT_APP_CLIENT_ID}`
        )
        .then((response) =>
          setImages(
            response.data.map(
              (imgObj, idx) =>
                (images[idx] = {
                  alt_description: imgObj.alt_description,
                  title: imgObj.description,
                  urls: imgObj.urls
                })
            )
          )
        )

        .catch((e) => console.error(e, "line23 useIMG-hook"));
    }
  }, []);
  return [images];
}

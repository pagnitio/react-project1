import React, { useEffect, useState } from "react";
import pixabayContext from "./PixabayContext";

const PixabayState = (props) => {
  const [imageData, setImageData] = useState([]);
  const [query,setQuery] = useState('london');
  const api_key = "46229918-0ab15386760fe374762c42d78";
  useEffect(() => {
    const fetchData = async () => {
      const api = await fetch(
        `https://pixabay.com/api/?key=${api_key}&q=${query}&image_type=photo&per_page=100`
      );
      const data = await api.json();
      setImageData(data.hits);
      // console.log(data.hits);
    };
    fetchData();
  }, [query]);

  const fetchImageByCategory = async (cat) => {
    const api = await fetch(
      `https://pixabay.com/api/?key=${api_key}&category=${cat}&q=yellow+flowers&image_type=photo&per_page=100`
    );
    const data = await api.json();
    setImageData(data.hits);
    // console.log(data.hits);
  };

  return (
    <pixabayContext.Provider value={{ imageData, fetchImageByCategory,setQuery}}>
      {props.children}
    </pixabayContext.Provider>
  );
};

export default PixabayState;

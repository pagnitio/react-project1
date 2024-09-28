import React, { useContext } from "react";
import pixabayContext from "../PixaBay/PixabayContext";
const Navbar = () => {
    const {fetchImageByCategory,setQuery} = useContext(pixabayContext)
  return (

    <>
     <div className="mx-auto text-center">
      <h2 className="mb-3 mt-3">- Pixabay Clone -</h2>
      <button
        onClick={() => fetchImageByCategory("fashion")}
        type="button"
        className="btn btn-outline-primary mx-3"
      >
        Fashion
      </button>
      <button
        onClick={() => fetchImageByCategory("nature")}
        type="button"
        className="btn btn-outline-secondary mx-3"
      >
        Nature
      </button>
      <button
        onClick={() => fetchImageByCategory("science")}
        type="button"
        className="btn btn-outline-success mx-3"
      >
        Science
      </button>
      <button
        onClick={() => fetchImageByCategory("education")}
        type="button"
        className="btn btn-outline-danger mx-3"
      >
        Education
      </button>
      <button
        onClick={() => fetchImageByCategory("feelings")}
        type="button"
        className="btn btn-outline-warning mx-3"
      >
        Feelings
      </button>
      <button
        onClick={() => fetchImageByCategory("health")}
        type="button"
        className="btn btn-outline-info mx-3"
      >
        Health
      </button>

      <button
        onClick={() => fetchImageByCategory("food")}
        type="button"
        className="btn btn-outline-info mx-3"
      >
        Food
      </button>
    </div>
    <div className="container">
    <div className="input-group mt-5">

  <input type="text" onChange={(e)=>setQuery(e.target.value)} className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
</div>
    </div>
    </>
   
  );
};

export default Navbar;

import { useState, useEffect } from "react";

export default function MovieFilter({handleCategorie, selectedCategorie}) {
    const movieCategories = ['Shonen', 'Shojo', 'Adventure', 'Seinen', 'Isekai', 'Fantasy', 'Science Fiction'];
    // const [selectedCategorie, setSelectedCategorie] = useState('Shonen');

    // function handleCategorieSelected(e){
    //     setSelectedCategorie(e.target.value);
    // }

    const movieItems = movieCategories.map((movie) => (
      <option key={movie} value={movie}>
        {movie}
      </option>
    ));
  
    return (
      <div className="container-fluid bg-secondary  d-flex justify-content-between ps-0 ps-md-156 align-item-center pt-24 _movieFilter w-100">
        <div className="d-inline-flex justify-content-center ps-8 align-item-center column-gap-16 text-light _subtitle">
          <i className="bi bi-film"></i>
          <p>Movies</p>
        </div>
        <div className="ps-8">
          <select
            name=""
            id=""
            type="button"
            className="form-select bg-tertiary text-light rounded-5 px-32 _shadow _body"
            style={{ width: 'max-content' }}
            value={selectedCategorie}
            onChange={(e) => handleCategorie(e.target.value)}
          >
            {movieItems}
          </select>
        </div>
      </div>
    );
  }
  
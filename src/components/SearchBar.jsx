import { useEffect } from "react";
import logo from "../assets/logo.png";

export default function SearchBar({
  is_fixed,
  showSearchBar = true,
  title,
  setSearchValue,
  searchValue,
  handleSearch,
  removeSearchValue,
}) {
  const logoStyle = {
    width: "88px",
    height: "47px",
  };

  return (
    <>
      <nav
        className={`navbar _searchNav ${
          is_fixed ? "position-fixed" : "position-absolute"
        } mt-0 px-8 px-lg-32 py-24 py-sm-8 `}
        style={{ width: "100%", zIndex: "3" }}
      >
        <div className="container-fluid d-flex justify-content-center justify-content-between row-gap-24 align-items-center w-100">
          <a href="" className="navbar-brand">
            <img src={logo} alt="" style={logoStyle} />
          </a>
          {showSearchBar ? (
            <form
              onSubmit={(e) => e.preventDefault()}
              className=" d-none d-sm-flex text-light  justify-content-between align-items-center ps-16 pe-32 py-8 _searchBar"
            >
              <SearchInput
                searchValue={searchValue}
                setSearchValue={setSearchValue}
                handleChange={handleSearch}
                handleClick={removeSearchValue}
              />
            </form>
          ) : (
            <h1 className=" d-none d-sm-block title-3 text-light">{title}</h1>
          )}
          <div className="bg-tertiary _lead text-light _userProfile _shadow">
            R
          </div>
          <div className="container-fluid justify-content-center d-sm-none d-flex ">
            {showSearchBar ? (
              <form
                onSubmit={(e) => e.preventDefault()}
                className=" d-flex text-light 
                  justify-content-between ps-16 pe-32 py-8 _searchBar"
              >
                <SearchInput
                  searchValue={searchValue}
                  setSearchValue={setSearchValue}
                  handleChange={handleSearch}
                  handleClick={removeSearchValue}
                />
              </form>
            ) : (
              <h1 className="title-3 text-light">{title}</h1>
            )}
          </div>
        </div>
      </nav>
    </>
  );
}

function SearchInput({ searchValue, setSearchValue, handleChange,handleClick }) {
  return (
    <>
      <input
        type="text"
        placeholder="Search your anime ..."
        className="_searchInput text-altlight"
        value={searchValue}
        onChange={(e) => {
          setSearchValue(e.target.value);
          handleChange();
        }}
      />
      {searchValue != '' && (
              <i
              className="bi bi-x-lg text-light  _icon"
              type="button"
              onClick={handleClick}
            ></i>
      )}
    </>
  );
}

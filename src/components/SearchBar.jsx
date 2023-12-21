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
        className={`navbar _searchNav bg-secondary ${
          is_fixed ? "position-fixed" : "position-absolute"
        } mt-0 px-8 ps-8 ps-sm-80 pe-lg-32  pt-16 pt-sm-8 py-8 `}
        style={{ width: "100%", zIndex: "3" }}
      >
        <div className="container-fluid d-flex  justify-content-between row-gap-24 align-items-center w-100">
          <a href="" className="navbar-brand">
            <img src={logo} alt="" style={logoStyle} />
          </a>
          {showSearchBar ? ( //desktop view
            <form
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
            <h1 className=" d-none d-sm-block _subtitle text-light">{title}</h1>
          )}
          <div className="bg-tertiary _lead text-light _userProfile _shadow">
            R
          </div>

          {showSearchBar ? ( //mobile view
            <div className="container-fluid justify-content-center align-items-center d-sm-none d-flex ">
              <form
                className=" d-flex text-light 
                  justify-content-between ps-16 pe-32 py-8 mb-8 _searchBar"
              >
                <SearchInput
                  searchValue={searchValue}
                  setSearchValue={setSearchValue}
                  handleChange={handleSearch}
                  handleClick={removeSearchValue}
                />
              </form>
            </div>
          ) : (
            <div className="container-fluid justify-content-center align-items-center d-sm-none d-flex ">
              <h1 className="_subtitle text-light">{title}</h1>
            </div>
          )}
        </div>
      </nav>
    </>
  );
}

function SearchInput({
  searchValue,
  setSearchValue,
  handleChange,
  handleClick,
}) {
  return (
    <>
      <input
        type="text"
        placeholder="Search  anime ..."
        className="_searchInput text-altlight"
        value={searchValue}
        onChange={(e) => {
          setSearchValue(e.target.value);
          handleChange();
        }}
      />
      {searchValue != "" && (
        <i
          className="bi bi-x-lg text-light  _icon"
          type="button"
          onClick={handleClick}
        ></i>
      )}
    </>
  );
}

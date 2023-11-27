import { useEffect } from 'react'
import logo from '../assets/logo.png'

export default function SearchBar ({is_fixed, showSearchBar = true, title, setSearchValue, searchValue}){
    const logoStyle = {
        width : '88px',
        height : '47px'
    }

    useEffect(()=>{
        console.log('Value : ' + searchValue);
    }, [searchValue])

   return (
    <>
        <nav className={`navbar _searchNav ${is_fixed ? 'position-fixed' : 'position-absolute'} mt-0 mt-md-8 px-8 px-lg-32 py-24 py-sm-0`} style={{width : '100%', zIndex : '3'}}>
            <div className="container-fluid d-flex justify-content-center justify-content-between row-gap-24 align-item-center w-100">
                    <a href="" className="navbar-brand">
                        <img src={logo} alt="" style={logoStyle}/>
                    </a>
                    { showSearchBar ? (
                            <form  onSubmit={ (e) => e.preventDefault()} className=" d-none d-sm-flex text-light bg-tertiary rounded-5 justify-content-between a _shadow px-32 py-16 _searchBar" >
                                <input 
                                    type="text" 
                                    placeholder='search your movie ...' 
                                    className='_searchInput' 
                                    value={searchValue} 
                                    onChange={ (e) => {setSearchValue(e.target.value);}} 
                                />
                                <i className="bi bi-search text-light _searchIcon" type="submit"></i>
                            </form>
                        ) : (
                            <h1 className=" d-none d-sm-block title-3 text-light">{title}</h1>
                        )}
                    <div className="bg-tertiary _lead text-light _userProfile _shadow" >R</div>
                    <div className="container-fluid justify-content-center d-sm-none d-flex ">
                        { showSearchBar ? (
                                <form  onSubmit={ (e) => e.preventDefault()} className=" d-flex text-light bg-tertiary rounded-5 justify-content-between a _shadow px-32 py-16 _searchBar" >
                                    <input 
                                    type="text" 
                                    placeholder='search your movie ...' 
                                    className='_searchInput' 
                                    value={searchValue} 
                                    onChange={ (e) => {setSearchValue(e.target.value);}} 
                                    />
                                    <i className="bi bi-search text-light _searchIcon" type="submit"></i>
                                </form>
                            ) : (
                                <h1 className="title-3 text-light">{title}</h1>
                            )}
                    </div>
                </div>
        </nav>
    </>
   ) 
}
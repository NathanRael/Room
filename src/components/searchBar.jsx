import logo from '../assets/logo.png'

export default function SearchBar ({is_fixed, showSearchBar = true, title}){
    const logoStyle = {
        width : '88px',
        height : '47px'
    }
   return (
    <>
        <nav className={`navbar navbar-expand-lg ${is_fixed ? 'position-fixed' : 'position-absolute'} mt-8 px-32`} style={{width : '100%', zIndex : '3'}}>
            <div className="container-fluid">
                
                <button 
                    className="navbar-toggler" 
                    type='button' 
                    data-bs-toggle="collapse"
                    data-bs-target="#canCollapse"
                    aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"
                >
                        <span class="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse ms-auto d-flex justify-content-between align-item-center" id='canCollapse'>
                    <a href="" className="navbar-brand">
                        <img src={logo} alt="" style={logoStyle}/>
                    </a>
                    { showSearchBar ? (
                        <div className="text-light d-flex bg-tertiary rounded-5 justify-content-between shadow px-32 py-16" style={{width : '915px'}}>
                            <input type="text" placeholder='search your movie ...' className='_searchInput' />
                            <i className="bi bi-search text-light _searchIcon" type="button"></i>
                        </div>
                    ) : (
                        <h1 className="title-3 text-light">{title}</h1>
                    )}
                    <div className="bg-tertiary _lead text-light _userProfile _shadow" >R</div>
                </div>
            </div>
        </nav>
    </>
   ) 
}
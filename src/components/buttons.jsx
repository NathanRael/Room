
export function Button ({name, icon, color}){
    return(
        <button className={`btn d-inline-flex align-item-center btn-lg _body px-32 py-16 ${color}`}>
            <i className={`${icon} me-2`} ></i>
            {name}
        </button>
    )
}

export function NavButton ({icon, active,handleClick}){

    return (
        <button 
        className={`btn text-light rounded-5 p-8 ${active ? 'btn-primary' : ''}`} 
        style={{width : '52px', height : '52px'}}
        onClick={handleClick}
        >
            <i className={`${icon} d-flex justify-content-center aling-item-center`} style={{fontSize : '24px'}} ></i>
        </button>
    )
}

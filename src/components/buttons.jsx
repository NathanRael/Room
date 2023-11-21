
export function Button ({name, icon, color, size}){
    return(
        <button className={`btn  d-inline-flex text-light align-items-center btn-lg _button  px-32 py-16 _shadow ${color}`}>
            <i className={`${icon} me-2`}  style={{fontSize : '24px'}}></i>
            {name}
        </button>
    )
}
export function ButtonMd ({name, icon, color, size}){
    return(
        <button className={`btn  px-16  d-flex text-light align-items-center  _body _shadow ${color}`} >
            <i className={`${icon} me-2`} ></i>
            {name}
        </button>
    )
}

export function NavButton ({icon, active,handleClick}){

    return (
        <i 
        className={`btn text-light rounded-5 p-8 d-flex justify-content-center align-items-center ${active ? 'btn-primary' : ''} ${icon}`} 
        style={{width : '52px', height : '52px', fontSize : '24px'}}
        onClick={handleClick}
        >
        </i>
    )
}
export function ShortButton ({icon, color, size = '24px'}){

    return (
        <i 
        className={`btn text-light rounded-5 p-8 d-flex justify-content-center align-items-center ${color} ${icon}`} 
        style={{width : '40px', height : '40px', fontSize : `${size}`}}
        >
        </i>
    )
}

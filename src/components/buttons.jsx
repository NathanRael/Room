
export function Button ({name, icon, color}){
    return(
        <button className={`btn d-inline-flex align-item-center btn-lg _body px-32 py-16 ${color}`}>
            <i className={`${icon} me-2`} ></i>
            {name}
        </button>
    )
}

export function NavButton ({icon, active = false}){
    return (
        <button className={`btn text-light rounded-5 p-16 ${active ? 'btn-primary' : ''}`} style={{width : '64px', height : '64px'}}>
            <i className={`${icon} d-flex justify-content-center aling-item-center`} style={{fontSize : '24px'}} ></i>
        </button>
    )
}

export function Status({status}){
    let color = null;
    if (status === 'finished'){
        color = 'bg-success'
    }else if (status === 'unreleased'){

        color = 'bg-tertiary'
    }else if (status === 'upcoming'){
        color = 'bg-danger'
    }else{
        color = 'bg-warning'
    }
    return (
        <div className={`rounded-3 py-1 px-2 ${color}  ${status} d-flex align-items-center _link `}>{status}</div>
    )
}
export default function Rate({rate, heartColor, isFill}){
    return (
        <>
            <div className="d-flex gap-2 rate _link text-light">
                <i className={`bi bi-heart${ isFill ? '-fill' : ''} ${heartColor}`} ></i>
                {rate}
            </div>
        </>
    );
}
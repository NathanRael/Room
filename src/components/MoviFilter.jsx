export default function MovieFilter(){

    return (
        <div className="container-fluid bg-secondary d-flex justify-content-between ps-0 ps-md-156  align-item-center  pt-24  _movieFilter  w-100">
            <div className="d-inline-flex justify-content-center ps-8 align-item-center column-gap-16 text-light _subtitle" >
                <i className="bi bi-film"></i>
                <p>Movies</p>
            </div>
            <div className=" ps-8">
                <select name="" id="" type="button" className="form-select bg-tertiary text-light  rounded-5 px-32 _shadow _body" style={{width : 'max-content'}}>
                    <option value="T">Trends</option>
                    <option value="P">Adventures</option>
                    <option value="R">Recent</option>
                </select>
            </div>

        </div>
    )
}
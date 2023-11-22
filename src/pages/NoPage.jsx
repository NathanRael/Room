import { Link } from "react-router-dom";

export default function  NoPage () {
    return (
      <div className="container text-altlight mt-256">
        <h1 className="text-center  display-1">404</h1>
        <p className="lead text-center">Oups ! Page Not Found</p>
        <div className="text-center">
          <Link to='/' className="text-center">Go back home</Link>
        </div>

      </div>
    )
  };

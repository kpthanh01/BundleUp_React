import { Link } from "react-router-dom";

const NavBar = (props) => {
  const { handleSignout } = props;
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <span className="navbar-brand">Bundle Up</span>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  to={"/"}
                  className="nav-link active"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to={"/events"}
                  className="nav-link"
                >
                  Events
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to={"/deals"}
                  className="nav-link"
                >
                  Deals
                </Link>
              </li>
            </ul>
            <span>
              <a className="nav-link">FAQ</a>
            </span>
            {localStorage.token ? (
              <>
                <button className="btn btn-outline-success">
                  <Link
                    to={"/account"}
                    className="nav-link"
                  >
                    Account
                  </Link>
                </button>
                <button
                  className="btn btn-outline-success"
                  onClick={handleSignout}
                >
                  <Link
                    to={"/"}
                    className="nav-link"
                  >
                    Sign Out
                  </Link>
                </button>
              </>
            ) : (
              <button className="btn btn-outline-success">
                <Link
                  to={"/signin"}
                  className="nav-link"
                >
                  Sign In
                </Link>
              </button>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;

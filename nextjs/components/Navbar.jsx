import { useState } from "react";

export default function Layout({ props }) {
  const [display, setDisplay] = useState(false);

  const toggle = () => {
    setDisplay(!display);
  };

  return (
    <>
      <div className="bloc nav l-bloc" id="bloc-0">
        <div className="container bloc-sm">
          <div className="row">
            <div className="col">
              <nav className="navbar row navbar-light">
                <a className="navbar-brand" href="/">
                  <img
                    src="https://www.satellit.be/img/satellit-logo-rvb_1_orig.png"
                    alt="logo-satellit"
                  />
                </a>
                <button
                  id="nav-toggle"
                  type="button"
                  className="ml-auto ui-navbar-toggler navbar-toggler border-0 p-0 menu-icon-rounded-bars toggle-btn"
                  onClick={toggle}
                >
                  <span className="navbar-toggler-icon"></span>
                </button>
                {/* if */}
                {display && <div className="navbar-collapse fullscreen-nav">
                  <button
                    onClick={toggle}
                    type="button"
                    className="close"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>
                  <ul className="site-navigation nav navbar-nav">
                    <li className="nav-item">
                      <a href="/" className="nav-link a-btn">
                        Home
                      </a>
                    </li>
                    <li className="nav-item nav-link">
                      <a href="/about-us" className="nav-link a-btn">
                        About us
                      </a>
                    </li>
                    <li className="nav-item nav-link">
                      <a href="/jobs" className="nav-link a-btn">
                        Jobs
                      </a>
                    </li>
                    <li className="nav-item nav-link">
                      <a href="/community" className="nav-link a-btn">
                        Community
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="/training-center" className="nav-link a-btn">
                        Training center
                      </a>
                    </li>
                    <li className="nav-item nav-link">
                      <a href="/contact" className="nav-link a-btn">
                        Contact us
                      </a>
                    </li>
                    <li className="nav-item nav-link">
                      <a href="/portal" className="nav-link a-btn">
                        Login
                      </a>
                    </li>
                  </ul>
                </div>}
              </nav>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

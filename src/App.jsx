import "./App.css";
import { Link, NavLink, Outlet } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { removeUser } from "./auth/authSlice";
import { fetchFlashCards } from "./routes/FlashCards/FlashCardsSlice";

function App() {
  const user = useSelector((state) => state.auth.user);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchFlashCards());
  }, [dispatch]);

  return (
    <div className="App">
      <header>
        <nav className="navbar navbar-expand-lg navbar-secondary bg-secondary">
          <div className="container-fluid">
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
              <ul className="navbar-nav me-auto">
                <Link className="navbar-brand p-2" to="/">
                  <i className="bi bi-globe"></i> eFlashCards
                </Link>
                {/* <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Accueil</Link>
        </li> */}
                <li className="nav-item">
                  <Link className="nav-link " to={`/flashcards/add`}>
                    {" "}
                    Ajouter une FlashCard
                    <i className="bi bi-plus ms-2 btn btn-outline-success rounded-circle"></i>
                  </Link>
                </li>

                <form className="d-flex">
                  <input
                    className="form-control me-2"
                    type="search"
                    placeholder="Entrer un n° de flashCard"
                    aria-label="Search"
                  ></input>
                  <button className="btn btn-outline-success" type="submit">
                    GO
                  </button>
                </form>
              </ul>
              <div className="d-flex justify-content-center">
                {user ? (
                  <NavLink
                    onClick={() => dispatch(removeUser())}
                    className="navbar-nav nav-link ms-auto btn btn-secondary px-2"
                    to="/"
                  >
                    Deconnexion
                  </NavLink>
                ) : (
                  <>
                    <NavLink
                      className="navbar-nav nav-link ms-auto btn btn-outline-info px-2"
                      to={`/Sign+Up?mode=Inscription`}
                    >
                      Inscription
                    </NavLink>

                    <NavLink
                      className="navbar-nav nav-link ms-2 btn btn-primary px-2"
                      to={`/Sign+In?mode=Connexion`}
                    >
                      Connexion
                    </NavLink>
                  </>
                )}
              </div>
            </div>
          </div>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default App;

import './App.css';
import { Link, Outlet } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header>
      <nav className="navbar navbar-expand-lg navbar-secondary bg-secondary">
  <div className="container-fluid">
  
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto">
      <Link className="navbar-brand" to="/">
             <i className="bi bi-globe"></i> eFlashCards
            </Link>
        {/* <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Accueil</Link>
        </li> */}
        <li className="nav-item">
          <Link className="nav-link " > Ajouter une FlashCard
          <i className="bi bi-plus ms-2 btn btn-outline-success rounded-circle" to={`/flashcards/add`}></i>
          </Link>
        </li>
      </ul>

      <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Entrer un n° de flashCard" aria-label="Search"></input>
        <button className="btn btn-outline-success" type="submit">GO</button>
      </form>
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

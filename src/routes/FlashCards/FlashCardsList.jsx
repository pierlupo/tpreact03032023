import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import FlashCardDisplay from "./components/FlashCardDisplay";

const FlashCardssList = () => {

  const flashcards = useSelector((state) => state.flashcards.flashcards);

  return (
    <>  
        
        <div className="col-4 offset-4 bg-dark rounded text-light mt-2 p-3">
        
        <h3>FlashCards List</h3>
        <hr />
        {/* <div className="d-flex align-items-center p-3"> */}
        <Link
          to={`/flashcards/add`}
          className=" ms-auto btn btn-outline-success rounded-circle p-1 px-2"
        >
          <i className="bi bi-plus"></i>
        </Link>
        {flashcards.length === 0 ? (
          <p>Il n'y a pas de flashcards dans la base de données !</p>
        ) : (
          [...flashcards]
            .sort((a, b) => a.id.localeCompare(b.id))
            .map((c) => <FlashCardDisplay key={f.id} flashcardId={f.id} />)
        )}
      {/* </div> */}
      </div>
    </>
  );
};

export default FlashCardssList;
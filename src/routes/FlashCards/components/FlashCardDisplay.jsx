import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
// import { useDispatch } from "react-redux";

const FlashCardDisplay = ({ flashcardId }) => {
  const flashcard = useSelector((state) => state.flashcards.flashcards).find(
    (f) => f.id === flashcardId
  );


  //const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(fetchFlashcards());
  // }, [dispatch]);

  return (
    <div className="col-12 my-3 border border-info rounded p-3">
      {/* <div className="col-4 d-flex justify-content-center">
          <img src={contact.avatarURL} alt="Contact Avatar" style={{width: "250px", height: "250px", objectFit: "contain", borderRadius: "50%"}} />
        </div> */}
      <div className="col-12">
        <div className="d-flex flex-column align-items-center justify-content-center">
          <h3  >
            Question: {flashcard.question} 
          </h3>
          <hr />
          
         <h3>Solution:</h3>  
         {/* <button className="btn btn-info" onClick={ () => {dispatch(afficherSoluce())} }>Afficher Solution</button> */}
        
        <select name="" id="">
        <option value="">--solution--</option>
        <option value="soluce">{flashcard.explication}</option>
        </select>
          {/* <div>
            {flashcard.explication}
          </div> */}
            <>
            <div className="d-flex justify-content-center p-2">
              <Link
                to={`/flashcards/edit/${flashcardId}?mode=edit`}
                className="btn btn-warning"
              >
                <i className="bi bi-pencil-square"></i>
              </Link>
              <Link
                to={`/contacts/delete/${flashcardId}?mode=delete`}
                className="btn btn-danger ms-2"
              >
                <i className="bi bi-trash"></i>
              </Link>
              </div>
            </>
          
        </div>
        <hr />
      </div>
    </div>
  );
};

export default FlashCardDisplay;
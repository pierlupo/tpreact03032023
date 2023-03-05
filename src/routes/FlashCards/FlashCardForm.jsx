import { useRef } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate,useParams, useSearchParams } from "react-router-dom"
import { addFlashCard, deleteFlashCard, editFlashCard } from "./FlashCardsSlice";

const FlashCardForm = () => {

    const{flashcardId} = useParams()
    const flashcard = useSelector(state => state.flashcards.flashcards).find(f => f.id === flashcardId)
    const [searchParams] = useSearchParams()
    const mode = searchParams.get('mode') ?? 'add'
    // const mode = "add"


    const dispatch = useDispatch()
    const navigate = useNavigate()
  

  const questionRef = useRef()
  const explicationRef = useRef()


  const submitFormHandler = async (event) => {
    event.preventDefault()

    if (mode === 'delete') {
      await dispatch(deleteFlashCard(flashcard.id))
    } else {
      const question = questionRef.current.value
      const explication = explicationRef.current.value



      const flashcardValues = {
        question, 
        explication,

      }

      console.log(flashcardValues);

      questionRef.current.value = ""
      explicationRef.current.value = ""


      if (mode === 'add') {
        await dispatch(addFlashCard(flashcardValues))
      } else if (mode === 'edit') {
        await dispatch(editFlashCard({...flashcardValues, id: flashcard.id}))
      }
    }
    
    navigate('/flashcards')
  }
  
  return (
    <div className="col-8 offset-2 bg-dark rounded text-light p-3">
    <div className="col-12">
      <form onSubmit={submitFormHandler}>
      <div className="mb-3">
        <label htmlFor="question" className="form-label">Question: </label>
        <input type="text" ref={questionRef} required={mode !== 'delete'} disabled={mode === 'delete'} defaultValue={flashcard?.question} className="form-control" />
      </div>
      <div className="mb-3">
        <label htmlFor="instructions" className="form-label">Explication: </label>
        <textarea ref={explicationRef} required={mode !== 'delete'} disabled={mode === 'delete'} defaultValue={flashcard?.explication} className="form-control" cols={30} rows={10} style={{resize: "none"}}></textarea>
      </div>
        <button className={`btn btn-${mode === 'delete'? 'danger' : mode === 'edit' ? 'warning' : 'success'}`}>
          <i className={`bi bi-${mode === 'delete' ? 'trash' : mode === 'edit' ? 'pencil-square' : 'plus-circle'}`}></i> {mode === 'delete' ? 'Confirmer' : mode === 'edit' ? 'Editer' : 'Ajouter'}
          </button>
    </form>
    </div>
    </div>
  )
}

export default FlashCardForm
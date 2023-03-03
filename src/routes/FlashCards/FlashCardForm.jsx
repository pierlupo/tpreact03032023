import { useRef } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate,useParams, useSearchParams } from "react-router-dom"
import { addFlashCardAction, deleteFlashCardAction, editFlashCardAction } from "./FlashCardsSlice";

const FlashCardForm = (props) => {

    const{flashcardId} = useParams()
    const flashcard = useSelector(state => state.flashcards.flashcards).find(f => f.id === flashcardId)
    const [searchParams] = useSearchParams
    const mode = searchParams.get('mode') ?? 'add'

    const dispatch = useDispatch()
    const navigate = useNavigate()
  

  const questionRef = useRef()
  const explicationRef = useRef()


  const submitFormHandler = async (event) => {
    event.preventDefault()

    if (mode === 'delete') {
      await dispatch(deleteFlashCardAction(flashcard.id))
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
        await dispatch(addFlashCardAction(flashcardValues))
      } else if (mode === 'edit') {
        await dispatch(editFlashCardAction({...flashcardValues, id: flashcard.id}))
      }
    }

    navigate('/')
  }

  return (
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
          <i className={`bi bi-${mode === 'delete' ? 'trash' : mode === 'edit' ? 'pencil-square' : 'plus-circle'}`}></i> {mode === 'delete' ? 'Confirmer' : mode === 'edit' ? 'Editer' : 'Envoyer'}
          </button>
    </form>
  )
}

export default FlashCardForm
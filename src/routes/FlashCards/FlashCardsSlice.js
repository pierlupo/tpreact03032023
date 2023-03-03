import { createSlice } from "@reduxjs/toolkit";

const flashCardsSlice = createSlice({
    name: "flashcards",
    initialState : {
        flashcards: [],
        isLoading: false,
        error: null
    },

    
  reducers: {
    addFlashCardAction(state, action) {
      state.flashcards.push(action.payload)
    },
    setFlashCardAction(state, action) {
      state.flashcards = action.payload
    },
    editFlashCardAction(state, action) {
      const {id} = action.payload
      const flashcardFound = state.flashcards.find(f => f.id === id)
      if (flashcardFound) {
        state.flashcards = [...state.flashcards.filter(f => f.id !== id), action.payload]
      }
    },
    deleteFlashCardAction(state, action) {
      const id = action.payload
      const flashcardFound = state.flashcards.find(f => f.id === id)
      if (flashcardFound) {
        state.flashcards = state.flashcards.filter(f => f.id !== id)
      }
    },
  }
})

export const { addFlashCardAction, setFlashCardAction, editFlashCardAction, deleteFlashCardAction } = flashCardsSlice.actions

export default flashCardsSlice.reducer

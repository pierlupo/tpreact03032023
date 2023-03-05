import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { BASE_DB_URL } from "../../fireBaseConfig";

export const fetchFlashCards = createAsyncThunk(
  "flashcards/fetchFlashCards",
  async () => {
    const response = await fetch(`${BASE_DB_URL}flashcards.json`)

    if (!response.ok) {
      throw new Error("Erreur lors de la récupération des flashcards !")
    }

    const data = await response.json()

    const tmpArray = []

    for (const key in data) {
      tmpArray.push({id: key, ...data[key]})
    }

    return tmpArray
  }
)

export const addFlashCard = createAsyncThunk(
  "flashcards/addFlashCard",
  async (flashcardValues) => {
    
    
      const response = await fetch(`${BASE_DB_URL}flashcards.json`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(flashcardValues)
        
      })

      if (!response.ok) {
        throw new Error("Erreur lors de l'ajout d'une flashCard !")
      }

      const data = await response.json()

      return {id: data.name, ...flashcardValues}
  }
)

export const editFlashCard = createAsyncThunk(
  "flashcards/editFlashCard",
  async ({id, ...flashcardValues}) => {
    
    
      const response = await fetch(`${BASE_DB_URL}flashcards/${id}.json`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(flashcardValues)
      })

      if (!response.ok) {
        throw new Error("Erreur lors de l'édition d'une flashCard !")
      }

      const data = await response.json()

      return {id, ...data}
    
  }
)

export const deleteFlashCard = createAsyncThunk(
  "flashcards/deleteFlashCard",
  async (id) => {
    
    
      const response = await fetch(`${BASE_DB_URL}flashcards/${id}.json`, {
        method: "DELETE"
      })

      if (!response.ok) {
        throw new Error("Erreur lors de la suppression d'une flashcard !")
      }

      return id
    
  }
)

const flashCardsSlice = createSlice({
  name: "flashcards",
  initialState: {
    flashcards: [],
    isLoading: false,
    error: null
  }, 
  extraReducers : (builder) => {
    builder.addCase(fetchFlashCards.pending, (state) => {
      state.flashcards = []
      state.isLoading = true
      state.error = null
    })

    builder.addCase(fetchFlashCards.rejected, (state, action) => {
      state.isLoading = false
      state.error = action.payload
    })

    builder.addCase(fetchFlashCards.fulfilled, (state, action) => {
      state.isLoading = false
      state.flashcards = action.payload
    })

    builder.addCase(addFlashCard.fulfilled, (state, action) => {
      state.flashcards.push(action.payload)
    })

    builder.addCase(deleteFlashCard.fulfilled, (state, action) => {
      const flashcardFound = state.flashcards.find(f => f.id === action.payload)
      if (flashcardFound) {
        state.flashcards = state.flashcards.filter(f => f !== flashcardFound)
      }
    })

    builder.addCase(editFlashCard.fulfilled, (state, action) => {
      const { id } = action.payload
      const flashcardFound = state.flashcards.find(f => f.id === id)
      if (flashcardFound) {
        state.flashcards = [...state.flashcards.filter(f => f !== flashcardFound), action.payload]
      }
    })
  }
})

export default flashCardsSlice.reducer
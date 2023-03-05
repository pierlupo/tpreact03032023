import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./auth/authSlice";
import flashCardsSlice from "./routes/FlashCards/FlashCardsSlice";

const store = configureStore({
  reducer: {

    flashcards: flashCardsSlice,
    auth: authSlice
    
  }

})

export default store
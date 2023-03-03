import { configureStore } from "@reduxjs/toolkit";
import flashCardsSlice from "./routes/FlashCards/FlashCardsSlice";

const store = configureStore({
  reducer: {

    flashcards: flashCardsSlice,
    
    
  }

})

export default store
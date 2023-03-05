import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import ErrorPage from "./routes/ErrorPage";
import HomePage from "./routes/HomePage";
import FlashCardForm from "./routes/FlashCards/FlashCardForm";
import FlashCardsList from "./routes/FlashCards/FlashCardsList";
import SignForm from "./routes/SignForm";



// const authCheck = (roleChecked) => {
//   const role = localStorage.getItem('role')

//   if (role === roleChecked) {
//     return true
//   } else {
//     return redirect(`/auth?mode=Sign+In`)
//   }
// }

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/signform",
        element: <SignForm />
      },
      {
        path: "/flashcards",
        element: <FlashCardsList />,
      },
      {
        path: "/flashcards/add",
        element: <FlashCardForm />,
      },
      {
        path: "/flashcards/edit/:flashcardId",
        element: <FlashCardForm />,
      },
      {
        path: "/flashcards/delete/:flashcardId",
        element: <FlashCardForm />,
      },
      {
        path: "/Sign+Up",
        element: <SignForm />,
        // element: <ProtectedRoute roleChecked={"user"}><SignForm /></ProtectedRoute>
      },
      {
        path: "/Sign+In",
        element: <SignForm />,
      },

    ],
  },
]);

export default router;
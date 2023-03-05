import FlashCardsList from "./FlashCards/FlashCardsList";

const HomePage = () => {
  return (
    <>
      <div className="col-6 offset-3 rounded bg-dark text-light p-3 mt-2">
        <h3>FlashCards</h3>
        <hr />
        <p>
          Flashcards (Cartes correspondantes - Cartes de révision) est un
          ensemble de cartes comportant une image sur un côté de la carte et un
          texte correspondant sur l'autre côté. L'apprenant est invité à taper
          un mot ou une expression correspondant à l'image, avant de retourner
          la carte et révéler la bonne réponse. Les Cartes correspondantes
          peuvent être utilisées en tant qu'exercice pour aider les apprenants à
          mémoriser des mots, des expressions ou des phrases.
        </p>
      <hr />
      </div>
      <FlashCardsList></FlashCardsList>


    </>
  );
};

export default HomePage;

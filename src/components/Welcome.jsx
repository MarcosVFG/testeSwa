import { useContext } from "react";
import { QuizContext } from "../context/quiz";

import "./Welcome.css";

const Welcome = () => {
  const [quizState, dispatch] = useContext(QuizContext);

  return (
    <div id="welcome">
      <button onClick={() => dispatch({ type: "CHANGE_STAGE" })}>
        Iniciar
      </button>
    </div>
  );
};

export default Welcome;

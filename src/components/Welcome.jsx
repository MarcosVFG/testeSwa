import { useContext } from "react";
import { QuizContext } from "../context/quiz";

import "./Welcome.css";

import Quiz from "../img/quiz.svg";
import Network from "../img/network.svg"

const Welcome = () => {
  const [quizState, dispatch] = useContext(QuizContext);

  return (
    <div id="welcome">
      <p>Clique no botão abaixo para começar:</p>
      <button onClick={() => dispatch({ type: "CHANGE_STAGE" })}>
        Iniciar
      </button>
      <img src={Network} alt="Início do Simulado" />
    </div>
  );
};

export default Welcome;

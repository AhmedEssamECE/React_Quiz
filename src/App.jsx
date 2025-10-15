import { useEffect, useReducer } from "react";
import HomePage from "./components/HomePage";
import Progress from "./components/Progress";
import Loader from "./components/Loader";
import Question from "./components/Question";
import FinishScreen from "./components/FinishScreen";
const SECS_PER_QUESTION = 60;

const initialState = {
  questions: [],
  status: "loading",
  index: 0,
  points: 0,
  answer: null,
  hasAnswered: false,
  secondsRemaining: null,
};
function reducer(state, action) {
  switch (action.type) {
    case "/received":
      return { ...state, status: "ready", questions: action.payload };
    case "/finished":
      return { ...state, status: "finished" };
    case "/active":
      return {
        ...state,
        status: "active",
        secondsRemaining: state.questions.length * SECS_PER_QUESTION,
      };
    case "/answered":
      const question = state.questions.at(state.index);

      return {
        ...state,
        answer: action.payload,
        points:
          action.payload === question.correctOption
            ? state.points + question.points
            : state.points,
      };
    case "/next":
      return { ...state, index: state.index + 1, answer: null };
    case "/restart":
      return { ...initialState, questions: state.questions, status: "ready" };
    case "tick":
      return {
        ...state,
        secondsRemaining: state.secondsRemaining - 1,
        status: state.secondsRemaining === 0 ? "finished" : state.status,
      };

    default:
      return initialState;
  }
}
function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { questions, status, index, points, answer, secondsRemaining } = state;
  useEffect(() => {
    async function getQuestions() {
      try {
        const res = await fetch("http://localhost:8000/questions");
        const data = await res.json();
        dispatch({ type: "/received", payload: data });
      } catch (error) {
        console.error("Error fetching questions:", error);
      }
    }

    getQuestions();
  }, []);

  const question = questions[index];
  const numQuestion = questions.length;
  const totalPoints = questions.reduce((sum, q) => sum + q.points, 0);
  console.log(totalPoints);
  console.log(numQuestion);
  console.log(question);
  return (
    <div className="main mx-auto pt-21">
      {status === "loading" && <Loader />}

      {status === "ready" && <HomePage dispatch={dispatch} />}

      {status === "active" && (
        <>
          {index < numQuestion && (
            <>
              <Progress
                index={index}
                points={points}
                totalPoints={totalPoints}
              />
              <Question
                dispatch={dispatch}
                question={question}
                index={index}
                answer={answer}
                numQuestion={numQuestion}
                secondsRemaining={secondsRemaining}
              />
            </>
          )}
        </>
      )}

      {status === "finished" && (
        <FinishScreen
          points={points}
          totalPoints={totalPoints}
          dispatch={dispatch}
        />
      )}
    </div>
  );
}

export default App;

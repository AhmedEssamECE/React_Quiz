import NextButton from "./NextButton";

import Timer from "./Timer";
import Options from "./Options";

export default function Question({
  question,
  dispatch,
  index,
  numQuestion,
  answer,
  secondsRemaining,
}) {
  return (
    <div className="mt-13 w-full">
      <h1 className="text-2xl text-white font-bold">{question.question}</h1>
      <Options
        question={question}
        options={question.options}
        answer={answer}
        dispatch={dispatch}
      />
      <div className="flex justify-between items-center mt-6">
        <Timer dispatch={dispatch} secondsRemaining={secondsRemaining} />
        <NextButton
          dispatch={dispatch}
          index={index}
          numQuestion={numQuestion}
          answer={answer}
        />
      </div>
    </div>
  );
}

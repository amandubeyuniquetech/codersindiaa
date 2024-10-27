import { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import QuizHeader from "../QuizHeader";
import "../Quiz.css";
import { InputContext } from "../../Context/InputContext";

const Loading = () => (
  <div className="h-[220px] w-[220px] mx-auto mt-8 flex flex-col justify-center items-center border-2 rounded-tr-[50%] rounded-bl-[50%]">
    <p className="text-xl text-gray-500">Loading...</p>
  </div>
);

// Utility function to format time
const formatTime = (seconds) => {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  const formattedTime = `${String(minutes).padStart(2, "0")}:${String(
    remainingSeconds
  ).padStart(2, "0")}`;
  return formattedTime;
};

const PythonMockTestL1 = ({ TestNo }) => {
  const navigate = useNavigate();
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState({});
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [loading, setLoading] = useState(false);
  const [timer, setTimer] = useState(1);
  // const [timer, setTimer] = useState(0);
  const [timerIntervalId, setTimerIntervalId] = useState(null);
  const [status, setStatus] = useState("");
  const [testStatus, setTestStatus] = useState(true);
  const [path, setPath] = useState();

  useEffect(() => {
    fetch(`/PythonQuiz/easy-${TestNo}.json`)
      // fetch(`https://res.cloudinary.com/dajv2z7pl/raw/upload/v1729533001/PythonQuiz/easy-${TestNo}.json`)
      .then((response) => response.json())
      .then((data) => setQuestions(data))
      .catch((error) => console.error("Error fetching quiz data:", error));

    // Set up the timer interval
    const intervalId = setInterval(() => {
      setTimer((prevTimer) => {
        // Check if the timer is greater than 0 before decrementing
        return prevTimer > 0 ? prevTimer + 1 : prevTimer;
      });
    }, 1000);

    setTimerIntervalId(intervalId);

    return () => {
      clearInterval(intervalId);
      if (timer <= 0) {
        setShowResult(true);
      }
    };
  }, [timer]);

  const handleAnswerSelect = (questionId, selectedOption) => {
    // Handle answer selection logic here
    const updatedAnswers = { ...answers, [questionId]: selectedOption };
    setAnswers(updatedAnswers);
  };

  const handleSubmit = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setLoading(true);
    setTestStatus(false);

    clearInterval(timerIntervalId);

    // Calculate score and show result
    setTimeout(() => {
      const quizScore = calculateScore(answers);
      setScore(quizScore);
      const percentage = (quizScore / questions.length) * 100;
      // Determine the status based on the percentage
      const newStatus = percentage >= 50 ? "Passed" : "Failed";
      setStatus(newStatus);

      setShowResult(true);
      setLoading(false);
    }, 5000);
  };

  const calculateScore = (userAnswers) => {
    const correctAnswers = questions.map((question) => question.answer);
    let score = 0;
    for (const questionId in userAnswers) {
      if (userAnswers[questionId] === correctAnswers[questionId - 1]) {
        score++;
      }
    }
    return score;
  };

  // Reset states and reload the page
  const restartQuiz = () => {
    setAnswers({});
    setScore(0);
    setShowResult(false);
    setLoading(false);
    setTimer(1);
    // navigate("/quiz");
    const currentPath = window.location.pathname;
    setPath(currentPath);
    setTestStatus(true);
  };
  const testShowAfterSubmit=()=>{
    setTestStatus(true);
    setShowResult(false);
  }

  const { inputValue } = useContext(InputContext);
  return (
    <section className="mocktest-wrapper">
      <QuizHeader timer={timer} />

      <div className="md:w-9/12 w-[90%] flex md:flex-row flex-col mx-auto">
        {/* question section */}
        {testStatus && (
          <div className="md:w-[70%]  w-full question-sec">
            <div>
              {questions.map((question, index) => (
                <div
                  id="question-main-wrapper"
                  key={question.id}
                  className={`m-3 py-3 px-4 shadow-sm border border-gray-100   ${
                    showResult && answers[question.id] !== question.answer
                      ? "bg-red-200"
                      : ""
                  }`}
                >
                  <p className=" flex items-center rounded text-xs p-2 cursor-pointer">
                    <span className="question-id h-8 w-8 bg-[#004AAD] rounded-full flex justify-center items-center text-white mr-3">
                      {index + 1}
                    </span>
                    <pre><p className="question">{question.question}</p></pre>
                  </p>
                 
                    
                      <div className="grid grid-cols-2 gap-4 mt-5">
                      {question.optionsText.map((option, index) => (
                        <div
                          className={`border border-gray-200  text-xs p-2 cursor-pointer question-option ${
                            answers[question.id] === option
                              ? "bg-[#004AAD] text-white"
                              : "bg-"
                          }`}
                          key={option}
                          onClick={() => handleAnswerSelect(question.id, option)}
                        >
                          <p className="text-[10px] mb-1 ">Option {index + 1}</p>
                          <code><p>{option}</p></code>
                        </div>
                      ))}
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4 mt-5">
                      {question.optionsCode.map((option, index) => (
                        <div
                          className={`border border-gray-200  text-xs p-2 cursor-pointer question-option ${
                            answers[question.id] === option
                              ? "bg-[#004AAD] text-white"
                              : "bg-"
                          }`}
                          key={option}
                          onClick={() => handleAnswerSelect(question.id, option)}
                        >
                          <p className="text-[10px] mb-1 ">Option {index + 1}</p>
                          <pre><p>{option}</p></pre>
                        </div>
                      ))}
                    </div>
                    

                  
                  
                  
                   
                   

           
                
                  



                </div>
              ))}
              <button
                onClick={handleSubmit}
                className="bg-[#004AAD] px-6 py-2 text-white rounded submit-btn"
              >
                Submit Quiz
              </button>
            </div>
          </div>
        )}

        {/* answer  section*/}
        <div className="md:w-[30%] w-full p-4">
          {showResult && (
            <div>
              <h3 className="text-2xl font-medium">Your Score:</h3>
              <div className="score-container">
                <h3
                  className={`text-xl ${
                    status === "Passed" ? "text-green" : "text-red"
                  }`}
                >
                  {status}
                </h3>
                <h1 className="score-heading">
                  {score}
                  <span className="score-out-of">/20</span>
                </h1>
                <p className="total-time">
                  Total Time:{" "}
                  <span className="time-text">
                    {formatTime(timer)}
                    <span className="time-unit">sec</span>
                  </span>
                </p>
              </div>
              <div className="resutl-page-buttons">
              <button onClick={restartQuiz} className="restart-btn">
                Restart
              </button>
              <button onClick={testShowAfterSubmit} className="review-btn">
                Review Answers
                </button>
              </div>
            </div>

            // <div>
            //   <h3 className="text-2xl font-medium">Your Score: </h3>
            //   <div className="h-[220px] w-[220px] mx-auto mt-8 flex flex-col justify-center items-center border-2 rounded-tr-[50%] rounded-bl-[50%]">
            //   <h3 className={`text-xl ${status === "Passed" ? "text-green-800" : "text-red-500"}`}>
            //   {status}
            // </h3>
            //     <h1 className="text-3xl font-bold my-2">
            //       {/* {score * 10} */}
            //       {score}
            //       <span className="text-slate-800">/20</span>
            //     </h1>
            //     <p className="text-sm flex justify-center items-center gap-2">
            //       Total Time:{" "}
            //       <span className="text-xl text-orange-500">
            //         {formatTime(4*60 - timer)}
            //         <span className="text-xs">sec</span>
            //       </span>
            //     </p>
            //   </div>
            //   <button
            //     onClick={restartQuiz}
            //     className="bg-[#004AAD] text-white w-full py-2 rounded mt-16"
            //   >
            //     Restart
            //   </button>
            // </div>
          )}

          {loading && <Loading />}
        </div>
      </div>
    </section>
  );
};

const PythonL1MockTest1 = () => {
  return (
    <>
      <PythonMockTestL1 TestNo={1} />
    </>
  );
};

const PythonL1MockTest2 = () => {
  return (
    <>
      <PythonMockTestL1 TestNo={2} />
    </>
  );
};

const PythonL1MockTest3 = () => {
  return (
    <>
      <PythonMockTestL1 TestNo={3} />
    </>
  );
};

const PythonL1MockTest4 = () => {
  return (
    <>
      <PythonMockTestL1 TestNo={4} />
    </>
  );
};

const PythonL1MockTest5 = () => {
  return (
    <>
      <PythonMockTestL1 TestNo={5} />
    </>
  );
};

const PythonL1MockTest6 = () => {
  return (
    <>
      <PythonMockTestL1 TestNo={6} />
    </>
  );
};

const PythonL1MockTest7 = () => {
  return (
    <>
      <PythonMockTestL1 TestNo={7} />
    </>
  );
};

const PythonL1MockTest8 = () => {
  return (
    <>
      <PythonMockTestL1 TestNo={8} />
    </>
  );
};

const PythonL1MockTest9 = () => {
  return (
    <>
      <PythonMockTestL1 TestNo={9} />
    </>
  );
};

const PythonL1MockTest10 = () => {
  return (
    <>
      <PythonMockTestL1 TestNo={10} />
    </>
  );
};

const PythonL1MockTest11 = () => {
  return (
    <>
      <PythonMockTestL1 TestNo={11} />
    </>
  );
};

export {
  PythonMockTestL1,
  PythonL1MockTest1,
  PythonL1MockTest2,
  PythonL1MockTest3,
  PythonL1MockTest4,
  PythonL1MockTest5,
  PythonL1MockTest6,
  PythonL1MockTest7,
  PythonL1MockTest8,
  PythonL1MockTest9,
  PythonL1MockTest10,
  PythonL1MockTest11,
};

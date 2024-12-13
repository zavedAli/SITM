import React, { useState, useEffect, useContext } from "react";
import quizData from "../../data/quizData.json"; // Adjust path based on your file
import { motion } from "framer-motion";
import { DarkModeContext } from "../../DarkModeContext";

const HeroWithTechQuiz = () => {
  const [question, setQuestion] = useState("");
  const [options, setOptions] = useState([]);
  const [answer, setAnswer] = useState("");
  const [score, setScore] = useState(0);
  const [quizLoaded, setQuizLoaded] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [isAnswerCorrect, setIsAnswerCorrect] = useState(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const { darkMode } = useContext(DarkModeContext);

  useEffect(() => {
    fetchQuizQuestion();
  }, [currentQuestionIndex]);

  const fetchQuizQuestion = () => {
    if (currentQuestionIndex < quizData.length) {
      const data = quizData[currentQuestionIndex];
      setQuestion(data.question);
      setOptions(
        [
          data.correct_answer,
          ...data.options.filter((option) => option !== data.correct_answer),
        ].sort(() => Math.random() - 0.5)
      );
      setAnswer(data.correct_answer);
      setQuizLoaded(true);
    } else {
      setQuizLoaded(false);
    }
  };

  const handleAnswerClick = (selected) => {
    if (selectedAnswer === null) {
      setSelectedAnswer(selected);
      if (selected === answer) {
        setIsAnswerCorrect(true);
        setScore(score + 1);
      } else {
        setIsAnswerCorrect(false);
      }
    }
  };

  const handleNextQuestion = () => {
    setCurrentQuestionIndex(currentQuestionIndex + 1); // Move to next question
    setSelectedAnswer(null); // Reset selected answer
    setIsAnswerCorrect(null); // Reset answer feedback
  };

  return (
    <div className="hero-section w-[100%] hidden md:block z-20 transition-all ease-in-out">
      {quizLoaded ? (
        <motion.div
          className={`quiz-container mt-6 ${
            darkMode ? "bg-gray-800 text-gray-200" : "bg-gray-100 text-gray-700"
          } px-6 py-2 rounded-lg shadow-lg flex items-center justify-around`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.p
            className="text-sm mb-1"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            {question}
          </motion.p>
          <motion.div
            className="options flex gap-2 my-3 flex-wrap justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            {options.map((option, index) => (
              <motion.button
                key={index}
                className={`${
                  darkMode ? "bg-gray-700 text-white" : "bg-white text-gray-700"
                } text-[12px] cursor-pointer text-rust-200 px-4 py-2 rounded-md hover:bg-rust-200 ease-in delay-100 hover:text-white transition-colors ${
                  selectedAnswer === option
                    ? isAnswerCorrect
                      ? "bg-green-500"
                      : "bg-red-500"
                    : ""
                }`}
                onClick={() => handleAnswerClick(option)}
                disabled={selectedAnswer !== null} // Disable all options once an answer is selected
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 + index * 0.2, duration: 0.6 }}
              >
                {option}
              </motion.button>
            ))}
          </motion.div>
          {selectedAnswer !== null && (
            <motion.div
              className="feedback gap-2 z-30 flex items-center text-[12px]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.0, duration: 0.6 }}
            >
              <p>
                {isAnswerCorrect
                  ? "Correct!"
                  : `Incorrect. The correct answer was: ${answer}`}
              </p>
              <button
                className="px-4 py-2 bg-rust-200 text-white rounded-md"
                onClick={handleNextQuestion}
              >
                Next Question
              </button>
            </motion.div>
          )}
          <p className="ms-2 flex items-center">🏅Score: {score}</p>
        </motion.div>
      ) : (
        <motion.div
          className="quiz-container text-[12px] mt-6 bg-gray-100 px-6 py-2 rounded-lg shadow-lg flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <p>No more questions. Your final score is {score}</p>
        </motion.div>
      )}
    </div>
  );
};

export default HeroWithTechQuiz;

import React from "react";

export default function Result({result, questions, dict}) {
    return (
        <div className="container p-5">
            <div className="text-gray-400">
                <h3>{dict['quiz'].result}</h3>
                <h3>{dict['quiz'].resultScoreMsg1} {(result.score / 25) * 100}%{' '} {dict['quiz'].resultScoreMsg2}</h3>
                <p>{dict['quiz'].quizCount} : {questions.length}</p>
                <p>{' '} {dict['quiz'].quizScore} : {result.score}</p>
                <p>{' '} {dict['quiz'].quizCorrect} : {result.correctAnswers}</p>
                <p>{' '} {dict['quiz'].quizWrong} : {result.wrongAnswers}</p>

                <button
                    className="my-5 px-6 py-2 text-sm rounded shadow bg-gray-600 hover:bg-gray-400 text-gray-200 w-full cursor-pointer"
                    onClick={() => window.location.reload()}>{dict['quiz'].quizRestart}
                </button>
            </div>
        </div>
    )
}

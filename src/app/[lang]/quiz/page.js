'use client'

import React, {useState} from "react";
import {quiz} from '@/src/data'
import {Answers, Result, Buttons} from '@/src/components/quiz'


export default function Quiz({dict, lang}) {
    const [activeQuestion, setActiveQuestion] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState(false);
    const [checked, setChecked] = useState(false);
    const [selectedAnswerIndex, setSelectedAnswerIndex] = useState(null);
    const [showResult, setShowResult] = useState(false);
    // const [answers, setAnswers] = useState([]);
    // const [correctAnswer, setCorrectAnswer] = useState('')
    const [result, setResult] = useState({
        score: 0,
        correctAnswers: 0,
        wrongAnswers: 0
    });

    const questions = lang === 'en-us' ? quiz.Enquestions : quiz.Faquestions
    const {answers, correctAnswer} = questions[activeQuestion]

    // useEffect(() => {
    //     getData()
    // }, [result]);

    // function getData() {
    //     setAnswers(questions[activeQuestion].answers)
    //     setCorrectAnswer(questions[activeQuestion].correctAnswer)
    // }
    //
    // async function timeDelay() {
    //     const delay = 1 + Math.floor(Math.random() * 5)
    //
    //     await timeout(delay * 1000)
    // }
    //
    // function timeout(delay) {
    //     return new Promise(time => setTimeout(time, delay))
    // }


    // Select and Check
    const onAnswerSelected = (answer, index) => {
        setChecked(true)
        setSelectedAnswerIndex(index)

        if (answer === correctAnswer) {
            setSelectedAnswer(true)
        } else {
            setSelectedAnswer(false)
        }
    }

    // Calculate Score and Increment to next question
    const nextQuestion = () => {
        setSelectedAnswerIndex(null)
        setResult((prev) => selectedAnswer ?
            {...prev, score: prev.score + 5, correctAnswers: prev.correctAnswers + 1}
            :
            {...prev, wrongAnswers: prev.wrongAnswers + 1}
        )

        if (activeQuestion !== questions.length - 1) {
            setActiveQuestion(prev => prev + 1)
            // setCorrectAnswer('')
            // setAnswers([])
        } else {
            setActiveQuestion(0)
            setShowResult(true)
        }

        setChecked(false)
    }

    return (
        <>
            <h1 className="text-center">{dict['quiz'].title}</h1>
            <div className="bg-gray-50 dark:bg-gray-800 shadow-lg dark:shadow-dark rounded mx-auto w-7/12">
                {!showResult ? (
                    <div className="mt-2">
                        <br className="divide-x-2"/>
                        <div className="text-center mb-2">
                            {!showResult ? (
                                <h2 className="text-gray-400">
                                    {dict['quiz'].quizNum1} : {' '}
                                    {activeQuestion + 1}
                                    {dict['quiz'].quizNum2}{' '}
                                    <span>{questions.length}</span>
                                </h2>
                            ) : null}
                        </div>
                        <h3 className="text-gray-400 mx-4 mb-4">
                            {questions[activeQuestion].question}
                        </h3>
                        <Answers answers={answers} onAnswerSelected={onAnswerSelected}
                                 selectedAnswerIndex={selectedAnswerIndex}/>
                        <div className="flex justify-center">

                            <Buttons questions={questions} checked={checked} nextQuestion={nextQuestion}
                                     activeQuestion={activeQuestion} dict={dict}/>
                        </div>
                    </div>
                ) : (<Result result={result} questions={questions} dict={dict}/>)
                }
            </div>
        </>
    )
}

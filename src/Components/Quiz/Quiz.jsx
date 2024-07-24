import React, { useState } from 'react'
import './Quiz.css'
import { data } from '../../data'

export default function Quiz() {
    const [index, setIndex] = useState(0);
    const [question, setQuestion] = useState(data[index]);
    const [isLastPage, setIsLastPage] = useState(false);
    const [score, setScore]= useState(0);

    const [lock, setLock] = useState(false);
    const [selectedOption, setSelectedOption] = useState(null);
    const [selectedAnswer, setSelectedAnswer] = useState(null);

    function nextQuestion(){
        setLock(false);
        
        if(index < data.length-1){
            setIndex(index + 1)
            setQuestion(data[index + 1])
        }else{
            setIsLastPage(true);
        }
        setSelectedOption(null);
        setSelectedAnswer(null);
    }   

    function checkAnswer(e, ans){
        if( lock === false ){
            if(ans === question.ans){
                setScore(score + 1);
                setSelectedAnswer('correct');
            }else{
                setSelectedAnswer('incorrect');
            }
            setSelectedOption(ans);
            setLock(true);
        }
    }

    if(isLastPage === true){
     return(
        <h2>Quiz score = {score}</h2>
                
     )
    }

    return (
        <div className='Quiz'>
            <h2>Kod Quiz</h2>
            <h3>{question.question}</h3>
            <ul>
                <li onClick={(e) => {checkAnswer(e,'1');}} className={selectedOption === '1' ? selectedAnswer : ''}>{question.option1}</li>
                <li onClick={(e) => {checkAnswer(e,'2');}} className={selectedOption === '2' ? selectedAnswer : ''}>{question.option2}</li>
                <li onClick={(e) => {checkAnswer(e,'3');}} className={selectedOption === '3' ? selectedAnswer : ''}>{question.option3}</li>
                <li onClick={(e) => {checkAnswer(e,'4');}} className={selectedOption === '4' ? selectedAnswer : ''}>{question.option4}</li>
            </ul>
            <button onClick={nextQuestion}>NEXT</button>
            <div>Question: {index + 1} Of {data.length}</div>  
        </div>
     )
}



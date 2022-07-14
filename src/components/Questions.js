import { Button } from '@mui/material';
import React, {useState, useEffect} from 'react';
import TimedQuestion from './TimedQuestion';
import './Questions.css';

export default function Questions({questions}) {
    const [questionNum, setQuestionNum] = useState(0);
    const [question, setQuestion] = useState(questions[0]);
    const [canSubmit, setCanSubmit] = useState(false);

    useEffect(() => {
        if (questionNum === questions.length - 1) {
            setCanSubmit(true);
        }
        else{
            setCanSubmit(false);
        }
    })

    const nextQuestion = () => {
        console.log(questionNum);
        if(questionNum == questions.length - 1) {
            alert('You have finished the survey!');
        }
        else {
            setQuestionNum(questionNum + 1);
            setQuestion(questions[questionNum]);
        }
    }
    const prevQuestion = () => {
        console.log(questionNum);
        if(questionNum == 0) {
            alert('You are on the first question!');
        }
        else {
            setQuestionNum(questionNum - 1);
            setQuestion(questions[questionNum]);
        } 
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('submitted');        
    }
    return(
        <form onSubmit={handleSubmit} className='questions-container'>
            <TimedQuestion question={question.question} questionNumber={questionNum + 1} next={nextQuestion} prev={prevQuestion} time={0}/>
            <Button className='submit-button' variant="contained" color='success' type="submit" disabled={!canSubmit}>Submit</Button>
        </form>
    )
}
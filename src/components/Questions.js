import { Button } from '@mui/material';
import React, {useState, useEffect} from 'react';
import TimedQuestion from './TimedQuestion';
import './Questions.css';

export default function Questions({questions}) {
    const [questionNum, setQuestionNum] = useState(0);
    const [question, setQuestion] = useState(questions[0]);
    const [canSubmit, setCanSubmit] = useState(false);
    const [canNext, setCanNext] = useState(true);
    const [canPrev, setCanPrev] = useState(false);

    useEffect(() => {
        console.log(questions)
        if (questionNum === questions.length - 1) {
            setCanSubmit(true);
            setCanNext(false);
            setCanPrev(true);
        }
        else{
            setCanSubmit(false);
            if(questionNum === 0){
                setCanPrev(false);
                setCanNext(true);
            }
            else{
                setCanPrev(true);
                setCanNext(true);
            }
        }
    })

    const nextQuestion = () => {
        console.log(questionNum);
        if(questionNum == questions.length - 1) {
            alert('You have finished the survey!');
        }
        else {
            setQuestionNum(questionNum + 1);
            setQuestion(questions[questionNum + 1]);
        }
    }
    const prevQuestion = () => {
        console.log(questionNum);
        if(questionNum == 0) {
            alert('You are on the first question!');
        }
        else {
            setQuestionNum(questionNum - 1);
            setQuestion(questions[questionNum - 1]);
        } 
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('submitted');        
    }
    return(
        <div className='questions-container'>
            <form onSubmit={handleSubmit}>
                <TimedQuestion question={question.question} questionNumber={questionNum + 1} next={nextQuestion} prev={prevQuestion} time={0}/>
                <div className='questions-actions'>
                    <Button className='submit-button' variant="contained" color='success' type="submit" disabled={!canSubmit}>Submit</Button>
                    <Button variant="contained" color="primary" className='qButton' disabled={!canPrev} onClick={prevQuestion}>{'<'}</Button>
                    <Button variant="contained" color="primary" className='qButton' disabled={!canNext} onClick={nextQuestion}>{'>'}</Button>
                </div>
            </form>
        </div>
    )
}
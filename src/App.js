import {useReducer} from 'react';

import Main from './components/Main';
import Header from './components/Header';
import StartScreen from './components/StartScreen';
import questionData from './data/question.json';
import Question from './components/Question';
import FinishScreen from './components/FinishScreen';

const initialState = {
  status: 'ready',
  question : [],
  index: 0,
  points:0,
  answer :false
}

const reducer = (state,action)=>{

  switch(action.type) {
    case 'start' : 
      const {questions} = questionData;
   
       return {
      ...state,
      status:'active',
      question: questions
      } 

    case 'newAnswer':
      const question = state.question.at(state.index); 

      return {
        ...state,
        points: question.correctOption===action.payload ? state.points + question.points : state.points,
        answer: true
      }

      case 'nextQuestion':

      return {
        ...state, 
        index: state.index + 1,
        answer: false
      }
     
      case 'finish' : 

        return {
          ...state,
          status: 'finish'
        }

      case 'reset' : 
        return {
          ...initialState,
          question: state.question
        } 

    default: 
       throw new Error('Action Invalid');     
      
  }
  
}

export default function App() {


  const[{status,question,index, answer,points},dispatch]= useReducer(reducer,initialState);

  const maxQuestion = question.length;

  const totalPoints = question.reduce((acc,cur)=>{
    return cur.points + acc;

  },0)

 

  return (
    <>
      <Header />
      <Main>
        {status==='ready' && <StartScreen dispatch={dispatch} />}
        {status==='active' && <Question question={question[index]} maxQuestion={maxQuestion} index={index} dispatch={dispatch} answer={answer} points={points} totalPoints={totalPoints} />}
        {status==='finish' && <FinishScreen points={points} totalPoints={totalPoints} dispatch={dispatch} />}
      </Main>
    </>
  );
}

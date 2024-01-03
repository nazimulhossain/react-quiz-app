import Button from './Button';
import Option from './Option';
import Progress from './Progress';
import Status from './Status';


function Question({question,maxQuestion,index,dispatch,answer,points,totalPoints}){

    console.log(question);
    return (
        <div>
            <Progress index={index}/>
            <Status index={index} maxQuestion={maxQuestion} points={points} totalPoints={totalPoints} />
            <h3 style={{marginTop:'2.4rem',fontSize:'3.2rem'}}>{question.question}</h3>
            <Option question={question} dispatch={dispatch} answer={answer} />
            <Button index={index} maxQuestion={maxQuestion} dispatch={dispatch} />
        </div>
    )

}

export default Question;
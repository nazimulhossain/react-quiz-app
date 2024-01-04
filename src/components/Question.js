import Button from './Button';
import Option from './Option';
import Progress from './Progress';
import Status from './Status';
import Timer from './Timer';


function Question({question,maxQuestion,index,dispatch,answer,points,totalPoints,secondsRemaining}){

    
    return (
        <div>
            <Progress index={index}/>
            <Status index={index} maxQuestion={maxQuestion} points={points} totalPoints={totalPoints} />
            <h3 style={{marginTop:'2.4rem',fontSize:'3.2rem'}}>{question.question}</h3>
            <Option question={question} dispatch={dispatch} answer={answer} />
            <div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
                <Timer secondsRemaining={secondsRemaining} dispatch={dispatch} />
                <Button index={index} maxQuestion={maxQuestion} dispatch={dispatch} />
            </div>
            
        </div>
    )

}

export default Question;
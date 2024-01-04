import { useEffect } from "react";


const timerStyle = {
    width: '15rem',
    fontSize: '1.8rem',
    border: '2px solid grey',
    padding: '1.2rem 2.4rem',
    fontWeight: 600
}


function Timer({secondsRemaining,dispatch}){

    const minuteRemaining = Math.floor(secondsRemaining/ 60);
    const seconds = secondsRemaining % 60;

    useEffect(function(){

      const id = setInterval(()=>{
            dispatch({type:'timer'}) 
        },1000)
        return ()=> clearInterval(id)
    },[dispatch])

    return (
        <div style={timerStyle}>
        {minuteRemaining < 10 && "0"}
        {minuteRemaining} : {seconds < 10 && "0"}
        {seconds}
        </div>
    )

}

export default Timer;
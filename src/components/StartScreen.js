import Button from "./Button";

function StartScreen({dispatch}){
    return (
        <>
        <h2 className='header-secondary'>Welcome to the React Quiz</h2>
        <h3 className='description center'>15 questions to test your React mastery</h3>
        <button className="btn" onClick={()=> dispatch({type:'start'})}>Lets start</button>
        </>
    )

}

export default StartScreen;
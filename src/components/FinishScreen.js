function FinishScreen({points,totalPoints,dispatch}){

    const percentage = Math.ceil((points/totalPoints)* 100);

    return (
        <div>
            <h3>🎉 You scored {points} out of {totalPoints} ({percentage}%)</h3>
            <button className="btn" onClick={()=> dispatch({type: 'reset'})}>Restart Quiz</button>
        </div>
    )

}

export default FinishScreen;
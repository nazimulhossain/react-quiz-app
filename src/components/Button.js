function Button({index,maxQuestion,dispatch}){
    if(index<maxQuestion-1){
        return <button className="btn" onClick={()=> dispatch({type:'nextQuestion'})}>Next</button>
    }
    if(index===maxQuestion-1){
        return <button className="btn" onClick={()=> dispatch({type:'finish'})}>Finish</button>
    }

}

export default Button;
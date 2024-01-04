function Option({dispatch,answer,question}){


    return (
        <div className="option-container">
            {
               question.options.map((option,index)=> {
                return <button key={option} className="btn" onClick={()=> dispatch({type:'newAnswer',payload:index})} disabled={answer}>{option}</button>
               }) 
            }

        </div>
        
    
    

        
        
    )

} 

export default Option;
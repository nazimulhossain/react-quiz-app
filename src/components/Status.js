const StatusStyle = {
    display: 'flex',
    justifyContent:'space-between',
    alignItems:'center',
    fontSize:'1.8rem',
    fontWeight: 600
}

function Status({index,maxQuestion,points,totalPoints}){
    return (
        <div style={StatusStyle}>
            <p>{index+1}/{maxQuestion}</p>
            <p>{points}/{totalPoints}</p>
        </div>
    )

}

export default Status;
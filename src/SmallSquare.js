
const SmallSquare =(props)=>{
    return (
        <div onClick={props.onClick} className="SmallSqrDiv">
            <h2 className="value">{props.value}</h2>
        </div>
    )
}

export default SmallSquare;
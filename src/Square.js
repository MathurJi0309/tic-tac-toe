
import { useState } from "react";
import SmallSquare from "./SmallSquare";

const Square =()=>{
    const [state,setState]=useState(Array(9).fill(null));
    const [player,setPlayer] =useState(true);



    const Winners =()=>{
         const winner =[
            [0,1,2],
            [3,4,5],
            [6,7,8],
            [0,3,6],
            [1,4,7],
            [2,5,8],
            [0,4,8],
            [2,4,6],

         ];

         for(let i of winner){
            const [a,b,c] =i;
            if(state[a]!==null && state[a]===state[b] && state[a]===state[c]){
                return state[a];
            }
         }
         return false;
    }


    const isWinner=Winners();

    const handleClick=(index)=>{
        if(state[index] !== null){
            return;
        }
        const newState=[...state];
        newState[index] =player ? "X" : "O";
        setState(newState);
        setPlayer(!player)
    }

    const btnClick =()=>{
        setState(Array(9).fill(null));
    }
    return (
        <div className="main-div">
            <h3 className="player-turn">Player {player ? "X" : "O"} please move</h3>
                <div className="main">
                <div className="main-row">
                <SmallSquare onClick={()=>handleClick(0)} value={state[0]}/>
                <SmallSquare onClick={()=>handleClick(1)} value={state[1]}/>
                <SmallSquare onClick={()=>handleClick(2)} value={state[2]}/>


            </div>
            <div className="main-row">
                <SmallSquare onClick={()=>handleClick(3)} value={state[3]}/>
                <SmallSquare onClick={()=>handleClick(4)} value={state[4]}/>
                <SmallSquare onClick={()=>handleClick(5)} value={state[5]}/>
            </div>
            <div className="main-row">
            <SmallSquare onClick={()=>handleClick(6)} value={state[6]}/>
            <SmallSquare onClick={()=>handleClick(7)} value={state[7]}/>
            <SmallSquare onClick={()=>handleClick(8)} value={state[8]}/>
            </div>
                </div>
            {
                isWinner ? <div className="winner">
                {isWinner } is Winner
                <button onClick={btnClick}>
                    Play Again
                </button>
                </div> : <></>
            }
        </div>
    )
}

export default Square;
import './App.css';
import { useState } from 'react';


function Square({value,onSquareClick}){

  return (
    <button className='square' onClick={onSquareClick} >{value}</button>
  )
}



function Board() {
  const [xIsNext,setxIsnext]=useState(true)
  const [squares,setSquares]=useState(Array(9).fill())
 
 


  function handleClick(i) {

    const nextSquares = squares.slice();

    if(squares[i] || calculateWinner(squares)){
      return;
    }

    if (xIsNext){
    nextSquares[i] = "X";
    }

    else{
      nextSquares[i]="O"
    }
    setSquares(nextSquares);
    setxIsnext(!xIsNext);
    }

    const winner = calculateWinner(squares)
    let status;
  
    if (winner) {
      status = "Winner: " + winner;
      // alert("winner")
      // alert(winner)
    } else {
      status = "Next player: " + (xIsNext ? "X" : "O");
    }
  
  


  return (
    <>
    <div class="game">
    <div>{status}</div>
   <div className='game-board'>
   <div className="board-row">
        <Square value={squares[0]} onSquareClick={()=>{handleClick(0)}} />
        <Square value={squares[1]} onSquareClick={()=>{handleClick(1)}} />
        <Square value={squares[2]} onSquareClick={()=>{handleClick(2)}}/>
      </div>
      <div className="board-row">
        <Square value={squares[3]} onSquareClick={()=>{handleClick(3)}}/>
        <Square value={squares[4]} onSquareClick={()=>{handleClick(4)}}/>
        <Square value={squares[5]} onSquareClick={()=>{handleClick(5)}}/>
      </div>
      <div className="board-row">
        <Square value={squares[6]} onSquareClick={()=>{handleClick(6)}} />
        <Square value={squares[7]} onSquareClick={()=>{handleClick(7)}}/>
        <Square value={squares[8]} onSquareClick={()=>{handleClick(8)}} />
      </div>
      </div>
      </div>
</>

  )
}



function calculateWinner(squares){
  const winning_combinations=[
[0,1,2],
[3,4,5],
[6,7,8],
[0,3,6],
[2,4,6],
[0,4,8],
[2,5,8],
[1,4,7],
  ]
  for( let i=0;i<winning_combinations.length;i++ ){

    const[a,b,c]=winning_combinations[i];

    if (squares[a]=="X" && squares[b]=="X" && squares[c]=="X"){
      return squares[a];
    }
    else if (squares[a]=="O" && squares[b]=="O" && squares[c]=="O"){
      return squares[a];
    }
  }

  return null;

}


  


export default Board;

import React, { Component } from 'react'

const Result =({score,playAgain})=>(
    <div className="score-board">
        <div className="score">
            {score} / correctAnswer!
        </div>
        <button className="playBtn" onClick={playAgain} >
            Play playAgain

        </button>
    </div>
)

export default Result;

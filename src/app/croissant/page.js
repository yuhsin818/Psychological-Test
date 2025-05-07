'use client';

import StartPage from "@/component/page/StartPage";
import QuestionPage from "@/component/page/QuestionPage";
import DisplayResultPage from "@/component/page/DisplayResultPage";
import ResultPage from "@/component/page/ResultPage";
import { useState } from 'react';

export default function Croissant() {

  const [gameState, setGameState] = useState({
    state: 0, //0: start, 1:question, 2:displayResult, 3:result
    questionState: 0,
    totalQuestions: 3,
    score: 0
  });

  const nextStep = function(){
    if(gameState.state >= 3) return; //大於3就不執行 return null
    
    if(gameState.state == 1){
      
      //答題階段 須超過總題數才結束
      if(gameState.questionState < gameState.totalQuestions-1){
        setGameState({
          ...gameState, //gameState內的所有屬性
          questionState: gameState.questionState + 1 //複寫state的值以更新
        })
      }else{
        setGameState({
          ...gameState, //gameState內的所有屬性
          state: gameState.state + 1 //複寫state的值以更新
        })
      }

    }else{
      setGameState({
        ...gameState, //gameState內的所有屬性
        state: gameState.state + 1 //複寫state的值以更新
      })
    }

  }

  const prevStep = function(){
    if(gameState.state <= 0) return; //大於3就不執行 return null
    
    setGameState({
      ...gameState, //gameState內的所有屬性
      state: gameState.state - 1 //複寫state的值以更新
    })
  }

  return (
    <>
      <div className="w-screen h-screen bg-gray-200 flex justify-center items-center">
        { gameState.state == 0 && <StartPage/>}
        { gameState.state == 1 && <QuestionPage questionIndex={gameState.questionState}/>}
        { gameState.state == 2 && <DisplayResultPage/>}
        { gameState.state == 3 && <ResultPage/>}

        <div onClick={prevStep}>上一步</div>
        <div onClick={nextStep}>下一步</div>
      </div>
    </>
  );
}

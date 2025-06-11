'use client';

import MobileFrame from '@/component/layout/MobileFrame'
import Image from 'next/image';
import q1Up from '@/../public/1.question/q1-up.png';
import q1Down from '@/../public/1.question/q1-down.png';
import circle1Img from '@/../public/1.question/blur-circle-1.png';
import circle2Img from '@/../public/1.question/blur-circle-2.png';
import topImg from '@/../public/0.start/instrument-green.png';
// import bottomImg from '@/../public/0.start/piano-green.png';
import bottomImg1 from '@/../public/1.question/bottomImg01.png';
import bottomImg2 from '@/../public/1.question/bottomImg02.png';
import bottomImg3 from '@/../public/1.question/bottomImg03.png';
import bottomImg4 from '@/../public/1.question/bottomImg04.png';
import bottomImg5 from '@/../public/1.question/bottomImg05.png';
import bottomImg6 from '@/../public/1.question/bottomImg06.png';
import bottomImg7 from '@/../public/1.question/bottomImg07.png';
import bottomImg8 from '@/../public/1.question/bottomImg08.png';
import bottomImg9 from '@/../public/1.question/bottomImg09.png';
import bottomImg10 from '@/../public/1.question/bottomImg10.png';
import topImg1 from '@/../public/1.question/instrument-red.png';
import topImg2 from '@/../public/1.question/instrument-orange.png';
import topImg3 from '@/../public/1.question/instrument-green.png';
import topImg4 from '@/../public/1.question/instrument-blue.png';
import topImg5 from '@/../public/1.question/instrument-purple.png';

import { usePsyStore, useQuestionStore } from '@/app/store/store'
import { useEffect, useState } from 'react';



export default function QuestionPage({questionIndex, nextStep}) {
  const [fadeVisible, setFadeVisible] = useState(false);

  useEffect(() => {
    // 當元件初次載入時，觸發淡入效果
    setFadeVisible(true);
  }, []);

  const questionData = useQuestionStore( (state)=> state );
  const psyData = usePsyStore( (state)=> state );


  const clickAnswer = function(option){
    
  nextStep();

  usePsyStore.getState().updateScore(option.type, option.value);

  console.log(option.title, option.value, option.type);
      
  }


  // const getMainColor = function(prefix){
    
  //   let colorString = "";

  //   if(questionIndex == 0){
  //     colorString = prefix + "-[#90B62A]";
  //   }else if(questionIndex == 1){
  //     colorString = prefix + "-[#DD3E3E]";
  //   }else{
  //     colorString = prefix + "-[#1098EC]";
  //   }

  //   return colorString;

  // }

  const getBgColor = () => {
    if (questionIndex == 0 | questionIndex == 5) {
      return "#AE7273";
    } else if (questionIndex == 1 | questionIndex == 6) {
      return "#D79C71";
    } else if (questionIndex == 2 | questionIndex == 7){
      return "#AEAC72";
    } else if (questionIndex == 3 | questionIndex == 8){
      return "#8188B1";
    } else if (questionIndex == 4 | questionIndex == 9){
      return "#AA959C";
    }
  };

  const getBottomImg = () => {
    if (questionIndex == 0) return bottomImg1;
    if (questionIndex == 1) return bottomImg2;
    if (questionIndex == 2) return bottomImg3;
    if (questionIndex == 3) return bottomImg4;
    if (questionIndex == 4) return bottomImg5;
    if (questionIndex == 5) return bottomImg6;
    if (questionIndex == 6) return bottomImg7;
    if (questionIndex == 7) return bottomImg8;
    if (questionIndex == 8) return bottomImg9;
    if (questionIndex == 9) return bottomImg10;
    return bottomImg3;
  };
  
  const bottomImg = getBottomImg();

  const getTopImg = () => {
    if (questionIndex == 0 | questionIndex == 5) return topImg1;
    if (questionIndex == 1 | questionIndex == 6) return topImg2;
    if (questionIndex == 2 | questionIndex == 7) return topImg3;
    if (questionIndex == 3 | questionIndex == 8) return topImg4;
    if (questionIndex == 4 | questionIndex == 9) return topImg5;
    return topImg3;
  };
  
  const topImg = getTopImg();

  const styleConfig = {
    0: {
      bgColor: "bg-[#EA9EA0]",
      keySuffix: "green"
    },
    1: {
      bgColor: "bg-[#F3BD8B]",
      keySuffix: "red"
    },
    2: {
      bgColor: "bg-[#CAD068]",
      keySuffix: "blue"
    },
    3: {
      bgColor: "bg-[#5371BF]",
      keySuffix: "blue"
    },
    4: {
      bgColor: "bg-[#9C7280]",
      keySuffix: "blue"
    },
    5: {
      bgColor: "bg-[#EA9EA0]",
      keySuffix: "green"
    },
    6: {
      bgColor: "bg-[#F3BD8B]",
      keySuffix: "red"
    },
    7: {
      bgColor: "bg-[#CAD068]",
      keySuffix: "blue"
    },
    8: {
      bgColor: "bg-[#5371BF]",
      keySuffix: "blue"
    },
    9: {
      bgColor: "bg-[#9C7280]",
      keySuffix: "blue"
    }
  };
  
  // 取出目前 questionIndex 的樣式設定
  const currentStyle = styleConfig[questionIndex] || styleConfig[0]; // 預設第0題樣式


  return (
    <>
      <MobileFrame bgColor={getBgColor()}>
        <Image className=' absolute top-8 lg:top-5 -translate-y-1/2 ' src={topImg} alt='topImg' />
        <div
          className={`
            ${fadeVisible ? 'opacity-100' : 'opacity-0'}
            transition-opacity duration-1500
          `}
        >

        <div className={`flex flex-col items-center gap-[26px]`}>
          <div className='w-full flex flex-col lg:flex-row justify-center items-center mb-[25px] gap-3'>
            <div className='text-[#FFE8C9] bg-[rgba(255,232,201,0.3)] rounded-full w-[50px] h-[50px]
            flex justify-center items-center font-bold text-xl'>
              Q{questionIndex+1}
            </div>
            
            <div 
              className={`text-center font-bold text-[28px] text-[#FCE3BE]`}
            > {questionData.questions[questionIndex+1].title} </div>
            
            
          </div>



        {questionData.questions[questionIndex + 1].options.map((option, index) => (
          <div
            className={`
              ${currentStyle.bgColor} w-full rounded-full text-[#FFE8C9] 
              py-[12px] text-[15px] flex justify-center items-center font-medium 
              cursor-pointer transition-transform duration-300
              border-4 border-transparent
              hover:scale-105 hover:border-[#FCE3BE]
            `}
            onClick={() => clickAnswer(option)} //改新增項目
            key={option.title + currentStyle.keySuffix}
          >
            {option.title}
          </div>
        ))}

        </div>
        </div>

        <Image className=' absolute bottom-10 translate-y-1/2 pointer-events-none ' src={bottomImg} alt='bottomImg' />
        
      </MobileFrame>
    </>
  );
}

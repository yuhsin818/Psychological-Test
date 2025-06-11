'use client';

import MobileFrame from '@/component/layout/MobileFrame';
import Image from 'next/image';
import titleImg from '@/../public/0.start/title.svg';
import startBtn from '@/../public/0.start/startBtn.png';
import circle1Img from '@/../public/0.start/blur-circle-1.png';
import topImg from '@/../public/0.start/instrument-green.png';
import bottomImg from '@/../public/1.question/piano-green.png';
import BlurText from "@/component/reactBits/BlurText";



export default function StartPage({nextStep}) {
  const handleAnimationComplete = () => {
    console.log('Animation completed!');
  };

  return (
    <>
      <MobileFrame bgColor="#AEAC72">
        <div className='w-[95%] flex justify-center items-center flex-col gap-[25px] bg-[#BAB887] px-3 py-10 lg:py-5 rounded-2xl'>
        <Image
          className="absolute -translate-y-1/2 animate-moveDown"
          src={topImg}
          alt="topImg"
        />
          <BlurText
            text="𝄞 你的靈魂樂器 𝄢"
            delay={150}
            animateBy="words"
            direction="top"
            onAnimationComplete={handleAnimationComplete}
            // className="text-2xl mb-8"
            className='text-[#FCE3BE] font-[750] text-center text-[30px]'
          />
          {/* <div className='text-[#FCE3BE] font-[750] text-center text-[30px]'>𝄞 你的靈魂樂器 𝄢</div> */}

          <div className='text-[#FCE3BE] font-[500] text-center text-[14px] lg:text-[16px]
           leading-loose tracking-wide '>
            這世界就像一場盛大的交響樂， <br/>
            有些人天生就像鋼琴，穩定又優雅； <br/>
            有些人則像小號，熱情而耀眼... <br/>
            <p className='mt-[20px]'>而你，會是其中的哪個樂器呢？ </p>
            透過接下來的10題測驗來一探究竟吧！<br/>
            總共有16種樂器等你來探索~
          </div>
          {/* <Image onClick={nextStep} className='w-[160px]' src={startBtn} alt='startBtn' /> */}
          <div
            onClick={nextStep}
            className='h-[35px] w-[150px] flex justify-center items-center
            bg-[#FABC63] text-[#FCE3BE] font-bold text-[18px] rounded-3xl
            cursor-pointer transition-transform duration-300
            border-3 border-transparent
            hover:scale-105 hover:border-[#FCE3BE]'
            >
            開始測驗
          </div>
          <Image
            className="absolute translate-y-1/2 pointer-events-none animate-moveUp"
            src={bottomImg}
            alt="bottomImg"
          />

        </div>
      </MobileFrame>
    </>
  );
}

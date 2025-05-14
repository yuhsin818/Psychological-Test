'use client';

import MobileFrame from "../layout/MobileFrame";
import Image from "next/image";
import titleImg from "@/../public/0.start/title.png";
import startBtn from "@/../public/0.start/startBtn.png";
import blurCircle_1 from "@/../public/0.start/blurCircle-1.png";


export default function QuestionPage({questionIndex, nextStep}) {

  return (
    <>
      <MobileFrame>
        QuestionPage: Q{questionIndex+1}
        <div className="w-screen h-screen flex justify-center items-center flex-col gap-[60px] font-bold">
        <Image className="absolute top-0 -translate-y-1/2" src={blurCircle_1} alt=""/>
          <Image src={titleImg} width={300} alt=""/>
          <div className="text-[#B65A0F] px-8 text-[14px] text-center leading-loose tracking-wide">
            有些人天生酥脆，有些人出爐時就塌了。
            你努力發酵、翻滾、等待出爐，
            結果還是變成一坨可頌災難。
            沒關係，這世界不缺完美麵包，
            缺的是——像你一樣軟爛卻獨特的存在。
            現在，就來看看你是什麼等級的失控可頌吧。
          </div>
          <Image onClick={nextStep} src={startBtn} width={150}  alt=""/>
          <Image className="absolute bottom-0 translate-y-1/2" src={blurCircle_1} alt=""/>
        </div>
      </MobileFrame>
    </>
  );
}

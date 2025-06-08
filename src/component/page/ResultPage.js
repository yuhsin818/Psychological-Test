'use client';

import MobileFrame from '@/component/layout/MobileFrame';
import { usePsyStore } from '@/app/store/store';
import Image from 'next/image';

// 直接 import 所有可能用到的圖片
import bottomImg1 from '@/../public/1.question/piano-red.png';
import bottomImg2 from '@/../public/1.question/piano-orange.png';
import bottomImg3 from '@/../public/1.question/piano-green.png';
import bottomImg4 from '@/../public/1.question/piano-blue.png';
import bottomImg5 from '@/../public/1.question/piano-purple.png';
import topImg1 from '@/../public/1.question/instrument-red.png';
import topImg2 from '@/../public/1.question/instrument-orange.png';
import topImg3 from '@/../public/1.question/instrument-green.png';
import topImg4 from '@/../public/1.question/instrument-blue.png';
import topImg5 from '@/../public/1.question/instrument-purple.png';

import wood_result1 from '@/../public/4.result/woodInstrument01.png';
import wood_result2 from '@/../public/4.result/woodInstrument02.png';
import wood_result3 from '@/../public/4.result/woodInstrument03.png';
import wood_result4 from '@/../public/4.result/woodInstrument04.png';
import wood_result5 from '@/../public/4.result/woodInstrument05.png';
import brass_result1 from '@/../public/4.result/brassInstrument01.png';
import brass_result2 from '@/../public/4.result/brassInstrument02.png';
import brass_result3 from '@/../public/4.result/brassInstrument03.png';
import brass_result4 from '@/../public/4.result/brassInstrument04.png';
import brass_result5 from '@/../public/4.result/brassInstrument05.png';
import string_result1 from '@/../public/4.result/stringInstrument01.png';
import string_result2 from '@/../public/4.result/stringInstrument02.png';
import string_result3 from '@/../public/4.result/stringInstrument03.png';
import string_result4 from '@/../public/4.result/stringInstrument04.png';
import drum_result1 from '@/../public/4.result/drum01.png';
import drum_result2 from '@/../public/4.result/drum02.png';

export default function ResultPage() {
  const psyState = usePsyStore((state) => state);

  // ⭐️ 將推斷結果的邏輯封裝成函式，並回傳物件
  const getResultInstrument = () => {
    const { woodwind, brass, string, percussion } = psyState.score;

    const scores = { woodwind, brass, string, percussion };
    const sorted = Object.entries(scores).sort((a, b) => b[1] - a[1]);
    const highestType = sorted[0][0];
    const secondType = sorted[1][0];

    let result = '';
    let resultImage;

    if (highestType === 'woodwind') {
      if (secondType === 'string') {
        result = (woodwind - string > 2) ? '長笛' : '豎笛';
        resultImage = (woodwind - string > 2) ? wood_result1 : wood_result2;
      } else if (secondType === 'brass') {
        result = (woodwind - brass > 2) ? '巴松管' : '雙簧管';
        resultImage = (woodwind - brass > 2) ? wood_result4 : wood_result3;
      } else if (secondType === 'percussion') {
        result = '薩克斯風';
        resultImage = wood_result5;
      }
    } else if (highestType === 'brass') {
      if (secondType === 'woodwind') {
        result = '小號';
        resultImage = brass_result1;
      } else if (secondType === 'string') {
        result = (brass - string > 2) ? '長號' : '法國號';
        resultImage = (brass - string > 2) ? brass_result2 : brass_result3;
      } else if (secondType === 'percussion') {
        result = (brass - percussion > 2) ? '低音號' : '上低音號';
        resultImage = (brass - percussion > 2) ? brass_result5 : brass_result4;
      }
    } else if (highestType === 'string') {
      if (secondType === 'woodwind') {
        result = '小提琴';
        resultImage = string_result1;
      } else if (secondType === 'brass') {
        result = (string - brass > 2) ? '大提琴' : '中提琴';
        resultImage = (string - brass > 2) ? string_result3 : string_result2;
      } else if (secondType === 'percussion') {
        result = '低音大提琴';
        resultImage = string_result4;
      }
    } else if (highestType === 'percussion') {
      if (secondType === 'string' | secondType === 'woodwind') {
        result = '鋼琴';
        resultImage = drum_result1;
      } else if (secondType === 'brass') {
        result = '鼓類';
        resultImage = drum_result2;
      }
    }

    // ✅ 回傳物件
    return { result, resultImage, highestType };
  };

  // 🟡 呼叫函式取得結果
  const { result: finalResult, resultImage, highestType  } = getResultInstrument();

  // 🟡 「再玩一次」按鈕
  const playAgain = () => window.location.reload();

  const getBgColor = () => {
    if (highestType === 'woodwind') {
      return ["#AE7273", "#EA9EA0"];
    } else if (highestType === 'brass') {
      return ["#D79C71", "#F3BD8B"];
    } else if (highestType === 'string'){
      return ["#8188B1", "#5371BF"];
    } else if (highestType === 'percussion'){
      return ["#AA959C", "#9C7280"];
    } 
    return ["#FFFFFF", "#FFFFFF"]; // 加上預設值，避免 undefined
  };
  

  const getBottomImg = () => {
    if (highestType === 'woodwind') return bottomImg1;
    if (highestType === 'brass') return bottomImg2;
    if (highestType === 'string') return bottomImg4;
    if (highestType === 'percussion') return bottomImg5;
    return bottomImg3;
  };
  
  const bottomImg = getBottomImg();

  const getTopImg = () => {
    if (highestType === 'woodwind') return topImg1;
    if (highestType === 'brass') return topImg2;
    if (highestType === 'string') return topImg4;
    if (highestType === 'percussion') return topImg5;
    return topImg3;
  };
  
  const topImg = getTopImg();

  return (
    <MobileFrame bgColor={getBgColor()[0]}>
      {/* <Image className=' absolute top-8 -translate-y-1/2 ' src={topImg} alt='topImg' /> */}
      <div className='flex flex-col items-center gap-4'>
        <Image className='w-[90%]' src={resultImage} alt='你的結果' />
        {/* <div className='text-center text-lg font-bold'>{finalResult}</div> */}
        <div
          style={{ backgroundColor: getBgColor()[1] }}
          className={` w-[80%] rounded-full text-[#FCE3BE] 
            py-[10px] text-[18px] flex justify-center items-center font-bold 
            cursor-pointer hover:translate-y-0.5 transition`}
          onClick={playAgain}
        >
          再玩一次
        </div>
      </div>
      {/* <Image className=' absolute bottom-8 translate-y-1/2 pointer-events-none ' src={bottomImg} alt='bottomImg' /> */}
    </MobileFrame>
  );
}

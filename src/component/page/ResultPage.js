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

import downloadResult1 from '@/../public/4.result/resultImage01.png';
import downloadResult2 from '@/../public/4.result/resultImage02.png';
import downloadResult3 from '@/../public/4.result/resultImage03.png';
import downloadResult4 from '@/../public/4.result/resultImage04.png';
import downloadResult5 from '@/../public/4.result/resultImage05.png';
import downloadResult6 from '@/../public/4.result/resultImage06.png';
import downloadResult7 from '@/../public/4.result/resultImage07.png';
import downloadResult8 from '@/../public/4.result/resultImage08.png';
import downloadResult9 from '@/../public/4.result/resultImage09.png';
import downloadResult10 from '@/../public/4.result/resultImage10.png';
import downloadResult11 from '@/../public/4.result/resultImage11.png';
import downloadResult12 from '@/../public/4.result/resultImage12.png';
import downloadResult13 from '@/../public/4.result/resultImage13.png';
import downloadResult14 from '@/../public/4.result/resultImage14.png';
import downloadResult15 from '@/../public/4.result/resultImage15.png';
import downloadResult16 from '@/../public/4.result/resultImage16.png';

import sheetImg from '@/../public/4.result/music-sheet.png';
import BlurText from "@/component/reactBits/BlurText";
import FadeContent from "@/component/reactBits/FadeContent";

export default function ResultPage() {
  const handleAnimationComplete = () => {
    console.log('Animation completed!');
  };
  const psyState = usePsyStore((state) => state);

  // ⭐️ 將推斷結果的邏輯封裝成函式，並回傳物件
  const getResultInstrument = () => {
    const { woodwind, brass, string, percussion } = psyState.score;

    const scores = { woodwind, brass, string, percussion };
    const sorted = Object.entries(scores).sort((a, b) => b[1] - a[1]);
    const highestType = sorted[0][0];
    const secondType = sorted[1][0];

    let result = '';
    let result_description = '';
    let resultImage;
    let resultTag1 = '';
    let resultTag2 = '';
    let resultTag3 = '';

    if (highestType === 'woodwind') {
      if (secondType === 'string') {
        result = (woodwind - string > 2) ? '長笛' : '豎笛';
        resultImage = (woodwind - string > 2) ? wood_result1 : wood_result2;
        if(woodwind - string > 2){
          resultTag1 = '# 飄逸派';
          resultTag2 = '# 美到窒息';
          resultTag3 = '# 音樂小仙女';
        }
        else{
          resultTag1 = '# 隱藏實力';
          resultTag2 = '# 音樂變色龍';
          resultTag3 = '# 靈魂演員';
        }
        result_description = (woodwind - string > 2) ? '你是長笛，總愛在高空翱翔，隨時都像灑落陽光的銀河。永遠是音樂會裡那道優雅的風，來去之間，總能掀起一陣驚呼。':'你是豎笛，溫暖又百變，就像音樂界的變色龍。平時乖巧，遇到機會就開啟狂歡模式，總能在舞台上耍點小聰明。';
      } else if (secondType === 'brass') {
        result = '薩克斯風';
        resultImage = wood_result5;
        resultTag1 = '# 不按牌理出牌';
        resultTag2 = '# 靈魂派對王';
        resultTag3 = '# 音樂夜行者';
        result_description = '你是薩克斯風，時而狂野，時而慵懶，像夜店裡的神秘舞者。總是用充滿情感的聲音，撩動人心，絕對是派對靈魂人物。';

      } else if (secondType === 'percussion') {
        result = (woodwind - percussion > 2) ? '雙簧管' : '巴松管';
        resultImage = (woodwind - percussion > 2) ? wood_result3 : wood_result4;
        if(woodwind - percussion > 2){
          resultTag1 = '# 神秘派對';
          resultTag2 = '# 內心戲超多';
          resultTag3 = '# 文青指數爆表';          
        }
        else{
          resultTag1 = '# 老靈魂';
          resultTag2 = '# 可靠好夥伴';
          resultTag3 = '# 不搶戲也最重要';
        }
        result_description = (woodwind - percussion > 2) ?'你是雙簧管，氣質滿分，像是話劇裡的文青主角。說話總帶點憂鬱，還帶著一絲神秘，沒有人能忽視你。':'你是巴松管，天生就自帶低沉磁場，穩如老狗。雖然話不多，卻用最沉穩的聲音，撐起整個場子，讓大家都心安。';
      }
    } else if (highestType === 'brass') {
      if (secondType === 'woodwind') {
        result = '小號';
        resultImage = brass_result1;
        resultTag1 = '# 音樂冒險王';
        resultTag2 = '# 燃燒生命';
        resultTag3 = '# 衝鋒陷陣';
        result_description = '你是小號，聲音高亢，永遠帶著光芒四射的自信。像總愛衝在最前面的冒險家，永不退縮。就算全世界都靜悄悄，你還是要大聲宣告「我來啦！」';
      } else if (secondType === 'string') {
        result = (brass - string > 2) ? '長號' : '法國號';
        resultImage = (brass - string > 2) ? brass_result2 : brass_result3;
        if(brass - string > 2){
          resultTag1 = '# 音樂基石';
          resultTag2 = '# 低調實力派';
          resultTag3 = '# 超有安全感';          
        }
        else{
          resultTag1 = '# 溫柔控';
          resultTag2 = '# 夢幻音浪';
          resultTag3 = '# 藝術浪漫派';          
        }
        result_description = (brass - string > 2) ?'你是長號，沉穩又有點憨，像隔壁大哥的厚實肩膀。只要你一開口，大家都忍不住點頭跟著走，穩得不能再穩。':'你是法國號，完美平衡高亢與溫柔，像是溫暖的午後陽光。你總是淡定又浪漫，既能熱血，也能溫馨，讓人著迷。';
      } else if (secondType === 'percussion') {
        result = (brass - percussion > 2) ? '低音號' : '上低音號';
        resultImage = (brass - percussion > 2) ? brass_result5 : brass_result4;
        if(brass - percussion > 2){
          resultTag1 = '# 深夜心事';
          resultTag2 = '# 穩重擔當';
          resultTag3 = '# 音樂守護神';
        }
        else{
          resultTag1 = '# 安心小棉被';
          resultTag2 = '# 團隊大後盾';
          resultTag3 = '# 平凡中的偉大';                   
        }
        result_description = (brass - percussion > 2) ?'你是低音號，天生低沉又踏實，像全場的地基。永遠都在後排默默支撐，沒什麼花招，但少了你就少了靈魂。':'你是上低音號，看似低調，卻是團隊裡的超級奶爸。溫暖又不張揚，總在關鍵時刻，撐起整段音樂，讓人又安心又舒服。';
      }
    } else if (highestType === 'string') {
      if (secondType === 'woodwind') {
        result = '小提琴';
        resultImage = string_result1;
        resultTag1 = '# 小劇場女王';
        resultTag2 = '# 音樂紅毯';
        resultTag3 = '# 無人不愛我';
        result_description = '你是小提琴，天生就是舞台上的主角，精緻到讓人嫉妒。音色一亮，誰都要停下來聽，人生就是要華麗轉圈才過癮。';
      } else if (secondType === 'brass') {
        result = (string - brass > 2) ? '大提琴' : '中提琴';
        resultImage = (string - brass > 2) ? string_result3 : string_result2;
        if(string - brass  > 2){
          resultTag1 = '# 溫柔殺手';
          resultTag2 = '# 情感系';
          resultTag3 = '# 音樂心靈導師';         
        }
        else{
          resultTag1 = '# 聲音中的擁抱';
          resultTag2 = '# 全能平衡';
          resultTag3 = '# 內斂溫暖';                            
        }
        result_description = (string - brass > 2) ?'你是大提琴，聲音像熱可可，濃得化不開。深情款款，內心戲多到不行，總能在最安靜的時候，把人聽哭。':'你是中提琴，總愛在角落發光，像是樂團裡的老靈魂。柔中帶剛，像溫暖的棉被，總讓人忍不住想靠近。';
      } else if (secondType === 'percussion') {
        result = '低音大提琴';
        resultImage = string_result4;
        resultTag1 = '# 鎮得住全場';
        resultTag2 = '# 沉穩力量';
        resultTag3 = '# 靈魂支柱';        
        result_description = '你是低音大提琴，沉穩又厚重，像個守護者。默默守住最底層，雖然不愛出風頭，但大家都知道你有多重要。';
      }
    } else if (highestType === 'percussion') {
      if (secondType === 'string' | secondType === 'woodwind') {
        result = '鋼琴';
        resultImage = drum_result1;
        resultTag1 = '# 音樂旅人';
        resultTag2 = '# 旋律駕驅者';
        resultTag3 = '# 行走的音符';
        result_description = '你是鋼琴，什麼曲風都能駕馭，像音樂界的百變星君。時而溫柔，時而華麗，總能在任何場合打出自己的牌。';
      } else if (secondType === 'brass') {
        result = '鼓類';
        resultTag1 = '# 咚咚咚開工';
        resultTag2 = '# 節奏狂';
        resultTag3 = '# 音樂領航員';        
        resultImage = drum_result2;
        result_description = '你是鼓類，節奏在你手裡變成心跳，總能帶起全場。就算是最安靜的時刻，你也能用咚咚聲喚醒全世界。';
    }
  }

    // ✅ 回傳物件
    return { result, resultImage, highestType, result_description, resultTag1, resultTag2, resultTag3 };
  };

  // 🟡 呼叫函式取得結果
  const { result: finalResult, resultImage, highestType, result_description ,resultTag1, resultTag2, resultTag3 } = getResultInstrument();

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

  const hexToRgba = (hex, alpha) => {
    let r = 0, g = 0, b = 0;
    // 3位縮寫 hex
    if (hex.length === 4) {
      r = parseInt(hex[1] + hex[1], 16);
      g = parseInt(hex[2] + hex[2], 16);
      b = parseInt(hex[3] + hex[3], 16);
    } 
    // 6位 hex
    else if (hex.length === 7) {
      r = parseInt(hex[1] + hex[2], 16);
      g = parseInt(hex[3] + hex[4], 16);
      b = parseInt(hex[5] + hex[6], 16);
    }
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
  };

  const imageMap = {
    "長笛": downloadResult1.src,
    "豎笛": downloadResult2.src,
    "雙簧管": downloadResult3.src,
    "巴松管": downloadResult4.src,
    "薩克斯風": downloadResult5.src,
    "小號": downloadResult6.src,
    "長號": downloadResult7.src,
    "法國號": downloadResult8.src,
    "上低音號": downloadResult9.src,
    "低音號": downloadResult10.src,
    "小提琴": downloadResult11.src,
    "中提琴": downloadResult12.src,
    "大提琴": downloadResult13.src,
    "低音大提琴": downloadResult14.src,
    "鋼琴": downloadResult15.src,
    "鼓類": downloadResult16.src
  };

  const downloadImage = imageMap[finalResult]
  const downloadFileName = `${finalResult}_測驗結果.png`; // 檔案名稱
  

  return (
    <MobileFrame bgColor={getBgColor()[0]}>
      {/* <Image className=' absolute top-8 -translate-y-1/2 ' src={topImg} alt='topImg' /> */}
      <div 
        className="animate-scaleUp w-[95%] flex justify-center items-center flex-col gap-[20px] px-3 py-10 lg:py-5 rounded-2xl"
        style={{
          backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0.15)), url(${sheetImg.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >

          {/* <div className='text-[#FCE3BE] font-[750] text-center text-[30px]'>{finalResult}</div> */}
          <BlurText
            text={finalResult}
            delay={150}
            animateBy="words"
            direction="top"
            onAnimationComplete={handleAnimationComplete}
            // className="text-2xl mb-8"
            className='text-[#FCE3BE] font-[750] text-center text-[30px]'
          />

          <Image className='w-[70%] lg:w-[40%]' src={resultImage} alt='你的結果' />

          <div className='w-full flex flex-col 2xl:flex-row justify-center items-center gap-2 text-[#FCE3BE] font-[500] text-[15px]'>
            <div style={{ backgroundColor: hexToRgba(getBgColor()[1], 0.6) }} className='flex p-1 px-5 rounded-2xl items-center justify-center'>{resultTag1}</div>
            <div style={{ backgroundColor: hexToRgba(getBgColor()[1], 0.6) }} className='flex p-1 px-5 rounded-2xl items-center justify-center'>{resultTag2}</div>
            <div style={{ backgroundColor: hexToRgba(getBgColor()[1], 0.6) }} className='flex p-1 px-5 rounded-2xl items-center justify-center'>{resultTag3}</div>
          </div>

          {/* <div className='text-[#FCE3BE] font-[500] text-center text-[14px] lg:text-[16px] lg:px-5
           leading-loose tracking-wide mb-[30px]'>
            {result_description}
          </div> */}

          <BlurText
            text={result_description}
            delay={150}
            animateBy="words"
            direction="top"
            onAnimationComplete={handleAnimationComplete}
            // className="text-2xl mb-8"
            className='text-[#FCE3BE] font-[500] text-center text-[14px] lg:text-[16px] lg:px-5
           leading-loose tracking-wide mb-[30px]'
          />

 
      </div>
      <div className='w-full flex flex-row justify-center items-center gap-2 text-[#FCE3BE] font-[500] text-[15px] mt-5'>
        <a 
          href={downloadImage}
          download={downloadFileName}
          style={{ backgroundColor: getBgColor()[1] }}
          className='w-[150px] rounded-full text-[#FCE3BE] 
              py-[8px] text-[16px] flex justify-center items-center font-bold 
              cursor-pointer hover:translate-y-0.5 transition'>
              下載結果
        </a>

        <div
          style={{ backgroundColor: getBgColor()[1] }}
          className={` w-[150px] rounded-full text-[#FCE3BE] 
            py-[8px] text-[16px] flex justify-center items-center font-bold 
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


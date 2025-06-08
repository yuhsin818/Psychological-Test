'use client';

import MobileFrame from '@/component/layout/MobileFrame';
import Image from 'next/image';
import titleImg from '@/../public/0.start/title.svg';
import startBtn from '@/../public/0.start/startBtn.png';
import circle1Img from '@/../public/0.start/blur-circle-1.png';
import topImg from '@/../public/0.start/instrument-green.png';
import bottomImg from '@/../public/0.start/piano-green.png';

export default function StartPage({nextStep}) {

  return (
    <>
      <MobileFrame bgColor="#AEAC72">
        <div className='w-[95%] flex justify-center items-center flex-col gap-[30px] bg-[#BAB887] px-3 py-10 rounded-2xl'>
          <Image className=' absolute top-8 -translate-y-1/2 ' src={topImg} alt='topImg' />
          {/* <Image src={titleImg} alt='title' /> */}
          <div className='text-[#FCE3BE] font-[500] text-center text-[30px]'>你是哪一種樂器?</div>
          <div className='text-[#FCE3BE] font-[500] text-center text-[14px]
           leading-loose tracking-wide '>
            有些人天生就像鋼琴，穩定又優雅； <br/>
            有些人則像小號，熱情而耀眼。 <br/>
            你努力練習，追求自己的旋律， <br/>
            不論結果如何，都有屬於你的樂章。<br/>
            <p className='mt-[20px]'>這世界就像一場盛大的交響樂， </p>
            而你，會是其中的哪個聲部呢？ <br/>
            總共有16種樂器等你來探索!
          </div>
          {/* <Image onClick={nextStep} className='w-[160px]' src={startBtn} alt='startBtn' /> */}
          <div onClick={nextStep} className='h-[35px] w-[150px] flex justify-center items-center
           bg-[#FABC63] text-[#FCE3BE] font-bold text-[20px] rounded-3xl 
           cursor-pointer hover:translate-y-0.5 transition'>
            START
          </div>
          <Image className=' absolute bottom-10 translate-y-1/2 pointer-events-none ' src={bottomImg} alt='bottomImg' />
        </div>
      </MobileFrame>
    </>
  );
}

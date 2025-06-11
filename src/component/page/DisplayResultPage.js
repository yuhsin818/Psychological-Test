'use client';

import Image from 'next/image';
import MobileFrame from '@/component/layout/MobileFrame';
import display1 from '@/../public/4.result/display01.png';
import display2 from '@/../public/4.result/display02.png';
import display3 from '@/../public/4.result/display03.png';
import display4 from '@/../public/4.result/display04.png';
import display5 from '@/../public/4.result/display05.png';
import display6 from '@/../public/4.result/display06.png';
import display7 from '@/../public/4.result/display07.png';
import display8 from '@/../public/4.result/display08.png';
import display9 from '@/../public/4.result/display09.png';
import display10 from '@/../public/4.result/display10.png';
import display11 from '@/../public/4.result/display11.png';
import display12 from '@/../public/4.result/display12.png';
import display13 from '@/../public/4.result/display13.png';
import display14 from '@/../public/4.result/display14.png';
import display15 from '@/../public/4.result/display15.png';
import display16 from '@/../public/4.result/display16.png';

export default function DisplayResultPage({ nextStep }) {
  const displays = [
    display1, display2, display3, display4,
    display5, display6, display7, display8,
    display9, display10, display11, display12,
    display13, display14, display15, display16,
  ];

  return (
    <MobileFrame bgColor="#AEAC72">
      <div className="w-full flex flex-col items-center">
        <div className="grid grid-cols-4 gap-2 w-[100%] mb-4">
          {displays.map((src, index) => (
            <Image
              key={index}
              src={src}
              alt={`display-${index + 1}`}
              className="w-full object-cover transition-transform duration-300 hover:scale-150"
            />
          ))}
        </div>
        <div
          className="bg-[#FABC63] w-[80%] rounded-full text-[#FCE3BE] 
          py-[6px] text-[18px] flex justify-center items-center font-bold 
          cursor-pointer transition-transform duration-300
          border-4 border-transparent
          hover:scale-105 hover:border-[#FCE3BE]"
          onClick={nextStep}
        >
          查看結果
        </div>
      </div>
    </MobileFrame>
  );
}

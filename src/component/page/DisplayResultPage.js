'use client';

import MobileFrame from '@/component/layout/MobileFrame'

export default function DisplayResultPage({nextStep}) {

  return (
    <>
      <MobileFrame bgColor="#AEAC72">
        <div>
          <div>
            顯示我的樂器
          </div>
            <div 
              className={` bg-[#FABC63] w-full rounded-full text-[#FCE3BE] 
                py-[10px] text-[18px] flex justify-center items-center font-bold 
                cursor-pointer hover:translate-y-0.5 transition`}
              onClick={nextStep}
            > 查看結果 </div>
        </div>
      </MobileFrame>
    </>
  );
}

'use client';

import NoteTrail from '@/component/reactBits/NoteTrail';

export default function MobileFrame({children, bgColor = '#ffffff'}) {

  return (
    <>
      <NoteTrail />
      <div style={{ backgroundColor: bgColor }} className={`w-[38%] min-w-[380px] max-w-[800px] h-[90%] p-[52px]
        rounded-2xl flex justify-center items-center flex-col
         relative overflow-hidden
    `}>
        {children}
      </div>
    </>
  );
  
}

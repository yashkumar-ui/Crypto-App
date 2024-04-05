import React from 'react'

const ChooseBox = ({img,title,text}) => {
  return (
    <div className="flex gap-6 items-center text-white backdrop-blur-sm bg-white/10 p-8 rounded-3xl">
      <i className="text-3xl bg-gradient-to-r from-pink-700  py-4 pl-3 pr-8 rounded-xl">
        {img}
      </i>
      <div className="">
        <h4 className="text-2xl font-bold">{title}</h4>
        <p className='opacity-90'>{text}</p>
      </div>
    </div>
  );
}

export default ChooseBox
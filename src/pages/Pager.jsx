import { useState } from "react";
import { assets } from '../assets/assets'
import { Link } from 'react-router-dom';

export default function Pager() {
  const [messages] = useState([
    { id: "ID98", text: "Patient in Ward 3 requires vitals check." },
    { id: "ID19", text: "IV line replacement scheduled at 14:00" },
    { id: "ID15", text: "Radiology results ready for review." },
    { id: "ID98", text: "Patient in Ward 3 requires vitals check." },
    { id: "ID19", text: "IV line replacement scheduled at 14:00" },
    { id: "ID15", text: "Radiology results ready for review." },
    { id: "ID98", text: "Patient in Ward 3 requires vitals check." },
    { id: "ID19", text: "IV line replacement scheduled at 14:00" },
    { id: "ID15", text: "Radiology results ready for review." },
    { id: "ID98", text: "Patient in Ward 3 requires vitals check." },
    { id: "ID19", text: "IV line replacement scheduled at 14:00" },
    { id: "ID15", text: "Radiology results ready for review." },
    { id: "ID98", text: "Patient in Ward 3 requires vitals check." },
    { id: "ID19", text: "IV line replacement scheduled at 14:00" },
    { id: "ID15", text: "Radiology results ready for review." },
    { id: "ID98", text: "Patient in Ward 3 requires vitals check." },
    { id: "ID19", text: "IV line replacement scheduled at 14:00" },
    { id: "ID15", text: "Radiology results ready for review." },
  ]);

  return (
    <div className="flex justify-center min-h-screen bg-gray-100">
      <div className="w-96 shadow-lg p-[18px] bg-[#F2F2F7]">
        {/* Заголовок + кнопка */}
        <div className="flex justify-between items-center mb-[30px]">
          <h1 className="font-sfpro font-bold text-[28px]">Pager</h1>
          <Link to='/'
        
						className='bg-white/50 backdrop-blur-3xl border border-white/50 rounded-full p-2 shadow-xl 
                     hover:scale-105 hover:shadow-2xl hover:bg-white/40 
                     active:scale-95 active:shadow-none transition-all duration-300 cursor-pointer w-[48px] h-[48px] flex justify-center items-center'
					>
					<div className=''>
						<img src={assets.back_arrow} alt="" />
					</div>
					</Link>
        </div>

        {/* Контейнер сообщений */}
        <div
          className="rounded-[26px] w-[350px] h-[660px] shadow-lg p-[10px] 
                bg-[#fff] backdrop-blur-3xl border border-white/80 mb-[10px] 
                overflow-y-scroll"
        >
          {messages.map((msg, index) => (
            <div
              key={index}
              className="flex justify-between gap-[5px] mb-[15px] leading-[22px]"
            >
              <span className="font-sfpro font-semibold text-gray-500 text-[17px]">
                [{msg.id}]
              </span>
              <p className="font-sfpro text-[18px]">{msg.text}</p>
            </div>
          ))}
        </div>

        {/* Поле ввода + кнопка */}
        <div className="flex items-center bg-[#78788029] rounded-[100px] p-[11px]">
          <span className="font-bold text-gray-500 mr-2">ID98:</span>
          <input
            type="text"
            placeholder="Your short message here..."
            className="flex-1 bg-transparent outline-none text-gray-900 placeholder-gray-500"
          />
          <button aria-label='send message' className='cursor-pointer'>
            <img src={assets.send_arrow} alt="" />
          </button>
        </div>
      </div>
    </div>
  );
}
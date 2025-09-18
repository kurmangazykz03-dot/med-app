import { Link } from 'react-router-dom'
import { assets } from '../assets/assets'

export default function MainActivity() {
	return (
		<div className='flex justify-center min-h-screen bg-gray-100'>
			{/* Основной контейнер */}
			<div className='w-96 shadow-lg p-4 bg-[#F2F2F7]'>
				{/* Заголовок + кнопка */}
				<div className='flex justify-between items-center mb-8'>
					<h1 className='font-sfpro font-bold text-[34px]'>Dr. Fever</h1>

					{/* Кнопка с иконкой */}
					<button
          aria-label="settings"
						className='bg-white/50 backdrop-blur-3xl border border-white/50 rounded-full p-2 shadow-xl 
                           hover:scale-105 hover:shadow-2xl hover:bg-white/40 
                           active:scale-95 active:shadow-none transition-all duration-300 cursor-pointer w-[48px] h-[48px]' 
					>
						<div className='flex items-center justify-center'>
              <img src={assets.settings} alt="" />
            </div>
					</button>
				</div>

				{/* Блоки с данными */}
				<div className='flex justify-between items-center gap-[30px]'>
					{/* Карточка: Body temperature */}
					<Link
						to='/temperature'
						className='rounded-[34px] w-40 h-40 shadow-lg p-10 text-center flex flex-col items-center 
                       bg-[rgba(250,250,250,0.7)] backdrop-blur-3xl border border-white/80 cursor-pointer 
                       hover:scale-105 hover:shadow-none transition-all duration-300 '
					>
						<div className='mb-5'>
							{/* SVG иконка */}
							<div>
                <img src={assets.temperature} alt="" />
              </div>
						</div>
						<span className='text-xs font-sfpro whitespace-nowrap'>
							Body temperature
						</span>
					</Link>

					{/* Карточка: Pager */}
					<Link
						to='/pager'
						className='rounded-[34px] w-40 h-40 shadow-lg p-10 text-center flex flex-col items-center 
                       bg-[rgba(250,250,250,0.7)] backdrop-blur-3xl border border-white/80 cursor-pointer 
                       hover:scale-105 hover:shadow-none transition-all duration-300'
					>
            {/* TODO:Not correctly located pager picture  */}
						<div className='mb-10'>
							{/* SVG иконка */}
							<div className='flex items-center'>
                <img src={assets.pager} alt="" />
              </div>
						</div>
						<span className='text-xs font-sfpro whitespace-nowrap'>Pager</span>
					</Link>
				</div>
			</div>
		</div>
	)
}

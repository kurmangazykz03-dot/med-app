import { useEffect, useRef, useState } from 'react'

export default function Temperature() {
	const [countdown, setCountdown] = useState(null)
	const [result, setResult] = useState(null)
	const [loading, setLoading] = useState(false)

	const COUNTDOWN_TIME = 5 // seconds
	const RADIUS = 105
	const CIRCUMFERENCE = 2 * Math.PI * RADIUS

	const circleRef = useRef(null)

	// Таймер для отсчёта
	useEffect(() => {
		if (!loading) return
		if (countdown === null) return

		if (countdown > 0) {
			const t = setTimeout(() => setCountdown(c => c - 1), 1000)
			return () => clearTimeout(t)
		} else {
			finishMeasurement()
		}
	}, [countdown, loading])

	// Инициализация strokeDasharray/offset при монтировании
	useEffect(() => {
		if (circleRef.current) {
			circleRef.current.setAttribute('stroke-dasharray', String(CIRCUMFERENCE))
			circleRef.current.setAttribute('stroke-dashoffset', String(CIRCUMFERENCE))
		}
	}, [CIRCUMFERENCE])

	function startMeasurement() {
		if (loading) return
		setResult(null)
		setLoading(true)
		setCountdown(COUNTDOWN_TIME)

		// Установим начальный offset (покажем примерно 10% заполнения)
		if (circleRef.current) {
			circleRef.current.setAttribute(
				'stroke-dashoffset',
				String(CIRCUMFERENCE * 0.9)
			)
		}
	}

	function finishMeasurement() {
		setLoading(false)
		const newResult = Math.floor(Math.random() * 101)

		setResult(newResult) // <- сначала меняем result, чтобы обновился цвет

		// анимация после рендера (чтобы круг уже был цветной)
		requestAnimationFrame(() => {
			if (circleRef.current) {
				const newOffset = CIRCUMFERENCE * (1 - newResult / 100)
				circleRef.current.setAttribute('stroke-dashoffset', String(newOffset))
			}
		})
	}

	// градиент цвета
	const gradientStart =
		result === null ? '#0088FF' : result > 50 ? '#00C853' : '#D50000'
	const gradientEnd =
		result === null ? '#0088FF' : result > 50 ? '#00E676' : '#FF1744'

	return (
		<div className='flex justify-center min-h-screen bg-gray-100'>
			<div className='w-96 shadow-lg p-4 bg-[#F2F2F7]'>
				<div className='flex justify-between items-center mb-8'>
					<h1 className='font-sfpro font-bold text-[28px]'>Body Temperature</h1>
					{/* Можно заменить Link или кнопку навигации */}
					<button
						className='bg-white/50 backdrop-blur-3xl border border-white/50 rounded-full p-2 shadow-xl 
                     hover:scale-105 hover:shadow-2xl hover:bg-white/40 
                     active:scale-95 active:shadow-none transition-all duration-300 cursor-pointer'
					>
						<svg
							width='11'
							height='17'
							viewBox='0 0 11 17'
							xmlns='http://www.w3.org/2000/svg'
							className='w-5 h-5'
						>
							<path
								d='M0.360842 7.65576L7.00147 1.01514C7.46045 0.556152 8.20264 0.556152 8.65674 1.01514L9.76026 2.11865C10.2192 2.57764 10.2192 3.31982 9.76026 3.77393L5.05811 8.48584L9.76514 13.1929C10.2241 13.6519 10.2241 14.394 9.76514 14.8481L8.66162 15.9565C8.20264 16.4155 7.46045 16.4155 7.00635 15.9565L0.365725 9.31592C-0.0981421 8.85693 -0.0981421 8.11475 0.360842 7.65576Z'
								fill='black'
							/>
						</svg>
					</button>
				</div>

				<div
					className='rounded-[34px] w-[350px] h-[350px] shadow-lg p-10 flex justify-center items-center
                         bg-[rgba(250,250,250,0.7)] backdrop-blur-3xl border border-white/80 mb-[10px] '
				>
					<div
						className='relative w-[216px] h-[216px] cursor-pointer flex justify-center items-center hover:scale-105 duration-300 '
						onClick={startMeasurement}
					>
						<span className='absolute text-[20px] font-sfpro font-semibold z-10'>
							{loading
								? `${countdown}s`
								: result !== null
								? `${result}%`
								: 'START'}
						</span>

						{/* фон круга */}
						<svg width='216' height='216' viewBox='0 0 216 216' className='z-0'>
							<circle
								cx='108'
								cy='108'
								r='105'
								stroke='#D9D9D9'
								strokeWidth='5'
								fill='none'
							/>

							{/* Прогресс появляется только после измерения */}
							{result !== null && (
								<circle
									ref={circleRef}
									cx='108'
									cy='108'
									r='105'
									stroke='url(#angularGrad)'
									strokeWidth='5'
									fill='none'
									strokeLinecap='round'
									strokeDasharray={CIRCUMFERENCE}
									strokeDashoffset={CIRCUMFERENCE}
									style={{ transition: 'stroke-dashoffset 1s ease' }}
								/>
							)}

							<defs>
								<linearGradient
									id='angularGrad'
									x1='0%'
									y1='0%'
									x2='100%'
									y2='100%'
								>
									<stop offset='0%' stopColor={gradientStart} />
									<stop offset='100%' stopColor={gradientEnd} />
								</linearGradient>
							</defs>
						</svg>

						{/* отдельный крутящийся спиннер */}
						{loading && (
							<div
								className='absolute w-[216px] h-[216px] flex justify-center items-center'
								style={{
									animation: 'spin 1s linear infinite',
									transformOrigin: 'center',
								}}
							>
								<svg width='216' height='216' viewBox='0 0 216 216'>
									<circle
										cx='108'
										cy='108'
										r='105'
										stroke='url(#angularGrad)'
										strokeWidth='5'
										fill='none'
										strokeDasharray='80 550'
										strokeLinecap='round'
									/>
								</svg>
							</div>
						)}
					</div>
				</div>

				<div
					className='w-[350px] h-[265px] rounded-[26px] p-6 shadow-lg bg-[rgba(250,250,250,0.7)]
                backdrop-blur-3xl border border-white/80'
				>
					<div className='mb-2'>
						<span className='font-sfpro text-[22px]'>Usage</span>
					</div>

					<p className='font-sfpro text-[17px] leading-[22px]'>
						1. Press the Start button to begin the measurement.
						<br />
						2. You will have {COUNTDOWN_TIME} seconds to place the sensor close
						to your forehead.
						<br />
						3. Hold it steady until the measurement is complete.
						<br />
						4. After a few moments, your temperature result will appear on the
						screen.
					</p>
				</div>
			</div>
		</div>
	)
}

export default function Bluetooth() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-[#F2F2F7]">
      <div className="bg-gray-100 rounded-[26px] w-90 shadow-lg py-3 px-14 text-center">
        {/* Заголовок */}
        <p className="text-lg whitespace-nowrap font-sfpro">
          Turn on Bluetooth to get started
        </p>

        {/* Иконка Bluetooth */}
        <svg
          width="94"
          height="180"
          viewBox="0 0 94 180"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-49 h-52 mx-auto text-gray-500"
        >
          <path
            opacity="0.5"
            d="M59.7579 91.4143L92.1514 55.0863L41.0984 0V72.5379L10.9834 42.2645L0 53.3053L37.7914 91.4143L0 129.523L10.9834 140.564L41.0984 110.291L42.0479 180L94 127.742L59.7579 91.4143ZM74.0476 55.2048L56.5695 72.7752L56.4513 37.5152L74.0476 55.2048ZM56.5695 110.053L74.0476 127.624L56.4513 145.313L56.5695 110.053Z"
            fill="black"
          />
        </svg>

        {/* Кнопка */}
        <button className="bg-gray-300 text-blue-500 px-8 py-2 rounded-full hover:bg-blue-600 hover:text-white transition font-sfpro">
          Turn on
        </button>
      </div>
    </div>
  );
}
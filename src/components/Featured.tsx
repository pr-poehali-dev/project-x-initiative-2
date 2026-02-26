export default function Featured() {
  return (
    <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center min-h-screen px-6 py-12 lg:py-0 bg-white">
      <div className="flex-1 h-[400px] lg:h-[800px] mb-8 lg:mb-0 lg:order-2">
        <img
          src="/images/woman-horse.jpg"
          alt="Woman on horse in countryside"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex-1 text-left lg:h-[800px] flex flex-col justify-center lg:mr-12 lg:order-1">
        <h3 className="uppercase mb-4 text-sm tracking-wide text-neutral-600">Реальная угроза сегодня</h3>
        <p className="text-2xl lg:text-4xl mb-8 text-neutral-900 leading-tight">
          Арктика теряет около 13% морского льда каждое десятилетие. При текущей скорости таяния к 2100 году уровень океана может подняться на 1–2 метра — это миллионы людей, лишённых дома.
        </p>
        <div className="flex gap-8 mb-8">
          <div>
            <p className="text-4xl font-bold text-blue-700">+1.1°C</p>
            <p className="text-sm text-neutral-500 mt-1">потепление с доиндустриальной эпохи</p>
          </div>
          <div>
            <p className="text-4xl font-bold text-blue-700">680 млн</p>
            <p className="text-sm text-neutral-500 mt-1">человек живут в прибрежных зонах риска</p>
          </div>
        </div>
        <button className="bg-black text-white border border-black px-4 py-2 text-sm transition-all duration-300 hover:bg-white hover:text-black cursor-pointer w-fit uppercase tracking-wide">
          Изучить данные
        </button>
      </div>
    </div>
  );
}
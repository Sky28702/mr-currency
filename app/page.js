"use client";
export default function Home() {
  return (
    <section className="p-4">
      <nav className="flex flex-row justify-between items-center">
        <p className="font-bold text-2xl flex flex-row items-center justify-center gap-4">
          <div className=" text-center border-4 size-10 border-amber-500 rounded-full ">
            <div className="bg-yellow-400 rounded-full">
              <p className="text-2xl text-amber-200">M</p>
            </div>
          </div>
          MR Currency
        </p>
        <button className="px-4 py-1 hover:bg-gray-600 cursor-pointer rounded-sm border border-gray-600 mt-4 mb-4 ">
          login
        </button>
      </nav>

      <div className="  flex flex-row justify-between items-center-safe bg-gray-800 rounded-[10px] mb-4">
        <div className="p-10">
          <h1 className="mb-4 font-medium text-3xl">Mr Currency</h1>

          <p className="text-[18px] font-normal mb-4">
            Explore, surf and manage it safely over the world of internet
          </p>

          <button className="bg-gray-500 hover:bg-gray-700 px-4 py-2 rounded-sm cursor-pointer">
            Get started
          </button>
        </div>
        <img src="/hero.png" className="h-100 hidden md:block"></img>
      </div>

      <section className="bg-black py-6 px-2 rounded-[10px] border border-gray-600 cursor-text mb-10">
        <p className="text-green-600 mb-2">Currently, 1-MR = $1...</p>
        <p className="text-green-600">
          Stock Remaning: 1,000,00-MR{" "}
          <span className="animate-pulse duration-75">|</span>{" "}
        </p>
      </section>

      <div className="text-center text-3xl font-medium flex flex-row gap-2 items-center justify-center">
        About
      </div>

      <p>
        This platform is a centralized virtual economy designed to explore how
        digital currencies work without relying on blockchain or speculation.
        Instead of focusing on hype, the system emphasizes utility, fairness,
        and transparency. Users earn and use virtual coins to unlock features.
        Every action follows clear economic rules such as limited supply,
        transaction taxes, and controlled circulation.
      </p>
    </section>
  );
}

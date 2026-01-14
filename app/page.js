"use client";

import { IconBrandGithub, IconCoins } from "@tabler/icons-react";
import Link from "next/link";

export default function Home() {
  return (
    <section className="p-4">
      <nav className="flex flex-row justify-between items-center">
        <div className="font-bold text-2xl flex flex-row items-center justify-center gap-4">
          <div className=" text-center border-4 size-10 border-amber-500 rounded-full ">
            <div className="bg-yellow-400 rounded-full">
              <p className="text-2xl text-amber-200">M</p>
            </div>
          </div>
          MR Currency
        </div>
        <button className="px-4 py-1 hover:bg-gray-600 cursor-pointer rounded-sm border border-gray-600 mt-4 mb-4 ">
          Login
        </button>
      </nav>

      <div className="  flex flex-row  justify-between items-center-safe bg-gray-800 rounded-[10px] mb-4">
        <div className="p-10">
          <h1 className="mb-4 font-medium text-3xl">Mr Currency</h1>

          <p className="text-[18px] font-normal mb-4">
            Explore and manage your virtual currency securely across the digital
            world.
          </p>

          <button className="bg-gray-500 hover:bg-gray-700 px-4 py-2 rounded-sm cursor-pointer">
            Get started
          </button>
        </div>
        <img src="/hero.png" className="h-100 hidden md:block"></img>
      </div>

      <section className="bg-black py-6 px-2 rounded-[10px] border border-gray-600 cursor-text mb-10">
        <p className="text-green-600 mb-2">Currently, 1 MR = $1...</p>
        <p className="text-green-600">
          Stock Remaning: 1,000,000 MR{" "}
          <span className="animate-pulse duration-75">|</span>{" "}
        </p>
      </section>

      <div className="text-center text-3xl font-medium mb-4">About</div>
      <div className="flex flex-row-reverse justify-between items-center mb-10">
        <p className=" text-slate-200 text-[18px] w-170">
          This platform is a centralized virtual economy designed to explore how
          digital currencies work without relying on blockchain or speculation.
          Instead of focusing on hype, the system emphasizes utility, fairness,
          and transparency. Users earn and use virtual coins to unlock features.
          Every action follows clear economic rules such as limited supply,
          transaction taxes, and controlled circulation.
        </p>

        <IconCoins
          stroke={1}
          className="h-50 w-50 hidden md:block text-yellow-400"
        />
      </div>
      <div className="text-center text-3xl font-medium mb-10">Rules</div>
      <div>
        <p className="text-2xl font-medium mb-2">1. Limited Coin Supply</p>
        <p className="text-gray-400 mb-4">
          The total number of coins is capped to maintain balance. New coins
          enter the system only through specific activities like rewards and
          transfers.
        </p>

        <p className="text-2xl font-medium mb-2">2. Earned, Not Promised</p>
        <p className="text-gray-400 mb-6">
          Coins can be earned by participating in platform features. There are
          no guaranteed profits.
        </p>

        <p className="text-2xl font-medium mb-2">
          3. Transaction Fees & Benefits
        </p>
        <p className="text-gray-400 mb-6">
          Each transfer carries a small fee. Users with premium badges pay lower
          fees and enjoy higher daily transfer limits.
        </p>

        <p className="text-2xl font-medium mb-2">4. Coins Have Utility</p>
        <p className="text-gray-400 mb-10">
          Coins unlock benefits like badges, faster transfers, and profile
          upgrades. Spending coins helps keep the economy stable.
        </p>
      </div>

      <footer className="p-4 bg-black text-center justify-center flex flex-col items-center h-full ">
        <p className="mb-4">Ryomen</p>

        <Link href="https://www.github.com/Sky28702">
          <IconBrandGithub stroke={2} className="mb-4" />
        </Link>

        <p className="mb-4"> © 2026 Mr Currency. All rights reserved. </p>
      </footer>
    </section>
  );
}

import Link from "next/link";
import React from "react";

function DashboardCard({ title, jumlah, link, icon}) {
  return (
    <Link href={link} className="group">
      <div className="border border-solid rounded-2xl bg-[#F4F7FF] w-[302px] pl-10 py-8 pr-16 transition-colors duration-200 group-hover:bg-[#1F3B82]">
        <div className="flex flex-col gap-y-7">
          <div className="flex flex-row gap-x-3 items-end">
            <img src={icon} className='h-[44px] filter group-hover:invert group-hover:brightness-0 group-hover:sepia group-hover:contrast-200 group-hover:hue-rotate-180' />
            <p className="text-lg font-semibold leading-normal text-[#202020] group-hover:text-[#FCFCFC]">{title}</p>
          </div>
            <h1 className="text-3xl font-bold leading-snug tracking-wide text-[#202020] group-hover:text-[#FCFCFC]">{jumlah}</h1>
        </div>
      
      </div>
    </Link>
  );
}

export default DashboardCard;

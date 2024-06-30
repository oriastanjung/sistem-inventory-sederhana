import { getAllLostKargo } from "@/actions/lost_kargo";
import { getAllPerusahaan } from "@/actions/perusahaan";
import TableLostKargo from "@/components/parts/LostKargoPage/dashboard/TableLostKargo";
import { Button } from "@/components/ui/button";
import { convertToRupiah } from "@/utils/formatCurrency";
import Link from "next/link";
import React from "react";

export const revalidate = 0

async function LostKargoPage() {
  const allLostKargoData = await getAllLostKargo();
  // console.log(allLostKargoData)
  const allPerusahaanData = await getAllPerusahaan()
  return (
    <main className="w-full md:w-5/6 bg-[#FDFDFD] container mx-auto pl-16 pr-12 pt-12 min-h-screen">
      <div className="flex flex-row gap-x-2 items-center text-[#202020] hover:text-[#2C71E1] group">
        {/* icon black */}
        <svg className="group-hover:hidden" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M3 10H18M3 10L9 4M3 10L9 16" stroke="#282828" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>

        {/* icon blue */}
        <svg className="group-hover:block hidden" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M3 10H18M3 10L9 4M3 10L9 16" stroke="#2C71E1" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>

      <Link href={"/"}>Dashboard</Link>
      </div>
    
      <section className="flex justify-between items-center mt-14">
        <h3 className="text-2xl font-semibold leading-snug text-[#202020]">Lost Cargo</h3>
        <Button>
          <Link href={"/lost_kargo/tambah"}>Tambah</Link>
        </Button>
      </section>

      <TableLostKargo allPerusahaan={allPerusahaanData ? allPerusahaanData : []} allLostKargoData={allLostKargoData ? allLostKargoData : []} />
    </main>
  );
}

export default LostKargoPage;

import { getAllAlatBerat } from "@/actions/alat_berat";
import { getAllLostKargo } from "@/actions/lost_kargo";
import { getAllPerusahaan } from "@/actions/perusahaan";
import TableAlatBerat from "@/components/parts/AlatBeratPage/dashboard/TableAlatBerat";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

export const revalidate = 0

async function AlatBeratPage() {
  const allAlatBeratData = await getAllAlatBerat();
  // console.log(allAlatBeratData)
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
        <h3 className="text-2xl font-semibold leading-snug text-[#202020]">Alat Berat</h3>
        <Button>
          <Link href={"/alat_berat/tambah"}>Tambah</Link>
        </Button>
      </section>

      <TableAlatBerat allPerusahaan={allPerusahaanData ? allPerusahaanData : []} allAlatBeratData={allAlatBeratData ? allAlatBeratData : []} />
    </main>
  );
}

export default AlatBeratPage;

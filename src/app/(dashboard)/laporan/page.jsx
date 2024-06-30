import React from 'react'
import { getAllAlatBerat } from "@/actions/alat_berat";
import { getAllKontainer } from "@/actions/kontainer";
import { getAllLostKargo } from "@/actions/lost_kargo";
import MainContent from '@/components/parts/LaporanPage/MainContent';
import { getAllPerusahaan } from '@/actions/perusahaan';

export const revalidate = 0

async function LaporanPage() {
  const responseLostKargo = await getAllLostKargo()
  const responseKontainer = await getAllKontainer()
  const responseAlatBerat = await getAllAlatBerat()
  const allPerusahaanData = await getAllPerusahaan()

  return (
    <main className="w-full md:w-5/6 bg-[#FDFDFD] container mx-auto pl-16 pr-12 pt-12 min-h-screen">
      <h1 className="text-3xl font-bold leading-snug tracking-wide text-[#9F9F9F]">Laporan</h1>
      <MainContent 
      dataAlatBerat={responseAlatBerat ? responseAlatBerat : []}
      dataKontainer={responseKontainer ? responseKontainer : []}
      dataLostKargo={responseLostKargo ? responseLostKargo : []}
      allPerusahaanData={allPerusahaanData ? allPerusahaanData : []}
       />
    </main>
  )
}

export default LaporanPage
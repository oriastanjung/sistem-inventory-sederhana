
import { getAllPerusahaan } from '@/actions/perusahaan'
import TambahLostKargoForm from "@/components/parts/LostKargoPage/forms/TambahLostKargoForm"
import React from 'react'

async function TambahLostKargoPage() {
  const dataPerusahaan = await getAllPerusahaan() 
  return (
    <main className="w-5/6 bg-gray-200 p-10 min-h-screen">
        <TambahLostKargoForm perusahaan_data={dataPerusahaan? dataPerusahaan : []}/>
    </main>
  )
}

export default TambahLostKargoPage
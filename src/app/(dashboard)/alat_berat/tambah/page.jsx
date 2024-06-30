
import { getAllPerusahaan } from '@/actions/perusahaan'
import TambahAlatBeratForm from '@/components/parts/AlatBeratPage/forms/TambahAlatBeratForm'
import React from 'react'

async function TambahLostKargoPage() {
  const dataPerusahaan = await getAllPerusahaan() 
  return (
    <main className="w-5/6 bg-gray-200 p-10 min-h-screen">
        <TambahAlatBeratForm perusahaan_data={dataPerusahaan? dataPerusahaan : []}/>
    </main>
  )
}

export default TambahLostKargoPage
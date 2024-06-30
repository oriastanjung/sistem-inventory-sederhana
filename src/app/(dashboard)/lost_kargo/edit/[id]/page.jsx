import React from "react";
import { getAllPerusahaan } from "@/actions/perusahaan";
import { getOneLostKargo } from "@/actions/lost_kargo";
import EditLostKargoForm from "@/components/parts/LostKargoPage/forms/EditLostKargoForm";
export const revalidate = 0
async function LostKargoEditPage({ params }) {
  const dataLostKargo = await getOneLostKargo(params.id);
  const dataPerusahaan = await getAllPerusahaan();
  return (
    <main className="w-5/6 bg-gray-200 p-10 min-h-screen">
      <EditLostKargoForm
        perusahaan_data={dataPerusahaan ? dataPerusahaan : []}
        defaultData={dataLostKargo ? dataLostKargo : []}
      />
    </main>
  );
}

export default LostKargoEditPage;

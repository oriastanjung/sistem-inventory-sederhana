import React from "react";
import { getAllPerusahaan } from "@/actions/perusahaan";
import { getOneAlatBerat } from "@/actions/alat_berat";
import EditAlatBeratForm from "@/components/parts/AlatBeratPage/forms/EditAlatBeratForm";
export const revalidate = 0
async function LostKargoEditPage({ params }) {
  const dataAlatBerat = await getOneAlatBerat(params.id);
  const dataPerusahaan = await getAllPerusahaan();
  return (
    <main className="w-5/6 bg-gray-200 p-10 min-h-screen">
      <EditAlatBeratForm
        perusahaan_data={dataPerusahaan ? dataPerusahaan : []}
        defaultData={dataAlatBerat ? dataAlatBerat : []}
      />
    </main>
  );
}

export default LostKargoEditPage;

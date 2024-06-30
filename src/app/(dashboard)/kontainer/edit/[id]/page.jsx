import React from "react";
import { getAllPerusahaan } from "@/actions/perusahaan";

import EditKontainerForm from "@/components/parts/KontainerPage/forms/EditKontainerForm";
import { getOneKontainer } from "@/actions/kontainer";

export const revalidate = 0;
async function LostKargoEditPage({ params }) {
  const dataKontainer = await getOneKontainer(params.id);
  const dataPerusahaan = await getAllPerusahaan();
  return (
    <main className="w-5/6 bg-gray-200 p-10 min-h-screen">
      <EditKontainerForm
        perusahaan_data={dataPerusahaan ? dataPerusahaan : []}
        defaultData={dataKontainer ? dataKontainer : []}
      />
    </main>
  );
}

export default LostKargoEditPage;

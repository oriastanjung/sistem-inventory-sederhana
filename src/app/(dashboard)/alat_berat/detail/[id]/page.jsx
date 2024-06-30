import { getOneAlatBerat } from "@/actions/alat_berat";
// import { getOneLostKargo } from "@/actions/lost_kargo";
import { Button } from "@/components/ui/button";
import { convertToRupiah } from "@/utils/formatCurrency";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import React from "react";
export const revalidate = 0
async function DetailAlatBeratPage({ params }) {
  const dataAlatBerat = await getOneAlatBerat(params.id);
  return (
    <main className="w-5/6 bg-gray-200 p-10 min-h-screen">
      <Link
        className="flex items-center gap-2 font-medium hover:underline"
        href={"/alat_berat"}
      >
        <ArrowLeft /> Alat Berat
      </Link>

      <div className="flex flex-col gap-2 mb-4 mt-20">
        <p className="text-lg font-medium">No Nota</p>
        <p className="rounded-lg px-3 py-2">{dataAlatBerat.no_nota}</p>
      </div>
      <div className="flex flex-col gap-2 mb-4">
        <p className="text-lg font-medium">Perusahaan</p>
        <p className="rounded-lg px-3 py-2">
          {dataAlatBerat.Perusahaan.nama_perusahaan}
        </p>
      </div>
      <div className="flex flex-col gap-2 mb-4">
        <p className="text-lg font-medium">Tanggal Penumpukan</p>
        <p className="rounded-lg px-3 py-2">
          {new Date(
            dataAlatBerat.tanggal_mulai_penumpukan
          ).toLocaleDateString()}{" "}
          S.D{" "}
          {new Date(
            dataAlatBerat.tanggal_selesai_penumpukan
          ).toLocaleDateString()}
        </p>
      </div>
      <div className="flex flex-col gap-2 mb-4">
        <p className="text-lg font-medium">Jenis Alat</p>
        <p className="rounded-lg px-3 py-2">{dataAlatBerat.jenis_barang}</p>
      </div>
      <div className="flex flex-col gap-2 mb-4">
        <p className="text-lg font-medium">Satuan (Ton/m3)</p>
        <p className="rounded-lg px-3 py-2">{dataAlatBerat.satuan} Ton/m3</p>
      </div>
      <div className="flex flex-col gap-2 mb-4">
        <p className="text-lg font-medium">Jumlah Uang</p>
        <p className="rounded-lg px-3 py-2">
          {convertToRupiah(dataAlatBerat.jumlah_uang)}
        </p>
      </div>
      <div className="flex flex-col gap-2 mb-4">
        <p className="text-lg font-medium">Status Pembayaran</p>
        <p className="rounded-lg px-3 py-2">
          {dataAlatBerat.status_pembayaran ? "LUNAS" : "BELUM LUNAS"}
        </p>
      </div>
    </main>
  );
}

export default DetailAlatBeratPage;

import { getOneKontainer } from "@/actions/kontainer";
import { Button } from "@/components/ui/button";
import { convertToRupiah } from "@/utils/formatCurrency";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import React from "react";

export const revalidate = 0;

async function DetailKontainerPage({ params }) {
  const dataKontainer = await getOneKontainer(params.id);

  return (
    <main className="w-5/6 bg-gray-200 p-10 min-h-screen">
      <Link
        className="flex items-center gap-2 font-medium hover:underline"
        href={"/kontainer"}
      >
        <ArrowLeft /> Kontainer
      </Link>

      <div className="flex flex-col gap-2 mb-4 mt-20">
        <p className="text-lg font-medium">No Nota</p>
        <p className="rounded-lg px-3 py-2">{dataKontainer.no_nota}</p>
      </div>
      <div className="flex flex-col gap-2 mb-4">
        <p className="text-lg font-medium">No Kontainer</p>
        <ul className="flex flex-col gap-3 items-start justify-start">
          {JSON.parse(dataKontainer.kontainer_id).map((item, idxx) => (
            <li className="rounded-lg px-3 py-2" key={idxx}>
              {idxx+1} - {item}
            </li>
          ))}
        </ul>
      </div>
      <div className="flex flex-col gap-2 mb-4">
        <p className="text-lg font-medium">Ukuran Kontainer</p>
        <p className="rounded-lg px-3 py-2">{dataKontainer.ukuran_kontainer}</p>
      </div>
      <div className="flex flex-col gap-2 mb-4">
        <p className="text-lg font-medium">Perusahaan</p>
        <p className="rounded-lg px-3 py-2">
          {dataKontainer.Perusahaan.nama_perusahaan}
        </p>
      </div>
      <div className="flex flex-col gap-2 mb-4">
        <p className="text-lg font-medium">Tanggal Mulai M1</p>
        <p className="rounded-lg px-3 py-2">
          {new Date(dataKontainer.tanggal_mulai_m1).toLocaleDateString()}
        </p>
      </div>
      <div className="flex flex-col gap-2 mb-4">
        <p className="text-lg font-medium">Tanggal Selesai M1</p>
        <p className="rounded-lg px-3 py-2">
          {new Date(dataKontainer.tanggal_selesai_m1).toLocaleDateString()}
        </p>
      </div>
      <div className="flex flex-col gap-2 mb-4">
        <p className="text-lg font-medium">Tanggal Mulai M2</p>
        <p className="rounded-lg px-3 py-2">
          {new Date(dataKontainer.tanggal_mulai_m2).toLocaleDateString()}
        </p>
      </div>
      <div className="flex flex-col gap-2 mb-4">
        <p className="text-lg font-medium">Tanggal Selesai M2</p>
        <p className="rounded-lg px-3 py-2">
          {new Date(dataKontainer.tanggal_selesai_m2).toLocaleDateString()}
        </p>
      </div>
      <div className="flex flex-col gap-2 mb-4">
        <p className="text-lg font-medium">Jumlah Hari</p>
        <p className="rounded-lg px-3 py-2">{dataKontainer.hari}</p>
      </div>
      <div className="flex flex-col gap-2 mb-4">
        <p className="text-lg font-medium">Jenis Kontainer</p>
        <p className="rounded-lg px-3 py-2">{dataKontainer.jenis_kontainer}</p>
      </div>
      <div className="flex flex-col gap-2 mb-4">
        <p className="text-lg font-medium">Jumlah Uang</p>
        <p className="rounded-lg px-3 py-2">
          {convertToRupiah(dataKontainer.jumlah_uang)}
        </p>
      </div>
      <div className="flex flex-col gap-2 mb-4">
        <p className="text-lg font-medium">Lo/Lo</p>
        <p className="rounded-lg px-3 py-2">
          {convertToRupiah(dataKontainer.lo)}
        </p>
      </div>
      <div className="flex flex-col gap-2 mb-4">
        <p className="text-lg font-medium">Status Pembayaran</p>
        <p className="rounded-lg px-3 py-2">
          {dataKontainer.status_pembayaran ? "LUNAS" : "BELUM LUNAS"}
        </p>
      </div>
    </main>
  );
}

export default DetailKontainerPage;

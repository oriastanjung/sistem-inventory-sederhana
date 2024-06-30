"use client";
import { convertToRupiah } from "@/utils/formatCurrency";
import React, { useState } from "react";
import InputWithLabel from "@/components/atom/InputWithLabel";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { deleteOneAlatBerat } from "@/actions/alat_berat";
import jsPDF from "jspdf";
import "jspdf-autotable";

function TableAlatBerat({
  allAlatBeratData,
  allPerusahaan,
  hideFilter,
  hideAction,
  showPrint,
}) {
  const router = useRouter();
  // console.log(allAlatBeratData);
  const [filters, setFilters] = useState({
    no_nota: "",
    tanggal_mulai_penumpukan: "",
    tanggal_selesai_penumpukan: "",
    perusahaan_id: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: value,
    }));
  };

  const filteredData = allAlatBeratData?.filter((kargo) => {
    return (
      (!filters.no_nota || kargo.no_nota.includes(filters.no_nota)) &&
      (!filters.tanggal_mulai_penumpukan ||
        new Date(kargo.tanggal_mulai_penumpukan) >=
          new Date(filters.tanggal_mulai_penumpukan)) &&
      (!filters.tanggal_selesai_penumpukan ||
        new Date(kargo.tanggal_selesai_penumpukan) <=
          new Date(filters.tanggal_selesai_penumpukan)) &&
      (!filters.perusahaan_id || kargo.perusahaan_id === filters.perusahaan_id)
    );
  });
  async function handleDeleteData(id) {
    const dataDeleted = await deleteOneAlatBerat(id);
    if (dataDeleted) {
      alert("data didelete!");
      router.push("/alat_berat");
      router.refresh();
    }
  }
  const handlePrintData = () => {
    const doc = new jsPDF();

    // Gambar dalam base64 atau URL
    const imageUrl = "/Logo.png"; // Ganti dengan base64 atau URL gambar Anda

    // Tambahkan gambar
    const imageX = 10; // X posisi gambar
    const imageY = 10; // Y posisi gambar
    const imageWidth = 30; // Lebar gambar
    const imageHeight = 15; // Tinggi gambar
    doc.addImage(imageUrl, "PNG", imageX, imageY, imageWidth, imageHeight);

    // Tambahkan title
    const title = "Laporan Alat Berat";
    doc.setFontSize(16);
    doc.text(title, 80, 20);

    const tableColumn = [
      "No",
      "No Nota",
      "Perusahaan",
      "Tanggal Penumpukan",
      "Jenis Alat",
      "Satuan Ton/m3",
      "Jumlah Uang",
    ];

    const tableRows = [];

    filteredData.forEach((alat, index) => {
      const alatData = [
        index + 1,
        alat.no_nota,
        alat.Perusahaan.nama_perusahaan,
        `${new Date(
          alat.tanggal_mulai_penumpukan
        ).toLocaleDateString()} S.D. ${new Date(
          alat.tanggal_selesai_penumpukan
        ).toLocaleDateString()}`,
        alat.jenis_barang,
        alat.satuan,
        convertToRupiah(alat.jumlah_uang),
      ];
      tableRows.push(alatData);
    });

    doc.autoTable({
      startY: imageY + imageHeight + 10, // Mulai tabel setelah gambar
      head: [tableColumn],
      body: tableRows,
      styles: {
        fontSize: 7,
        cellPadding: 2,
        overflow: "linebreak",
      },
      columnStyles: {
        0: { cellWidth: 10 }, // No
        1: { cellWidth: 20 }, // No Nota
        2: { cellWidth: 30 }, // Perusahaan
        3: { cellWidth: 40 }, // Tanggal Penumpukan
        4: { cellWidth: 20 }, // Jenis Alat
        5: { cellWidth: 20 }, // Satuan Ton/m3
        6: { cellWidth: 40 }, // Jumlah Uang
      },
      didDrawCell: (data) => {
        if (data.section === "body") {
          doc.setFontSize(7);
          doc.setTextColor(40);
        }
      },
    });

    const blob = doc.output("blob");
    const url = URL.createObjectURL(blob);
    window.open(url);
  };

  return (
    <div>
      {!hideFilter && (
        <section className="flex flex-col md:flex-row gap-4 my-11">
          <InputWithLabel
            label="No Nota"
            type="text"
            id="no_nota"
            name="no_nota"
            value={filters.no_nota}
            onChange={handleInputChange}
            placeholder="Masukkan No Nota"
            isRequired={false}
          />
          <InputWithLabel
            label="Tanggal Mulai Penumpukan"
            type="date"
            id="tanggal_mulai_penumpukan"
            name="tanggal_mulai_penumpukan"
            value={filters.tanggal_mulai_penumpukan}
            onChange={handleInputChange}
            placeholder="Pilih Tanggal Mulai Penumpukan"
            isRequired={false}
          />
          <InputWithLabel
            label="Tanggal Selesai Penumpukan"
            type="date"
            id="tanggal_selesai_penumpukan"
            name="tanggal_selesai_penumpukan"
            value={filters.tanggal_selesai_penumpukan}
            onChange={handleInputChange}
            placeholder="Pilih Tanggal Selesai Penumpukan"
            isRequired={false}
          />
          <div className="flex flex-col gap-2 mb-4">
            <label className="text-lg font-medium" htmlFor="perusahaan_id">
              Perusahaan
            </label>
            <select
              className="rounded-lg px-3 py-2"
              id="perusahaan_id"
              name="perusahaan_id"
              value={filters.perusahaan_id}
              onChange={handleInputChange}
            >
              <option value="">Pilih Perusahaan</option>
              {allPerusahaan.map((item, idx) => (
                <option key={idx} value={item.id}>
                  {item.nama_perusahaan}
                </option>
              ))}
            </select>
          </div>
          {showPrint && (
            <div className="flex items-center ml-auto">
              <Button className="" onClick={handlePrintData}>
                CETAK
              </Button>
            </div>
          )}
        </section>
      )}

      <section className={`${hideFilter ? "" : "mt-14"} overflow-scroll md:overflow-autow-full`}>
        <table className="min-w-full bg-white rounded-xl">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b">No</th>
              <th className="py-2 px-4 border-b">No Nota</th>
              {/* <th className="py-2 px-4 border-b">Lokasi Penumpukan</th> */}
              <th className="py-2 px-4 border-b">Perusahaan</th>
              <th className="py-2 px-4 border-b">Tanggal Penumpukan</th>
              <th className="py-2 px-4 border-b">Jenis Alat</th>
              <th className="py-2 px-4 border-b">Satuan Ton/m3</th>
              <th className="py-2 px-4 border-b">Jumlah Uang</th>
              {!hideAction && <th className="py-2 px-4 border-b">Action</th>}
              {hideAction && (
                <th className="py-2 px-4 border-b">Status Pembayaran</th>
              )}
            </tr>
          </thead>
          <tbody>
            {filteredData.map((kargo, idx) => (
              <tr key={idx}>
                <td className="py-2 px-4 border-b">{idx + 1}</td>
                <td className="py-2 px-4 border-b">{kargo.no_nota}</td>
                {/* <td className="py-2 px-4 border-b uppercase">
                  {kargo.lokasi_penumpukan}
                </td> */}
                <td className="py-2 px-4 border-b">
                  {kargo.Perusahaan.nama_perusahaan}
                </td>
                <td className="py-2 px-4 border-b">
                  {new Date(
                    kargo.tanggal_mulai_penumpukan
                  ).toLocaleDateString()}{" "}
                  S.D.{" "}
                  {new Date(
                    kargo.tanggal_selesai_penumpukan
                  ).toLocaleDateString()}
                </td>
                <td className="py-2 px-4 border-b uppercase">
                  {kargo.jenis_barang}
                </td>
                <td className="py-2 px-4 border-b">{kargo.satuan}</td>
                <td className="py-2 px-4 border-b">
                  {convertToRupiah(kargo.jumlah_uang)}
                </td>
                {!hideAction && (
                  <td className="py-2 px-4 border-b flex items-center gap-2">
                    <Button variant={"default"}>
                      <Link href={`/alat_berat/detail/${kargo.id}`}>
                        Detail
                      </Link>
                    </Button>
                    <Button variant={"outline"}>
                      <Link href={`/alat_berat/edit/${kargo.id}`}>Edit</Link>
                    </Button>
                    <Button
                      variant={"destructive"}
                      onClick={() => handleDeleteData(kargo.id)}
                    >
                      Delete
                    </Button>
                  </td>
                )}
                {hideAction && (
                  <td className={`py-3 px-4 border-b text-center `}>
                    <span
                      className={`px-3 py-2  border rounded-md border-black text-center ${
                        kargo.status_pembayaran
                          ? "bg-[#E0E7F9]"
                          : "bg-[#F9E0E0]"
                      }`}
                    >
                      {kargo.status_pembayaran ? "Lunas" : "Belum Lunas"}
                    </span>
                  </td>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </div>
  );
}

export default TableAlatBerat;

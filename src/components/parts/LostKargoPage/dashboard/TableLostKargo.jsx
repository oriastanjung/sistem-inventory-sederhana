"use client";
import { convertToRupiah } from "@/utils/formatCurrency";
import React, { useState } from "react";
import InputWithLabel from "@/components/atom/InputWithLabel";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { deleteOneLostKargo } from "@/actions/lost_kargo";
import { useRouter } from "next/navigation";
import jsPDF from "jspdf";
import "jspdf-autotable";
import moment from "moment";

function TableLostKargo({
  allLostKargoData,
  allPerusahaan,
  hideFilter,
  hideAction,
  showPrint,
  
}) {
  const router = useRouter();
  // console.log(allLostKargoData);
  const [filters, setFilters] = useState({
    no_nota: "",
    tanggal_mulai_penumpukan: "",
    tanggal_selesai_penumpukan: "",
    perusahaan_id: "",
  });
  async function handleDeleteData(id) {
    const dataDeleted = await deleteOneLostKargo(id);
    if (dataDeleted) {
      alert("data didelete!");
      router.push("/lost_kargo");
      router.refresh();
    }
  }
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: value,
    }));
  };

  const filteredData = allLostKargoData?.filter((kargo) => {
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

  const handlePrintData = () => {
    const doc = new jsPDF();

    // Gambar dalam base64 atau URL
    const imageUrl = "/gambar/logobpbatam.png"; // Ganti dengan base64 atau URL gambar Anda

    // Tambahkan gambar
    const imageX = 10; // X posisi gambar
    const imageY = 10; // Y posisi gambar
    const imageWidth = 30; // Lebar gambar
    const imageHeight = 15; // Tinggi gambar
    doc.addImage(imageUrl, "PNG", imageX, imageY, imageWidth, imageHeight);

    // Tambahkan title
    const title = "Laporan Lost Cargo";
    doc.setFontSize(16);
    doc.text(title, 80, 20);

    const tableColumn = [
      "No",
      "No Nota",
      "Lokasi Penumpukan",
      "Perusahaan",
      "Tanggal Penumpukan",
      "Jenis Barang",
      "Satuan Ton/m3",
      "Jumlah Uang",
    ];

    const tableRows = [];

    filteredData.forEach((kargo, index) => {
      const kargoData = [
        index + 1,
        kargo.no_nota,
        kargo.lokasi_penumpukan.toUpperCase(),
        kargo.Perusahaan.nama_perusahaan,
        `${new Date(
          kargo.tanggal_mulai_penumpukan
        ).toLocaleDateString()} S.D. ${new Date(
          kargo.tanggal_selesai_penumpukan
        ).toLocaleDateString()}`,
        kargo.jenis_barang.toUpperCase(),
        kargo.satuan,
        convertToRupiah(kargo.jumlah_uang),
      ];
      tableRows.push(kargoData);
    });

    doc.autoTable({
      startY: imageY + imageHeight + 10, // Mulai tabel setelah gambar
      head: [tableColumn],
      body: tableRows,
      styles: {
        fontSize: 8,
        cellPadding: 2,
        overflow: "linebreak",
      },
      columnStyles: {
        0: { cellWidth: 10 }, // No
        1: { cellWidth: 40 }, // No Nota
        2: { cellWidth: 20 }, // Lokasi Penumpukan
        3: { cellWidth: 20 }, // Perusahaan
        4: { cellWidth: 20 }, // Tanggal Penumpukan
        5: { cellWidth: 20 }, // Jenis Barang
        6: { cellWidth: 20 }, // Satuan Ton/m3
        7: { cellWidth: 30 }, // Jumlah Uang
      },
      didDrawCell: (data) => {
        if (data.section === "body") {
          doc.setFontSize(8);
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
        <section className="flex flex-col md:flex-row gap-20 my-11 flex-wrap">
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
              className="rounded-2xl px-4 py-3.5"
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
              <th className="py-2 px-4 border-b">Lokasi Penumpukan</th>
              <th className="py-2 px-4 border-b">Perusahaan</th>
              <th className="py-2 px-4 border-b">Tanggal Penumpukan</th>
              <th className="py-2 px-4 border-b">Jenis Barang</th>
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
                <td className="py-2 px-4 border-b uppercase">
                  {kargo.lokasi_penumpukan}
                </td>
                <td className="py-2 px-4 border-b">
                  {kargo.Perusahaan.nama_perusahaan}
                </td>
                <td className="py-2 px-4 border-b">
            {moment(kargo.tanggal_mulai_penumpukan).format('l')}
                
                  S.D.{" "}
            {moment( kargo.tanggal_selesai_penumpukan).format("l")}
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
                      <Link href={`/lost_kargo/detail/${kargo.id}`}>
                        Detail
                      </Link>
                    </Button>
                    <Button variant={"outline"}>
                      <Link href={`/lost_kargo/edit/${kargo.id}`}>Edit</Link>
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
                  <td className={`py-2 px-4 border-b text-center`}>
                    <span
                      className={`px-3 py-2 border rounded-md border-black text-center ${
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

export default TableLostKargo;

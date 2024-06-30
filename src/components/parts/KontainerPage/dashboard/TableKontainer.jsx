"use client";
import { convertToRupiah } from "@/utils/formatCurrency";
import React, { useState } from "react";
import InputWithLabel from "@/components/atom/InputWithLabel";
import { Button } from "@/components/ui/button";
import Link from "next/link";

import { useRouter } from "next/navigation";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { deleteOneKontainer } from "@/actions/kontainer";
import jsPDF from "jspdf";
import "jspdf-autotable";


function TableKontainer({
  allKontainerData,
  allPerusahaan,
  hideFilter,
  hideAction,
  showPrint,
}) {
  const router = useRouter();
  // console.log(allKontainerData);
  const [filters, setFilters] = useState({
    no_nota: "",
    tanggal_mulai_penumpukan: "",
    tanggal_selesai_penumpukan: "",
    perusahaan_id: "",
  });
  const [expandedRows, setExpandedRows] = useState([]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: value,
    }));
  };

  const handleToggleRow = (index) => {
    setExpandedRows((prevExpandedRows) =>
      prevExpandedRows.includes(index)
        ? prevExpandedRows.filter((row) => row !== index)
        : [...prevExpandedRows, index]
    );
  };

  const filteredData = allKontainerData?.filter((kargo) => {
    return (
      (!filters.no_nota || kargo.no_nota.includes(filters.no_nota)) &&
      (!filters.tanggal_mulai_penumpukan ||
        new Date(kargo.tanggal_mulai_m1) >=
          new Date(filters.tanggal_mulai_penumpukan)) &&
      (!filters.tanggal_selesai_penumpukan ||
        new Date(kargo.tanggal_selesai_m1) <=
          new Date(filters.tanggal_selesai_penumpukan)) &&
      (!filters.tanggal_mulai_penumpukan ||
        new Date(kargo.tanggal_mulai_m2) >=
          new Date(filters.tanggal_mulai_penumpukan)) &&
      (!filters.tanggal_selesai_penumpukan ||
        new Date(kargo.tanggal_selesai_m2) <=
          new Date(filters.tanggal_selesai_penumpukan)) &&
      (!filters.perusahaan_id || kargo.perusahaan_id === filters.perusahaan_id)
    );
  });

  async function handleDeleteData(id) {
    const dataDeleted = await deleteOneKontainer(id);
    if (dataDeleted) {
      alert("data didelete!");
      router.push("/kontainer");
      router.refresh();
    }
  }
  const handlePrintData = () => {
    const doc = new jsPDF();

    // Gambar dalam base64 atau URL
    // const imageUrl = "/Logo.png"; // Ganti dengan base64 atau URL gambar Anda
    const imageUrl = "/gambar/logobpbatam.png"; // Ganti dengan base64 atau URL gambar Anda


    // Tambahkan gambar
    const imageX = 10; // X posisi gambar
    const imageY = 10; // Y posisi gambar
    const imageWidth = 30; // Lebar gambar
    const imageHeight = 15; // Tinggi gambar
    doc.addImage(imageUrl, "PNG", imageX, imageY, imageWidth, imageHeight);

    // Tambahkan title
    const title = "Laporan Kontainer";
    doc.setFontSize(16);
    doc.text(title, 80, 20);

    const tableColumn = [
      "No",
      "No \nKontainer",
      "No Nota",
      "Perusahaan",
      "Ukuran \nKontainer",
      "Jenis \nKontainer",
      "M1",
      "M2",
      "Hari",
      "Total",
      "Lo/Lo",
    ];

    const tableRows = [];

    filteredData.forEach((kargo, index) => {
      const kontainerIdList = JSON.parse(kargo.kontainer_id).join(", \n");
      console.log(kontainerIdList)
      const kargoData = [
        index + 1,
        kontainerIdList,
        kargo.no_nota,
        kargo.Perusahaan.nama_perusahaan,
        kargo.ukuran_kontainer,
        kargo.jenis_kontainer,
        `${new Date(
          kargo.tanggal_mulai_m1
        ).toLocaleDateString()} S.D. ${new Date(
          kargo.tanggal_selesai_m1
        ).toLocaleDateString()}`,
        `${new Date(
          kargo.tanggal_mulai_m2
        ).toLocaleDateString()} S.D. ${new Date(
          kargo.tanggal_selesai_m2
        ).toLocaleDateString()}`,
        kargo.hari,
        convertToRupiah(kargo.jumlah_uang),
        convertToRupiah(kargo.lo),
      ];
      tableRows.push(kargoData);
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
        1: { cellWidth: 20 }, // No Kontainer
        2: { cellWidth: 20 }, // No Nota
        3: { cellWidth: 20 }, // Perusahaan
        4: { cellWidth: 17 }, // Ukuran Kontainer
        5: { cellWidth: 17 }, // Jenis Kontainer
        6: { cellWidth: 15 }, // M1
        7: { cellWidth: 15 }, // M2
        8: { cellWidth: 10 }, // Hari
        9: { cellWidth: 20 }, // Total
        10: { cellWidth: 20 }, // Lo/Lo
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
              <th className="py-2 px-4 border-b">No Kontainer</th>
              <th className="py-2 px-4 border-b">No Nota</th>
              <th className="py-2 px-4 border-b">Perusahaan</th>
              <th className="py-2 px-4 border-b">Ukuran Kontainer</th>
              {!hideAction && (
                <>
                  <th className="py-2 px-4 border-b">Jenis Kontainer</th>
                  <th className="py-2 px-4 border-b">M1</th>
                  <th className="py-2 px-4 border-b">M2</th>
                  <th className="py-2 px-4 border-b">Hari</th>
                </>
              )}
              <th className="py-2 px-4 border-b">Total</th>
              <th className="py-2 px-4 border-b">Lo/Lo</th>
              {!hideAction && <th className="py-2 px-4 border-b">Action</th>}
              {hideAction && (
                <th className="py-2 px-4 border-b">Status Pembayaran</th>
              )}
            </tr>
          </thead>
          <tbody>
            {filteredData.map((kargo, idx) => (
              <React.Fragment key={idx}>
                <tr>
                  <td className="py-2 px-4 border-b">{idx + 1}</td>
                  <td className="py-2 px-4 border-b flex flex-col items-center justify-center pt-6">
                    <button
                      className="border border-primary p-2 rounded-sm"
                      onClick={() => handleToggleRow(idx)}
                    >
                      {expandedRows.includes(idx) ? (
                        <FaChevronUp />
                      ) : (
                        <FaChevronDown />
                      )}
                    </button>
                    <ul className="flex flex-col gap-3 items-center justify-center pt-5">
                      {expandedRows.includes(idx) &&
                        JSON.parse(kargo.kontainer_id).map((item, idxx) => (
                          <li className="text-center" key={idxx}>
                            {item}
                          </li>
                        ))}
                    </ul>
                  </td>
                  <td className="py-2 px-4 border-b">{kargo.no_nota}</td>
                  <td className="py-2 px-4 border-b">
                    {kargo.Perusahaan.nama_perusahaan}
                  </td>
                  <td className="py-2 px-4 border-b text-center">
                    {kargo.ukuran_kontainer}
                  </td>
                  {!hideAction && (
                    <>
                      <td className="py-2 px-4 border-b">
                        {kargo.jenis_kontainer}
                      </td>

                      <td className="py-2 px-4 border-b">
                        {new Date(kargo.tanggal_mulai_m1).toLocaleDateString()}{" "}
                        S.D.{" "}
                        {new Date(
                          kargo.tanggal_selesai_m1
                        ).toLocaleDateString()}
                      </td>
                      <td className="py-2 px-4 border-b">
                        {new Date(kargo.tanggal_mulai_m2).toLocaleDateString()}{" "}
                        S.D.{" "}
                        {new Date(
                          kargo.tanggal_selesai_m2
                        ).toLocaleDateString()}
                      </td>
                      <td className="py-2 px-4 border-b uppercase">
                        {kargo.hari}
                      </td>
                    </>
                  )}
                  <td className="py-2 px-4 border-b">
                    {convertToRupiah(kargo.jumlah_uang)}
                  </td>
                  <td className="py-2 px-4 border-b">
                    {convertToRupiah(kargo.lo)}
                  </td>
                  {!hideAction && (
                    <td className="py-2 px-4 border-b flex items-center gap-2">
                      <Button variant={"default"}>
                        <Link href={`/kontainer/detail/${kargo.id}`}>
                          Detail
                        </Link>
                      </Button>
                      <Button variant={"outline"}>
                        <Link href={`/kontainer/edit/${kargo.id}`}>Edit</Link>
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
              </React.Fragment>
            ))}
          </tbody>
        </table>
      </section>
    </div>
  );
}

export default TableKontainer;

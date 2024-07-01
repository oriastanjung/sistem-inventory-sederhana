import React, { useEffect, useState } from "react";
import TableLaporanHooks from "./TableLaporanHooks";
import { Button } from "@/components/ui/button";
import { convertToRupiah } from "@/utils/formatCurrency";
import jsPDF from "jspdf";
import "jspdf-autotable";
function TableLaporan({ dataKontainer, dataAlatBerat, dataLostKargo }) {
  const [filterBulan, setFilterBulan] = useState("");
  const [filterTahun, setFilterTahun] = useState("");
  const [filteredData, setFilteredData] = useState([]);

  // Initial data from hooks
  const { dataLaporan, totalData } = TableLaporanHooks({
    dataKontainer,
    dataAlatBerat,
    dataLostKargo,
    filterTahun,
  });

  useEffect(() => {
    // Filter data based on filterBulan
    const finalFilteredData = dataLaporan.filter((item) => {
      return filterBulan ? item.bulan === filterBulan : true;
    });

    setFilteredData(finalFilteredData);
  }, [filterBulan, dataLaporan]);

  const handleFilterBulan = (event) => {
    setFilterBulan(event.target.value);
  };

  const handleFilterTahun = (event) => {
    setFilterTahun(event.target.value);
  };

  const capitalize = (s) => {
    if (typeof s !== "string") return "";
    return s.charAt(0).toUpperCase() + s.slice(1);
  };
  const handlePrintData = () => {
    const doc = new jsPDF("landscape");

    // Tambahkan gambar (ganti dengan base64 atau URL gambar Anda)
    const imageUrl = "/gambar/logobpbatam.png";
    const imageX = 10;
    const imageY = 10;
    const imageWidth = 30;
    const imageHeight = 15;
    doc.addImage(imageUrl, "PNG", imageX, imageY, imageWidth, imageHeight);

    // Tambahkan judul
    const title = "Laporan Rekapitulasi";
    doc.setFontSize(16);
    doc.text(title, 120, 20);

    // Kolom tabel
    const tableColumn = [
      "No",
      "Bulan",
      "20 ISI",
      "20 KSNG",
      "40 ISI",
      "40 KSNG",
      "Jumlah Uang Kontainer (Rp)",
      "Total Lo/lo (Rp)",
      "Total Loss Cargo (Ton/m³)",
      "Jumlah Uang Loss Cargo (Rp)",
      "Alat Berat (Ton/m³)",
      "Jumlah Uang Alat Berat (Rp)",
    ];

    // Data baris tabel
    const tableRows = [];
    filteredData.forEach((item, index) => {
      const rowData = [
        index + 1,
        capitalize(item.bulan), // Gunakan fungsi capitalize untuk bulan
        item.data.kontainer_20_isi,
        item.data.kontainer_20_kosong,
        item.data.kontainer_40_isi,
        item.data.kontainer_40_kosong,
        convertToRupiah(item.data.jumlah_uang_kontainer),
        convertToRupiah(item.data.total_lo),
        item.data.total_berat_loss_cargo,
        convertToRupiah(item.data.jumlah_uang_loss_cargo),
        item.data.total_berat_alat_berat,
        convertToRupiah(item.data.jumlah_uang_alat_berat),
      ];
      tableRows.push(rowData);
    });

    // Baris total
    const totalRow = [
      {
        content: "Total",
        colSpan: 2,
        styles: { fontStyle: "bold", textAlign: "center" },
      },
      {
        content: totalData.total20isi,
        styles: { fontStyle: "bold", textAlign: "center" },
      },
      {
        content: totalData.total20kosong,
        styles: { fontStyle: "bold", textAlign: "center" },
      },
      {
        content: totalData.total40isi,
        styles: { fontStyle: "bold", textAlign: "center" },
      },
      {
        content: totalData.total40kosong,
        styles: { fontStyle: "bold", textAlign: "center" },
      },

      { content: "", colSpan: 6, styles: { fontStyle: "bold" } },
    ];
    tableRows.push(totalRow);

    const totalRow1 = [
      {
        content: "Total Keseluruhan",
        colSpan: 2,
        styles: { fontStyle: "bold", textAlign: "center" },
      },
      {
        content:
          totalData.total20isi +
          totalData.total20kosong +
          totalData.total40isi +
          totalData.total40kosong,
        colSpan: 4,
        styles: { fontStyle: "bold", textAlign: "center" },
      },
      {
        content: convertToRupiah(totalData.totalUangKontainer),
        styles: { fontStyle: "bold", textAlign: "center" },
      },
      {
        content: convertToRupiah(totalData.totalUangLo),
        styles: { fontStyle: "bold", textAlign: "center" },
      },
      {
        content: totalData.totalBeratLossKargo,
        styles: { fontStyle: "bold", textAlign: "center" },
      },
      {
        content: convertToRupiah(totalData.totalUangLossKargo),
        styles: { fontStyle: "bold", textAlign: "center" },
      },
      {
        content: totalData.totalBeratAlatBerat,
        styles: { fontStyle: "bold", textAlign: "center" },
      },

      {
        content: convertToRupiah(totalData.totalUangAlatBerat),
        styles: { fontStyle: "bold", textAlign: "center" },
      },
    ];
    tableRows.push(totalRow1);
    // Tambahkan tabel menggunakan autoTable
    doc.autoTable({
      startY: imageY + imageHeight + 10,
      head: [tableColumn],
      body: tableRows,
      styles: {
        fontSize: 8,
        cellPadding: 2,
        overflow: "linebreak",
      },
      columnStyles: {
        0: { cellWidth: 10, halign: "center" }, // Kolom No
        1: { cellWidth: 25, halign: "center" }, // Kolom Bulan
        2: { cellWidth: 15, halign: "center" }, // Kolom 20 ISI
        3: { cellWidth: 15, halign: "center" }, // Kolom 20 KSNG
        4: { cellWidth: 15, halign: "center" }, // Kolom 40 ISI
        5: { cellWidth: 15, halign: "center" }, // Kolom 40 KSNG
        6: { cellWidth: 30, halign: "center" }, // Kolom Jumlah Uang Kontainer (Rp)
        7: { cellWidth: 30, halign: "center" }, // Kolom Total Lo/lo (Rp)
        8: { cellWidth: 30, halign: "center" }, // Kolom Total Loss Cargo (Ton/m³)
        9: { cellWidth: 30, halign: "center" }, // Kolom Jumlah Uang Loss Cargo (Rp)
        10: { cellWidth: 30, halign: "center" }, // Kolom Alat Berat (Ton/m³)
        11: { cellWidth: 30, halign: "center" }, // Kolom Jumlah Uang Alat Berat (Rp)
      },
      didDrawCell: (data) => {
        if (data.section === "body") {
          doc.setFontSize(8);
          doc.setTextColor(40);
        }
      },
    });

    // Simpan sebagai blob dan buka dalam tab baru
    const blob = doc.output("blob");
    const url = URL.createObjectURL(blob);
    window.open(url);
  };
  return (
    <div className="mt-20 flex flex-col w-full">
      <div className="flex justify-center gap-10 items-center w-full">
        <div className="flex flex-col gap-2 mb-4">
          <label className="text-lg font-medium" htmlFor="bulan">
            Bulan
          </label>
          <select
            className="rounded-2xl px-4 py-3.5"
            id="bulan"
            name="bulan"
            value={filterBulan}
            onChange={handleFilterBulan}
          >
            <option value="">Filter Bulan</option>
            <option value="januari">Januari</option>
            <option value="februari">Februari</option>
            <option value="maret">Maret</option>
            <option value="april">April</option>
            <option value="mei">Mei</option>
            <option value="juni">Juni</option>
            <option value="juli">Juli</option>
            <option value="agustus">Agustus</option>
            <option value="september">September</option>
            <option value="oktober">Oktober</option>
            <option value="november">November</option>
            <option value="desember">Desember</option>
          </select>
        </div>
        <div className="flex flex-col gap-2 mb-4">
          <label className="text-lg font-medium" htmlFor="tahun">
            Tahun
          </label>
          <select
            className="rounded-2xl px-4 py-3.5"
            id="tahun"
            name="tahun"
            value={filterTahun}
            onChange={handleFilterTahun}
          >
            <option value="">Filter Tahun</option>
            <option value="2022">2022</option>
            <option value="2023">2023</option>
            <option value="2024">2024</option>
            <option value="2025">2025</option>
            <option value="2026">2026</option>
            <option value="2027">2027</option>
            <option value="2028">2028</option>
            <option value="2029">2029</option>
            <option value="2030">2030</option>
          </select>
        </div>
        <div className="flex items-center ml-auto">
          <Button className="" onClick={handlePrintData}>
            CETAK
          </Button>
        </div>
      </div>
      <div className="mt-20">
        <table className="min-w-full bg-white rounded-xl">
          <thead>
            <tr>
              <th
                className="py-2 px-4 border text-center align-middle"
                rowSpan="2"
              >
                No
              </th>
              <th
                className="py-2 px-4 border text-center align-middle"
                rowSpan="2"
              >
                Bulan
              </th>
              <th className="py-2 px-4 border text-center" colSpan="4">
                Ukuran Kontainer
              </th>
              <th
                className="py-2 px-4 border text-center align-middle"
                rowSpan="2"
              >
                Jumlah Uang Kontainer (Rp)
              </th>
              <th
                className="py-2 px-4 border text-center align-middle"
                rowSpan="2"
              >
                Total Lo/lo (Rp)
              </th>
              <th
                className="py-2 px-4 border text-center align-middle"
                rowSpan="2"
              >
                Total Loss Cargo (Ton/m<sup>3</sup>)
              </th>
              <th
                className="py-2 px-4 border text-center align-middle"
                rowSpan="2"
              >
                Jumlah Uang Loss Cargo (Rp)
              </th>
              <th
                className="py-2 px-4 border text-center align-middle"
                rowSpan="2"
              >
                Alat Berat (Ton/m<sup>3</sup>)
              </th>
              <th
                className="py-2 px-4 border text-center align-middle"
                rowSpan="2"
              >
                Jumlah Uang Alat Berat (Rp)
              </th>
            </tr>
            <tr>
              <th className="py-2 px-4 border text-center">20 ISI</th>
              <th className="py-2 px-4 border text-center">20 KSNG</th>
              <th className="py-2 px-4 border text-center">40 ISI</th>
              <th className="py-2 px-4 border text-center">40 KSNG</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((item, index) => (
              <tr key={index}>
                <td className="py-2 px-4 border text-center">{index + 1}</td>
                <td className="py-2 px-4 border text-center capitalize">
                  {item.bulan}
                </td>
                <td className="py-2 px-4 border text-center">
                  {item.data.kontainer_20_isi}
                </td>
                <td className="py-2 px-4 border text-center">
                  {item.data.kontainer_20_kosong}
                </td>
                <td className="py-2 px-4 border text-center">
                  {item.data.kontainer_40_isi}
                </td>
                <td className="py-2 px-4 border text-center">
                  {item.data.kontainer_40_kosong}
                </td>
                <td className="py-2 px-4 border text-center">
                  {item.data.jumlah_uang_kontainer &&
                    convertToRupiah(item.data.jumlah_uang_kontainer)}
                </td>
                <td className="py-2 px-4 border text-center">
                  {item.data.total_lo && convertToRupiah(item.data.total_lo)}
                </td>
                <td className="py-2 px-4 border text-center">
                  {item.data.total_berat_loss_cargo}
                </td>
                <td className="py-2 px-4 border text-center">
                  {item.data.jumlah_uang_loss_cargo &&
                    convertToRupiah(item.data.jumlah_uang_loss_cargo)}
                </td>
                <td className="py-2 px-4 border text-center">
                  {item.data.total_berat_alat_berat}
                </td>
                <td className="py-2 px-4 border text-center">
                  {item.data.jumlah_uang_alat_berat &&
                    convertToRupiah(item.data.jumlah_uang_alat_berat)}
                </td>
              </tr>
            ))}
            <tr>
              <td className="py-2 px-4 border text-center" colSpan="2">
                Total
              </td>
              <td className="py-2 px-4 border text-center">
                {totalData.total20isi}
              </td>
              <td className="py-2 px-4 border text-center">
                {totalData.total20kosong}
              </td>
              <td className="py-2 px-4 border text-center">
                {totalData.total40isi}
              </td>
              <td className="py-2 px-4 border text-center">
                {totalData.total40kosong}
              </td>
              <td className="py-2 px-4 border text-center" rowSpan="2">
                {convertToRupiah(totalData.totalUangKontainer)}
              </td>
              <td className="py-2 px-4 border text-center" rowSpan="2">
                {convertToRupiah(totalData.totalUangLo)}
              </td>
              <td className="py-2 px-4 border text-center" rowSpan="2">
                {totalData.totalBeratLossKargo}
              </td>
              <td className="py-2 px-4 border text-center" rowSpan="2">
                {convertToRupiah(totalData.totalUangLossKargo)}
              </td>
              <td className="py-2 px-4 border text-center" rowSpan="2">
                {totalData.totalBeratAlatBerat}
              </td>
              <td className="py-2 px-4 border text-center" rowSpan="2">
                {convertToRupiah(totalData.totalUangAlatBerat)}
              </td>
            </tr>
            <tr>
              <td className="py-2 px-4 border text-center" colSpan="2">
                Total Keseluruhan
              </td>
              <td className="py-2 px-4 border text-center" colSpan="4">
                {totalData.total20isi +
                  totalData.total20kosong +
                  totalData.total40isi +
                  totalData.total40kosong}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default TableLaporan;

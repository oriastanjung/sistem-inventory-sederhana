import React, { useState, useEffect } from "react";

function TableLaporanHooks({
  dataKontainer,
  dataAlatBerat,
  dataLostKargo,
  filterTahun,
}) {
  const [totalData, setTotalData] = useState({
    total20isi: 0,
    total20kosong: 0,
    total40isi: 0,
    total40kosong: 0,
    totalUangKontainer: 0,
    totalUangLo: 0,
    totalBeratLossKargo: 0,
    totalUangLossKargo: 0,
    totalBeratAlatBerat: 0,
    totalUangAlatBerat: 0,
  });

  const initData = [
    {
      bulan: "januari",
      data: {
        kontainer_20_isi: 0,
        kontainer_20_kosong: 0,
        kontainer_40_isi: 0,
        kontainer_40_kosong: 0,
        jumlah_uang_kontainer: 0,
        total_lo: 0,
        total_berat_loss_cargo: 0,
        jumlah_uang_loss_cargo: 0,
        total_berat_alat_berat: 0,
        jumlah_uang_alat_berat: 0,
      },
    },
    {
      bulan: "februari",
      data: {
        kontainer_20_isi: 0,
        kontainer_20_kosong: 0,
        kontainer_40_isi: 0,
        kontainer_40_kosong: 0,
        jumlah_uang_kontainer: 0,
        total_lo: 0,
        total_berat_loss_cargo: 0,
        jumlah_uang_loss_cargo: 0,
        total_berat_alat_berat: 0,
        jumlah_uang_alat_berat: 0,
      },
    },
    {
      bulan: "maret",
      data: {
        kontainer_20_isi: 0,
        kontainer_20_kosong: 0,
        kontainer_40_isi: 0,
        kontainer_40_kosong: 0,
        jumlah_uang_kontainer: 0,
        total_lo: 0,
        total_berat_loss_cargo: 0,
        jumlah_uang_loss_cargo: 0,
        total_berat_alat_berat: 0,
        jumlah_uang_alat_berat: 0,
      },
    },
    {
      bulan: "april",
      data: {
        kontainer_20_isi: 0,
        kontainer_20_kosong: 0,
        kontainer_40_isi: 0,
        kontainer_40_kosong: 0,
        jumlah_uang_kontainer: 0,
        total_lo: 0,
        total_berat_loss_cargo: 0,
        jumlah_uang_loss_cargo: 0,
        total_berat_alat_berat: 0,
        jumlah_uang_alat_berat: 0,
      },
    },
    {
      bulan: "mei",
      data: {
        kontainer_20_isi: 0,
        kontainer_20_kosong: 0,
        kontainer_40_isi: 0,
        kontainer_40_kosong: 0,
        jumlah_uang_kontainer: 0,
        total_lo: 0,
        total_berat_loss_cargo: 0,
        jumlah_uang_loss_cargo: 0,
        total_berat_alat_berat: 0,
        jumlah_uang_alat_berat: 0,
      },
    },
    {
      bulan: "juni",
      data: {
        kontainer_20_isi: 0,
        kontainer_20_kosong: 0,
        kontainer_40_isi: 0,
        kontainer_40_kosong: 0,
        jumlah_uang_kontainer: 0,
        total_lo: 0,
        total_berat_loss_cargo: 0,
        jumlah_uang_loss_cargo: 0,
        total_berat_alat_berat: 0,
        jumlah_uang_alat_berat: 0,
      },
    },
    {
      bulan: "juli",
      data: {
        kontainer_20_isi: 0,
        kontainer_20_kosong: 0,
        kontainer_40_isi: 0,
        kontainer_40_kosong: 0,
        jumlah_uang_kontainer: 0,
        total_lo: 0,
        total_berat_loss_cargo: 0,
        jumlah_uang_loss_cargo: 0,
        total_berat_alat_berat: 0,
        jumlah_uang_alat_berat: 0,
      },
    },
    {
      bulan: "agustus",
      data: {
        kontainer_20_isi: 0,
        kontainer_20_kosong: 0,
        kontainer_40_isi: 0,
        kontainer_40_kosong: 0,
        jumlah_uang_kontainer: 0,
        total_lo: 0,
        total_berat_loss_cargo: 0,
        jumlah_uang_loss_cargo: 0,
        total_berat_alat_berat: 0,
        jumlah_uang_alat_berat: 0,
      },
    },
    {
      bulan: "september",
      data: {
        kontainer_20_isi: 0,
        kontainer_20_kosong: 0,
        kontainer_40_isi: 0,
        kontainer_40_kosong: 0,
        jumlah_uang_kontainer: 0,
        total_lo: 0,
        total_berat_loss_cargo: 0,
        jumlah_uang_loss_cargo: 0,
        total_berat_alat_berat: 0,
        jumlah_uang_alat_berat: 0,
      },
    },
    {
      bulan: "oktober",
      data: {
        kontainer_20_isi: 0,
        kontainer_20_kosong: 0,
        kontainer_40_isi: 0,
        kontainer_40_kosong: 0,
        jumlah_uang_kontainer: 0,
        total_lo: 0,
        total_berat_loss_cargo: 0,
        jumlah_uang_loss_cargo: 0,
        total_berat_alat_berat: 0,
        jumlah_uang_alat_berat: 0,
      },
    },
    {
      bulan: "november",
      data: {
        kontainer_20_isi: 0,
        kontainer_20_kosong: 0,
        kontainer_40_isi: 0,
        kontainer_40_kosong: 0,
        jumlah_uang_kontainer: 0,
        total_lo: 0,
        total_berat_loss_cargo: 0,
        jumlah_uang_loss_cargo: 0,
        total_berat_alat_berat: 0,
        jumlah_uang_alat_berat: 0,
      },
    },
    {
      bulan: "desember",
      data: {
        kontainer_20_isi: 0,
        kontainer_20_kosong: 0,
        kontainer_40_isi: 0,
        kontainer_40_kosong: 0,
        jumlah_uang_kontainer: 0,
        total_lo: 0,
        total_berat_loss_cargo: 0,
        jumlah_uang_loss_cargo: 0,
        total_berat_alat_berat: 0,
        jumlah_uang_alat_berat: 0,
      },
    },
  ];
  const [dataLaporan, setDataLaporan] = useState(initData);

  useEffect(() => {
    const filteredDataKontainer = dataKontainer.filter((item) => {
      const tahun = new Date(item.tanggal_selesai_m2).getFullYear();
      return filterTahun ? tahun === parseInt(filterTahun) : true;
    });

    const filteredDataAlatBerat = dataAlatBerat.filter((item) => {
      const tahun = new Date(item.tanggal_selesai_penumpukan).getFullYear();
      return filterTahun ? tahun === parseInt(filterTahun) : true;
    });

    const filteredDataLostKargo = dataLostKargo.filter((item) => {
      const tahun = new Date(item.tanggal_selesai_penumpukan).getFullYear();
      return filterTahun ? tahun === parseInt(filterTahun) : true;
    });

    // Update dataLaporan based on dataKontainer, dataAlatBerat, dataLostKargo
    const updatedDataLaporan = [...initData];

    // Example logic to update dataLaporan based on dataKontainer
    filteredDataKontainer.forEach((item) => {
      const bulanIndex = new Date(item.tanggal_selesai_m2).getMonth();
      if (bulanIndex >= 0 && bulanIndex < 12) {
        const tahun = new Date(item.tanggal_selesai_m2).getFullYear();
        updatedDataLaporan[bulanIndex].tahun = tahun;
        if (item.ukuran_kontainer === "20 ISI") {
          updatedDataLaporan[bulanIndex].data.kontainer_20_isi += 1; // Update as per your requirement
        } else if (item.ukuran_kontainer === "20 KOSONG") {
          updatedDataLaporan[bulanIndex].data.kontainer_20_kosong += 1; // Update as per your requirement
        } else if (item.ukuran_kontainer === "40 ISI") {
          updatedDataLaporan[bulanIndex].data.kontainer_40_isi += 1; // Update as per your requirement
        } else if (item.ukuran_kontainer === "40 KOSONG") {
          updatedDataLaporan[bulanIndex].data.kontainer_40_kosong += 1; // Update as per your requirement
        }
        // Calculate jumlah_uang_kontainer based on jumlah_uang field in each kontainer
        updatedDataLaporan[bulanIndex].data.jumlah_uang_kontainer +=
          item.jumlah_uang;
        // Calculate total lo based on jumlah_uang field in each kontainer
        updatedDataLaporan[bulanIndex].data.total_lo += item.lo;
      }
    });

    // Example logic to update dataLaporan based on dataAlatBerat
    filteredDataAlatBerat.forEach((item) => {
      const bulanIndex = new Date(item.tanggal_selesai_penumpukan).getMonth();
      if (bulanIndex >= 0 && bulanIndex < 12) {
        const tahun = new Date(item.tanggal_selesai_penumpukan).getFullYear();
        updatedDataLaporan[bulanIndex].tahun = tahun;
        updatedDataLaporan[bulanIndex].data.total_berat_alat_berat +=
          item.satuan; // Update as per your requirement
        // Update other fields similarly
        updatedDataLaporan[bulanIndex].data.jumlah_uang_alat_berat +=
          item.jumlah_uang;
      }
    });

    // Example logic to update dataLaporan based on dataLostKargo
    filteredDataLostKargo.forEach((item) => {
      const bulanIndex = new Date(item.tanggal_selesai_penumpukan).getMonth();
      if (bulanIndex >= 0 && bulanIndex < 12) {
        const tahun = new Date(item.tanggal_selesai_penumpukan).getFullYear();
        updatedDataLaporan[bulanIndex].tahun = tahun;
        updatedDataLaporan[bulanIndex].data.jumlah_uang_loss_cargo +=
          item.jumlah_uang;
        updatedDataLaporan[bulanIndex].data.total_berat_loss_cargo +=
          item.satuan;
      }
    });

    // Set the updated dataLaporan state
    setDataLaporan(updatedDataLaporan);
    let sum20isi = 0;
    let sum20kosong = 0;
    let sum40isi = 0;
    let sum40kosong = 0;

    let sumUangKontainer = 0;
    let sumUangLo = 0;
    let sumBeratLossKargo = 0;
    let sumUangLossKargo = 0;
    let sumBeratAlatBerat = 0;
    let sumUangAlatBerat = 0;

    updatedDataLaporan.map((item) => {
      sum20isi += parseInt(item.data.kontainer_20_isi);
      sum20kosong += parseInt(item.data.kontainer_20_kosong);
      sum40isi += parseInt(item.data.kontainer_40_isi);
      sum40kosong += parseInt(item.data.kontainer_40_kosong);
      sumUangKontainer += parseInt(item.data.jumlah_uang_kontainer);
      sumUangLo += parseInt(item.data.total_lo);
      sumBeratLossKargo += parseInt(item.data.total_berat_loss_cargo);
      sumUangLossKargo += parseInt(item.data.jumlah_uang_loss_cargo);
      sumBeratAlatBerat += parseInt(item.data.total_berat_alat_berat);
      sumUangAlatBerat += parseInt(item.data.jumlah_uang_alat_berat);
    });

    setTotalData({
      total20isi: sum20isi,
      total20kosong: sum20kosong,
      total40isi: sum40isi,
      total40kosong: sum40kosong,
      totalUangKontainer: sumUangKontainer,
      totalUangLo: sumUangLo,
      totalBeratLossKargo: sumBeratLossKargo,
      totalUangLossKargo: sumUangLossKargo,
      totalBeratAlatBerat: sumBeratAlatBerat,
      totalUangAlatBerat: sumUangAlatBerat,
    });
  }, [filterTahun]);

  return { dataLaporan, totalData };
}

export default TableLaporanHooks;

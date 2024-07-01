"use client";
import React from "react";
import TableLaporan from "./TableLaporan";

function MainContent({
  dataKontainer,
  dataAlatBerat,
  dataLostKargo,
  allPerusahaanData,
}) {
  return (
    <section className="flex min-h-screen">
      <TableLaporan dataKontainer={dataKontainer} dataAlatBerat={dataAlatBerat} dataLostKargo={dataLostKargo} />
    </section>
  );
}

export default MainContent;

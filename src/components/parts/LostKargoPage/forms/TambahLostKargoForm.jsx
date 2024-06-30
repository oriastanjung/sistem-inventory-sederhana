"use client";
import { Button } from "@/components/ui/button";
import React, { useState } from "react";
import InputWithLabel from "@/components/atom/InputWithLabel";
import { createLostKargoData } from "@/actions/lost_kargo";
import { useRouter } from "next/navigation";

function TambahLostKargoForm({ perusahaan_data }) {
  const router = useRouter();
  const [perusahaan, setPerusahaan] = useState(perusahaan_data);
  const [form, setForm] = useState({
    no_nota: "",
    lokasi_penumpukan: "",
    perusahaan_id: perusahaan[0].id? perusahaan[0].id : "",
    tanggal_mulai_penumpukan: "",
    tanggal_selesai_penumpukan: "",
    jenis_barang: "",
    satuan: 0,
    jumlah_uang: 0,
    status_pembayaran: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Tambahkan logika untuk mengirim data ke server di sini
    // console.log(form);
    const createData = await createLostKargoData(form);
    if (createData) {
      alert("data dibuat!");
      router.push("/lost_kargo");
      router.refresh();
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <InputWithLabel
        label="No Nota"
        type="text"
        id="no_nota"
        name="no_nota"
        value={form.no_nota}
        onChange={handleChange}
        isRequired={true}
      />
      <InputWithLabel
        label="Lokasi Penumpukan"
        type="text"
        id="lokasi_penumpukan"
        name="lokasi_penumpukan"
        value={form.lokasi_penumpukan}
        onChange={handleChange}
        isRequired={true}
      />
      <div className="flex flex-col gap-2 mb-4">
        <label className="text-lg font-medium" htmlFor="perusahaan_id">
          Perusahaan
        </label>
        <select
          className="rounded-lg px-3 py-2"
          id="perusahaan_id"
          name="perusahaan_id"
          value={form.perusahaan_id}
          onChange={handleChange}
          required
        >
          {perusahaan?.map((item, idx) => (
            <option key={idx} value={item.id}>
              {item.nama_perusahaan}
            </option>
          ))}
          {/* Tambahkan opsi lainnya sesuai dengan data perusahaan */}
        </select>
      </div>
      <InputWithLabel
        label="Tanggal Mulai Penumpukan"
        type="date"
        id="tanggal_mulai_penumpukan"
        name="tanggal_mulai_penumpukan"
        value={form.tanggal_mulai_penumpukan}
        onChange={handleChange}
        isRequired={true}
      />
      <InputWithLabel
        label="Tanggal Selesai Penumpukan"
        type="date"
        id="tanggal_selesai_penumpukan"
        name="tanggal_selesai_penumpukan"
        value={form.tanggal_selesai_penumpukan}
        onChange={handleChange}
        isRequired={true}
      />
      <InputWithLabel
        label="Jenis Barang"
        type="text"
        id="jenis_barang"
        name="jenis_barang"
        value={form.jenis_barang}
        onChange={handleChange}
        isRequired={true}
      />
      <InputWithLabel
        label="Satuan (Ton/m3)"
        type="number"
        id="satuan"
        name="satuan"
        value={form.satuan}
        onChange={handleChange}
        isRequired={true}
      />
      <InputWithLabel
        label="Jumlah Uang (Rp)"
        type="number"
        id="jumlah_uang"
        name="jumlah_uang"
        value={form.jumlah_uang}
        onChange={handleChange}
        isRequired={true}
      />
      <div className="flex flex-col gap-2 mb-4">
        <label className="text-lg font-medium" htmlFor="status_pembayaran">
          Status Pembayaran:
        </label>
        <input
          className="rounded-lg px-3 py-2"
          type="checkbox"
          id="status_pembayaran"
          name="status_pembayaran"
          checked={form.status_pembayaran}
          onChange={handleChange}
        />
      </div>
      <Button type="submit">Submit</Button>
    </form>
  );
}

export default TambahLostKargoForm;

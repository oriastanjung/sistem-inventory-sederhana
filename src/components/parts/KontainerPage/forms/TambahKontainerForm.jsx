"use client";
import { Button } from "@/components/ui/button";
import React, { useState } from "react";
import InputWithLabel from "@/components/atom/InputWithLabel";
import { createKontainerData } from "@/actions/kontainer";
import { useRouter } from "next/navigation";

function TambahKontainerForm({ perusahaan_data }) {
  const router = useRouter();
  const [perusahaan, setPerusahaan] = useState(perusahaan_data);
  const [form, setForm] = useState({
    no_nota: "",
    ukuran_kontainer: "",
    hari: 0,
    perusahaan_id: perusahaan?perusahaan[0].id : "",
    jumlah_uang: 0,
    status_pembayaran: false,
    jenis_kontainer: "",
    tanggal_mulai_m1: "",
    tanggal_selesai_m1: "",
    tanggal_mulai_m2: "",
    tanggal_selesai_m2: "",
    lo: 0,
    kontainer_id: [""],
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleContainerChange = (index, e) => {
    const { name, value } = e.target;
    const newContainers = form.kontainer_id.slice();
    newContainers[index] = value;
    setForm((prevForm) => ({
      ...prevForm,
      kontainer_id: newContainers,
    }));
  };

  const addContainer = () => {
    setForm((prevForm) => ({
      ...prevForm,
      kontainer_id: [...prevForm.kontainer_id, ""],
    }));
  };

  const removeContainer = (index) => {
    setForm((prevForm) => ({
      ...prevForm,
      kontainer_id: prevForm.kontainer_id.filter((_, i) => i !== index),
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const createData = await createKontainerData(form);
    if (createData) {
      alert("Data Kontainer dibuat!");
      router.push("/kontainer");
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
        label="Ukuran Kontainer"
        type="text"
        id="ukuran_kontainer"
        name="ukuran_kontainer"
        value={form.ukuran_kontainer}
        onChange={handleChange}
        isRequired={true}
      />
      <InputWithLabel
        label="Hari"
        type="number"
        id="hari"
        name="hari"
        value={form.hari}
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
        </select>
      </div>
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
      <InputWithLabel
        label="Jenis Kontainer"
        type="text"
        id="jenis_kontainer"
        name="jenis_kontainer"
        value={form.jenis_kontainer}
        onChange={handleChange}
        isRequired={true}
      />
      <InputWithLabel
        label="Tanggal Mulai M1"
        type="date"
        id="tanggal_mulai_m1"
        name="tanggal_mulai_m1"
        value={form.tanggal_mulai_m1}
        onChange={handleChange}
        isRequired={true}
      />
      <InputWithLabel
        label="Tanggal Selesai M1"
        type="date"
        id="tanggal_selesai_m1"
        name="tanggal_selesai_m1"
        value={form.tanggal_selesai_m1}
        onChange={handleChange}
        isRequired={true}
      />
      <InputWithLabel
        label="Tanggal Mulai M2"
        type="date"
        id="tanggal_mulai_m2"
        name="tanggal_mulai_m2"
        value={form.tanggal_mulai_m2}
        onChange={handleChange}
        isRequired={true}
      />
      <InputWithLabel
        label="Tanggal Selesai M2"
        type="date"
        id="tanggal_selesai_m2"
        name="tanggal_selesai_m2"
        value={form.tanggal_selesai_m2}
        onChange={handleChange}
        isRequired={true}
      />
      <InputWithLabel
        label="LO"
        type="number"
        id="lo"
        name="lo"
        value={form.lo}
        onChange={handleChange}
        isRequired={true}
      />
      {form.kontainer_id.map((containerId, index) => (
        <div key={index} className="flex items-center mb-2 w-full">
          <InputWithLabel
            className={"w-full"}
            label={`No Kontainer ke-${index + 1}`}
            type="text"
            id={`kontainer_id_${index}`}
            name="kontainer_id"
            value={containerId}
            onChange={(e) => handleContainerChange(index, e)}
            isRequired={index === 0} // Only the first container ID is required
          />

          {index >= 1 && (
            <Button
              type="button"
              onClick={() => removeContainer(index)}
              className="ml-2 mt-5"
            >
              Remove
            </Button>
          )}
        </div>
      ))}
      <div className="flex justify-center">
        <Button type="button" onClick={addContainer}>
          Add Kontainer ID
        </Button>
      </div>
      <Button className="w-full mt-10" type="submit">Submit</Button>
    </form>
  );
}

export default TambahKontainerForm;

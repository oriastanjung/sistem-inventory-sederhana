"use server";

import prisma from "../../lib/prisma";

export async function createAlatBerat(form) {
  const result = await prisma.alatBerat.create({
    data: {
      no_nota: form.no_nota,
      perusahaan_id: form.perusahaan_id,
      tanggal_mulai_penumpukan: new Date(form.tanggal_mulai_penumpukan),
      tanggal_selesai_penumpukan: new Date(form.tanggal_selesai_penumpukan),
      jenis_barang: form.jenis_barang,
      satuan: +form.satuan,
      jumlah_uang: +form.jumlah_uang,
      status_pembayaran: form.status_pembayaran,
    },
  });

  return result;
}

export async function getAllAlatBerat() {
  const data = await prisma.alatBerat.findMany({
    include: {
      Perusahaan: true,
    },
  });
  return data;
}

export async function getOneAlatBerat(id) {
  const data = await prisma.alatBerat.findFirst({
    where: {
      id: id,
    },
    include: {
      Perusahaan: true,
    },
  });
  return data;
}


export async function updateAlatBerat(id, form) {
  const data = await prisma.alatBerat.update({
    where: {
      id: id,
    },
    data: {
      no_nota: form.no_nota,
      perusahaan_id: form.perusahaan_id,
      tanggal_mulai_penumpukan: new Date(form.tanggal_mulai_penumpukan),
      tanggal_selesai_penumpukan: new Date(form.tanggal_selesai_penumpukan),
      jenis_barang: form.jenis_barang,
      satuan: +form.satuan,
      jumlah_uang: +form.jumlah_uang,
      status_pembayaran: form.status_pembayaran,
    },
  
  });
  return data;
}


export async function deleteOneAlatBerat(id) {
  const data = await prisma.alatBerat.delete({
    where: {
      id: id,
    },
  });
  return data;
}
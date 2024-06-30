"use server"
import prisma from "../../lib/prisma"

export async function getAllPerusahaan(){
    const data = await prisma.perusahaan.findMany()
    return data
}
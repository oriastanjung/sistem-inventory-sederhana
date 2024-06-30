"use server";
import { createJWT } from "@/utils/jwt";
import prisma from "../../lib/prisma";
import bcrypt from "bcryptjs";
import { createToken } from "@/utils/createPayloadToken";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
export async function registerAdminAccount(form) {
  // Enkripsi password dengan bcrypt
  const salt = await bcrypt.genSalt(+process.env.NEXT_PUBLIC_APP_SALT);
  const encryptedPassword = await bcrypt.hash(form.password, salt);

  const isEmailUnique = await prisma.admin.findFirst({
    where: {
      email: form.email,
    },
  });

  if (isEmailUnique) {
    throw new Error("Email Sudah Dipakai!");
  }

  const response = await prisma.admin.create({
    data: {
      email: form.email,
      password: encryptedPassword,
    },
  });

  return response;
}

export async function loginAdminAccount(form) {
  const isAccountExist = await prisma.admin.findFirst({
    where: {
      email: form.email,
    },
  });
  if (!isAccountExist) {
    throw new Error("No Account Found!");
  }
  const isPasswordMatch = await bcrypt.compare(
    form.password,
    isAccountExist.password
  );

  if (!isPasswordMatch) {
    throw new Error("Invalid Credentials!");
  }
  const payload = createToken(isAccountExist);
  const token = createJWT({ payload: payload });

  cookies().set("token", token, {
    expires: new Date(Date.now() + 3600 * 1000), // 1 jam
  });
}

export async function handleLogout(){
  cookies().delete("token")
  redirect("/login")
}

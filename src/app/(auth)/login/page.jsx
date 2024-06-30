"use client";
import { loginAdminAccount } from "@/actions/auth";
import InputWithLabel from "@/components/atom/InputWithLabel";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

function LoginPage() {
  const router = useRouter();
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    setForm((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };
  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const response = await loginAdminAccount(form);

      if (response) {
        alert("Buat Akun Admin Berhasil!");
        router.push("/");
        router.refresh();
      }
    } catch (error) {
      alert(error)
      router.refresh();
    }
  }
  return (
    <main className="container mx-auto flex justify-center items-center h-screen md:h-auto md:min-h-screen">
      <form
        onSubmit={handleSubmit}
        className="p-8 bg-primary text-white rounded-xl w-3/4 flex flex-col justify-center items-center"
      >
        <h1 className="text-2xl font-semibold">Login Admin Account</h1>
        <div className="w-full ">
          <InputWithLabel
            name={"email"}
            value={form.email}
            onChange={handleChange}
            isRequired={true}
            label={"Email"}
            placeholder={"example@gmail.com"}
          />
          <InputWithLabel
            name={"password"}
            value={form.password}
            onChange={handleChange}
            label={"Password"}
            placeholder={"********"}
            type={"password"}
            isRequired={true}
          />
        </div>
        <Button
          type={"submit"}
          className={"border-white border hover:bg-zinc-600"}
        >
          Login
        </Button>
      </form>
    </main>
  );
}

export default LoginPage;

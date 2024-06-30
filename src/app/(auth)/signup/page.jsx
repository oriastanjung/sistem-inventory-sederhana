"use client";
import { registerAdminAccount } from "@/actions/auth";
import InputWithLabel from "@/components/atom/InputWithLabel";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

function SignUpPage() {
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
      const response = await registerAdminAccount(form);

      if (response) {
        alert("Buat Akun Admin Berhasil!");
        router.push("/login");
        router.refresh();
      }
    } catch (error) {
      alert(error)
    }
  }
  return (
    <main className="container mx-auto flex justify-center items-center min-h-screen">
      <form
        onSubmit={handleSubmit}
        className="p-8 bg-primary text-white rounded-xl w-3/4 flex flex-col justify-center items-center"
      >
        <h1 className="text-2xl font-semibold">Sign Up Admin Account</h1>
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
          Register
        </Button>
      </form>
    </main>
  );
}

export default SignUpPage;

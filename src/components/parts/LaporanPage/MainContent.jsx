"use client";
import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import TableLostKargo from "../LostKargoPage/dashboard/TableLostKargo";
import TableKontainer from "../KontainerPage/dashboard/TableKontainer";
import TableAlatBerat from "../AlatBeratPage/dashboard/TableAlatBerat";
import { Button } from "@/components/ui/button";

function MainContent({
  dataKontainer,
  dataAlatBerat,
  dataLostKargo,
  allPerusahaanData,
}) {
  
  return (
    <section className="flex min-h-screen">
      <Tabs defaultValue="lost_kargo" className="w-full">
        <TabsList>
          <TabsTrigger value="lost_kargo">Lost Cargo</TabsTrigger>{" "}
          <span className="font-bold text-xl text-black shadow-none">-</span>
          <TabsTrigger value="kontainer">Kontainer</TabsTrigger>
          <span className="font-bold text-xl text-black shadow-none">-</span>
          <TabsTrigger value="alat_berat">Alat Berat</TabsTrigger>
        </TabsList>
        
        <TabsContent value="lost_kargo">
          <div className="w-full p-5">
            <TableLostKargo
              hideAction
              showPrint
              allPerusahaan={allPerusahaanData}
              allLostKargoData={dataLostKargo}
            />
          </div>
        </TabsContent>
        <TabsContent value="kontainer">
          <div className="w-full p-5">
            <TableKontainer
              hideAction
              showPrint
              allPerusahaan={allPerusahaanData}
              allKontainerData={dataKontainer}
            />
          </div>
        </TabsContent>
        <TabsContent value="alat_berat">
          <div className="w-full p-5">
            <TableAlatBerat
              hideAction
              showPrint
              allPerusahaan={allPerusahaanData}
              allAlatBeratData={dataAlatBerat}
            />
          </div>
        </TabsContent>
      </Tabs>
    </section>
  );
}

export default MainContent;

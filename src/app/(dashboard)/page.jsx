import { getAllAlatBerat } from "@/actions/alat_berat";
import { getAllKontainer } from "@/actions/kontainer";
import { getAllLostKargo } from "@/actions/lost_kargo";
import DashboardCard from "@/components/atom/DashboardCard";

export const revalidate = 0
export default async function Home() {
  const responseLostKargo = await getAllLostKargo()
  const responseKontainer = await getAllKontainer()
  const responseAlatBerat = await getAllAlatBerat()

  return (
    <main className="w-full md:w-5/6 bg-[#FDFDFD] container mx-auto pl-16 pr-12 pt-12 min-h-screen">
      <h1 className="text-3xl font-bold leading-snug tracking-wide text-[#9F9F9F]">Dashboard</h1>
      <ul className="grid md:grid-cols-3 gap-6 mt-10">
        <li>
          <DashboardCard title={"Lost Kargo"} jumlah={responseLostKargo? responseLostKargo.length : 0} link={"/lost_kargo"} icon={"/icon/lost kargo.png"} />
        </li>
        <li>
          <DashboardCard title={"Kontainer"} jumlah={responseKontainer? responseKontainer.length : 0} link={"/kontainer"} icon={"/icon/kontainer.png"}/>
        </li>
        <li>
          <DashboardCard title={"Alat Berat"} jumlah={responseAlatBerat? responseAlatBerat.length : 0} link={"/alat_berat"} icon={"/icon/alat berat.png"}/>
        </li>
      </ul>
    </main>
  );
}

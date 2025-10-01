// src/app/[locale]/page.tsx
import HeroPage  from "@/components/HeroPage";
import Terrain from "@/components/terrain";
import Dec from "@/components/dec";
import Model from "@/components/NotreModele";
import Offre from "@/components/Offre"

export default function Home() {

  return (
    <main>
      <HeroPage />
      <Terrain />
      <Dec />
      <Model />
      <Offre />
    </main>
  );
}

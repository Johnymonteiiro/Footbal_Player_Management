import { Footer } from "@/components/footer/footer";
import { Header } from "@/components/header/header";
import Home from "./landingpage/(home)/home";

export default async function Page() {
  return (
    <main>
      <Header />
      <Home />
      <Footer />
    </main>
  );
}

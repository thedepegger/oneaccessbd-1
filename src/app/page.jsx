import { Navbar13 } from "@/components/navbar-13";
import { Header76 } from "@/components/header-76";
import { Logo3 } from "@/components/logo-03";
import { Layout484 } from "@/components/layout-484";
import { Stats29 } from "@/components/stats-29";
import { Layout223 } from "@/components/layout-223";
import { Testimonial33 } from "@/components/testimonial-33";
import { Cta51 } from "@/components/cta-51";
import { Faq4 } from "@/components/faq-04";
import { Footer17 } from "@/components/footer-17";

export default function Page() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar13 />
      <main className="flex-1">
        <Header76 />
        <Logo3 />
        <Layout484 />
        <Stats29 />
        <Layout223 />
        <Testimonial33 />
        <Cta51 />
        <Faq4 />
      </main>
      <Footer17 />
    </div>
  );
}

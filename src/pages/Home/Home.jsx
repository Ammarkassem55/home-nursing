import CtaBanner from "./Sections/CtaBanner";
import Hero from "./Sections/Hero";
import HowItWorks from "./Sections/HowItWorks";
import Services from "./Sections/Services";
import States from "./Sections/States";
import Seo from "../../components/Seo/Seo";
export default function Home() {
  return (
    <div className="flex flex-col gap-6 bg-gray-100">
      <Seo
        title="الرئيسية"
        description="رعاية تمريضية منزلية موثوقة على يد محمد صلاح شرف الدين، أخصائي تمريض معتمد بخبرة تتجاوز 10 سنوات في العناية الحرجة ورعاية كبار السن."
        keywords="تمريض منزلي, رعاية منزلية, ممرض منزلي الرياض, رعاية كبار السن"
      />
      <Hero />
      <States />
      <Services />
      <HowItWorks />
      <CtaBanner />
    </div>
  );
}

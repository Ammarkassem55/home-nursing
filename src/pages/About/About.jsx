import CarePhilosophy from "./Sections/CarePhilosophy";
import Credentials from "./Sections/Credentials";
import FinalCta from "./Sections/FinalCta";
import Profile from "./Sections/Profile";
import WhyChooseUs from "./Sections/WhyChooseUs";
import Seo from "../../components/Seo/Seo";

export default function About() {
  return (
    <div>
      <Seo
        title="عني وخبرتي"
        description="تعرّف على المسيرة المهنية لمحمد صلاح شرف الدين، أخصائي تمريض منزلي معتمد، ومؤهلاته وفلسفته في تقديم الرعاية الإنسانية للمرضى."
        keywords="محمد صلاح شرف الدين, خبرة تمريضية, مؤهلات تمريض"
      />
      <Profile />
      <Credentials />
      <CarePhilosophy />
      <WhyChooseUs />
      <FinalCta />
    </div>
  );
}

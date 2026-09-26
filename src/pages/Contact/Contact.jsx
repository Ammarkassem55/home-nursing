import Booking from "./Sections/Booking";
import ContactHero from "./Sections/ContactHero";
import Faq from "./Sections/Faq";
import Seo from "../../components/Seo/Seo";

export default function Contact() {
  return (
    <div>
      <Seo
        title="تواصل واحجز زيارة"
        description="احجز زيارتك التمريضية المنزلية الآن، تواصل مباشرة عبر الهاتف أو واتساب، أو املأ استمارة الحجز وسنتواصل معك فورًا."
        keywords="حجز زيارة تمريضية, تواصل تمريض منزلي, رقم تمريض منزلي"
      />
      <ContactHero />
      <Booking />
      <Faq />
    </div>
  );
}

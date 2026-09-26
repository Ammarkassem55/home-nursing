import BookingCta from "./Sections/BookingCta";
import FamilyGuide from "./Sections/FamilyGuide";
import ServicesHero from "./Sections/ServicesHero";
import ServicesList from "./Sections/ServicesList";
import Seo from "../../components/Seo/Seo";

export default function Services() {
  return (
    <div>
      <Seo
        title="الخدمات التمريضية"
        description="تفاصيل الخدمات التمريضية المنزلية: رعاية ما بعد العمليات، تغيير الجروح، المحاليل والكانيولا، الحقن، ومتابعة العلامات الحيوية."
        keywords="خدمات تمريضية منزلية, تغيير جروح, محاليل وريدية, رعاية ما بعد العمليات"
      />
      <ServicesHero />
      <ServicesList />
      <FamilyGuide />
      <BookingCta />
    </div>
  );
}

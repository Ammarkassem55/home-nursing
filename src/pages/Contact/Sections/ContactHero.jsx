import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";

export default function ContactHero() {
  return (
    <section dir="rtl" className="container mx-auto px-4 pt-8 text-center">
      <span className="inline-flex items-center gap-2 rounded-full bg-sky-50 px-4 py-1.5 text-xs font-semibold text-teal-900">
        <FontAwesomeIcon icon={faCircleCheck} />
        تواصل مباشر وتنسيق سريع للزيارة
      </span>

      <h1 className="mx-auto mt-4 max-w-2xl text-2xl font-extrabold leading-snug text-blue-950 md:text-3xl">
        تواصل معي واحجز زيارتك التمريضية المنزلية
      </h1>

      <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-slate-500 md:text-base">
        أقدّم خدمات التمريض والرعاية المنزلية لمساعدة المرضى وأسرهم على الحصول
        على الرعاية المناسبة داخل المنزل، باهتمام وخصوصية والتزام بالإجراءات
        التمريضية الآمنة.
      </p>
    </section>
  );
}

import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHandHoldingMedical,
  faListCheck,
  faCalendarCheck,
  faShieldHeart,
  faStar,
} from "@fortawesome/free-solid-svg-icons";

export default function FinalCta() {
  return (
    <section dir="rtl" className="bg-blue-950 py-10 lg:py-16">
      <div className="container mx-auto px-4 text-center">
        {/* العنوان الصغير */}
        <span className="inline-flex items-center gap-2 text-sm font-semibold text-blue-300">
          <FontAwesomeIcon icon={faHandHoldingMedical} />
          رعاية تحترم خصوصيتك
        </span>

        {/* العنوان الرئيسي */}
        <h2 className="mx-auto mt-3 max-w-2xl text-2xl font-extrabold leading-snug text-white md:text-3xl">
          جاهز لتقديم الرعاية التي يحتاجها مريضك في منزله اليوم؟
        </h2>

        {/* الوصف */}
        <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-blue-200 md:text-base">
          سواء كانت زيارة لفحص الحالة ومتابعتها، أو رعاية مستمرة لمريض بعد
          الجراحة، أقدّم لك خدمة تمريضية منزلية تجمع بين الخبرة والاهتمام
          والالتزام.
        </p>

        {/* الأزرار */}
        <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
          <Link
            to="/services"
            className="flex items-center gap-2 rounded-xl border border-white/20 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
          >
            <FontAwesomeIcon icon={faListCheck} />
            استعرض الخدمات والإجراءات
          </Link>

          <Link
            to="/contact"
            className="flex items-center gap-2 rounded-xl bg-emerald-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-emerald-600"
          >
            <FontAwesomeIcon icon={faCalendarCheck} />
            احجز زيارتك التمريضية الآن
          </Link>
        </div>

        {/* نقاط الثقة */}
        <div className="mt-6 flex flex-wrap items-center justify-center gap-6 text-xs text-blue-300">
          <span className="flex items-center gap-2">
            <FontAwesomeIcon icon={faShieldHeart} />
            خصوصية تامة
          </span>

          <span className="flex items-center gap-2">
            <FontAwesomeIcon icon={faStar} />
            اهتمام بكل تفاصيل الرعاية
          </span>
        </div>
      </div>
    </section>
  );
}

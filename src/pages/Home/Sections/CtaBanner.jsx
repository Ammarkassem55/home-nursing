import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGem,
  faPhone,
  faCalendarCheck,
} from "@fortawesome/free-solid-svg-icons";

export default function CtaBanner() {
  return (
    <section dir="rtl" className="w-full px-4 pb-10 lg:pb-16">
      <div className="flex flex-col items-center gap-5 rounded-3xl bg-blue-950 px-6 py-8 text-center md:flex-row md:justify-between md:text-start">
        {/* Content */}
        <div className="flex items-center gap-3">
          <span
            aria-hidden="true"
            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/10 text-lg text-blue-300"
          >
            <FontAwesomeIcon icon={faGem} />
          </span>

          <div>
            <h3 className="text-base font-bold text-white md:text-lg">
              هل تحتاج إلى زيارة تمريضية عاجلة اليوم؟
            </h3>

            <p className="mt-1 text-sm text-blue-200">
              متاح للرد السريع وتنسيق الزيارات في مختلف الأحياء
            </p>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex shrink-0 flex-wrap justify-center gap-3">
          <a
            href="tel:01027269004"
            className="flex items-center gap-2 rounded-lg border border-teal-800 bg-teal-800 px-3 py-2 text-sm font-semibold text-white transition hover:bg-teal-700"
          >
            <FontAwesomeIcon icon={faPhone} />
            تواصل مباشر الآن
          </a>

          <Link
            to="/contact"
            className="flex items-center gap-2 rounded-xl bg-white px-3 py-2 text-sm font-semibold text-blue-950 transition hover:bg-gray-100"
          >
            <FontAwesomeIcon icon={faCalendarCheck} />
            حجز زيارة مجدولة
          </Link>
        </div>
      </div>
    </section>
  );
}

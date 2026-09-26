import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendarCheck,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import heroImage from "../../../assets/images/ex.png";
export default function Hero() {
  return (
    <section dir="rtl" className="container mx-auto px-4 py-8 lg:py-12">
      <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
        <div className="order-2  lg:order-1">
          <h1 className="text-2xl font-bold leading-tight text-slate-900 md:text-4xl lg:text-5xl ">
            رعاية تمريضية موثوقة في دفء منزلك
          </h1>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-slate-600 md:text-lg">
            نقدم أفضل الخدمات التمريضية في راحة منزلك برعاية أمنة وانسانية
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              to="/contact"
              className="rounded-xl bg-blue-950 px-6 py-3 font-semibold text-white transition hover:bg-blue-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
            >
              <FontAwesomeIcon icon={faCalendarCheck} className="ml-2" />
              اطلب الخدمة الآن
            </Link>
            <Link
              to="/services"
              className="rounded-xl border border-slate-300 bg-white px-6 py-3 font-semibold text-slate-800 transition hover:bg-slate-50"
            >
              <FontAwesomeIcon icon={faMagnifyingGlass} className="ml-2" />
              تصفح الخدمات
            </Link>
          </div>
        </div>
        <div className=" relative order-1 lg:order-2">
          <img
            src={heroImage}
            alt="ممرض يقدم الرعاية لسيدة مسنة في منزلها"
            className="h-64 w-full rounded-3xl object-cover shadow-lg md:h-80 lg:h-105"
            loading="eager"
          />
          <div className="absolute -bottom-4 inset-s-4 flex items-center gap-3 rounded-2xl bg-white p-3 shadow-xl">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 text-blue-600">
              ✓
            </div>
            <div>
              <p className="text-sm font-bold text-slate-900">ممرض معتمد</p>
              <p className="text-xs text-slate-500">خبرة +10 سنوات</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

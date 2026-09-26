import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCertificate,
  faHouseMedical,
} from "@fortawesome/free-solid-svg-icons";
import nurseImg from "../../../assets/images/serv.png";

const stats = [
  { value: "24/7", label: "استجابة طارئة" },
  { value: "500+", label: "زيارة شهريًا" },
  { value: "100%", label: "التزام بالمواعيد" },
];

export default function ServicesHero() {
  return (
    <section dir="rtl" className="container mx-auto px-4 py-8 lg:py-12">
      {/* Breadcrumb */}
      <p className="mb-3 text-xs font-semibold text-slate-400">
        الرئيسية <span className="mx-1">/</span>
        <span className="text-blue-600">الخدمات التمريضية</span>
      </p>

      <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
        {/* النص */}
        <div className="order-2 lg:order-1">
          <span className="inline-flex items-center rounded-full bg-sky-50 px-3 py-2 text-sm font-semibold text-teal-900">
            <FontAwesomeIcon className="ml-2" icon={faHouseMedical} />
            الخدمات والرعاية المنزلية
          </span>

          <h1 className="mt-3 text-2xl font-extrabold leading-snug text-blue-950 md:text-3xl">
            الخدمات التمريضية المتخصصة
          </h1>

          <p className="mt-4 leading-relaxed text-slate-600">
            مجموعة متكاملة من الخدمات التمريضية المنزلية، تشمل رعاية ما بعد
            العمليات، وتغيير وتنظيف الجروح، وتركيب وإزالة الكانيولا، وإعطاء
            الحقن والمحاليل، مع المتابعة الدورية للحالات داخل المنزل.
          </p>

          {/* الإحصائيات */}
          <div className="mt-6 grid grid-cols-3 gap-3">
            {stats.map(({ value, label }) => (
              <div
                key={label}
                className="rounded-2xl border border-slate-100 bg-white p-3 text-center shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md"
              >
                <p className="text-lg font-extrabold text-teal-900 md:text-xl">
                  {value}
                </p>

                <p className="mt-1 text-xs text-slate-500">{label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* الصورة */}
        <div className="order-1 lg:order-2">
          <div className="relative overflow-hidden rounded-3xl">
            <img
              src={nurseImg}
              alt="الرعاية التمريضية المنزلية"
              className="h-64 w-full object-cover transition duration-500 hover:scale-105 md:h-80"
            />

            <span className="absolute right-4 top-4 inline-flex items-center gap-2 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-blue-950 backdrop-blur">
              <FontAwesomeIcon icon={faCertificate} className="text-teal-900" />
              فريق مرخّص ومعتمد
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

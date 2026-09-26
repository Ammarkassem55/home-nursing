import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPersonWalkingWithCane,
  faBandage,
  faSyringe,
  faHeartPulse,
  faArrowLeft,
  faHandHoldingHeart,
} from "@fortawesome/free-solid-svg-icons";

const services = [
  {
    title: "الرعاية والتمريض المنزلي",
    description:
      "متابعة تمريضية لكبار السن وأصحاب الأمراض المزمنة، مع متابعة المؤشرات الحيوية والالتزام بتعليمات العلاج.",
    icon: faPersonWalkingWithCane,
  },
  {
    title: "تغيير وتنظيف الجروح",
    description:
      "العناية بالجروح الجراحية وقرح الفراش والقدم السكري، مع الالتزام بأساليب التعقيم والعناية المناسبة.",
    icon: faBandage,
  },
  {
    title: "المحاليل والكانيولا",
    description:
      "تركيب وإزالة الكانيولا وإعطاء المحاليل والحقن وفقًا للتعليمات الطبية وبطريقة آمنة داخل المنزل.",
    icon: faSyringe,
  },
  {
    title: "رعاية ما بعد العمليات الجراحية",
    description:
      "متابعة المريض خلال فترة التعافي في المنزل، مع مراقبة الحالة والالتزام بتعليمات الطبيب والجراح.",
    icon: faHeartPulse,
  },
];

export default function Services() {
  return (
    <section dir="rtl" className="bg-slate-50 py-10 lg:py-16">
      <div className="container mx-auto px-4">
        {/* رأس القسم */}
        <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
          {/* عنوان القسم */}
          <div className="text-right">
            <span className="text-sm font-semibold text-teal-900 px-3 py-2 rounded-full bg-sky-50">
              <FontAwesomeIcon className="ml-2" icon={faHandHoldingHeart} />
              الرعاية التخصصية
            </span>

            <h2 className="mt-1 text-2xl font-extrabold text-blue-950 md:text-3xl">
              أبرز الخدمات التمريضية
            </h2>
          </div>

          {/* عرض كل الخدمات */}
          <Link
            to="/services"
            className="flex items-center gap-2 text-sm font-semibold text-blue-950 transition hover:text-teal-700"
          >
            <FontAwesomeIcon icon={faArrowLeft} className="text-xs" />
            عرض كافة الخدمات والإجراءات
          </Link>
        </div>

        {/* الكروت */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {services.map(({ title, description, icon }) => (
            <article
              key={title}
              className="flex flex-col rounded-2xl border border-slate-100 bg-white p-5 text-start shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md"
            >
              {/* Icon */}
              <span
                aria-hidden="true"
                className="flex h-11 w-11 items-center justify-center rounded-xl bg-sky-50 text-lg text-teal-900"
              >
                <FontAwesomeIcon icon={icon} />
              </span>

              {/* Title */}
              <h3 className="mt-4 text-base font-bold text-blue-950">
                {title}
              </h3>

              {/* Description */}
              <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-500">
                {description}
              </p>

              {/* Request */}
              <Link
                to="/contact"
                className="mt-4 flex items-center gap-2 text-sm font-semibold text-teal-700 transition hover:text-teal-500"
              >
                <FontAwesomeIcon icon={faArrowLeft} className="text-xs" />
                طلب الخدمة
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

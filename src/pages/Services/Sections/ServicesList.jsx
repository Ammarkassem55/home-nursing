import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPersonWalkingWithCane,
  faBandage,
  faSyringe,
  faDroplet,
  faStethoscope,
  faHandHoldingMedical,
  faClipboardCheck,
  faArrowLeft,
  faClock,
} from "@fortawesome/free-solid-svg-icons";

const services = [
  {
    icon: faPersonWalkingWithCane,
    badge: "الأكثر طلبًا",
    title: "الرعاية والتمريض المنزلي لكبار السن ومرضى الزهايمر",
    description:
      "متابعة تمريضية منزلية لكبار السن وأصحاب الأمراض المزمنة، مع الاهتمام براحة المريض ومساعدته في احتياجات الرعاية اليومية.",
    type: "زيارة دورية / مقيم",
    duration: "من ساعة حتى إقامة كاملة",
  },
  {
    icon: faHandHoldingMedical,
    badge: "رعاية ما بعد الجراحة",
    title: "رعاية المرضى بعد العمليات الجراحية",
    description:
      "متابعة المريض خلال فترة التعافي في المنزل، مع متابعة العلامات الحيوية والالتزام بتعليمات الطبيب والجراح.",
    type: "زيارة مجدولة",
    duration: "45 - 60 دقيقة",
  },
  {
    icon: faBandage,
    badge: "عناية متخصصة",
    title: "تغيير وتنظيف الجروح وفرد الغيار",
    description:
      "العناية بالجروح الجراحية وقرح الفراش والقدم السكري، مع الالتزام بأساليب التعقيم واستخدام المستلزمات المناسبة للحالة.",
    type: "زيارة حسب الحالة",
    duration: "30 - 45 دقيقة",
  },
  {
    icon: faDroplet,
    badge: "متابعة مستمرة",
    title: "إعطاء المحاليل الوريدية والمراقبة أثناء الجلسة",
    description:
      "إعطاء المحاليل الوريدية الموصوفة طبيًا، مع متابعة معدل التسريب ومراقبة الحالة العامة للمريض طوال فترة الجلسة.",
    type: "جلسة كاملة",
    duration: "حسب مدة المحلول",
  },
  {
    icon: faSyringe,
    badge: "دقة عالية",
    title: "تركيب وإزالة الكانيولا",
    description:
      "تركيب وإزالة الكانيولا باستخدام الأدوات والمستلزمات المناسبة، مع متابعة موضع الإدخال والتعامل معه وفقًا للإجراءات التمريضية.",
    type: "زيارة سريعة",
    duration: "15 - 20 دقيقة",
  },
  {
    icon: faStethoscope,
    badge: "حسب الوصفة الطبية",
    title: "إعطاء الحقن الوريدية والعضلية",
    description:
      "إعطاء الحقن العضلية والوريدية الموصوفة طبيًا، مع الالتزام بالجرعة وطريقة الإعطاء والتعليمات الطبية الخاصة بالمريض.",
    type: "زيارة حسب الوصفة",
    duration: "15 - 30 دقيقة",
  },
  {
    icon: faClipboardCheck,
    badge: "متابعة دورية",
    title: "متابعة العلامات الحيوية وتنظيم الأدوية",
    description:
      "قياس الضغط والسكر والحرارة والنبض، ومساعدة الأسرة في تنظيم مواعيد الأدوية ومتابعة الملاحظات المهمة عن حالة المريض.",
    type: "زيارة أسبوعية / شهرية",
    duration: "20 - 30 دقيقة",
  },
];

export default function ServicesList() {
  return (
    <section dir="rtl" className="container mx-auto px-4 py-10 lg:py-16">
      {/* رأس القسم */}
      <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
        {/* العنوان */}
        <div className="order-1 text-right md:order-1">
          <span className="inline-flex items-center rounded-full bg-sky-50 px-3 py-2 text-sm font-semibold text-teal-900">
            دليل الخدمات والإجراءات
          </span>

          <h2 className="mt-3 text-2xl font-extrabold text-blue-950 md:text-3xl">
            تفاصيل الخدمات والإجراءات التمريضية
          </h2>

          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-slate-500">
            تعرف على أبرز خدمات التمريض المنزلي والإجراءات التي يمكن تقديمها
            داخل المنزل وفقًا لحالة المريض والتعليمات الطبية.
          </p>
        </div>

        {/* حجز زيارة */}
        <Link
          to="/contact"
          className="order-2 inline-flex items-center gap-2 text-sm font-semibold text-teal-700 transition hover:text-teal-500 md:order-2"
        >
          حجز زيارة الآن
          <FontAwesomeIcon icon={faArrowLeft} className="text-xs" />
        </Link>
      </div>

      {/* الخدمات */}
      <div className="flex flex-col gap-5">
        {services.map(({ icon, badge, title, description, type, duration }) => (
          <article
            key={title}
            className="grid gap-5 rounded-3xl border border-slate-100 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md md:grid-cols-[1fr_auto] md:p-6"
          >
            {/* النص */}
            <div className="text-right">
              <div className="flex items-start gap-3">
                <span
                  aria-hidden="true"
                  className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-sky-50 text-lg text-teal-900"
                >
                  <FontAwesomeIcon icon={icon} />
                </span>

                <div>
                  <span className="text-xs font-semibold text-teal-700">
                    {badge}
                  </span>

                  <h3 className="mt-1 text-base font-bold text-blue-950 md:text-lg">
                    {title}
                  </h3>
                </div>
              </div>

              <p className="mt-3 text-sm leading-relaxed text-slate-500">
                {description}
              </p>

              <Link
                to="/contact"
                className="mt-4 inline-flex items-center gap-2 rounded-xl bg-blue-950 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-900"
              >
                احجز الخدمة
                <FontAwesomeIcon icon={faArrowLeft} className="text-xs" />
              </Link>
            </div>

            {/* تفاصيل الخدمة */}
            <div className="grid grid-cols-2 gap-3 self-start md:w-64">
              {/* نوع الخدمة */}
              <div className="rounded-2xl border border-slate-100 bg-slate-50 p-4 transition duration-300 hover:border-sky-100 hover:bg-sky-50">
                <div className="flex items-center gap-2">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white text-sm text-teal-900 shadow-sm">
                    <FontAwesomeIcon icon={faClipboardCheck} />
                  </span>

                  <p className="text-xs font-semibold text-slate-500">
                    نوع الخدمة
                  </p>
                </div>

                <p className="mt-3 text-sm font-bold leading-relaxed text-blue-950">
                  {type}
                </p>
              </div>

              {/* مدة الزيارة */}
              <div className="rounded-2xl border border-slate-100 bg-slate-50 p-4 transition duration-300 hover:border-sky-100 hover:bg-sky-50">
                <div className="flex items-center gap-2">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white text-sm text-teal-900 shadow-sm">
                    <FontAwesomeIcon icon={faClock} />
                  </span>

                  <p className="text-xs font-semibold text-slate-500">
                    مدة الزيارة
                  </p>
                </div>

                <p className="mt-3 text-sm font-bold leading-relaxed text-blue-950">
                  {duration}
                </p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

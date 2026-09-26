import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBroom,
  faFileMedical,
  faVolumeXmark,
  faUserClock,
  faArrowLeft,
} from "@fortawesome/free-solid-svg-icons";

const tips = [
  {
    icon: faBroom,
    title: "جهّز مساحة نظيفة ومرتبة",
    description:
      "خصّص مكانًا هادئًا ونظيفًا بجانب سرير المريض، مع إضاءة جيدة ومساحة كافية لتنفيذ الإجراء التمريضي بسهولة.",
  },
  {
    icon: faFileMedical,
    title: "حضّر الملف الطبي للمريض",
    description:
      "جهّز التقارير الطبية والتحاليل والأشعة السابقة، بالإضافة إلى قائمة الأدوية الحالية لتسهيل متابعة الحالة.",
  },
  {
    icon: faVolumeXmark,
    title: "حافظ على هدوء المكان",
    description:
      "قلّل الضوضاء وعدد الأشخاص الموجودين أثناء الزيارة، لتوفير بيئة مريحة تساعد على التركيز وراحة المريض.",
  },
  {
    icon: faUserClock,
    title: "كن حاضرًا وقت الزيارة",
    description:
      "وجود أحد أفراد الأسرة أثناء الزيارة يساعد على فهم التعليمات وطرح الأسئلة المهمة ومتابعة احتياجات المريض.",
  },
];

export default function FamilyGuide() {
  return (
    <section dir="rtl" className="container mx-auto px-4 py-10 lg:py-16">
      <div className="grid gap-6 lg:grid-cols-[1fr_320px]">
        {/* دليل الأسرة */}
        <div className="rounded-3xl border border-slate-100 bg-white p-6 shadow-sm">
          <span className="inline-flex items-center rounded-full bg-sky-50 px-3 py-2 text-sm font-semibold text-teal-900">
            دليل الأسرة
          </span>

          <h2 className="mt-3 text-xl font-extrabold text-blue-950 md:text-2xl">
            كيف تستعد للزيارة التمريضية المنزلية؟
          </h2>

          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-slate-500">
            بعض الخطوات البسيطة تساعد على تجهيز المكان وتسهيل الزيارة وتوفير
            بيئة أكثر راحة للمريض.
          </p>

          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {tips.map(({ icon, title, description }) => (
              <div
                key={title}
                className="rounded-2xl border border-slate-100 bg-slate-50 p-4 text-right transition duration-300 hover:-translate-y-1 hover:border-sky-100 hover:bg-sky-50 hover:shadow-sm"
              >
                <span
                  aria-hidden="true"
                  className="flex h-10 w-10 items-center justify-center rounded-xl bg-white text-teal-900 shadow-sm"
                >
                  <FontAwesomeIcon icon={icon} />
                </span>

                <h3 className="mt-3 text-sm font-bold text-blue-950">
                  {title}
                </h3>

                <p className="mt-1 text-xs leading-relaxed text-slate-500">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* بانر الحجز الجانبي */}
        <div className="flex flex-col justify-between rounded-3xl bg-blue-950 p-6 text-white">
          <div>
            <span className="inline-flex items-center rounded-full bg-white/10 px-3 py-2 text-sm font-semibold text-blue-200">
              جاهز للحجز؟
            </span>

            <h3 className="mt-3 text-lg font-extrabold leading-snug">
              احجز زيارتك التمريضية الآن
            </h3>

            <p className="mt-3 text-sm leading-relaxed text-blue-200">
              تواصل معي لتنسيق الزيارة وتحديد الخدمة والموعد المناسب لحالة
              المريض واحتياجاته.
            </p>
          </div>

          <Link
            to="/contact"
            className="mt-6 inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-emerald-600"
          >
            احجز زيارتك الآن
            <FontAwesomeIcon icon={faArrowLeft} className="text-xs" />
          </Link>
        </div>
      </div>
    </section>
  );
}

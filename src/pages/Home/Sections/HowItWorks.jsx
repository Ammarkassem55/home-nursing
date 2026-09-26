import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouseMedicalCircleCheck,
  faCalendarCheck,
  faPhoneVolume,
} from "@fortawesome/free-solid-svg-icons";

const steps = [
  {
    number: "03",
    title: "احصل على الرعاية المنزلية",
    description:
      "يصل إليك الأخصائي بالمستلزمات والأدوات الطبية اللازمة لتقديم الخدمة المطلوبة داخل المنزل باهتمام واحترافية.",
    icon: faHouseMedicalCircleCheck,
  },
  {
    number: "02",
    title: "حدد الموعد المناسب",
    description:
      "يتم الاتفاق معك على الموعد الأنسب لك ولأسرتك، سواء كانت زيارة مجدولة أو حسب طبيعة الخدمة المطلوبة.",
    icon: faCalendarCheck,
  },
  {
    number: "01",
    title: "تواصل معي",
    description:
      "تواصل مباشرة أو أرسل تفاصيل حالة المريض والخدمة المطلوبة عبر وسيلة التواصل المناسبة.",
    icon: faPhoneVolume,
  },
];

export default function HowItWorks() {
  return (
    <section dir="rtl" className="py-10 lg:py-16">
      <div className="container mx-auto px-4">
        {/* رأس القسم */}
        <div className="mb-8 text-center">
          <span className="inline-flex items-center rounded-full bg-sky-50 px-3 py-2 text-sm font-semibold text-teal-900">
            سهولة وبساطة
          </span>

          <h2 className="mt-3 text-2xl font-extrabold text-blue-950 md:text-3xl">
            كيف تحصل على الخدمة بثلاث خطوات؟
          </h2>

          <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-slate-500 md:text-base">
            خطوات بسيطة وميسرة تساعدك على طلب الرعاية التمريضية المنزلية
            والتنسيق للزيارة في الموعد المناسب.
          </p>
        </div>

        {/* الخطوات */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          {steps.map(({ number, title, description, icon }) => (
            <article
              key={number}
              className="relative rounded-2xl border border-slate-100 bg-white p-5 text-start shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md"
            >
              {/* الأيقونة + الرقم */}
              <div className="flex items-center justify-between">
                <span
                  aria-hidden="true"
                  className="flex h-11 w-11 items-center justify-center rounded-xl bg-sky-50 text-lg text-teal-900"
                >
                  <FontAwesomeIcon icon={icon} />
                </span>

                <span className="text-2xl font-extrabold text-slate-200">
                  {number}
                </span>
              </div>

              {/* العنوان */}
              <h3 className="mt-4 text-base font-bold text-blue-950">
                {title}
              </h3>

              {/* الوصف */}
              <p className="mt-2 text-sm leading-relaxed text-slate-500">
                {description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

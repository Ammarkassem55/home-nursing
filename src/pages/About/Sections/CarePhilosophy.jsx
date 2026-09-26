import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouseUser,
  faShieldVirus,
  faClockRotateLeft,
  faCheck,
  faStar,
  faSpa,
} from "@fortawesome/free-solid-svg-icons";

const principles = [
  {
    title: "قدسية وخصوصية المنزل",
    description:
      "للمنزل حرمته وهدوؤه، لذلك نتعامل بأقصى درجات الأدب والاحتشام، ونحفظ أسرار المرضى والبيوت، مع احترام راحة كبار السن والعادات الأسرية المحافظة.",
    tag: "سرية طبية وأخلاقية مطلقة",
    icon: faHouseUser,
  },
  {
    title: "أمان ومكافحة العدوى",
    description:
      "نطبق معايير مكافحة العدوى، مع الالتزام بتعقيم اليدين، وارتداء وسائل الوقاية الطبية المناسبة، والتخلص الآمن من النفايات الطبية.",
    tag: "معايير رعاية آمنة",
    icon: faShieldVirus,
  },
  {
    title: "جلسة بدون استعجال",
    description:
      "لا تنتهي الزيارة بمجرد إعطاء المحلول أو تغيير الغيار، بل نمنح المريض وقته الكامل للتقييم والاستماع لمخاوفه، وشرح الإجراء بوضوح وصبر.",
    tag: "استقرار الحالة قبل المغادرة",
    icon: faClockRotateLeft,
  },
];

export default function CarePhilosophy() {
  return (
    <section dir="rtl" className="bg-slate-50 py-10 lg:py-16">
      <div className="container mx-auto px-4">
        {/* رأس القسم */}
        <div className="mb-8">
          <span className="inline-flex items-center rounded-full bg-sky-50 px-3 py-2 text-sm font-semibold text-teal-900">
            <FontAwesomeIcon icon={faSpa} className="ml-2" />
            فلسفة الرعاية الإنسانية
          </span>

          <div className="mx-auto mt-4 grid items-center gap-6 lg:grid-cols-2">
            {/* النص */}
            <blockquote className="text-start text-xl font-extrabold leading-relaxed text-blue-950 md:text-2xl">
              "الشفاء الحقيقي يبدأ بالسكينة والكرامة النفسية للمريض"
              <p className="mt-2 text-sm font-semibold leading-relaxed text-slate-500">
                التمريض المنزلي ليس مجرد إجراء طبي جاف أو حقن للأدوية؛ بل هو
                حضور إنساني دافئ يمنح المريض الأمان ويخفف العبء والقلق عن أسرته
                في أصعب اللحظات.
              </p>
            </blockquote>

            {/* التقييم */}
            <div className="flex items-center gap-3 rounded-2xl border border-slate-100 bg-white p-4 text-start shadow-sm">
              <span
                aria-hidden="true"
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-teal-950"
              >
                <FontAwesomeIcon icon={faStar} />
              </span>

              <div>
                <p className="text-sm font-bold text-blue-950">
                  تجربة تقييم مستقلة
                </p>

                <p className="text-xs leading-relaxed text-slate-500">
                  آراء دقيقة من مرضى استخدموا الخدمة سابقًا
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* الكروت */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          {principles.map(({ title, description, tag, icon }) => (
            <article
              key={title}
              className="flex flex-col rounded-2xl border border-slate-100 bg-white p-5 text-start shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md"
            >
              <span
                aria-hidden="true"
                className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-lg text-teal-900"
              >
                <FontAwesomeIcon icon={icon} />
              </span>

              <h3 className="mt-4 text-base font-bold text-blue-950">
                {title}
              </h3>

              <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-500">
                {description}
              </p>

              <p className="mt-4 flex items-center gap-2 text-xs font-semibold text-teal-900">
                <FontAwesomeIcon icon={faCheck} />
                {tag}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

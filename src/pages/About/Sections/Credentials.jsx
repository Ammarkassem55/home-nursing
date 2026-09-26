import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGraduationCap,
  faIdCardClip,
  faHeartPulse,
} from "@fortawesome/free-solid-svg-icons";

const credentials = [
  {
    title: "المؤهل الأكاديمي والتدريب",
    description:
      "بكالوريوس علوم تمريض، مع تدريب موسّع في مجال الرعاية الحرجة، والحصول على دورات في دعم الحياة الأساسي (BLS) ودعم الحياة القلبي المتقدم (ACLS)، مع تحديث المهارات بشكل دوري.",
    icon: faGraduationCap,
  },
  {
    title: "الاعتمادات والتراخيص",
    description:
      "ترخيص مزاولة مهنة التمريض ساري، مع الالتزام بالمعايير المهنية وإجراءات السلامة والرعاية الصحية.",
    icon: faIdCardClip,
  },
  {
    title: "مراقبة المؤشرات الحيوية",
    description:
      "خبرة في متابعة ورصد المؤشرات الحيوية بدقة، والتعامل مع الحالات التي تحتاج إلى متابعة مستمرة واستجابة سريعة.",
    icon: faHeartPulse,
  },
];

export default function Credentials() {
  return (
    <section
      dir="rtl"
      className="container mx-auto mt-12 px-4 pb-10 lg:mt-16 lg:pb-16"
    >
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        {credentials.map(({ title, description, icon }) => (
          <article
            key={title}
            className="rounded-2xl border border-slate-100 bg-white p-5 text-start shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md"
          >
            <span
              aria-hidden="true"
              className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-lg text-teal-900"
            >
              <FontAwesomeIcon icon={icon} />
            </span>

            <h3 className="mt-4 text-base font-bold text-blue-950">{title}</h3>

            <p className="mt-2 text-sm leading-relaxed text-slate-500">
              {description}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}

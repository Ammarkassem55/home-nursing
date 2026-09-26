import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPersonCane,
  faCalendarCheck,
  faClipboardCheck,
  faHandsHoldingChild,
  faBriefcaseMedical,
  faHeadset,
  faUserTie,
} from "@fortawesome/free-solid-svg-icons";

const reasons = [
  {
    number: "01",
    title: "مراعاة فائقة مع كبار السن والأسرة",
    description:
      "تعامل رقيق يراعي الحالة النفسية والجسدية لكبار السن، مع صبر وإحساس عالٍ بمشاعر الأسرة في أصعب الأوقات.",
    icon: faPersonCane,
  },
  {
    number: "02",
    title: "التزام دقيق بالمواعيد المجدولة",
    description:
      "تقدير كامل لأوقات المرضى وأسرهم، والحرص على الوصول في الموعد المحدد والالتزام بجدول الزيارات.",
    icon: faCalendarCheck,
  },
  {
    number: "03",
    title: "تقييم سريري شامل لكل زيارة",
    description:
      "متابعة دقيقة لحالة المريض قبل بدء أي إجراء تمريضي، مع تسجيل ومتابعة الملاحظات المهمة خلال الزيارة.",
    icon: faClipboardCheck,
  },
  {
    number: "04",
    title: "تنسيق ودعم للمرافقين بالمنزل",
    description:
      "إرشاد أفراد الأسرة حول طرق العناية اليومية بالمريض، مع توضيح التعليمات التي تساعد على استقرار الحالة.",
    icon: faHandsHoldingChild,
  },
  {
    number: "05",
    title: "تجهيزات طبية متكاملة ومحمولة",
    description:
      "تجهيز المستلزمات والأدوات الطبية اللازمة لتنفيذ الإجراءات التمريضية المطلوبة داخل المنزل بطريقة منظمة وآمنة.",
    icon: faBriefcaseMedical,
  },
  {
    number: "06",
    title: "تواصل مستمر ومتابعة فعالة",
    description:
      "توفير وسيلة تواصل واضحة لمتابعة حالة المريض والإجابة عن الاستفسارات المتعلقة بالرعاية المنزلية.",
    icon: faHeadset,
  },
];

export default function WhyChooseUs() {
  return (
    <section dir="rtl" className="container mx-auto px-4 py-10 lg:py-16">
      {/* رأس القسم */}
      <div className="mb-8">
        <span className="inline-flex items-center rounded-full bg-sky-50 px-3 py-2 text-sm font-semibold text-teal-900">
          <FontAwesomeIcon className="ml-2" icon={faUserTie} />
          الأصالة والدقة المهنية
        </span>

        <h2 className="mt-3 text-2xl font-extrabold text-blue-950 md:text-3xl">
          لماذا تختار رعاية محمد صلاح شرف الدين؟
        </h2>

        <p className=" mt-3 text-sm text-start leading-relaxed text-slate-500">
          رعاية تمريضية منزلية تجمع بين الخبرة المهنية، والاهتمام الإنساني،
          والحرص على راحة المريض وخصوصية أسرته.
        </p>
      </div>

      {/* الكروت */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {reasons.map(({ number, title, description, icon }) => (
          <article
            key={number}
            className="rounded-2xl border border-slate-100 bg-white p-5 text-start shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md"
          >
            {/* الأيقونة + الرقم */}
            <div className="flex items-center justify-between">
              <span
                aria-hidden="true"
                className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-lg text-teal-900"
              >
                <FontAwesomeIcon icon={icon} />
              </span>

              <span className="text-xl font-extrabold text-slate-200">
                {number}
              </span>
            </div>

            {/* العنوان */}
            <h3 className="mt-4 text-base font-bold text-blue-950">{title}</h3>

            {/* الوصف */}
            <p className="mt-2 text-sm leading-relaxed text-slate-500">
              {description}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}

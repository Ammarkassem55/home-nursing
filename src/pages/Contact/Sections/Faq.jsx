import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleQuestion } from "@fortawesome/free-solid-svg-icons";

const faqs = [
  {
    question: "هل يلزم توفير وصفة أو تعليمات طبية لبعض الخدمات؟",
    answer:
      "بعض الإجراءات التمريضية وإعطاء الأدوية والمحاليل تحتاج إلى وصفة أو تعليمات طبية واضحة من الطبيب المعالج، ويتم تنفيذ الإجراء وفقًا للتعليمات الطبية الخاصة بالمريض.",
  },
  {
    question: "كيف يتم تحديد موعد الزيارة المنزلية؟",
    answer:
      "بعد إرسال طلب الحجز يتم التواصل معك لتأكيد الخدمة المطلوبة ومعرفة العنوان وتنسيق الموعد المناسب حسب طبيعة الحالة وتوافر المواعيد.",
  },
  {
    question: "هل يمكن طلب زيارة عاجلة؟",
    answer:
      "يمكن التواصل مباشرة لطلب زيارة عاجلة، ويتم تحديد إمكانية الحضور والموعد المناسب حسب طبيعة الحالة والموقع وتوافر المواعيد.",
  },
  {
    question: "هل المستلزمات الطبية مشمولة في الزيارة؟",
    answer:
      "يتم تحديد المستلزمات المطلوبة حسب نوع الخدمة وحالة المريض. بعض الأدوات الأساسية قد تكون متوفرة أثناء الزيارة، بينما الأدوية والمحاليل والمستلزمات الخاصة بالحالة يتم التنسيق بشأنها مسبقًا.",
  },
];

export default function Faq() {
  return (
    <section dir="rtl" className="container mx-auto px-4 py-10 lg:py-16">
      {/* العنوان */}
      <div className="mb-8 text-center">
        <span className="inline-flex items-center gap-2 rounded-full bg-sky-50 px-3 py-2 text-sm font-semibold text-teal-900">
          <FontAwesomeIcon icon={faCircleQuestion} />
          توضيحات وإرشادات مهمة
        </span>

        <h2 className="mt-3 text-2xl font-extrabold text-blue-950 md:text-3xl">
          الأسئلة الشائعة حول الحجز والزيارات المنزلية
        </h2>

        <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-slate-500 md:text-base">
          إجابات على أهم الأسئلة التي قد تحتاج إلى معرفتها قبل حجز الزيارة
          التمريضية المنزلية.
        </p>
      </div>

      {/* الأسئلة */}
      <div className="mx-auto grid max-w-4xl grid-cols-1 gap-4 sm:grid-cols-2">
        {faqs.map(({ question, answer }) => (
          <article
            key={question}
            className="rounded-2xl border border-slate-100 bg-white p-5 text-right shadow-sm transition duration-300 hover:-translate-y-1 hover:border-sky-100 hover:shadow-md"
          >
            <div className="flex items-start gap-3">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-sky-50 text-teal-900">
                <FontAwesomeIcon icon={faCircleQuestion} />
              </span>

              <h3 className="pt-1 text-sm font-bold leading-relaxed text-blue-950">
                {question}
              </h3>
            </div>

            <p className="mt-4 text-sm leading-7 text-slate-500">{answer}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

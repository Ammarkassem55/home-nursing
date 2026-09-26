import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCertificate, faIdCard } from "@fortawesome/free-solid-svg-icons";

import profileImg from "../../../assets/images/person.png";

const stats = [
  {
    value: "100%",
    label: "تعقيم سريري",
  },
  {
    value: "3200+",
    label: "زيارة منزلية",
  },
  {
    value: "10+",
    label: "سنوات خبرة",
  },
];

export default function Profile() {
  return (
    <section dir="rtl" className="bg-gray-50">
      {/* Header */}
      <div className="relative">
        {/* الخلفية بعرض الشاشة */}
        <div className="absolute inset-x-0 top-0 -bottom-6 bg-slate-100" />

        {/* المحتوى */}
        <div className="relative container mx-auto px-4 py-8 lg:py-10">
          <p className="mb-3 text-xs font-semibold text-slate-400">
            الرئيسية <span className="mx-1">/</span>
            <span className="text-blue-600">عني وعن خبرتي</span>
          </p>

          <h1 className="text-2xl font-extrabold text-blue-950 md:text-3xl">
            المسيرة المهنية والخبرة التخصصية
          </h1>
        </div>
      </div>

      {/* محتوى الـ Profile */}
      <div className="container mx-auto px-4 py-8 lg:py-12">
        <div className="grid items-start gap-8 lg:grid-cols-2 lg:gap-12">
          {/* النص */}
          <div className="order-2 lg:order-1">
            <span className="inline-flex items-center rounded-full bg-sky-50 px-3 py-2 text-sm font-semibold text-teal-900">
              <FontAwesomeIcon className="ml-2" icon={faIdCard} />
              الملف التعريفي الشخصي
            </span>

            <h2 className="mt-3 text-xl font-extrabold leading-snug text-blue-950 md:text-2xl">
              نقل كفاءة العناية المركزة والمستشفيات التخصصية إلى راحة وسكينة
              المنزل
            </h2>

            <p className="mt-4 leading-relaxed text-slate-600">
              أنا محمد صلاح شرف الدين، أخصائي تمريض حاصل على بكالوريوس العلوم في
              التمريض، بخبرة سريرية تمتد لأكثر من عقد في أقسام العناية المركزة
              (ICU) ورعاية ما بعد العمليات الجراحية وإدارة الحالات الحرجة
              والمعقدة.
            </p>

            <p className="mt-4 leading-relaxed text-slate-600">
              أؤمن بأن المنزل هو البيئة الأنسب لاستعادة العافية والشفاء السريع،
              بشرط توفر الانضباط الطبي الدقيق والتعقيم السريري الصارم، مقترنًا
              بالاحترام الفائق لراحة المريض وقدسية الأسرة والخصوصية التامة.
            </p>
          </div>

          {/* الصورة */}
          <div className="order-1 lg:order-2">
            <div className="relative overflow-hidden rounded-3xl">
              <img
                src={profileImg}
                alt="محمد صلاح شرف الدين"
                className="h-full w-full object-cover"
              />

              {/* Badge */}
              <span className="absolute right-4 top-4 inline-flex items-center gap-1 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-blue-950 backdrop-blur">
                <FontAwesomeIcon
                  icon={faCertificate}
                  className="text-teal-900"
                />
                مرخّص من الهيئة المصرية للتخصصات
              </span>

              {/* معلومات الصورة */}
              <div className="absolute inset-x-4 bottom-4 rounded-2xl bg-white/95 px-4 py-3 backdrop-blur">
                <p className="text-sm font-bold text-blue-950">
                  محمد صلاح شرف الدين
                </p>

                <p className="text-xs text-slate-500">
                  رعاية طبية تخصصية مقدمة في خصوصية منزلك
                </p>
              </div>
            </div>

            {/* الإحصائيات */}
            <div className="mt-4 grid grid-cols-3 gap-3">
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
        </div>
      </div>
    </section>
  );
}

import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCertificate,
  faBolt,
  faPhone,
  faComment,
  faClock,
  faLocationDot,
  faShieldHalved,
  faSyringe,
  faMobileScreenButton,
  faLock,
  faArrowLeft,
} from "@fortawesome/free-solid-svg-icons";

import doctorThumb from "../../../assets/images/person.png";

const WHATSAPP_NUMBER = "201027269004";

const services = [
  "الرعاية والتمريض المنزلي",
  "رعاية ما بعد العمليات",
  "تغيير وتنظيف الجروح",
  "المحاليل والكانيولا",
  "الحقن الوريدي والعضلي",
  "متابعة العلامات الحيوية",
];

const timeLabels = {
  morning: "الفترة الصباحية (08:00 - 12:00)",
  afternoon: "فترة الظهيرة (12:00 - 16:00)",
  evening: "الفترة المسائية (16:00 - 20:00)",
  night: "الفترة المتأخرة (20:00 - 23:00)",
};

const safetyStandards = [
  {
    icon: faShieldHalved,
    text: "الالتزام بإجراءات مكافحة العدوى والتعقيم أثناء تقديم الخدمة",
  },
  {
    icon: faSyringe,
    text: "استخدام المستلزمات والأدوات الطبية المناسبة لكل إجراء تمريضي",
  },
  {
    icon: faMobileScreenButton,
    text: "تواصل واضح مع المريض والأسرة وشرح التعليمات الخاصة بالرعاية",
  },
];

const initialForm = {
  name: "",
  phone: "",
  service: "",
  priority: "scheduled",
  date: "",
  time: "",
  address: "",
  notes: "",
};

export default function Booking() {
  const [form, setForm] = useState(initialForm);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const priorityLabel =
      form.priority === "urgent" ? "زيارة عاجلة / حسب التوفر" : "زيارة مجدولة";

    const timeLabel = timeLabels[form.time] || "";

    const message = [
      "مرحبًا، أرغب في حجز زيارة تمريضية منزلية:",
      "",
      `اسم المريض / المرافق: ${form.name}`,
      `رقم الهاتف / الواتساب: ${form.phone}`,
      `الخدمة المطلوبة: ${form.service}`,
      `نوع الزيارة: ${priorityLabel}`,
      form.date ? `تاريخ الزيارة المقترح: ${form.date}` : null,
      timeLabel ? `الفترة المناسبة: ${timeLabel}` : null,
      `العنوان: ${form.address}`,
      form.notes ? `ملاحظات: ${form.notes}` : null,
    ]
      .filter(Boolean)
      .join("\n");

    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
      message,
    )}`;

    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <section dir="rtl" className="container mx-auto px-4 py-10 lg:py-16">
      <div className="grid gap-5 lg:grid-cols-[320px_1fr]">
        {/* ================= الشريط الجانبي ================= */}
        <div className="flex flex-col gap-4">
          {/* الخبرة والتخصص */}
          <div className="flex items-center gap-3 rounded-2xl border border-slate-100 bg-white p-4 shadow-sm">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-sky-50 text-teal-900">
              <FontAwesomeIcon icon={faCertificate} />
            </span>

            <div>
              <p className="text-sm font-bold text-blue-950">
                تمريض منزلي تخصصي
              </p>

              <p className="text-xs leading-relaxed text-slate-500">
                رعاية تمريضية داخل المنزل حسب احتياجات المريض
              </p>
            </div>
          </div>

          {/* الاتصال المباشر */}
          <div className="rounded-2xl bg-blue-950 p-5 text-white">
            <span className="flex items-center gap-2 text-xs font-semibold text-blue-300">
              <FontAwesomeIcon icon={faBolt} />
              تواصل سريع ومباشر
            </span>

            <h3 className="mt-2 text-base font-bold">
              هل تحتاج إلى الاستفسار قبل الحجز؟
            </h3>

            <p className="mt-2 text-xs leading-relaxed text-blue-300">
              يمكنك التواصل مباشرة للاستفسار عن الخدمة المناسبة وتنسيق موعد
              الزيارة.
            </p>

            {/* اتصال */}
            <a
              href={`tel:+${WHATSAPP_NUMBER}`}
              className="mt-4 flex items-center justify-center gap-2 rounded-xl bg-white/10 px-4 py-3 text-sm font-semibold transition hover:bg-white/20"
            >
              <FontAwesomeIcon icon={faPhone} />
              اتصال هاتفي مباشر
            </a>

            {/* واتساب */}
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 flex items-center justify-center gap-2 rounded-xl bg-emerald-500 px-4 py-3 text-sm font-semibold transition hover:bg-emerald-600"
            >
              <FontAwesomeIcon icon={faComment} />
              مراسلة واتساب
            </a>

            {/* أوقات العمل */}
            <div className="mt-5 flex items-start gap-3 border-t border-white/10 pt-4">
              <FontAwesomeIcon
                icon={faClock}
                className="mt-0.5 text-blue-300"
              />

              <div>
                <p className="text-xs font-semibold text-blue-200">
                  أوقات العمل
                </p>

                <p className="mt-1 text-xs leading-relaxed text-blue-300">
                  متاح للتنسيق والحجز على مدار 24 ساعة يوميًا
                </p>
              </div>
            </div>

            {/* نطاق التغطية */}
            <div className="mt-4 flex items-start gap-3">
              <FontAwesomeIcon
                icon={faLocationDot}
                className="mt-0.5 text-blue-300"
              />

              <div>
                <p className="text-xs font-semibold text-blue-200">
                  نطاق التغطية
                </p>

                <p className="mt-1 text-xs leading-relaxed text-blue-300">
                  مدينة شبين الكوم وقرية ميت خاقان وضواحيها
                </p>
              </div>
            </div>
          </div>

          {/* معايير السلامة */}
          <div className="rounded-2xl border border-slate-100 bg-white p-4 shadow-sm">
            <h3 className="mb-3 text-sm font-bold text-blue-950">
              معايير السلامة التمريضية
            </h3>

            <div className="flex flex-col gap-3">
              {safetyStandards.map(({ icon, text }) => (
                <div key={text} className="flex items-start gap-3">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-sky-50 text-xs text-teal-900">
                    <FontAwesomeIcon icon={icon} />
                  </span>

                  <p className="text-xs leading-relaxed text-slate-600">
                    {text}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* بيانات الممرض */}
          <div className="flex items-center gap-3 rounded-2xl border border-slate-100 bg-white p-4 shadow-sm">
            <img
              src={doctorThumb}
              alt="محمد صلاح شرف الدين"
              className="h-11 w-11 shrink-0 rounded-full object-cover"
            />

            <div>
              <p className="text-sm font-bold text-blue-950">
                محمد صلاح شرف الدين
              </p>

              <p className="text-xs leading-relaxed text-slate-500">
                تمريض منزلي ورعاية ما بعد العمليات مع أكثر من 10 سنوات خبرة
              </p>
            </div>
          </div>
        </div>

        {/* ================= الفورم ================= */}
        <div className="rounded-3xl border border-slate-100 bg-white p-5 shadow-sm md:p-8">
          {/* العنوان */}
          <div className="mb-6 flex items-center justify-between gap-4">
            <h2 className="flex items-center gap-2 text-lg font-extrabold text-blue-950 md:text-xl">
              استمارة الحجز المباشر
            </h2>

            <span className="shrink-0 rounded-full bg-sky-50 px-3 py-1 text-xs font-semibold text-teal-900">
              خطوة واحدة
            </span>
          </div>

          <p className="-mt-4 mb-6 text-sm leading-relaxed text-slate-500">
            املأ البيانات التالية وسيتم فتح واتساب لإرسال طلب الحجز مباشرة.
          </p>

          <form onSubmit={handleSubmit} className="grid gap-4 sm:grid-cols-2">
            {/* الاسم */}
            <div className="text-right">
              <label
                htmlFor="name"
                className="mb-1.5 block text-sm font-semibold text-slate-700"
              >
                اسم المريض أو المرافق *
              </label>

              <input
                id="name"
                name="name"
                type="text"
                required
                value={form.name}
                onChange={handleChange}
                placeholder="اكتب الاسم بالكامل"
                className="w-full rounded-xl border border-slate-200 px-4 py-2.5 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-teal-600 focus:ring-2 focus:ring-sky-100"
              />
            </div>

            {/* الهاتف */}
            <div className="text-right">
              <label
                htmlFor="phone"
                className="mb-1.5 block text-sm font-semibold text-slate-700"
              >
                رقم الهاتف / الواتساب *
              </label>

              <div className="flex overflow-hidden rounded-xl border border-slate-200 focus-within:border-teal-600 focus-within:ring-2 focus-within:ring-sky-100">
                <span className="flex items-center bg-slate-50 px-3 text-sm text-slate-500">
                  +20
                </span>

                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  required
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="01XXXXXXXXX"
                  dir="ltr"
                  className="w-full px-4 py-2.5 text-sm text-slate-900 outline-none"
                />
              </div>
            </div>

            {/* الخدمة */}
            <div className="text-right sm:col-span-2">
              <label
                htmlFor="service"
                className="mb-1.5 block text-sm font-semibold text-slate-700"
              >
                نوع الخدمة التمريضية المطلوبة *
              </label>

              <select
                id="service"
                name="service"
                required
                value={form.service}
                onChange={handleChange}
                className="w-full rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm text-slate-900 outline-none transition focus:border-teal-600 focus:ring-2 focus:ring-sky-100"
              >
                <option value="">اختر الخدمة التمريضية المناسبة</option>

                {services.map((service) => (
                  <option key={service} value={service}>
                    {service}
                  </option>
                ))}
              </select>
            </div>

            {/* نوع الزيارة */}
            <div className="text-right sm:col-span-2">
              <label className="mb-2 block text-sm font-semibold text-slate-700">
                نوع الزيارة *
              </label>

              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                {/* عاجلة */}
                <label
                  className={`flex cursor-pointer items-center justify-between rounded-xl border px-4 py-3 text-sm transition ${
                    form.priority === "urgent"
                      ? "border-teal-600 bg-sky-50"
                      : "border-slate-200 hover:border-sky-200"
                  }`}
                >
                  <span>
                    <span className="block font-semibold text-blue-950">
                      زيارة عاجلة
                    </span>

                    <span className="text-xs text-slate-500">
                      حسب التوفر وطبيعة الحالة
                    </span>
                  </span>

                  <input
                    type="radio"
                    name="priority"
                    value="urgent"
                    checked={form.priority === "urgent"}
                    onChange={handleChange}
                    className="h-4 w-4 accent-teal-700"
                  />
                </label>

                {/* مجدولة */}
                <label
                  className={`flex cursor-pointer items-center justify-between rounded-xl border px-4 py-3 text-sm transition ${
                    form.priority === "scheduled"
                      ? "border-teal-600 bg-sky-50"
                      : "border-slate-200 hover:border-sky-200"
                  }`}
                >
                  <span>
                    <span className="block font-semibold text-blue-950">
                      زيارة مجدولة
                    </span>

                    <span className="text-xs text-slate-500">
                      اختيار موعد مناسب للمريض والأسرة
                    </span>
                  </span>

                  <input
                    type="radio"
                    name="priority"
                    value="scheduled"
                    checked={form.priority === "scheduled"}
                    onChange={handleChange}
                    className="h-4 w-4 accent-teal-700"
                  />
                </label>
              </div>
            </div>

            {/* التاريخ */}
            <div className="text-right">
              <label
                htmlFor="date"
                className="mb-1.5 block text-sm font-semibold text-slate-700"
              >
                تاريخ الزيارة المقترح
              </label>

              <input
                id="date"
                name="date"
                type="date"
                value={form.date}
                onChange={handleChange}
                className="w-full rounded-xl border border-slate-200 px-4 py-2.5 text-sm text-slate-900 outline-none transition focus:border-teal-600 focus:ring-2 focus:ring-sky-100"
              />
            </div>

            {/* الوقت */}
            <div className="text-right">
              <label
                htmlFor="time"
                className="mb-1.5 block text-sm font-semibold text-slate-700"
              >
                الوقت المناسب
              </label>

              <select
                id="time"
                name="time"
                value={form.time}
                onChange={handleChange}
                className="w-full rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm text-slate-900 outline-none transition focus:border-teal-600 focus:ring-2 focus:ring-sky-100"
              >
                <option value="">اختر الفترة المناسبة</option>

                <option value="morning">الفترة الصباحية (08:00 - 12:00)</option>

                <option value="afternoon">فترة الظهيرة (12:00 - 16:00)</option>

                <option value="evening">الفترة المسائية (16:00 - 20:00)</option>

                <option value="night">الفترة المتأخرة (20:00 - 23:00)</option>
              </select>
            </div>

            {/* العنوان */}
            <div className="text-right sm:col-span-2">
              <label
                htmlFor="address"
                className="mb-1.5 block text-sm font-semibold text-slate-700"
              >
                العنوان *
              </label>

              <input
                id="address"
                name="address"
                type="text"
                required
                value={form.address}
                onChange={handleChange}
                placeholder="مثال: ميت خاقان، شارع ...، منزل رقم ..."
                className="w-full rounded-xl border border-slate-200 px-4 py-2.5 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-teal-600 focus:ring-2 focus:ring-sky-100"
              />
            </div>

            {/* الملاحظات */}
            <div className="text-right sm:col-span-2">
              <label
                htmlFor="notes"
                className="mb-1.5 block text-sm font-semibold text-slate-700"
              >
                ملاحظات إضافية
                <span className="mr-1 text-xs font-normal text-slate-400">
                  (اختياري)
                </span>
              </label>

              <textarea
                id="notes"
                name="notes"
                rows={3}
                value={form.notes}
                onChange={handleChange}
                placeholder="اكتب أي تفاصيل إضافية عن حالة المريض أو الخدمة المطلوبة..."
                className="w-full resize-none rounded-xl border border-slate-200 px-4 py-2.5 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-teal-600 focus:ring-2 focus:ring-sky-100"
              />
            </div>

            {/* زر الإرسال */}
            <button
              type="submit"
              className="mt-2 flex items-center justify-center gap-2 rounded-xl bg-blue-950 px-6 py-3.5 text-sm font-semibold text-white transition duration-300 hover:bg-blue-900 hover:shadow-md sm:col-span-2 cursor-pointer"
            >
              تأكيد طلب الزيارة عبر واتساب
              <FontAwesomeIcon icon={faArrowLeft} className="text-xs" />
            </button>

            {/* الخصوصية */}
            <p className="flex items-center justify-center gap-2 text-center text-xs leading-relaxed text-slate-400 sm:col-span-2">
              <FontAwesomeIcon icon={faLock} />
              بياناتك تخضع للخصوصية ويتم استخدامها لتنسيق طلب الزيارة فقط
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}

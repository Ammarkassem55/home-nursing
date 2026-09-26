import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faLocationDot,
  faClock,
  faPaperPlane,
} from "@fortawesome/free-solid-svg-icons";

// رقم الواتساب بصيغة دولية بدون + أو أصفار زيادة
const WHATSAPP_NUMBER = "201027269004";

const serviceLabels = {
  "home-care": "الرعاية والتمريض المنزلي",
  "post-surgery": "رعاية ما بعد العمليات",
  "wound-care": "تغيير وتنظيف الجروح",
  "iv-fluids": "المحاليل والكانيولا",
  injections: "الحقن الوريدي والعضلي",
  monitoring: "متابعة العلامات الحيوية",
};

export default function BookingCta() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    service: "",
    address: "",
    notes: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const serviceName = serviceLabels[form.service] || form.service;

    const message = [
      "مرحبًا، أرغب في حجز زيارة تمريضية:",
      `الاسم: ${form.name}`,
      `رقم الهاتف: ${form.phone}`,
      `الخدمة المطلوبة: ${serviceName}`,
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
    <section
      id="booking"
      dir="rtl"
      className="container mx-auto px-4 pb-10 lg:pb-16"
    >
      {/* عنوان القسم */}
      <div className="mb-8 text-center">
        <span className="inline-flex items-center rounded-full bg-sky-50 px-3 py-2 text-sm font-semibold text-teal-900">
          نموذج الحجز
        </span>

        <h2 className="mt-3 text-2xl font-extrabold text-blue-950 md:text-3xl">
          احجز زيارتك التمريضية الآن
        </h2>

        <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-slate-500 md:text-base">
          املأ البيانات التالية لإرسال طلب الحجز مباشرة عبر واتساب وتنسيق
          الزيارة والخدمة المناسبة لحالة المريض.
        </p>
      </div>

      <div className="grid gap-6 rounded-3xl border border-slate-100 bg-white p-5 shadow-sm md:p-8 lg:grid-cols-[1fr_300px]">
        {/* الفورم */}
        <form onSubmit={handleSubmit} className="grid gap-4 sm:grid-cols-2">
          {/* الاسم */}
          <div className="text-right">
            <label
              htmlFor="name"
              className="mb-1.5 block text-sm font-semibold text-slate-700"
            >
              الاسم بالكامل
            </label>

            <input
              id="name"
              name="name"
              type="text"
              value={form.name}
              onChange={handleChange}
              required
              className="w-full rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-teal-600 focus:ring-2 focus:ring-sky-100"
              placeholder="اكتب اسمك بالكامل"
            />
          </div>

          {/* رقم الهاتف */}
          <div className="text-right">
            <label
              htmlFor="phone"
              className="mb-1.5 block text-sm font-semibold text-slate-700"
            >
              رقم الهاتف
            </label>

            <input
              id="phone"
              name="phone"
              type="tel"
              value={form.phone}
              onChange={handleChange}
              required
              dir="ltr"
              className="w-full rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-teal-600 focus:ring-2 focus:ring-sky-100"
              placeholder="01xxxxxxxxx"
            />
          </div>

          {/* الخدمة */}
          <div className="text-right">
            <label
              htmlFor="service"
              className="mb-1.5 block text-sm font-semibold text-slate-700"
            >
              الخدمة المطلوبة
            </label>

            <select
              id="service"
              name="service"
              value={form.service}
              onChange={handleChange}
              required
              className="w-full rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm text-slate-900 outline-none transition focus:border-teal-600 focus:ring-2 focus:ring-sky-100"
            >
              <option value="">اختر الخدمة</option>

              {Object.entries(serviceLabels).map(([value, label]) => (
                <option key={value} value={value}>
                  {label}
                </option>
              ))}
            </select>
          </div>

          {/* العنوان */}
          <div className="text-right">
            <label
              htmlFor="address"
              className="mb-1.5 block text-sm font-semibold text-slate-700"
            >
              العنوان
            </label>

            <input
              id="address"
              name="address"
              type="text"
              value={form.address}
              onChange={handleChange}
              required
              className="w-full rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-teal-600 focus:ring-2 focus:ring-sky-100"
              placeholder="الحي / المدينة / المنطقة"
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
              className="w-full resize-none rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-teal-600 focus:ring-2 focus:ring-sky-100"
              placeholder="اكتب أي تفاصيل تساعد في معرفة احتياجات المريض"
            />
          </div>

          {/* زر الإرسال */}
          <button
            type="submit"
            className="flex items-center justify-center gap-2 rounded-xl bg-emerald-500 px-5 py-3 text-sm font-semibold text-white transition duration-300 hover:bg-emerald-600 hover:shadow-md sm:col-span-2 cursor-pointer"
          >
            أكّد طلب الزيارة عبر واتساب
            <FontAwesomeIcon icon={faPaperPlane} className="text-xs" />
          </button>
        </form>

        {/* معلومات التواصل */}
        <div className="flex flex-col justify-between rounded-3xl bg-blue-950 p-6 text-white">
          <div>
            <span className="inline-flex items-center rounded-full bg-white/10 px-3 py-2 text-sm font-semibold text-blue-200">
              تواصل معي
            </span>

            <h3 className="mt-3 text-lg font-extrabold leading-snug">
              هل تحتاج إلى الاستفسار قبل الحجز؟
            </h3>

            <p className="mt-3 text-sm leading-relaxed text-blue-200">
              يمكنك التواصل معي مباشرة للاستفسار عن الخدمة المناسبة وتنسيق موعد
              الزيارة.
            </p>
          </div>

          <div className="mt-6 flex flex-col gap-4">
            {/* الهاتف */}
            <a
              href={`tel:+${WHATSAPP_NUMBER}`}
              className="flex items-center gap-3 rounded-2xl bg-white/5 p-3 transition hover:bg-white/10"
            >
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white/10 text-blue-200">
                <FontAwesomeIcon icon={faPhone} />
              </span>

              <div>
                <p className="text-xs text-blue-300">رقم التواصل</p>

                <p dir="ltr" className="text-end text-sm font-semibold">
                  010 2726 9004
                </p>
              </div>
            </a>

            {/* نطاق التغطية */}
            <div className="flex items-center gap-3 rounded-2xl bg-white/5 p-3">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white/10 text-blue-200">
                <FontAwesomeIcon icon={faLocationDot} />
              </span>

              <div>
                <p className="text-xs text-blue-300">نطاق التغطية</p>

                <p className="text-sm font-semibold leading-relaxed">
                  مدينة شبين الكوم وقرية ميت خاقان وضواحيها
                </p>
              </div>
            </div>

            {/* أوقات العمل */}
            <div className="flex items-center gap-3 rounded-2xl bg-white/5 p-3">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white/10 text-blue-200">
                <FontAwesomeIcon icon={faClock} />
              </span>

              <div>
                <p className="text-xs text-blue-300">أوقات العمل</p>

                <p className="text-sm font-semibold">متاح 24 ساعة يوميًا</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeartPulse,
  faStar,
  faShieldHeart,
} from "@fortawesome/free-solid-svg-icons";

const stats = [
  {
    value: "+2500",
    label: "مريض تمت خدمتهم",
    icon: faHeartPulse,
  },
  {
    value: "+10",
    label: "سنوات خبرة",
    icon: faStar,
  },
  {
    value: "100%",
    label: "التزام بمعايير التعقيم",
    icon: faShieldHeart,
  },
];

export default function Stats() {
  return (
    <section className="w-full bg-sky-50 px-4 py-6 lg:py-10">
      <div className="container mx-auto">
        <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3 lg:gap-4">
          {stats.map(({ value, label, icon }) => (
            <li
              key={label}
              className="flex items-center gap-3 rounded-2xl border border-slate-100 bg-white p-4 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md"
            >
              <span
                aria-hidden="true"
                className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-lg text-teal-900"
              >
                <FontAwesomeIcon icon={icon} />
              </span>

              <div className="text-start">
                <p className="text-xl font-extrabold text-blue-950 md:text-2xl">
                  {value}
                </p>

                <p className="text-xs text-slate-500 md:text-sm">{label}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

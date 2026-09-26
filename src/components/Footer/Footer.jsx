import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faLocationDot,
  faAngleLeft,
  faClock,
  faCircleCheck,
  faBriefcaseMedical,
  faShieldHalved,
} from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
// import logo from "../../assets/images/screen.png";

export default function Footer() {
  return (
    <footer dir="rtl" className="bg-sky-50 text-blue-950">
      <div className="mx-auto max-w-7xl px-4 py-12">
        <div className="grid gap-10 md:grid-cols-4">
          {/* About */}
          <div>
            <h2 className="mb-3 text-xl font-bold">محمد صلاح شرف الدين</h2>
            <span className="text-sm font-semibold text-teal-600">
              تمريض منزلي تخصص معتمد
            </span>

            <p className="max-w-sm text-sm leading-7 text-gray-500">
              تمريض منزلي ورعاية ما بعد العمليات، مع تقديم خدمات التمريض
              والمتابعة داخل المنزل باهتمام وحرص بشبين الكوم وميت خاقان والمناطق
              والقري المحيطة .
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-3 text-lg font-semibold">روابط سريعة</h3>

            <div className="flex flex-col gap-3 text-sm text-gray-700">
              <Link
                to="/"
                className="transition-all duration-300 hover:translate-x-1 hover:text-teal-600 cursor-pointer"
              >
                <FontAwesomeIcon
                  icon={faAngleLeft}
                  className="ml-2 text-teal-600"
                />
                الرئيسية
              </Link>

              <Link
                to="/about"
                className="transition-all duration-300 hover:translate-x-1 hover:text-teal-600 cursor-pointer"
              >
                <FontAwesomeIcon
                  icon={faAngleLeft}
                  className="ml-2 text-teal-600"
                />
                عني وعن خبرتي
              </Link>

              <Link
                to="/services"
                className="transition-all duration-300 hover:translate-x-1 hover:text-teal-600 cursor-pointer"
              >
                <FontAwesomeIcon
                  icon={faAngleLeft}
                  className="ml-2 text-teal-600"
                />
                الخدمات التمريضية
              </Link>

              <Link
                to="/contact"
                className="transition-all duration-300 hover:translate-x-1 hover:text-teal-600 cursor-pointer"
              >
                <FontAwesomeIcon
                  icon={faAngleLeft}
                  className="ml-2 text-teal-600"
                />
                تواصل وحجز زيارة
              </Link>
            </div>
          </div>
          {/* Service  */}
          <div>
            <h3 className="mb-3 text-lg font-semibold">الخدمات الرئيسية</h3>

            <div className="flex flex-col gap-3 text-sm text-gray-700">
              <Link
                to="/services"
                className="transition-all duration-300 hover:translate-x-1 hover:text-teal-600 cursor-pointer"
              >
                <FontAwesomeIcon
                  icon={faCircleCheck}
                  className="ml-2 text-teal-600"
                />
                العناية بالجروح المعقدة وتغير الضمادات
              </Link>
              <Link
                to="/services"
                className="transition-all duration-300 hover:translate-x-1 hover:text-teal-600 cursor-pointer"
              >
                <FontAwesomeIcon
                  icon={faCircleCheck}
                  className="ml-2 text-teal-600"
                />
                تركيب وتغير القساطر البولية والوريدية
              </Link>
              <Link
                to="/services"
                className="transition-all duration-300 hover:translate-x-1 hover:text-teal-600 cursor-pointer"
              >
                <FontAwesomeIcon
                  icon={faCircleCheck}
                  className="ml-2 text-teal-600"
                />
                اعطاء المحاليل والحقن الوريدية والعضلية
              </Link>
            </div>
          </div>
          {/* Contact */}
          <div>
            <h3 className="mb-3 text-lg font-semibold">تواصل معي</h3>

            <div className="flex flex-col gap-4 text-sm text-gray-700 ">
              <a
                href="tel:01027269004"
                className="flex items-center gap-3 font-semibold text-gray-700 transition-all duration-300 hover:text-teal-600"
              >
                <FontAwesomeIcon icon={faPhone} className="text-teal-600" />
                <span>01027269004</span>
              </a>

              <div className="flex items-center gap-3 font-semibold hover:text-teal-600 hover:transition-all hover:translate-x-1 duration-300 cursor-pointer">
                <FontAwesomeIcon
                  icon={faLocationDot}
                  className="text-teal-600"
                />
                <span>الخدمة متاحة داخل المنطقة</span>
              </div>

              <div className="flex items-center gap-3  font-semibold hover:text-teal-600 hover:transition-all hover:translate-x-1 duration-300 cursor-pointer">
                <FontAwesomeIcon icon={faClock} className="text-teal-600" />
                <span> الخدمة متاحة 24 ساعة </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-10 border-t border-white/10 pt-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Copyright */}
            <div>
              <p className="text-sm text-gray-700">
                © {new Date().getFullYear()} محمد صلاح شرف الدين. جميع الحقوق
                محفوظة.
              </p>
            </div>

            {/* Features */}
            <div className="flex flex-col md:flex-row items-center gap-4">
              <span>
                <FontAwesomeIcon
                  icon={faBriefcaseMedical}
                  className="text-teal-600 ml-2"
                />

                <span className="text-sm text-gray-700">
                  تعقيم طبي بنسبة 100%
                </span>
              </span>

              <span>
                <FontAwesomeIcon
                  icon={faShieldHalved}
                  className="text-teal-600 ml-2"
                />

                <span className="text-sm text-gray-700">
                  خصوصية وأمان عائلي تام
                </span>
              </span>
            </div>
          </div>
          <div className="mt-5 text-center">
            <p className="flex items-center justify-center gap-1 text-xs text-gray-500">
              تصميم وتطوير الموقع بواسطة{" "}
              <a
                href="https://github.com/Ammarkassem55"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 font-semibold text-teal-600 transition-colors duration-300 hover:text-blue-950"
              >
                <FontAwesomeIcon icon={faGithub} />
                Ammar Qassem
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

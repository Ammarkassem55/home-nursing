import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendarCheck,
  faBars,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";

import logo from "../../assets/images/screen.png";

const navLinks = [
  { to: "/", label: "الرئيسية", end: true },
  { to: "/about", label: "عني وعن خبرتي" },
  { to: "/services", label: "الخدمات التمريضية" },
  { to: "/contact", label: "تواصل وحجز زيارة" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const linkClass = ({ isActive }) =>
    `rounded-full px-5 py-2.5 text-sm font-semibold transition-all duration-300 ${
      isActive
        ? "bg-white text-blue-950 shadow-sm"
        : "text-gray-500 hover:bg-white hover:text-blue-950"
    }`;

  const mobileLinkClass = ({ isActive }) =>
    `rounded-lg px-4 py-3 text-sm font-semibold transition-colors ${
      isActive ? "bg-blue-50 text-blue-950" : "text-gray-600 hover:bg-gray-50"
    }`;

  return (
    <nav className="border-b border-gray-200 bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
        {/* Logo */}
        <Link to="/" className="text-xl font-semibold text-blue-950">
          <img
            src={logo}
            alt="محمد صلاح شرف الدين"
            className="h-12 w-auto cursor-pointer lg:h-16"
          />
        </Link>

        {/* Links - desktop only */}
        <div className="hidden items-center gap-2 rounded-full bg-gray-100 px-4 py-2 lg:flex xl:gap-8">
          {navLinks
            .slice()
            .reverse()
            .map(({ to, label, end }) => (
              <NavLink key={to} to={to} end={end} className={linkClass}>
                {label}
              </NavLink>
            ))}
        </div>

        {/* CTA - desktop only */}
        <Link
          to="/contact"
          className="hidden rounded-lg bg-blue-950 px-5 py-2.5 text-sm font-semibold text-gray-300 transition duration-300 hover:bg-blue-900 hover:text-white lg:inline-flex lg:items-center"
        >
          احجز زيارة منزلية الآن
          <FontAwesomeIcon icon={faCalendarCheck} className="ml-2" />
        </Link>

        {/* Hamburger - mobile only */}
        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label={isOpen ? "إغلاق القائمة" : "فتح القائمة"}
          aria-expanded={isOpen}
          className="flex h-10 w-10 items-center justify-center rounded-lg text-blue-950 lg:hidden"
        >
          <FontAwesomeIcon
            icon={isOpen ? faXmark : faBars}
            className="text-xl"
          />
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="border-t border-gray-100 px-4 py-4 lg:hidden">
          <div className="flex flex-col gap-1">
            {navLinks.map(({ to, label, end }) => (
              <NavLink
                key={to}
                to={to}
                end={end}
                onClick={() => setIsOpen(false)}
                className={mobileLinkClass}
              >
                {label}
              </NavLink>
            ))}
          </div>

          <Link
            to="/contact"
            onClick={() => setIsOpen(false)}
            className="mt-4 flex items-center justify-center gap-2 rounded-lg bg-blue-950 px-5 py-3 text-sm font-semibold text-white transition duration-300 hover:bg-blue-900"
          >
            احجز زيارة منزلية الآن
            <FontAwesomeIcon icon={faCalendarCheck} />
          </Link>
        </div>
      )}
    </nav>
  );
}

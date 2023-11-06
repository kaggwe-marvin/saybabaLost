import {
  AcademicCapIcon,
  EllipsisHorizontalCircleIcon,
  BuildingOffice2Icon,
} from "@heroicons/react/24/outline";

import Link from "next/link";

const links = [
  {
    name: "National",
    href: "/items/National",
    icon: BuildingOffice2Icon,
  },
  {
    name: "School",
    href: "/items/School",
    icon: AcademicCapIcon,
  },
  {
    name: "Other",
    href: "/items/NotCategorized",
    icon: EllipsisHorizontalCircleIcon,
  },
];

export default function TabLinks() {
  return (
    <>
      {links.map((link) => {
        const LinkIcon = link.icon;
        return (
          <Link
            key={link.name}
            href={link.href}
            className="flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3">
            <LinkIcon className="w-6" />
            <p>{link.name}</p>
          </Link>
        );
      })}
    </>
  );
}

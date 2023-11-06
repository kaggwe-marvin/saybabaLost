import Link from "next/link";
import TabLinks from "./tab-links";

export default function TabNav() {
  return (
    <ul className="menu bg-base-200 lg:menu-horizontal rounded-box">
      <li>
        <TabLinks />
      </li>
    </ul>
  );
}

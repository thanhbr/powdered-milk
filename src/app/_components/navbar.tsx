import MobileSidebar from "./mobileSidebar";
import { Sidebar } from "./sidebar";

export default function Navbar() {
  return (
    <div className="sticky top-0 w-full z-[9999] p-4 flex items-center bg-teal-600 shadow-xl">
      {/* <MobileSidebar /> */}
      <Sidebar />
    </div>
  );
}

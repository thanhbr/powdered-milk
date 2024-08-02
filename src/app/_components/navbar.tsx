import MobileSidebar from "./mobileSidebar";
import { Sidebar } from "./sidebar";

export default function Navbar() {
  return (
    <div className="p-4 h-full flex items-center bg-white shadow-xl">
      <MobileSidebar />
      <Sidebar />
    </div>
  );
}

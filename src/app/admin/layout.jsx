import Header from "@/components/Header";
import MenuBar from "@/components/MenuBar";
import SpaceBottom from "@/components/SpaceBottom";
import web from "@/lib/config";

export const metadata = {
  title: `Admin | ${web.title}`,
};

// /app/admin/layout.jsx
export default function AdminLayout({ children }) {
  return (
    <main className="relative max-w-lg mx-auto border h-screen flex flex-col">
      <Header />
      <div className="flex h-full w-full flex-col px-3 overflow-hidden">
        {children}
        <SpaceBottom/>
      </div> 
      <MenuBar />
    </main>
  );
}

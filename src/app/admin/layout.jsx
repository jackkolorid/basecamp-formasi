import Header from "@/components/Header";
import MenuBar from "@/components/MenuBar";
import SpaceBottom from "@/components/SpaceBottom";

export const metadata = {
  title: "ADMIN | ANNUR OFFICIAL",
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

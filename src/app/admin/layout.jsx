import Header from "@/components/Header";
import MenuBar from "@/components/MenuBar";

export const metadata = {
  title: "ADMIN | ANNUR OFFICIAL",
};

// /app/admin/layout.jsx
export default function AdminLayout({ children }) {
  return (
    <main className="relative max-w-lg mx-auto border h-screen flex flex-col">
      <Header />
      <div className="flex h-full w-full flex-col p-4 overflow-hidden">
        {children}
      </div>
      <br className="mb-[60px]" />
      <MenuBar />
    </main>
  );
}

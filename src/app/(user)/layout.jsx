import Header from "@/components/Header";
import MenuBar from "@/components/MenuBar";

export default function RootLayout({ children }) {
  return (
    <main className="relative max-w-lg mx-auto border h-screen flex flex-col">
      <Header />
      {children}
      <br className="mb-[60px]" />
      <MenuBar />
    </main>
  );
}

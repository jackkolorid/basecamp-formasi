import Header from "@/components/Header";
import MenuBar from "@/components/MenuBar";
import SpaceBottom from "@/components/SpaceBottom";

export default function RootLayout({ children }) {
  return (
    <main className="relative max-w-lg mx-auto border h-screen flex flex-col">
      <Header />
      <div className="flex h-full w-full flex-col gap-3 p-4 pb-0 overflow-hidden">
        {children}
        <SpaceBottom/>
      </div> 
      <MenuBar />
    </main>
  );
}

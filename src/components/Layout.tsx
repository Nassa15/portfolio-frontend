import Header from "./Header";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-black via-gray-900 to-indigo-950 text-white overflow-x-hidden">
      {/* --- En-tête --- */}
      <Header />

      {/* --- Contenu principal --- */}
      <main className="flex flex-1 items-center justify-center px-6 sm:px-5 lg:px-2  py-10 sm:py-16">
        {children}
      </main>

      {/* --- Pied de page simple --- */}
      <footer className="text-gray-500 text-xs text-center py-4 border-t border-gray-800">
        © {new Date().getFullYear()} <span className="text-white font-semibold">Nassa ANDRIATSILAVO</span>. Tous droits réservés.
      </footer>
    </div>
  );
}

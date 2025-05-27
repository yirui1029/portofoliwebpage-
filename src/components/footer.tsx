export default function Footer() {
  return (
    <>
      <footer className="bg-amber-600 text-white py-6 mt-10">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} Mon Portfolio. Tous droits
            réservés.
          </p>
    
        </div>
      </footer>
    </>
  );
}

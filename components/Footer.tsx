export default function Footer() {
  return (
    <footer className="border-t mt-10 bg-white/10 backdrop-blur">
      <div className="mx-auto max-w-7xl px-4 py-6 flex flex-col sm:flex-row items-center justify-between text-sm text-gray-500">
        <p>© 2026 Events App. All rights reserved.</p>
        <div className="flex gap-4 mt-3 sm:mt-0">
          <a href="#" className="hover:text-gray-100 transition-colors">
            Privacy
          </a>
          <a href="#" className="hover:text-gray-100 transition-colors">
            Terms
          </a>
          <a href="#" className="hover:text-gray-100 transition-colors">
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
}

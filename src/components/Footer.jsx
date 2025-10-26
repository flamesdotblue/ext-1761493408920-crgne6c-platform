export default function Footer() {
  return (
    <footer className="mt-auto border-t border-black/10 dark:border-white/10">
      <div className="container mx-auto px-6 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-slate-700 dark:text-slate-300">© {new Date().getFullYear()} PeerLearn. All rights reserved.</p>
        <nav className="flex items-center gap-6 text-sm">
          <a className="hover:underline underline-offset-4" href="#">Privacy</a>
          <a className="hover:underline underline-offset-4" href="#">Terms</a>
          <a className="hover:underline underline-offset-4" href="#">Contact</a>
        </nav>
      </div>
    </footer>
  );
}

// app/layout.tsx
import Link from 'next/link';
import './globals.css';


export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head />
      <body className="flex flex-col min-h-screen bg-[#f7f7f7] text-[#4a3728]">
        <header className="bg-[#f7f7f7] shadow-md w-full">
          <div className="container mx-auto flex items-center justify-between px-4 sm:px-6 py-4">
            <div className="flex items-center space-x-2">
              <img
                src="yuzu_logo.png"
                alt="Yuzu Heya Logo"
                className="h-10 w-auto"
              />
              <img 
                src='yuzu_head.png'
                alt="yuzu heya head"
                className='h-10 w-auto'
              />
            </div>

            {/* Responsive navigation */}
            <nav className="hidden md:block">
              <ul className="flex space-x-6 font-serif text-[#4a3728]">
                <li><Link href="/" className="hover:text-[#6d5c4b] transition-colors">Home</Link></li>
                <li><Link href="/menu" className="hover:text-[#6d5c4b] transition-colors">Menu</Link></li>
                <li><Link href="/contact" className="hover:text-[#6d5c4b] transition-colors">Contact</Link></li>
                <li><Link href="/about" className="hover:text-[#6d5c4b] transition-colors">About</Link></li>
                <li><Link href="/faq" className="hover:text-[#6d5c4b] transition-colors">FAQ</Link></li>
                <li><Link href="/calendar" className="hover:text-[#6d5c4b] transition-colors">Calendar</Link></li>
                <li><Link href="/terms" className="hover:text-[#6d5c4b] transition-colors">Terms</Link></li>
              </ul>
            </nav>

            <Link href="/order-now">
              <button
                className="bg-[#DDD6CB] border-2 border-[#3D2720] text-[#483229] px-6 py-2 rounded-full hover:bg-[#B19C86] hover:text-white transition duration-300 active:bg-[#947662] active:text-white focus:outline-none"
              >
                Order Now
              </button>
            </Link>
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-grow w-full">{children}</main>

        <footer className="bg-[#DDD6CB] text-[#4a3728] w-full">
          <div className="container mx-auto px-4 sm:px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex items-center justify-center md:justify-start space-x-4">
              <img
                src="yuzu_logo.png"
                alt="Yuzu Heya Logo"
                className="h-16 w-auto"
              />
              <img
                src="yuzu_head.png"
                alt="Yuzu Heya Head"
                className="h-16 w-auto"
              />
            </div>
            <div className="flex justify-center space-x-8 sm:space-x-16">
              <div>
                <h3 className="font-semibold uppercase mb-2 text-[#4a3728]">Our Store</h3>
                <ul className="space-y-1 text-sm">
                  <li>
                    <Link href="/menu" className="hover:text-[#6d5c4b] transition-colors">Menu</Link>
                  </li>
                  <li>
                    <Link href="/about" className="hover:text-[#6d5c4b] transition-colors">About</Link>
                  </li>
                  <li>
                    <Link href="/contact" className="hover:text-[#6d5c4b] transition-colors">Contact</Link>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold uppercase mb-2 text-[#4a3728]">Other Links</h3>
                <ul className="space-y-1 text-sm">
                  <li>
                    <Link href="/terms" className="hover:text-[#6d5c4b] transition-colors">Terms</Link>
                  </li>
                  <li>
                    <Link href="/calendar" className="hover:text-[#6d5c4b] transition-colors">Calendar</Link>
                  </li>
                  <li>
                    <Link href="/faq" className="hover:text-[#6d5c4b] transition-colors">FAQs</Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="flex flex-col items-center space-y-3">
              <h3 className="font-semibold uppercase mb-2 text-[#4a3728]">Get In Touch</h3>

              <div className="flex space-x-6">
                <a
                  href="mailto:hello@yuzuheya.com"
                  className="text-[#4a3728] hover:text-[#6d5c4b] transition-colors"
                  aria-label="Email us"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-10 w-10"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8m-18 8h18a2 2 0 
                        002-2V8a2 2 0 00-2-2H3a2 2 0 00-2 2v6a2 2 0 002 2z"
                    />
                  </svg>
                </a>
                <a
                  href="https://instagram.com/yuzuheya"
                  target="_blank"
                  rel="noreferrer"
                  className="text-[#4a3728] hover:text-[#6d5c4b] transition-colors"
                  aria-label="Instagram"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-12 w-12"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                    <circle cx="12" cy="12" r="4" fill="white" />
                    <circle cx="17.5" cy="6.5" r="1.5" fill="white" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-[#4a3728]/20">
            <p className="text-xs text-center py-4 text-[#4a3728]">
              Copyright © 2025 YUZU CAKE
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
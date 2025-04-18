import Link from 'next/link';
import './globals.css';

export default function Layout({ children }: {children: React.ReactNode }) {
  
  return (
    <html lang='en'>
      <head />
      <body className='bg-gray-50'>
        <header className='bg-white shadow-md'>
          <div className='max-w-screen-xl mx-auto flex items-center justify-between p-4'>
            <div className='flex items-center space-x-2'>
              <img 
                src='yuzu_logo.png'
                alt='Yuzu Heya Logo'
                className='h-10 w-auto'
              />
              <span className='text-xl font-semibold text-grey-800'>YUZU HEYA</span>
            </div>
              
              <nav>
                <ul className='flex space-x-4'>
                  <li><Link href='/'>Home</Link></li>
                  <li><Link href='/menu'>Menu</Link></li>
                  <li><Link href='/contact'>Contact</Link></li>
                  <li><Link href='/about'>About</Link></li>
                  <li><Link href='/faq'>FAQ</Link></li>
                  <li><Link href='/calendar'>Calendar</Link></li>
                  <li><Link href='/terms'>Terms & Conditions</Link></li>
                </ul>
              </nav>

            <Link href='/order-now'>
              <button className="
                  bg-[#DDD6CB] 
                  border-4 border-[#3D2720] 
                  text-[#5a4f41] px-6 py-2 
                  rounded-full 
                  hover:bg-[#B19C86] 
                  hover:text-white transition duration-300 
                  active:bg-[#947662] 
                  active:text-white 
                  focus:outline-none"
                >   
                Order Now
              </button>
            </Link>
          </div>
        </header>

        <main>{children}</main>
        
        <footer className='bg-[#DDD6CB] p-4 text-black text-center mt-8'>
          <p>&copy; 2025 Yuzu Cakes. All Rights Reserved.</p>
        </footer>
  
      </body>
    </html>
  );
}


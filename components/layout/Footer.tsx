import Link from 'next/link';
import { IoLogoInstagram, IoLogoLinkedin, IoMail, IoCall } from 'react-icons/io5'

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100 mt-24 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <Link href="/" className="text-xl font-bold text-primary">gunner lee</Link>
            <p className="mt-4 text-sm text-gray-600">
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/projects" className="text-sm text-gray-600 hover:text-primary">Projects</Link></li>
              <li><Link href="/assortment" className="text-sm text-gray-600 hover:text-primary">Assortment</Link></li>
              <li><Link href="/about" className="text-sm text-gray-600 hover:text-primary">About</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold mb-4">Connect</h3>
            <ul className="space-y-2">
              <li>
                <a href="mailto:gunner.m.lee@gmail.com" className="text-sm text-gray-600 hover:text-primary flex items-center gap-2">
                  <IoMail className="w-4 h-4" />
                  gunner.m.lee@gmail.com
                </a>
              </li>
              <li>
                <a href="tel:+15108286946" className="text-sm text-gray-600 hover:text-primary flex items-center gap-2">
                  <IoCall className="w-4 h-4" />
                  (510) 828-6946
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/gunnerlee/" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-600 hover:text-primary flex items-center gap-2">
                  <IoLogoLinkedin className="w-4 h-4" />
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/assortm3nt/" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-600 hover:text-primary flex items-center gap-2">
                  <IoLogoInstagram className="w-4 h-4" />
                  Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-100 text-center">
          <p className="text-sm text-gray-500">© 2025 Gunner Lee. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
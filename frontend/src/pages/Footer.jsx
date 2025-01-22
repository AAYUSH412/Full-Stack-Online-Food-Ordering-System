import { Facebook, Twitter, Instagram, Youtube, Mail } from 'lucide-react'


const Footer = () => {
  return (
    <div>
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">About</h3>
              <ul className="space-y-2">
                <li><a href="/aboutus" className="text-gray-400 hover:text-white transition-colors duration-300">About Us</a></li>
                <li><a href="/contact" className="text-gray-400 hover:text-white transition-colors duration-300">Contact us</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Support</h3>
              <ul className="space-y-2">
                <li><a href="/contact" className="text-gray-400 hover:text-white transition-colors duration-300">Contact Us</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">FAQ</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Help Center</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Legal</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Terms</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Privacy</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Cookies</a></li>
              </ul>
            </div>
            <div className="xs:col-span-2 lg:col-span-1">
              <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
              <p className="text-gray-400 mb-4">Subscribe to get special offers and updates.</p>
              <div className="flex flex-col xs:flex-row space-y-2 xs:space-y-0">
                <input
                  type="email"
                  id='email'
                  name='email'
                  placeholder="Enter your email"
                  className="w-full xs:w-auto bg-gray-800 text-white px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-600"
                />
                <button className="w-full xs:w-auto bg-orange-600 px-4 py-2 rounded-lg hover:bg-orange-700 transition duration-300 flex items-center justify-center">
                  <Mail className="h-5 w-5" />
                </button>
              </div>
              <div className="flex space-x-4 mt-6 justify-center xs:justify-start">
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                  <Facebook className="h-6 w-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                  <Twitter className="h-6 w-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                  <Instagram className="h-6 w-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                  <Youtube className="h-6 w-6" />
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2025 BiteBuddy. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer

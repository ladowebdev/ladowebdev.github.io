import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Menu, X, Moon, Sun } from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  return (
    <div className={`min-h-screen transition-colors duration-300 ${isDarkMode ? 'dark bg-gray-900' : 'bg-gray-50'}`}>
      {/* Navigation */}
      <nav className={`fixed w-full z-10 transition-all duration-300 ${isDarkMode ? 'bg-gray-800 shadow-lg' : 'bg-white shadow-sm'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <span className={`text-2xl font-bold hover-scale ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>LadoWeb</span>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#home" className={`transition-colors duration-300 hover-scale ${isDarkMode ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-gray-900'}`}>Home</a>
              <a href="#about" className={`transition-colors duration-300 hover-scale ${isDarkMode ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-gray-900'}`}>About</a>
              <a href="#services" className={`transition-colors duration-300 hover-scale ${isDarkMode ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-gray-900'}`}>Services</a>
              <a href="#portfolio" className={`transition-colors duration-300 hover-scale ${isDarkMode ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-gray-900'}`}>Portfolio</a>
              <a href="#contact" className={`transition-colors duration-300 hover-scale ${isDarkMode ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-gray-900'}`}>Contact</a>
              <button
                onClick={() => setIsDarkMode(!isDarkMode)}
                className={`p-2 rounded-full transition-colors duration-300 ${isDarkMode ? 'text-yellow-400 hover:bg-gray-700' : 'text-gray-600 hover:bg-gray-100'}`}
              >
                {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center space-x-4">
              <button
                onClick={() => setIsDarkMode(!isDarkMode)}
                className={`p-2 rounded-full transition-colors duration-300 ${isDarkMode ? 'text-yellow-400 hover:bg-gray-700' : 'text-gray-600 hover:bg-gray-100'}`}
              >
                {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
              </button>
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className={`transition-transform duration-300 hover:rotate-180 ${isDarkMode ? 'text-white' : 'text-gray-700'}`}
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden animate-fade-in-up">
            <div className={`px-2 pt-2 pb-3 space-y-1 sm:px-3 ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
              <a href="#home" className={`block px-3 py-2 transition-colors duration-300 ${isDarkMode ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-gray-900'}`}>Home</a>
              <a href="#about" className={`block px-3 py-2 transition-colors duration-300 ${isDarkMode ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-gray-900'}`}>About</a>
              <a href="#services" className={`block px-3 py-2 transition-colors duration-300 ${isDarkMode ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-gray-900'}`}>Services</a>
              <a href="#portfolio" className={`block px-3 py-2 transition-colors duration-300 ${isDarkMode ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-gray-900'}`}>Portfolio</a>
              <a href="#contact" className={`block px-3 py-2 transition-colors duration-300 ${isDarkMode ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-gray-900'}`}>Contact</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative pt-20 pb-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-hero-pattern animate-hero-pattern"></div>
          <div className={`absolute inset-0 ${isDarkMode ? 'bg-gradient-to-r from-purple-900/90 to-blue-900/90' : 'bg-gradient-to-r from-purple-600/90 to-blue-500/90'}`}></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
          <div className="text-center animate-fade-in-up">
            <div className="animate-float">
              <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl">
                Web Development Solutions
              </h1>
              <div className="animate-pulse-slow">
                <p className="mt-3 max-w-md mx-auto text-base text-gray-100 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
                  Creating modern, responsive, and user-friendly websites that help businesses grow online.
                </p>
              </div>
            </div>
            <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
              <div className="rounded-md shadow hover-lift">
                <a
                  href="#contact"
                  className={`w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md transition-all duration-300 md:py-4 md:text-lg md:px-10 ${
                    isDarkMode 
                    ? 'bg-purple-600 text-white hover:bg-purple-700' 
                    : 'bg-white text-blue-600 hover:bg-gray-50'
                  }`}
                >
                  Get Started
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className={`py-20 transition-colors duration-300 ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-fade-in-up">
            <h2 className={`text-3xl font-extrabold sm:text-4xl ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
              Our Services
            </h2>
            <p className={`mt-4 text-xl ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              Comprehensive web development solutions for your business
            </p>
          </div>

          <div className="mt-20 grid grid-cols-1 gap-8 md:grid-cols-3 stagger-children">
            {/* Service 1 */}
            <div className={`p-6 rounded-lg hover-lift animate-fade-in-up ${isDarkMode ? 'bg-gray-700' : 'bg-gray-50'}`}>
              <h3 className={`text-xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Web Development</h3>
              <p className={`mt-4 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                Custom website development using modern technologies and best practices.
              </p>
            </div>

            {/* Service 2 */}
            <div className={`p-6 rounded-lg hover-lift animate-fade-in-up ${isDarkMode ? 'bg-gray-700' : 'bg-gray-50'}`}>
              <h3 className={`text-xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>UI/UX Design</h3>
              <p className={`mt-4 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                Creating beautiful and intuitive user interfaces that enhance user experience.
              </p>
            </div>

            {/* Service 3 */}
            <div className={`p-6 rounded-lg hover-lift animate-fade-in-up ${isDarkMode ? 'bg-gray-700' : 'bg-gray-50'}`}>
              <h3 className={`text-xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>E-commerce Solutions</h3>
              <p className={`mt-4 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                Building secure and scalable online stores for your business.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className={`py-20 transition-colors duration-300 ${isDarkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-fade-in-up">
            <h2 className={`text-3xl font-extrabold sm:text-4xl ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
              Our Work
            </h2>
            <p className={`mt-4 text-xl ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              Check out some of our recent projects
            </p>
          </div>

          <div className="mt-20 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 stagger-children">
            {/* Project cards */}
            <div className={`rounded-lg overflow-hidden shadow-lg hover-lift animate-fade-in-up ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
              <div className="relative group">
                <img 
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                  alt="Project 1"
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="p-6">
                <h3 className={`text-lg font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>E-commerce Platform</h3>
                <p className={`mt-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>Online store development with modern features</p>
              </div>
            </div>

            <div className={`rounded-lg overflow-hidden shadow-lg hover-lift animate-fade-in-up ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
              <div className="relative group">
                <img 
                  src="https://images.unsplash.com/photo-1555421689-491a97ff2040?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                  alt="Project 2"
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="p-6">
                <h3 className={`text-lg font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Business Website</h3>
                <p className={`mt-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>Corporate website with custom CMS</p>
              </div>
            </div>

            <div className={`rounded-lg overflow-hidden shadow-lg hover-lift animate-fade-in-up ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
              <div className="relative group">
                <img 
                  src="https://images.unsplash.com/photo-1522542550221-31fd19575a2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                  alt="Project 3"
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="p-6">
                <h3 className={`text-lg font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Portfolio Site</h3>
                <p className={`mt-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>Creative portfolio for professionals</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className={`py-20 transition-colors duration-300 ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-fade-in-up">
            <h2 className={`text-3xl font-extrabold sm:text-4xl ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
              Get in Touch
            </h2>
            <p className={`mt-4 text-xl ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              Let's discuss your next project
            </p>
          </div>

          <div className="mt-12 max-w-lg mx-auto">
            <div className="flex justify-center space-x-6">
              <a href="https://github.com/ladowebdev" className={`hover-scale transition-colors duration-300 ${isDarkMode ? 'text-gray-400 hover:text-white' : 'text-gray-400 hover:text-gray-500'}`}>
                <Github size={24} />
              </a>
              <a href="mailto:contact@ladoweb.in" className={`hover-scale transition-colors duration-300 ${isDarkMode ? 'text-gray-400 hover:text-white' : 'text-gray-400 hover:text-gray-500'}`}>
                <Mail size={24} />
              </a>
              <a href="https://linkedin.com" className={`hover-scale transition-colors duration-300 ${isDarkMode ? 'text-gray-400 hover:text-white' : 'text-gray-400 hover:text-gray-500'}`}>
                <Linkedin size={24} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={`transition-colors duration-300 ${isDarkMode ? 'bg-gray-900' : 'bg-gray-800'}`}>
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-base text-gray-400">
              © 2024 LadoWeb. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
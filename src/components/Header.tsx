import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sun, Moon } from 'lucide-react';
interface HeaderProps {
  darkMode: boolean;
  setDarkMode: (darkMode: boolean) => void;
}
const Header = ({
  darkMode,
  setDarkMode
}: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navItems = [{
    name: 'About',
    href: '#about'
  }, {
    name: 'Education',
    href: '#education'
  }, {
    name: 'Skills',
    href: '#skills'
  }, {
    name: 'Projects',
    href: '#projects'
  }, {
    name: 'Experience',
    href: '#experience'
  }, {
    name: 'Contact',
    href: '#contact'
  }];
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
    setIsMenuOpen(false);
  };
  return <motion.header initial={{
    y: -100
  }} animate={{
    y: 0
  }} transition={{
    duration: 0.8
  }} className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${isScrolled ? 'bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-sky-500/30 dark:border-slate-600/30' : 'bg-transparent'}`}>
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div whileHover={{
          scale: 1.05
        }} className="text-2xl font-bold">
            <span className="bg-gradient-to-r from-slate-700 to-slate-900 dark:from-slate-300 dark:to-slate-400 bg-clip-text text-transparent">Christo</span>
            <span className="text-sky-600 dark:text-slate-400">.</span>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map(item => <motion.button key={item.name} onClick={() => scrollToSection(item.href)} whileHover={{
            scale: 1.1
          }} whileTap={{
            scale: 0.9
          }} className="transition-colors relative group text-gray-800">
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-sky-600 to-slate-700 dark:from-slate-400 dark:to-slate-300 transition-all group-hover:w-full"></span>
              </motion.button>)}
            
            {/* Dark Mode Toggle */}
            <motion.button whileHover={{
            scale: 1.1
          }} whileTap={{
            scale: 0.9
          }} onClick={() => setDarkMode(!darkMode)} className="p-2 rounded-full bg-gray-200 dark:bg-gray-800 text-sky-600 dark:text-slate-400 hover:bg-gray-300 dark:hover:bg-gray-700 hover:text-slate-700 dark:hover:text-slate-300 transition-colors">
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
            <motion.button whileHover={{
            scale: 1.1
          }} whileTap={{
            scale: 0.9
          }} onClick={() => setDarkMode(!darkMode)} className="p-2 rounded-full bg-gray-200 dark:bg-gray-800 text-sky-600 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-300 transition-colors">
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </motion.button>
            
            <motion.button whileHover={{
            scale: 1.1
          }} whileTap={{
            scale: 0.9
          }} onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-700 dark:text-white p-2">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && <motion.div initial={{
          opacity: 0,
          height: 0
        }} animate={{
          opacity: 1,
          height: 'auto'
        }} exit={{
          opacity: 0,
          height: 0
        }} className="md:hidden mt-4 bg-white/90 dark:bg-gray-800/90 backdrop-blur-md rounded-lg p-4">
              {navItems.map((item, index) => <motion.button key={item.name} initial={{
            opacity: 0,
            x: -20
          }} animate={{
            opacity: 1,
            x: 0
          }} transition={{
            delay: index * 0.1
          }} onClick={() => scrollToSection(item.href)} className="block w-full text-left py-3 text-gray-700 dark:text-slate-300 hover:text-sky-600 dark:hover:text-slate-400 transition-colors">
                  {item.name}
                </motion.button>)}
            </motion.div>}
        </AnimatePresence>
      </nav>
    </motion.header>;
};
export default Header;
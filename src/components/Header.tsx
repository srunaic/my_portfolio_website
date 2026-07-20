import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight } from 'lucide-react';

const navItems = [
  { label: '홈', id: 'hero' },
  { label: '기술 스택', id: 'skills' },
  { label: '프로젝트', id: 'projects' },
  { label: '연락처', id: 'contact' },
];

export const Header = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const [scrollProgress, setScrollProgress] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    // Scroll progress tracker
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        setScrollProgress(window.scrollY / totalScroll);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Intersection Observer for Active Navigation Highlight
    const elements = navItems.map((item) => document.getElementById(item.id));

    const observerOption = {
      root: null,
      rootMargin: '-20% 0px -60% 0px', // Trigger when section occupies the active zone
      threshold: 0,
    };

    const callback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(callback, observerOption);
    elements.forEach((el) => {
      if (el) {
        observer.observe(el);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  const handleNavClick = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b border-bg-accent/40 bg-bg-base/80 backdrop-blur-md transition-all duration-300">
        {/* Scroll Progress Bar */}
        <div 
          className="absolute top-0 left-0 h-[2px] bg-brand-accent transition-all duration-100" 
          style={{ width: `${scrollProgress * 100}%` }}
        />

        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
          {/* Logo / Title */}
          <a 
            href="#hero" 
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('hero');
            }}
            className="flex items-center gap-2 group"
          >
            <span className="font-serif text-xl font-bold tracking-tight text-text-primary group-hover:text-brand-accent transition-colors">
              최성효
            </span>
            <span className="hidden sm:inline-block font-mono text-[10px] uppercase tracking-wider text-text-muted border border-bg-accent/80 px-2 py-0.5 rounded-full">
              Developer Portfolio
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`relative px-4 py-2 font-sans text-sm font-medium transition-colors cursor-pointer rounded-lg`}
              >
                <span className={`relative z-10 transition-colors duration-300 ${
                  activeSection === item.id ? 'text-brand-accent' : 'text-text-muted hover:text-text-primary'
                }`}>
                  {item.label}
                </span>
                {activeSection === item.id && (
                  <motion.div
                    layoutId="activeNavBg"
                    className="absolute inset-0 rounded-lg bg-brand-accent-light/50"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
            ))}

            {/* Resume Call-to-action */}
            <a 
              href="mailto:victoryka123@naver.com"
              className="ml-4 flex items-center gap-1 rounded-full bg-brand-accent px-4 py-1.5 text-xs font-semibold text-white shadow-sm hover:bg-brand-accent-hover transition-colors"
            >
              Contact Me <ArrowUpRight size={14} />
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-text-muted hover:text-text-primary focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="md:hidden border-t border-bg-accent/40 bg-bg-base/95 backdrop-blur-md overflow-hidden"
            >
              <div className="space-y-1 px-4 py-4">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    className={`block w-full text-left px-4 py-3 rounded-xl text-base font-semibold transition-all ${
                      activeSection === item.id 
                        ? 'bg-brand-accent-light/50 text-brand-accent font-bold pl-6' 
                        : 'text-text-muted hover:bg-bg-card hover:text-text-primary'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
                
                <div className="pt-4 border-t border-bg-accent/20 mt-2">
                  <a
                    href="mailto:victoryka123@naver.com"
                    className="flex w-full items-center justify-center gap-2 rounded-xl bg-brand-accent/90 hover:bg-brand-accent py-3 text-center text-sm font-semibold text-white transition-colors"
                  >
                    이메일 문의 보내기 <ArrowUpRight size={16} />
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
};

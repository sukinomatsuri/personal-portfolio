import { useState } from 'react';
import { Menu, X, Sun, Moon, Terminal } from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Projects', href: '#projects' },
    { label: 'Certs', href: '#certifications' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-accent flex items-center justify-center">
              <Terminal className="w-4 h-4 text-accent-foreground" />
            </div>
            <span className="text-foreground font-bold text-base hidden sm:inline tracking-tight">
              Vu<span className="text-accent">.</span>Nguyen
            </span>
          </div>

          {/* Desktop navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="px-3 py-2 text-muted-foreground hover:text-accent rounded-lg hover:bg-accent/5 transition-all duration-200 font-medium text-sm"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Theme Toggle & CTA Button */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={toggleTheme}
              className="p-2 text-muted-foreground hover:text-accent hover:bg-accent/5 rounded-lg transition-all duration-200"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun className="w-4.5 h-4.5" /> : <Moon className="w-4.5 h-4.5" />}
            </button>
            <a
              href="#contact"
              className="px-5 py-2 bg-accent hover:bg-accent/90 text-accent-foreground font-bold rounded-lg transition-all duration-300 hover:shadow-lg text-sm"
            >
              Let's Talk
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 hover:bg-secondary rounded-lg transition-colors"
          >
            {isOpen ? (
              <X className="w-5 h-5 text-foreground" />
            ) : (
              <Menu className="w-5 h-5 text-foreground" />
            )}
          </button>
        </div>

        {/* Mobile navigation */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-1 border-t border-border pt-3">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="block px-4 py-2.5 text-muted-foreground hover:text-accent hover:bg-accent/5 rounded-lg transition-all duration-200 font-medium text-sm"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <div className="flex items-center justify-between px-4 py-2.5 mt-3 border-t border-border pt-4">
              <button
                onClick={toggleTheme}
                className="flex items-center gap-2 text-muted-foreground hover:text-accent transition-colors text-sm"
              >
                {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
                <span className="font-medium">{theme === 'dark' ? 'Light Mode' : 'Dark Mode'}</span>
              </button>
            </div>
            <a
              href="#contact"
              className="block mx-4 py-2.5 bg-accent hover:bg-accent/90 text-accent-foreground font-bold rounded-lg transition-all duration-300 text-center text-sm"
              onClick={() => setIsOpen(false)}
            >
              Let's Talk
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}

import { Heart, Github, Linkedin, Terminal } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border">
      <div className="container max-w-6xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-accent flex items-center justify-center">
                <Terminal className="w-4 h-4 text-accent-foreground" />
              </div>
              <span className="text-foreground font-bold">Vu Nguyen's Portfolio</span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Building reliable infrastructure, one pipeline at a time.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-foreground font-bold text-sm mb-4 uppercase tracking-wider">Navigate</h4>
            <ul className="space-y-2">
              {['Home', 'About', 'Projects', 'Certifications', 'Contact'].map((link) => (
                <li key={link}>
                  <a 
                    href={`#${link.toLowerCase()}`}
                    className="text-muted-foreground hover:text-accent transition-colors duration-300 text-sm"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="text-foreground font-bold text-sm mb-4 uppercase tracking-wider">Connect</h4>
            <div className="flex gap-3 mb-4">
              <a 
                href="https://github.com/sukinomatsuri"
                target="_blank" rel="noopener noreferrer"
                className="p-2.5 rounded-lg border border-border hover:border-accent text-muted-foreground hover:text-accent transition-all duration-300"
                aria-label="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
              <a 
                href="https://www.linkedin.com/in/vũ-nguyễn-4956b2405"
                target="_blank" rel="noopener noreferrer"
                className="p-2.5 rounded-lg border border-border hover:border-accent text-muted-foreground hover:text-accent transition-all duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
            <p className="text-muted-foreground text-sm font-mono">
              nhvu2005@gmail.com
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-border my-8" />

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-sm text-center md:text-left font-mono">
            © {currentYear} Vu Nguyen's Portfolio
          </p>
          <p className="text-muted-foreground text-sm flex items-center gap-1">
            <Heart className="w-3.5 h-3.5 text-accent fill-accent" />
          </p>
        </div>
      </div>
    </footer>
  );
}

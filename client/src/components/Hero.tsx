import { Button } from "@/components/ui/button";
import { ArrowRight, Terminal, Github, Linkedin } from "lucide-react";
import { useEffect, useState } from "react";

const terminalLines = [
  "$ docker build -t portfolio:latest .",
  "Successfully built a3d7f2e1b4c8",
  "$ kubectl apply -f deployment.yaml",
  "deployment.apps/portfolio created",
  "$ terraform plan",
  "Plan: 3 to add, 0 to change, 0 to destroy.",
  "$ echo \"Ready to deploy!\"",
];

function TerminalAnimation() {
  const [visibleLines, setVisibleLines] = useState<string[]>([]);

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index < terminalLines.length) {
        const line = terminalLines[index];
        setVisibleLines(prev => [...prev, line]);
        index++;
      } else {
        clearInterval(interval);
      }
    }, 600);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full max-w-lg mx-auto lg:mx-0">
      <div className="rounded-xl overflow-hidden border border-border shadow-2xl">
        {/* Terminal header */}
        <div className="bg-secondary px-4 py-3 flex items-center gap-2">
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500/80" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
            <div className="w-3 h-3 rounded-full bg-green-500/80" />
          </div>
          <span className="text-muted-foreground text-xs font-mono ml-2">~/devops-portfolio</span>
        </div>
        {/* Terminal body */}
        <div className="bg-card/80 backdrop-blur-sm p-5 font-mono text-sm space-y-1 min-h-[220px]">
          {visibleLines.map((line, idx) => (
            <div key={idx} className={`${line.startsWith("$") ? "text-accent font-semibold" : "text-muted-foreground"}`}>
              {line}
            </div>
          ))}
          <span className="inline-block w-2.5 h-5 bg-accent terminal-cursor" />
        </div>
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-background">
      {/* Animated grid bg */}
      <div className="absolute inset-0 grid-bg opacity-40" />
      {/* Radial glow — dark mode */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/5 rounded-full blur-3xl dark:block hidden" />
      {/* Gradient mesh — light mode */}
      <div className="absolute inset-0 dark:hidden">
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-[hsl(173,70%,85%)] rounded-full blur-[120px] opacity-60 animate-float" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-[hsl(262,60%,88%)] rounded-full blur-[140px] opacity-50" style={{ animationDelay: '1s' }} />
        <div className="absolute top-[30%] left-[40%] w-[400px] h-[400px] bg-[hsl(199,80%,88%)] rounded-full blur-[100px] opacity-40 animate-float" style={{ animationDelay: '2s' }} />
      </div>

      <div className="relative z-10 container max-w-6xl mx-auto px-4 py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left – Content */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-accent/30 bg-accent/10 text-accent text-sm font-medium">
              <Terminal className="w-4 h-4" />
              <span>DevOps Engineer</span>
            </div>

            {/* Main heading */}
            <h1 className="text-foreground font-black leading-[1.1] tracking-tight">
              Building & <br />
              <span className="gradient-text">Automating</span><br />
              Infrastructure
            </h1>

            {/* Subheading */}
            <p className="text-lg md:text-xl text-muted-foreground max-w-lg leading-relaxed">
              I design CI/CD pipelines, containerize applications, and automate cloud infrastructure. 
              Passionate about making deployments faster, safer, and more reliable.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <Button 
                size="lg"
                className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold rounded-xl px-8 py-6 text-base transition-all duration-300 hover:shadow-lg glow-accent"
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              >
                View My Projects
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="border-2 border-border hover:border-accent text-foreground hover:text-accent font-bold rounded-xl px-8 py-6 text-base transition-all duration-300"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Get In Touch
              </Button>
            </div>

            {/* Social links */}
            <div className="flex items-center gap-4 pt-4">
              <a href="https://github.com/sukinomatsuri" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-accent transition-colors" aria-label="GitHub">
                <Github className="w-5 h-5" />
              </a>
              <a href="https://www.linkedin.com/in/vũ-nguyễn-4956b2405" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-accent transition-colors" aria-label="LinkedIn">
                <Linkedin className="w-5 h-5" />
              </a>
              <div className="h-4 w-px bg-border mx-2" />
              <span className="text-muted-foreground text-sm font-mono">available for internship</span>
            </div>
          </div>

          {/* Right – Terminal */}
          <div className="hidden lg:block">
            <TerminalAnimation />
          </div>
        </div>
      </div>
    </section>
  );
}

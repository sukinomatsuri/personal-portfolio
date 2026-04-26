import { Server, GitBranch, Container, Cloud, Workflow, Shield } from "lucide-react";

const skills = [
  {
    category: "Containerization & Orchestration",
    icon: <Container className="w-5 h-5" />,
    items: ["Docker", "Kubernetes", "Docker Compose"],
  },
  {
    category: "CI/CD & Automation",
    icon: <Workflow className="w-5 h-5" />,
    items: ["GitHub Actions", "Jenkins"],
  },
  {
    category: "Cloud & Infrastructure",
    icon: <Cloud className="w-5 h-5" />,
    items: ["AWS (EC2, S3, RDS)", "Terraform", "GCP"],
  },
  {
    category: "Version Control & Scripting",
    icon: <GitBranch className="w-5 h-5" />,
    items: ["Git", "Bash", "Python", "YAML"],
  },
  {
    category: "OS & Networking",
    icon: <Server className="w-5 h-5" />,
    items: ["Linux", "Ubuntu", "DNS", "TCP/IP"],
  },
];

export default function About() {
  return (
    <section className="py-20 md:py-32 bg-background relative overflow-hidden">
      {/* Subtle grid */}
      <div className="absolute inset-0 grid-bg opacity-20" />
      
      <div className="relative z-10 container max-w-6xl mx-auto px-4">
        {/* Section header */}
        <div className="mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-accent/30 bg-accent/10 text-accent text-sm font-medium mb-4">
            <span className="font-mono text-xs">01.</span>
            <span>About Me</span>
          </div>
          <h2 className="text-foreground font-extrabold leading-tight">
            A Dude Who Loves<br />
            <span className="gradient-text">Automating Everything</span>
          </h2>
        </div>

        {/* Content grid */}
        <div className="grid lg:grid-cols-5 gap-12 items-start">
          {/* Left column - Text (2 cols) */}
          <div className="lg:col-span-2 space-y-6">
            <p className="text-foreground/80 text-lg leading-relaxed">
              I'm a Computer Science student passionate about DevOps culture — bridging 
              the gap between development and operations through automation, containerization, 
              and infrastructure as code.
            </p>
            
            <p className="text-muted-foreground text-base leading-relaxed">
              I enjoy building CI/CD pipelines that make deployments seamless, 
              containerizing applications with Docker, and managing infrastructure with 
              Terraform on AWS. Every manual process is an automation opportunity.
            </p>


          </div>

          {/* Right column - Skills grid (3 cols) */}
          <div className="lg:col-span-3 grid sm:grid-cols-2 gap-4">
            {skills.map((skill) => (
              <div 
                key={skill.category}
                className="group p-5 rounded-xl border border-border bg-card hover:border-accent/50 transition-all duration-300 hover:shadow-lg"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="text-accent">{skill.icon}</div>
                  <h3 className="text-foreground font-bold text-sm">{skill.category}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skill.items.map((item) => (
                    <span 
                      key={item}
                      className="px-2.5 py-1 bg-secondary text-foreground/80 text-xs font-mono rounded-md border border-border"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

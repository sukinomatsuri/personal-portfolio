import { Button } from "@/components/ui/button";
import { ExternalLink, Github, GitBranch, Container, Cloud } from "lucide-react";
import { ReactNode } from "react";

interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  icon: ReactNode;
  github?: string;
  link?: string;
  featured?: boolean;
}

const projects: Project[] = [
  {
    id: 1,
    title: "URL Shortener",
    description: "A production-grade URL shortener deployed on AWS EC2 with Docker Compose, Terraform IaC, and automated CI/CD via GitHub Actions.",
    tags: ["Docker", "Terraform", "GitHub Actions", "AWS EC2"],
    icon: <Cloud className="w-6 h-6" />,
    github: "https://github.com/sukinomatsuri/url-shortener",
    featured: true,
  },
  {
    id: 2,
    title: "AWS Event-Driven Image Processor",
    description: "A serverless, event-driven image processing pipeline built on AWS, managed with Terraform, and deployed via GitHub Actions.",
    tags: ["AWS Lambda", "Amazon S3", "Amazon DynamoDB", "GitHub Actions", "Terraform"],
    icon: <Cloud className="w-6 h-6" />,
    github: "https://github.com/sukinomatsuri/aws-image-processor",
    featured: true,
  },
  {
    id: 3,
    title: "Techmart E-commerce Platform",
    description: "Containerized a 3-tier application and provisioned secure AWS infrastructure (ECS Fargate, RDS, S3) using Terraform, with an automated CI/CD pipeline via GitHub Actions.",
    tags: ["Docker", "Terraform", "AWS ECS", "GitHub Actions"],
    icon: <Cloud className="w-6 h-6" />,
    github: "https://github.com/hoangyennewit/Techmart-multi-branch-ecommerce",
    featured: true,
  }
];
export default function Projects() {
  return (
    <section className="py-20 md:py-32 bg-secondary/30 relative overflow-hidden">
      {/* Grid bg */}
      <div className="absolute inset-0 grid-bg opacity-20" />

      <div className="relative z-10 container max-w-6xl mx-auto px-4">
        {/* Section header */}
        <div className="mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-accent/30 bg-accent/10 text-accent text-sm font-medium mb-4">
            <span className="font-mono text-xs">02.</span>
            <span>Projects</span>
          </div>
          <h2 className="text-foreground font-extrabold leading-tight">
            Infrastructure I've <span className="gradient-text">Built & Automated</span>
          </h2>
          <p className="text-muted-foreground text-lg mt-4 max-w-2xl">
            Real-world DevOps projects showcasing CI/CD pipelines, container orchestration, and cloud infrastructure.
          </p>
        </div>

        {/* Projects */}
        <div className="space-y-6">
          {projects.map((project) => (
            <div 
              key={project.id}
              className={`group relative rounded-xl overflow-hidden border border-border bg-card hover:border-accent/50 transition-all duration-300 hover:shadow-xl ${
                project.featured ? 'ring-1 ring-accent/20' : ''
              }`}
            >
              <div className="p-8 md:p-10">
                <div className="flex items-start justify-between gap-6">
                  <div className="flex-1 space-y-4">
                    {/* Header */}
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-accent/10 text-accent">
                        {project.icon}
                      </div>
                      {project.featured && (
                        <span className="px-2 py-0.5 bg-accent/10 text-accent text-xs font-mono rounded-full border border-accent/20">
                          Featured
                        </span>
                      )}
                    </div>

                    <h3 className="text-foreground font-bold text-xl md:text-2xl group-hover:text-accent transition-colors duration-300">
                      {project.title}
                    </h3>

                    <p className="text-muted-foreground text-base leading-relaxed max-w-3xl">
                      {project.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 pt-2">
                      {project.tags.map((tag) => (
                        <span 
                          key={tag}
                          className="px-3 py-1 bg-secondary text-foreground/70 text-xs font-mono rounded-md border border-border"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Links */}
                <div className="flex gap-3 pt-6 mt-6 border-t border-border">
                  {project.link && project.link !== "#" && (
                    <Button 
                      asChild
                      className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold rounded-lg transition-all duration-300"
                      size="sm"
                    >
                      <a href={project.link} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Live Demo
                      </a>
                    </Button>
                  )}
                  {project.github && project.github !== "#" && (
                    <Button 
                      asChild
                      variant="outline"
                      className="border-border text-foreground hover:border-accent hover:text-accent font-semibold rounded-lg transition-all duration-300"
                      size="sm"
                    >
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4 mr-2" />
                        Source Code
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

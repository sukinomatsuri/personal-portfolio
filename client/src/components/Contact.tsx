import { Button } from "@/components/ui/button";
import { Mail, MapPin, Linkedin, Github, Send, Loader2 } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast.error("Please enter a valid email address!");
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("https://formsubmit.co/ajax/nhvu2005@gmail.com", {
        method: "POST",
        headers: { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          _subject: formData.subject || "New contact from Portfolio",
          message: formData.message,
          _template: "table"
        })
      });

      if (response.ok) {
        toast.success("Message sent successfully! (Note: if this is your first time receiving, please check your inbox to activate FormSubmit)");
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        toast.error("Failed to send message. Please try again later.");
      }
    } catch (error) {
      console.error(error);
      toast.error("An error occurred while sending the message.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-20 md:py-32 bg-secondary/30 relative overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-20" />

      <div className="relative z-10 container max-w-6xl mx-auto px-4">
        {/* Section header */}
        <div className="mb-16 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-accent/30 bg-accent/10 text-accent text-sm font-medium mb-4">
            <span className="font-mono text-xs">04.</span>
            <span>Contact</span>
          </div>
          <h2 className="text-foreground font-extrabold leading-tight">
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <p className="text-muted-foreground text-lg mt-4 max-w-xl mx-auto">
            Have a project idea? Let's talk infrastructure!
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-10">
          {/* Left - Contact Info */}
          <div className="lg:col-span-2 space-y-6">
            <div className="p-6 rounded-xl border border-border bg-card space-y-6">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-lg bg-accent/10 text-accent">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-foreground font-semibold text-sm">Email</p>
                  <a href="mailto:nhvu2005@gmail.com" className="text-accent hover:underline text-sm">
                    nhvu2005@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="p-3 rounded-lg bg-accent/10 text-accent">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-foreground font-semibold text-sm">Location</p>
                  <p className="text-muted-foreground text-sm">Ho Chi Minh City, Vietnam</p>
                </div>
              </div>

              <div className="border-t border-border pt-6">
                <p className="text-muted-foreground text-sm mb-4">Find me on</p>
                <div className="flex gap-3">
                  <a 
                    href="https://github.com/sukinomatsuri" 
                    target="_blank" rel="noopener noreferrer"
                    className="p-3 rounded-lg border border-border hover:border-accent bg-secondary hover:bg-accent/10 text-foreground hover:text-accent transition-all duration-300"
                    aria-label="GitHub"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                  <a 
                    href="https://www.linkedin.com/in/vũ-nguyễn-4956b2405" 
                    target="_blank" rel="noopener noreferrer"
                    className="p-3 rounded-lg border border-border hover:border-accent bg-secondary hover:bg-accent/10 text-foreground hover:text-accent transition-all duration-300"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>

            {/* Fun terminal note */}
            <div className="p-4 rounded-xl border border-border bg-card font-mono text-xs space-y-1">
              <p className="text-accent">$ whoami</p>
              <p className="text-muted-foreground">Vu Nguyen</p>
              <p className="text-accent">$ cat interests.txt</p>
              <p className="text-muted-foreground">Docker, K8s, Terraform, CI/CD</p>
              <p className="text-accent">$ echo $STATUS</p>
              <p className="text-green-400">open-to-work ✓</p>
            </div>
          </div>

          {/* Right - Contact Form */}
          <div className="lg:col-span-3">
            <div className="p-8 rounded-xl border border-border bg-card">
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="name" className="block text-foreground font-semibold text-sm mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-secondary border border-border rounded-lg text-foreground placeholder-muted-foreground text-sm focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all duration-300"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-foreground font-semibold text-sm mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-secondary border border-border rounded-lg text-foreground placeholder-muted-foreground text-sm focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all duration-300"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-foreground font-semibold text-sm mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-secondary border border-border rounded-lg text-foreground placeholder-muted-foreground text-sm focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all duration-300"
                    placeholder="Internship opportunity"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-foreground font-semibold text-sm mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-secondary border border-border rounded-lg text-foreground placeholder-muted-foreground text-sm focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all duration-300 resize-none"
                    placeholder="Tell me about the project or opportunity..."
                  />
                </div>

                <Button 
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-bold py-3 rounded-lg transition-all duration-300 hover:shadow-lg glow-accent disabled:opacity-70"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4 mr-2" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import { Award, Calendar, ExternalLink } from "lucide-react";

const certifications = [
  {
    id: 1,
    title: "Beyond the Basics: Istio and IBM Cloud Kubernetes Service",
    issuer: "IBM",
    date: "Apr 21, 2026",
    credentialId: "IBM-ISTIO",
    image: "data:image/png;base64,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",
    url: "https://www.credly.com/badges/44a5c576-9e3f-4150-aa37-dc401eb04788",
  },
  {
    id: 2,
    title: "Build a Secure Google Cloud Network Skill Badge",
    issuer: "Google Cloud",
    date: "Apr 24, 2026",
    credentialId: "GC-SEC-NET",
    image: "https://images.credly.com/images/e1131ae3-4a52-4af1-9801-b7853767cf79/image.png",
    url: "https://www.credly.com/badges/b8692cd9-bd4c-4aa7-bd5e-5dda9771e9f5",
  },
  {
    id: 3,
    title: "Containers, K8s and Istio on IBM Cloud",
    issuer: "IBM",
    date: "Apr 21, 2026",
    credentialId: "IBM-K8S",
    image: "https://images.credly.com/images/8597c132-e756-421a-8640-b84b30f1f2ac/blob",
    url: "https://www.credly.com/badges/a5629719-d06a-44e7-890f-19a80f78cf4b",
  },
  {
    id: 4,
    title: "Google Cloud Computing Foundations Certificate",
    issuer: "Google Cloud",
    date: "Apr 24, 2026",
    credentialId: "GC-FOUND",
    image: "https://images.credly.com/images/4dda8ae4-99ee-476c-bca3-6f0adbab42fe/image.png",
    url: "https://www.credly.com/badges/7cb990b8-4c4e-49b3-a95c-e8e80ab64743",
  },
  {
    id: 5,
    title: "Implement Load Balancing on Compute Engine Skill Badge",
    issuer: "Google Cloud",
    date: "Apr 24, 2026",
    credentialId: "GC-LB-COMP",
    image: "https://images.credly.com/size/160x160/images/eea11cba-2a98-4bbe-bad2-447878dd34a2/image.png",
    url: "https://www.credly.com/badges/47649da8-2c6b-4f7e-8578-5cc5b63a8759",
  },
  {
    id: 6,
    title: "Prepare Data for ML APIs on Google Cloud Skill Badge",
    issuer: "Google Cloud",
    date: "Apr 24, 2026",
    credentialId: "GC-ML-DATA",
    image: "https://images.credly.com/images/68756311-9319-4eeb-a2b7-76defc8dd8a2/image.png",
    url: "https://www.credly.com/badges/4dc950b4-fcd9-4f36-8705-e913a4efef62",
  },
  {
    id: 7,
    title: "Python Developer Certification",
    issuer: "freecodecamp.org",
    date: "Apr 11, 2026",
    credentialId: "FC-PY",
    image: "https://imgs.search.brave.com/vYVBXPWD-zcblD68sGVnbQeyDbuIqYz9cvcaixGGnuU/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9yYXcu/Z2l0aHVidXNlcmNv/bnRlbnQuY29tL2Vk/ZW50L1N1cGVyVGlu/eUljb25zL21hc3Rl/ci9pbWFnZXMvc3Zn/L2ZyZWVjb2RlY2Ft/cC5zdmc",
    url: "https://www.freecodecamp.org/certification/hikari27/python-v9",
  },
];

export default function Certifications() {
  return (
    <section className="py-20 md:py-32 bg-background relative overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-20" />

      <div className="relative z-10 container max-w-6xl mx-auto px-4">
        {/* Section header */}
        <div className="mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-accent/30 bg-accent/10 text-accent text-sm font-medium mb-4">
            <span className="font-mono text-xs">03.</span>
            <span>Credentials</span>
          </div>
          <h2 className="text-foreground font-extrabold leading-tight">
            Certifications & <span className="gradient-text">Achievements</span>
          </h2>
          <p className="text-muted-foreground text-lg mt-4 max-w-2xl">
            Continuous learning in cloud, containers, and automation technologies.
          </p>
        </div>

        {/* Certifications grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {certifications.map((cert) => (
            <a 
              key={cert.id}
              href={cert.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative p-6 bg-card rounded-xl border border-border hover:border-accent/50 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 block"
            >
              {/* Image & Title */}
              <div className="flex flex-col sm:flex-row items-start gap-4 mb-4">
                <div className="w-16 h-16 shrink-0 bg-secondary/50 rounded-lg p-2 flex items-center justify-center border border-border group-hover:border-accent/30 transition-colors">
                  <img src={cert.image} alt={cert.title} className="max-w-full max-h-full object-contain" />
                </div>
                <div className="flex-1">
                  <h3 className="text-foreground font-bold text-base group-hover:text-accent transition-colors duration-300 leading-snug flex items-start justify-between gap-2">
                    <span>{cert.title}</span>
                    <ExternalLink className="w-4 h-4 shrink-0 opacity-0 group-hover:opacity-100 transition-opacity mt-0.5 text-accent" />
                  </h3>
                  <p className="text-muted-foreground text-sm mt-1">{cert.issuer}</p>
                </div>
              </div>

              {/* Meta */}
              <div className="flex items-center justify-between pt-4 border-t border-border">
                <div className="flex items-center gap-2 text-muted-foreground text-sm">
                  <Calendar className="w-3.5 h-3.5" />
                  <span className="font-mono text-xs">{cert.date}</span>
                </div>
                <div className="flex items-center gap-1.5 text-muted-foreground text-xs font-mono">
                  <Award className="w-3.5 h-3.5" />
                  <span>{cert.credentialId}</span>
                </div>
              </div>

              {/* Hover line */}
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-accent via-accent/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-b-xl" />
            </a>
          ))}
        </div>

        {/* Learning note */}
        <div className="mt-12 p-6 md:p-8 bg-card rounded-xl border border-border">
          <div className="flex items-start gap-4">
            <div className="p-2 rounded-lg bg-accent/10 text-accent">
              <ExternalLink className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-foreground font-bold text-base mb-2">
                Currently Learning
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Diving deeper into Kubernetes security (CKS), advanced Terraform modules, 
                service mesh with Istio, and exploring Platform Engineering concepts. 
                Always looking for new ways to automate and optimize.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

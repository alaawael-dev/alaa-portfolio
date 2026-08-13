import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Linkedin, Mail, Menu, X } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/lib/translations";
import { useState } from "react";

/**
 * Design Philosophy: Minimalist Developer
 * - Swiss Design with extreme clarity through negative space
 * - Deep charcoal background (#0F1419) with electric blue accents
 * - Left-aligned asymmetric layout with generous whitespace
 * - Grid-based 8px system for vertical rhythm
 * - Thin 1px lines separate sections
 * - Subtle fade-in animations on scroll
 * - Hover states with underline animations on links
 * - Bilingual support: English and Arabic with RTL layout
 */

export default function Home() {
  const { language, toggleLanguage, isArabic } = useLanguage();
  const t = translations[language];
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const closeMenu = () => setMobileMenuOpen(false);

  const skills = [
    { category: t.skills.categories.mobile, items: ["Flutter", "Dart", "Android", "iOS"] },
    { category: t.skills.categories.stateManagement, items: ["BLoC/Cubit", "GetX"] },
    { category: t.skills.categories.architecture, items: ["Clean Architecture", "MVC", "SOLID", "Design Patterns", "UseCase Pattern", "Repository Pattern", "Dependency Injection (get_it)", "Either/dartz Error Handling"] },
    { category: t.skills.categories.backend, items: ["PHP", "MySQL", "Databases (SQL/NoSQL)", "REST APIs"] },
    { category: t.skills.categories.services, items: ["Firebase Auth", "Firestore", "Firebase Realtime Database", "Real-time Sync"] },
    { category: t.skills.categories.tools, items: ["Git", "GitHub", "Figma", "XAMPP"] },
    { category: t.skills.categories.integrations, items: ["QR Code Integration", "Firebase Remote Config", "Google Maps"] },
    { category: t.skills.categories.storage, items: ["Sqflite", "Hive", "Local Caching", "Shared Preferences"] },
    { category: t.skills.categories.deployment, items: ["Google Play Console", "App Signing", "Release Management", "Play Store Policy Compliance"] },
  ];

  const projects = [
    {
      id: 1,
      name: t.projects.aura.name,
      subtitle: t.projects.aura.subtitle,
      description: t.projects.aura.description,
      tech: ["Flutter", "GetX", "Clean Architecture", "PHP", "MySQL"],
      image: "/assets/thumbnail_add53419.png",
      links: {
        github: "https://github.com/alaawael-dev/flutter-ecommerce-app",
        backend: "https://github.com/alaawael-dev/ecommerce-backend",
      },
    },
    {
      id: 2,
      name: t.projects.firebaseChat.name,
      subtitle: t.projects.firebaseChat.subtitle,
      description: t.projects.firebaseChat.description,
      tech: ["Flutter", "Firebase", "Firestore", "Authentication"],
      image: "/assets/chatappthumbnail_d1401a69.png",
      links: {
        github: "https://github.com/alaawael-dev/flutter-chat-app",
      },
    },
    {
      id: 4,
      name: t.projects.trackQR.name,
      subtitle: t.projects.trackQR.subtitle,
      description: t.projects.trackQR.description,
      tech: ["Flutter", "BLoC/Cubit", "Firebase Auth", "Firestore", "Google Maps", "Clean Architecture"],
      image: "/assets/file_00000000de14820aa504459f66754239_2bbc827c.png",
      badge: t.projects.trackQR.badge,
      links: {
        github: undefined,
      },
    },
    {
      id: 6,
      name: t.projects.mal3ab.name,
      subtitle: t.projects.mal3ab.subtitle,
      description: t.projects.mal3ab.description,
      tech: ["Flutter", "GetX", "Clean Architecture", "Localization", "Firebase Auth"],
      image: "/assets/mal3ab.png",
      badge: 'In Development',
      links: {
        github: undefined,
      },
    },
  ];

  const services = [
    {
      title: t.services.flutterDev.title,
      description: t.services.flutterDev.description,
    },
    {
      title: t.services.firebase.title,
      description: t.services.firebase.description,
    },
    {
      title: t.services.figmaFlutter.title,
      description: t.services.figmaFlutter.description,
    },
    {
      title: t.services.bugFix.title,
      description: t.services.bugFix.description,
    },
  ];

  const education = [
    {
      school: t.resume.school,
      degree: t.resume.degree,
      year: "2025",
      location: t.resume.location,
    },
  ];

  const experience = [
    {
      title: t.resume.jobTitle,
      company: t.resume.company,
      period: 'Dec 2025 – Present',
      description: t.resume.jobDescription,
      link: "https://fiverr.com/alaa_flutter",
    },
  ];

  const certifications = [
    {
      title: t.resume.cert1,
      issuer: t.resume.cert1Issuer,
      year: t.resume.cert1Date,
    },
    {
      title: t.resume.cert2,
      issuer: t.resume.cert2Issuer,
      year: t.resume.cert2Date,
    },
    {
      title: t.resume.cert3,
      issuer: t.resume.cert3Issuer,
      year: t.resume.cert3Date,
    },
  ];

  return (
    <div className={`min-h-screen bg-background text-foreground ${isArabic ? 'rtl' : 'ltr'}`} dir={isArabic ? 'rtl' : 'ltr'}>
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-background/80 backdrop-blur-sm border-b border-border z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div className="text-xl font-bold text-accent">AW</div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8 items-center">
            <a href="#skills" className="text-sm hover:text-accent transition-colors">{t.nav.skills}</a>
            <a href="#projects" className="text-sm hover:text-accent transition-colors">{t.nav.projects}</a>
            <a href="#resume" className="text-sm hover:text-accent transition-colors">{t.nav.resume}</a>
            <a href="#services" className="text-sm hover:text-accent transition-colors">{t.nav.services}</a>
            <a href="#contact" className="text-sm hover:text-accent transition-colors">{t.nav.contact}</a>
            <button
              onClick={toggleLanguage}
              className="ml-4 px-3 py-1 bg-accent hover:bg-accent/90 text-accent-foreground text-sm rounded transition-colors font-semibold"
            >
              {language === 'en' ? 'ar' : 'en'}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-3">
            <button
              onClick={toggleLanguage}
              className="px-2 py-1 bg-accent hover:bg-accent/90 text-accent-foreground text-xs rounded transition-colors font-semibold"
            >
              {language === 'en' ? 'ar' : 'en'}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-accent hover:text-accent/80 transition-colors"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-background border-t border-border">
            <div className="px-4 py-4 space-y-3">
              <a href="#skills" onClick={closeMenu} className="block text-sm hover:text-accent transition-colors py-2">{t.nav.skills}</a>
              <a href="#projects" onClick={closeMenu} className="block text-sm hover:text-accent transition-colors py-2">{t.nav.projects}</a>
              <a href="#resume" onClick={closeMenu} className="block text-sm hover:text-accent transition-colors py-2">{t.nav.resume}</a>
              <a href="#services" onClick={closeMenu} className="block text-sm hover:text-accent transition-colors py-2">{t.nav.services}</a>
              <a href="#contact" onClick={closeMenu} className="block text-sm hover:text-accent transition-colors py-2">{t.nav.contact}</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-24 border-b border-border">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${isArabic ? 'lg:grid-cols-2' : ''}`}>
            {/* Left: Text */}
            <div className={isArabic ? 'lg:order-2' : ''}>
              <h1 className="text-5xl sm:text-6xl font-bold mb-4 leading-tight">
                {t.hero.name}
              </h1>
              <div className={`flex items-center gap-3 mb-8 ${isArabic ? 'flex-row-reverse' : ''}`}>
                <div className="w-1 h-8 bg-accent"></div>
                <p className="text-xl text-muted-foreground">{t.hero.title}</p>
              </div>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed max-w-md">
                {t.hero.bio}
              </p>
              <div className="flex gap-4">
                <a href="https://fiverr.com/alaa_flutter" target="_blank" rel="noopener noreferrer">
                  <Button className="bg-accent hover:bg-accent/90 text-accent-foreground">
                    {t.hero.hireMe}
                    <ExternalLink className="ml-2 w-4 h-4" />
                  </Button>
                </a>
                <a href="#contact">
                  <Button variant="outline" className="border-accent text-accent hover:bg-accent/10">
                    {t.hero.getInTouch}
                  </Button>
                </a>
              </div>
            </div>

            {/* Right: Profile Image */}
            <div className={`flex ${isArabic ? 'lg:order-1' : ''} justify-center lg:justify-end`}>
              <div className="relative w-64 h-64 sm:w-80 sm:h-80">
                <img
                  src="/assets/profile.jpg"
                  alt={t.hero.name}
                  className="w-full h-full object-cover rounded-lg border border-border"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24 border-b border-border">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-4xl font-bold mb-2">{t.skills.title}</h2>
            <div className="w-12 h-1 bg-accent"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skillGroup) => (
              <div key={skillGroup.category} className="bg-card border border-border rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-4 text-accent">{skillGroup.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-secondary text-secondary-foreground text-sm rounded border border-border hover:bg-accent hover:text-accent-foreground transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 border-b border-border">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-4xl font-bold mb-2">{t.projects.title}</h2>
            <div className="w-12 h-1 bg-accent"></div>
          </div>

          <div className="space-y-12">
            {projects.map((project, index) => (
              <div
                key={project.id}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-center ${
                  isArabic
                    ? index % 2 === 1
                      ? 'lg:grid-cols-2'
                      : 'lg:grid-cols-2'
                    : index % 2 === 1
                    ? 'lg:grid-cols-2'
                    : ''
                }`}
              >
                {/* Image */}
                {project.image && (
                  <div className={isArabic ? (index % 2 === 1 ? 'lg:order-1' : 'lg:order-2') : index % 2 === 1 ? 'lg:order-2' : ''}>
                    <div className="bg-card border border-border rounded-lg overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.name}
                        className="w-full h-auto object-cover"
                      />
                    </div>
                  </div>
                )}

                {/* Content */}
                <div className={isArabic ? (index % 2 === 1 ? 'lg:order-2' : 'lg:order-1') : index % 2 === 1 ? 'lg:order-1' : ''}>
                  <h3 className="text-3xl font-bold mb-2">
                    {project.name}
                    <span className="text-accent ml-2">{project.subtitle}</span>
                  </h3>
                  <div className="w-8 h-1 bg-accent mb-4"></div>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="mb-6">
                    <p className="text-sm font-semibold text-muted-foreground mb-2">{t.projects.techStack}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 bg-secondary text-secondary-foreground text-xs rounded font-mono"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Links */}
                  <div className="flex gap-4">
                    <a
                      href={project.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-accent hover:underline transition-all"
                    >
                      <Github className="w-4 h-4" />
                      {t.projects.viewCode}
                    </a>
                    {project.links.backend && (
                      <a
                        href={project.links.backend}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-accent hover:underline transition-all"
                      >
                        <Github className="w-4 h-4" />
                        {t.projects.backend}
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Resume Section */}
      <section id="resume" className="py-24 border-b border-border">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`mb-12 flex justify-between items-start ${isArabic ? 'flex-row-reverse' : ''}`}>
            <div>
              <h2 className="text-4xl font-bold mb-2">{t.resume.title}</h2>
              <div className="w-12 h-1 bg-accent"></div>
            </div>
            <a
              href="/assets/Alaa_Eldin_Wael_Flutter_CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-accent hover:bg-accent/90 text-accent-foreground rounded transition-colors"
            >
              <ExternalLink className="w-4 h-4" />
              {t.resume.downloadCV}
            </a>
          </div>

          {/* Education */}
          <div className="mb-12">
            <h3 className="text-2xl font-semibold mb-6 text-accent">{t.resume.education}</h3>
            <div className="space-y-4">
              {education.map((edu) => (
                <div key={edu.school} className="bg-card border border-border rounded-lg p-6">
                  <h4 className="text-lg font-semibold mb-1">{edu.degree}</h4>
                  <p className="text-accent mb-2">{edu.school}</p>
                  <p className="text-sm text-muted-foreground">{edu.location} • {edu.year}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Experience */}
          <div className="mb-12">
            <h3 className="text-2xl font-semibold mb-6 text-accent">{t.resume.experience}</h3>
            <div className="space-y-4">
              {experience.map((exp) => (
                <div key={exp.company} className="bg-card border border-border rounded-lg p-6">
                  <div className={`flex justify-between items-start mb-2 ${isArabic ? 'flex-row-reverse' : ''}`}>
                    <div>
                      <h4 className="text-lg font-semibold">{exp.title}</h4>
                      {exp.link ? (
                        <a href={exp.link} target="_blank" rel="noopener noreferrer" className="text-accent hover:text-accent/80 transition-colors">
                          {exp.company}
                        </a>
                      ) : (
                        <p className="text-accent">{exp.company}</p>
                      )}
                    </div>
                    <span className="text-sm text-muted-foreground">{exp.period}</span>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">{exp.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-accent">{t.resume.certifications}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {certifications.map((cert) => (
                <div key={cert.title} className="bg-card border border-border rounded-lg p-6">
                  <h4 className="font-semibold mb-2">{cert.title}</h4>
                  <p className="text-sm text-muted-foreground">{cert.issuer} • {cert.year}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>


      {/* Testimonials Section */}
      <section id="testimonials" className="py-24 border-b border-border">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`mb-12 ${isArabic ? 'flex-row-reverse' : ''}`}>
            <h2 className="text-4xl font-bold mb-2">{t.testimonials.title}</h2>
            <div className="w-12 h-1 bg-accent"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {t.testimonials.reviews.map((review, idx) => (
              <div key={idx} className="bg-card border border-border rounded-lg p-6">
                <div className="flex items-center gap-2 mb-3">
                  <div className="flex gap-1">
                    {[...Array(review.rating)].map((_, i) => (
                      <span key={i} className="text-yellow-400">★</span>
                    ))}
                  </div>
                  <span className="text-sm text-muted-foreground ml-2">{review.rating}.0</span>
                </div>
                <p className="text-muted-foreground text-sm mb-3 leading-relaxed">"{review.text}"</p>
                <p className="text-xs text-accent mb-2">— {review.author}</p>
                <p className="text-xs text-muted-foreground italic">{review.highlights}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

            {/* Services Section */}
      <section id="services" className="py-24 border-b border-border">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-4xl font-bold mb-2">{t.services.title}</h2>
            <div className="w-12 h-1 bg-accent"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service) => (
              <div
                key={service.title}
                className="bg-card border border-border rounded-lg p-8 hover:border-accent transition-colors"
              >
                <h3 className="text-xl font-semibold mb-3 text-accent">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-4xl font-bold mb-2">{t.contact.title}</h2>
            <div className="w-12 h-1 bg-accent"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl">
            {/* Contact Info */}
            <div>
              <h3 className="text-lg font-semibold mb-6">{t.contact.contactInfo}</h3>
              <div className="space-y-4">
                <a
                  href="tel:+201152660001"
                  className="flex items-center gap-3 text-muted-foreground hover:text-accent transition-colors"
                >
                  <span className="w-5 h-5 flex-shrink-0 text-center">📱</span>
                  <span>+20 115 266 0001</span>
                </a>
                <a
                  href="mailto:alaaw440@gmail.com"
                  className="flex items-center gap-3 text-muted-foreground hover:text-accent transition-colors"
                >
                  <Mail className="w-5 h-5 flex-shrink-0" />
                  <span>alaaw440@gmail.com</span>
                </a>
                <a
                  href="https://linkedin.com/in/alaaeldin-wael"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-muted-foreground hover:text-accent transition-colors"
                >
                  <Linkedin className="w-5 h-5 flex-shrink-0" />
                  <span>LinkedIn</span>
                </a>
                <a
                  href="https://github.com/alaawael-dev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-muted-foreground hover:text-accent transition-colors"
                >
                  <Github className="w-5 h-5 flex-shrink-0" />
                  <span>GitHub</span>
                </a>
                <a
                  href="https://fiverr.com/alaa_flutter"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-muted-foreground hover:text-accent transition-colors"
                >
                  <ExternalLink className="w-5 h-5 flex-shrink-0" />
                  <span>Fiverr</span>
                </a>
              </div>
            </div>

            {/* CTA */}
            <div className="bg-card border border-border rounded-lg p-8 flex flex-col justify-center">
              <h3 className="text-lg font-semibold mb-3">{t.contact.readyToWork}</h3>
              <p className="text-muted-foreground mb-6">
                {t.contact.readyDesc}
              </p>
              <a href="mailto:alaaw440@gmail.com">
                <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
                  {t.contact.sendEmail}
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-muted-foreground text-sm">
          <p>{t.footer.copyright}</p>
        </div>
      </footer>
    </div>
  );
}

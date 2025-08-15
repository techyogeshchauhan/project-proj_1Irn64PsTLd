function Footer() {
  try {
    const currentYear = new Date().getFullYear();

    const scrollToSection = (sectionId) => {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    };

    const scrollToTop = () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
      <footer className="bg-[var(--primary-color)] border-t border-[var(--border-color)]" data-name="footer">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            
            {/* Brand */}
            <div className="md:col-span-2">
              <h2 className="text-2xl font-bold text-[var(--text-primary)] mb-4">Yogesh Chauhan</h2>
              <p className="text-[var(--text-secondary)] mb-6 leading-relaxed">
                AI & Data Science Enthusiast | Full-Stack Developer | Passionate about building intelligent and scalable solutions.
              </p>
              <div className="flex space-x-4">
                {[
                  { href: "mailto:yogesh.chauhan.ai@gmail.com", icon: "icon-mail" },
                  { href: "https://www.linkedin.com/in/yogesh-chauhan-40650523b/", icon: "icon-linkedin" },
                  { href: "https://github.com/techyogeshchauhan", icon: "icon-github" },
                  { href: "https://x.com/yogesh_chau_mca", icon: "icon-twitter" }
                ].map((link, idx) => (
                  <a 
                    key={idx}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-[var(--background-card)] border border-[var(--border-color)] flex items-center justify-center text-[var(--text-secondary)] hover:border-[var(--accent-color)] hover:text-[var(--accent-color)] transition-all"
                  >
                    <div className={`${link.icon} text-lg`}></div>
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-[var(--text-primary)] font-semibold mb-4">Quick Links</h4>
              <div className="space-y-2">
                {[
                  { label: "Home", id: "home" },
                  { label: "About", id: "about" },
                  { label: "Skills", id: "skills" },
                  { label: "Projects", id: "projects" }
                ].map((link, idx) => (
                  <button
                    key={idx}
                    onClick={() => scrollToSection(link.id)}
                    className="block text-[var(--text-secondary)] hover:text-[var(--accent-color)] transition-colors"
                  >
                    {link.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-[var(--text-primary)] font-semibold mb-4">Contact</h4>
              <div className="space-y-2 text-[var(--text-secondary)] text-sm">
                <a href="mailto:yogesh.chauhan.ai@gmail.com" className="flex items-center space-x-2 hover:text-[var(--accent-color)] transition-colors">
                  <div className="icon-mail text-sm"></div>
                  <span>yogesh.chauhan.ai@gmail.com</span>
                </a>
                <a href="tel:+918004116115" className="flex items-center space-x-2 hover:text-[var(--accent-color)] transition-colors">
                  <div className="icon-phone text-sm"></div>
                  <span>+91 8004116115</span>
                </a>
                <div className="flex items-center space-x-2">
                  <div className="icon-map-pin text-sm"></div>
                  <span>India</span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-[var(--border-color)] pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="text-[var(--text-secondary)] text-sm mb-4 md:mb-0">
                © {currentYear} Yogesh Chauhan. All rights reserved.
              </div>
              <div className="flex items-center space-x-6">
                <a 
                  href="/admin"
                  className="text-[var(--text-secondary)] hover:text-[var(--accent-color)] text-sm transition-colors"
                >
                  Admin
                </a>
                <button 
                  onClick={scrollToTop}
                  className="w-8 h-8 bg-[var(--accent-color)] flex items-center justify-center text-white rounded-full hover:bg-opacity-80 transition-all"
                >
                  <div className="icon-arrow-up text-sm"></div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  } catch (error) {
    console.error('Footer component error:', error);
    return null;
  }
}

export default Footer;

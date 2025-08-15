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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 mb-8 sm:mb-12">
            
            {/* Brand */}
            <div className="md:col-span-2">
              <h2 className="text-xl sm:text-2xl font-bold text-[var(--text-primary)] mb-3 sm:mb-4">Yogesh Chauhan</h2>
              <p className="text-sm sm:text-base text-[var(--text-secondary)] mb-4 sm:mb-6 leading-relaxed">
                AI & Data Science Enthusiast | Full-Stack Developer | Passionate about building intelligent and scalable solutions.
              </p>
              <div className="flex space-x-3 sm:space-x-4">
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
                    className="w-8 h-8 sm:w-10 sm:h-10 bg-[var(--background-card)] border border-[var(--border-color)] flex items-center justify-center text-[var(--text-secondary)] hover:border-[var(--accent-color)] hover:text-[var(--accent-color)] transition-all rounded-md"
                  >
                    <div className={`${link.icon} text-base sm:text-lg`}></div>
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-[var(--text-primary)] font-semibold mb-3 sm:mb-4 text-base sm:text-lg">Quick Links</h4>
              <div className="space-y-1 sm:space-y-2">
                {[
                  { label: "Home", id: "home" },
                  { label: "About", id: "about" },
                  { label: "Skills", id: "skills" },
                  { label: "Projects", id: "projects" }
                ].map((link, idx) => (
                  <button
                    key={idx}
                    onClick={() => scrollToSection(link.id)}
                    className="block text-[var(--text-secondary)] text-sm sm:text-base hover:text-[var(--accent-color)] transition-colors"
                  >
                    {link.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-[var(--text-primary)] font-semibold mb-3 sm:mb-4 text-base sm:text-lg">Contact</h4>
              <div className="space-y-1 sm:space-y-2 text-[var(--text-secondary)] text-xs sm:text-sm">
                <a href="mailto:yogesh.chauhan.ai@gmail.com" className="flex items-center space-x-1.5 sm:space-x-2 hover:text-[var(--accent-color)] transition-colors">
                  <div className="icon-mail text-xs sm:text-sm"></div>
                  <span>yogesh.chauhan.ai@gmail.com</span>
                </a>
                <a href="tel:+918004116115" className="flex items-center space-x-1.5 sm:space-x-2 hover:text-[var(--accent-color)] transition-colors">
                  <div className="icon-phone text-xs sm:text-sm"></div>
                  <span>+91 8004116115</span>
                </a>
                <div className="flex items-center space-x-1.5 sm:space-x-2">
                  <div className="icon-map-pin text-xs sm:text-sm"></div>
                  <span>India</span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-[var(--border-color)] pt-6 sm:pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="text-[var(--text-secondary)] text-xs sm:text-sm mb-4 md:mb-0">
                © {currentYear} Yogesh Chauhan. All rights reserved.
              </div>
              <div className="flex items-center space-x-4 sm:space-x-6">
                <button 
                  onClick={() => {
                    const isDarkMode = document.documentElement.classList.contains('dark');
                    if (isDarkMode) {
                      document.documentElement.classList.remove('dark');
                      localStorage.setItem('darkMode', 'false');
                    } else {
                      document.documentElement.classList.add('dark');
                      localStorage.setItem('darkMode', 'true');
                    }
                  }}
                  className="flex items-center space-x-1.5 text-[var(--text-secondary)] hover:text-[var(--accent-color)] text-xs sm:text-sm transition-colors relative group"
                  aria-label="Toggle dark mode"
                  data-aos="fade-up"
                  data-aos-delay="100"
                >
                  <div className="icon-sun-moon text-xs sm:text-sm group-hover:animate-pulse-slow"></div>
                  <span>Theme: </span>
                  <span className="text-gradient font-medium">
                    {typeof window !== 'undefined' && document.documentElement.classList.contains('dark') ? 'Dark' : 'Light'}
                  </span>
                  <span className="absolute -bottom-4 left-0 w-full text-[10px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-[var(--accent-color)]">Click to toggle</span>
                </button>
                <a 
                  href="/admin"
                  className="text-[var(--text-secondary)] hover:text-[var(--accent-color)] text-xs sm:text-sm transition-colors"
                >
                  Admin
                </a>
                <button 
                  onClick={scrollToTop}
                  className="w-7 h-7 sm:w-8 sm:h-8 bg-[var(--accent-color)] flex items-center justify-center text-white rounded-full hover:bg-opacity-80 transition-all"
                >
                  <div className="icon-arrow-up text-xs sm:text-sm"></div>
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

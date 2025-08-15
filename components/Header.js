function Header() {
  try {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    const [isDarkMode, setIsDarkMode] = React.useState(false);

    // Initialize dark mode based on user preference or system preference
    React.useEffect(() => {
      // Check if user has a saved preference
      const savedMode = localStorage.getItem('darkMode');
      if (savedMode) {
        setIsDarkMode(savedMode === 'true');
      } else {
        // Check system preference
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        setIsDarkMode(prefersDark);
      }
    }, []);

    // Apply dark mode class to document when dark mode state changes
     React.useEffect(() => {
       if (isDarkMode) {
         document.documentElement.classList.add('dark');
         localStorage.setItem('darkMode', 'true');
       } else {
         document.documentElement.classList.remove('dark');
         localStorage.setItem('darkMode', 'false');
       }
     }, [isDarkMode]);

    const toggleDarkMode = () => {
      setIsDarkMode(!isDarkMode);
    };

    const scrollToSection = (sectionId) => {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
      setIsMenuOpen(false);
    };

    return (
      <header className="fixed top-0 left-0 right-0 light-header z-50 shadow-2xl" data-name="header" data-file="components/Header.js">
        <nav className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex items-center justify-between">
            <div className="text-3xl font-black text-neon uppercase tracking-wider">
              Yogesh Chauhan
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-12">
              <button onClick={() => scrollToSection('home')} className="text-[var(--text-secondary)] hover:text-[var(--accent-color)] transition-colors font-bold uppercase tracking-wide">
                Home
              </button>
              <button onClick={() => scrollToSection('about')} className="text-[var(--text-secondary)] hover:text-[var(--accent-color)] transition-colors font-bold uppercase tracking-wide">
                About
              </button>
              <button onClick={() => scrollToSection('skills')} className="text-[var(--text-secondary)] hover:text-[var(--accent-color)] transition-colors font-bold uppercase tracking-wide">
                Skills
              </button>
              <button onClick={() => scrollToSection('internship')} className="text-[var(--text-secondary)] hover:text-[var(--accent-color)] transition-colors font-bold uppercase tracking-wide">
                Internship
              </button>
              <button onClick={() => scrollToSection('projects')} className="text-[var(--text-secondary)] hover:text-[var(--accent-color)] transition-colors font-bold uppercase tracking-wide">
                Projects
              </button>
              <button onClick={() => scrollToSection('contact')} className="btn-primary">
                Contact
              </button>
              
              {/* Dark Mode Toggle */}
              <button 
                onClick={toggleDarkMode} 
                className="p-2 rounded-full bg-[var(--background-card)] text-[var(--text-secondary)] hover:text-[var(--accent-color)] transition-colors duration-300 focus:outline-none"
                aria-label="Toggle dark mode"
              >
                {isDarkMode ? (
                  <div className="icon-sun text-xl"></div>
                ) : (
                  <div className="icon-moon text-xl"></div>
                )}
              </button>
            </div>

            {/* Mobile Menu Button and Dark Mode Toggle */}
            <div className="md:hidden flex items-center space-x-4">
              {/* Dark Mode Toggle */}
              <button 
                onClick={toggleDarkMode} 
                className="p-2 rounded-full bg-[var(--background-card)] text-[var(--text-secondary)] hover:text-[var(--accent-color)] transition-colors duration-300 focus:outline-none"
                aria-label="Toggle dark mode"
              >
                {isDarkMode ? (
                  <div className="icon-sun text-xl"></div>
                ) : (
                  <div className="icon-moon text-xl"></div>
                )}
              </button>
              
              {/* Menu Toggle */}
              <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-3 border-2 border-[var(--accent-color)] hover:bg-[var(--accent-color)] transition-colors"
              >
                <div className={`icon-menu text-xl ${isMenuOpen ? 'text-white' : 'text-[var(--accent-color)]'}`}></div>
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden mt-6 py-6 border-t-2 border-[var(--accent-color)]">
              <div className="flex flex-col space-y-6">
                <button onClick={() => scrollToSection('home')} className="text-left text-[var(--text-secondary)] hover:text-[var(--accent-color)] transition-colors font-bold uppercase tracking-wide">
                  Home
                </button>
                <button onClick={() => scrollToSection('about')} className="text-left text-[var(--text-secondary)] hover:text-[var(--accent-color)] transition-colors font-bold uppercase tracking-wide">
                  About
                </button>
                <button onClick={() => scrollToSection('skills')} className="text-left text-[var(--text-secondary)] hover:text-[var(--accent-color)] transition-colors font-bold uppercase tracking-wide">
                  Skills
                </button>
                <button onClick={() => scrollToSection('internship')} className="text-left text-[var(--text-secondary)] hover:text-[var(--accent-color)] transition-colors font-bold uppercase tracking-wide">
                  Internship
                </button>
                <button onClick={() => scrollToSection('projects')} className="text-left text-[var(--text-secondary)] hover:text-[var(--accent-color)] transition-colors font-bold uppercase tracking-wide">
                  Projects
                </button>
                <button onClick={() => scrollToSection('contact')} className="text-left text-[var(--accent-color)] font-bold uppercase tracking-wide">
                  Contact
                </button>
              </div>
            </div>
          )}
        </nav>
      </header>
    );
  } catch (error) {
    console.error('Header component error:', error);
    return null;
  }
}
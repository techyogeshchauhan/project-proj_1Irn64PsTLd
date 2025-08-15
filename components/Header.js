function Header() {
  try {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    const [isDarkMode, setIsDarkMode] = React.useState(false);

    // Initialize dark mode based on user preference or system preference
    React.useEffect(() => {
      // Check if user has a saved preference
      const savedMode = localStorage.getItem('darkMode');
      if (savedMode !== null) {
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
        element.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        });
      }
      setIsMenuOpen(false);
    };

    return (
      <header className="fixed top-0 left-0 right-0 z-50 bg-[var(--primary-color)] shadow-lg backdrop-blur-sm bg-opacity-90" data-name="header" data-file="components/Header.js">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4">
          <div className="flex items-center justify-between">
            {/* Logo/Name */}
            <div className="text-xl sm:text-2xl font-black text-[var(--accent-color)] uppercase tracking-wider hover:text-[var(--accent-tertiary)] transition-colors cursor-pointer" onClick={() => scrollToSection('home')}>
              Yogesh Chauhan
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
              <button 
                onClick={() => scrollToSection('home')} 
                className="text-sm lg:text-base text-[var(--text-secondary)] hover:text-[var(--accent-color)] transition-colors font-medium uppercase tracking-wide"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('about')} 
                className="text-sm lg:text-base text-[var(--text-secondary)] hover:text-[var(--accent-color)] transition-colors font-medium uppercase tracking-wide"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('skills')} 
                className="text-sm lg:text-base text-[var(--text-secondary)] hover:text-[var(--accent-color)] transition-colors font-medium uppercase tracking-wide"
              >
                Skills
              </button>
              <button 
                onClick={() => scrollToSection('internship')} 
                className="text-sm lg:text-base text-[var(--text-secondary)] hover:text-[var(--accent-color)] transition-colors font-medium uppercase tracking-wide"
              >
                Experience
              </button>
              <button 
                onClick={() => scrollToSection('projects')} 
                className="text-sm lg:text-base text-[var(--text-secondary)] hover:text-[var(--accent-color)] transition-colors font-medium uppercase tracking-wide"
              >
                Projects
              </button>
              
              {/* Contact Button */}
              <button 
                onClick={() => scrollToSection('contact')} 
                className="btn-primary text-sm lg:text-base px-4 py-2 lg:px-5 lg:py-2.5 ml-2"
              >
                Contact
              </button>
              
              {/* Dark Mode Toggle */}
              <button 
                onClick={toggleDarkMode} 
                className="p-2 rounded-full bg-[var(--background-card)] text-[var(--text-secondary)] hover:text-[var(--accent-color)] transition-all duration-300 focus:outline-none relative overflow-hidden group shadow-sm hover:shadow-md border border-[var(--border-color)] ml-2"
                aria-label={isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[var(--accent-color)] to-[var(--accent-tertiary)] opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                {isDarkMode ? (
                  <div className="icon-sun text-lg animate-spin-slow"></div>
                ) : (
                  <div className="icon-moon text-lg animate-pulse-slow"></div>
                )}
              </button>
            </div>

            {/* Mobile Menu Button and Dark Mode Toggle */}
            <div className="md:hidden flex items-center space-x-3">
              {/* Dark Mode Toggle */}
              <button 
                onClick={toggleDarkMode} 
                className="p-2 rounded-full bg-[var(--background-card)] text-[var(--text-secondary)] hover:text-[var(--accent-color)] transition-all duration-300 focus:outline-none relative overflow-hidden group shadow-sm hover:shadow-md border border-[var(--border-color)]"
                aria-label={isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[var(--accent-color)] to-[var(--accent-tertiary)] opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                {isDarkMode ? (
                  <div className="icon-sun text-lg animate-spin-slow"></div>
                ) : (
                  <div className="icon-moon text-lg animate-pulse-slow"></div>
                )}
              </button>
              
              {/* Menu Toggle */}
              <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 border border-[var(--accent-color)] hover:bg-[var(--accent-color)] hover:text-white transition-colors rounded-md"
                aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
              >
                {isMenuOpen ? (
                  <div className="icon-x text-lg text-[var(--accent-color)] hover:text-white"></div>
                ) : (
                  <div className="icon-menu text-lg text-[var(--accent-color)]"></div>
                )}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden mt-3 py-4 border-t border-[var(--border-color)] bg-[var(--primary-color)] bg-opacity-95 backdrop-blur-sm">
              <div className="flex flex-col space-y-4">
                <button 
                  onClick={() => scrollToSection('home')} 
                  className="text-left py-2 px-3 rounded hover:bg-[var(--background-card)] text-[var(--text-primary)] font-medium uppercase tracking-wide"
                >
                  Home
                </button>
                <button 
                  onClick={() => scrollToSection('about')} 
                  className="text-left py-2 px-3 rounded hover:bg-[var(--background-card)] text-[var(--text-primary)] font-medium uppercase tracking-wide"
                >
                  About
                </button>
                <button 
                  onClick={() => scrollToSection('skills')} 
                  className="text-left py-2 px-3 rounded hover:bg-[var(--background-card)] text-[var(--text-primary)] font-medium uppercase tracking-wide"
                >
                  Skills
                </button>
                <button 
                  onClick={() => scrollToSection('internship')} 
                  className="text-left py-2 px-3 rounded hover:bg-[var(--background-card)] text-[var(--text-primary)] font-medium uppercase tracking-wide"
                >
                  Experience
                </button>
                <button 
                  onClick={() => scrollToSection('projects')} 
                  className="text-left py-2 px-3 rounded hover:bg-[var(--background-card)] text-[var(--text-primary)] font-medium uppercase tracking-wide"
                >
                  Projects
                </button>
                <button 
                  onClick={() => scrollToSection('contact')} 
                  className="text-left py-2 px-3 rounded bg-[var(--accent-color)] text-white font-medium uppercase tracking-wide mt-2"
                >
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

export default Header;
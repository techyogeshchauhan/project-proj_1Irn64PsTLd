function Hero() {
  try {
    // Multiple text options for typing effect
    const [typedText, setTypedText] = React.useState('');
    const textOptions = [
      "Data Scientist",
      "Machine Learning Engineer",
      "AI Enthusiast",
      "Computer Vision Specialist",
      "Data Visualization Expert"
    ];
    const [currentTextIndex, setCurrentTextIndex] = React.useState(0);
    const typingSpeed = 50; // milliseconds per character
    const erasingSpeed = 30; // milliseconds per character when erasing
    
    React.useEffect(() => {
      let currentText = textOptions[currentTextIndex];
      let isTyping = true;
      let currentIndex = 0;
      let timeout;
      
      const typeText = () => {
        if (isTyping) {
          // Typing forward
          if (currentIndex <= currentText.length) {
            setTypedText(currentText.substring(0, currentIndex));
            currentIndex++;
            timeout = setTimeout(typeText, typingSpeed);
          } else {
            // Pause at the end of typing before erasing
            isTyping = false;
            timeout = setTimeout(typeText, 2000);
          }
        } else {
          // Erasing
          if (currentIndex > 0) {
            currentIndex--;
            setTypedText(currentText.substring(0, currentIndex));
            timeout = setTimeout(typeText, erasingSpeed);
          } else {
            // Move to next text option
            isTyping = true;
            setCurrentTextIndex((prevIndex) => (prevIndex + 1) % textOptions.length);
            currentText = textOptions[(currentTextIndex + 1) % textOptions.length];
            timeout = setTimeout(typeText, 500);
          }
        }
      };
      
      timeout = setTimeout(typeText, 500);
      
      return () => clearTimeout(timeout);
    }, [currentTextIndex]);
    
    // Particle animation effect for data visualization
    React.useEffect(() => {
      // This would be implemented with a library like particles.js
      // For now, we'll just add the initialization code placeholder
      if (typeof window !== 'undefined' && window.particlesJS) {
        window.particlesJS('particles-js', {
          particles: {
            number: { value: 80, density: { enable: true, value_area: 800 } },
            color: { value: '#ffffff' },
            opacity: { value: 0.5, random: false },
            size: { value: 3, random: true },
            line_linked: { enable: true, distance: 150, color: '#ffffff', opacity: 0.4, width: 1 },
            move: { enable: true, speed: 2, direction: 'none', random: false, straight: false, out_mode: 'out', bounce: false }
          },
          interactivity: {
            detect_on: 'canvas',
            events: { onhover: { enable: true, mode: 'grab' }, onclick: { enable: true, mode: 'push' }, resize: true },
            modes: { grab: { distance: 140, line_linked: { opacity: 1 } }, push: { particles_nb: 4 } }
          },
          retina_detect: true
        });
      }
    }, []);
    
    return (
      <section
        id="home"
        className="min-h-screen flex items-center relative overflow-hidden bg-gradient-to-b from-[var(--primary-color)] to-[var(--background-dark)] text-[var(--text-primary)] section-padding px-4 sm:px-6 py-16 sm:py-20 pt-24 sm:pt-28"
        data-name="hero"
        data-file="components/Hero.js"
      >
        {/* Particle background for data visualization effect */}
        <div id="particles-js" className="absolute inset-0 z-0"></div>
        
        <div className="max-w-7xl mx-auto w-full relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-16 lg:gap-20 items-center">
            {/* Left Side */}
            <div className="order-2 lg:order-1" data-aos="fade-right" data-aos-delay="100">
              <div className="mb-4 sm:mb-6 animate-fade-in">
                <div className="inline-flex items-center px-3 sm:px-4 py-1 sm:py-2 border border-[var(--accent-tertiary)] text-[var(--accent-tertiary)] text-xs sm:text-sm font-medium rounded-full mb-6 sm:mb-8 shadow-lg hover:shadow-[var(--accent-tertiary)]/20 transition-all duration-300">
                  <div className="w-1.5 sm:w-2 h-1.5 sm:h-2 bg-[var(--accent-tertiary)] rounded-full mr-2 sm:mr-3 pulse-animation"></div>
                  Data Scientist & ML Engineer
                </div>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 leading-tight animate-slide-in-left">
                Hi, I'm <span className="data-gradient">Yogesh Chauhan</span>
              </h1>
              <div className="text-lg sm:text-xl lg:text-2xl mb-4 sm:mb-6 font-medium text-[var(--accent-secondary)] h-8 sm:h-10">
                <span className="font-semibold">{typedText}</span><span className="animate-pulse">|</span>
              </div>
              <p className="text-base sm:text-lg mb-6 sm:mb-10 text-[var(--text-secondary)] leading-relaxed max-w-xl animate-fade-in">
                I transform complex data into actionable insights and intelligent solutions. 
                Specializing in <span className="data-highlight">machine learning</span>, <span className="data-highlight">data visualization</span>, 
                and <span className="data-highlight">predictive analytics</span> to solve real-world problems through data-driven approaches.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-8 sm:mb-12 animate-fade-in" style={{animationDelay: '0.3s'}}>
                <button
                  onClick={() =>
                    document
                      .getElementById("contact")
                      .scrollIntoView({ behavior: "smooth" })
                  }
                  className="btn-primary flex items-center justify-center space-x-2 hover:scale-105 transition-transform duration-300 text-sm sm:text-base py-2 px-4 sm:py-3 sm:px-6"
                >
                  <span>Get In Touch</span>
                  <div className="icon-arrow-right text-base sm:text-lg"></div>
                </button>
                <button
                  onClick={() =>
                    document
                      .getElementById("projects")
                      .scrollIntoView({ behavior: "smooth" })
                  }
                  className="btn-outline flex items-center justify-center space-x-2 hover:scale-105 transition-transform duration-300 text-sm sm:text-base py-2 px-4 sm:py-3 sm:px-6"
                >
                  <span>View My Projects</span>
                  <div className="icon-external-link text-base sm:text-lg"></div>
                </button>
              </div>
              
              <div className="mb-8 sm:mb-12 flex space-x-4 animate-fade-in" style={{animationDelay: '0.4s'}}>
                <a href="https://github.com/techyogeshchauhan" target="_blank" rel="noopener noreferrer" className="text-[var(--text-secondary)] hover:text-[var(--accent-secondary)] transition-colors duration-300">
                  <div className="icon-github text-xl sm:text-2xl"></div>
                </a>
                <a href="https://linkedin.com/in/yogeshchauhan" target="_blank" rel="noopener noreferrer" className="text-[var(--text-secondary)] hover:text-[var(--accent-secondary)] transition-colors duration-300">
                  <div className="icon-linkedin text-xl sm:text-2xl"></div>
                </a>
                <a href="https://twitter.com/yogeshchauhan" target="_blank" rel="noopener noreferrer" className="text-[var(--text-secondary)] hover:text-[var(--accent-tertiary)] transition-colors duration-300">
                  <div className="icon-twitter text-xl sm:text-2xl"></div>
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer" className="text-[var(--text-secondary)] hover:text-[var(--accent-color)] transition-colors duration-300">
                  <div className="icon-chart-line text-xl sm:text-2xl"></div>
                </a>
              </div>

              {/* Data Science Stats */}
              <div className="grid grid-cols-3 gap-4 sm:gap-8 animate-fade-in" style={{animationDelay: '0.5s'}}>
                <div className="text-center p-4 rounded-lg glass-card shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <div className="text-2xl font-bold data-gradient mb-1">15+</div>
                  <div className="text-sm text-[var(--text-secondary)]">
                    ML Models Deployed
                  </div>
                </div>
                <div className="text-center p-4 rounded-lg glass-card shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <div className="text-2xl font-bold data-gradient mb-1">50+</div>
                  <div className="text-sm text-[var(--text-secondary)]">
                    Data Science Projects
                  </div>
                </div>
                <div className="text-center p-4 rounded-lg glass-card shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <div className="text-2xl font-bold data-gradient mb-1">3+</div>
                  <div className="text-sm text-[var(--text-secondary)]">
                    Years of Experience
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Profile Image with Data Visualization Elements */}
            <div className="order-1 lg:order-2 flex justify-center lg:justify-end" data-aos="fade-left" data-aos-delay="200">
              <div className="relative animate-scale mt-10 sm:mt-0">
                <div className="w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-2xl overflow-hidden border-2 border-[var(--accent-secondary)] bg-[var(--background-card)] shadow-2xl">
                  <img
                    src="/trickle/assets/yogu2.jpg"
                    alt="Yogesh Chauhan - Data Scientist"
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                  />
                </div>
                
                {/* Data Science themed decorative elements */}
                <div className="absolute -bottom-3 sm:-bottom-4 -right-3 sm:-right-4 bg-[var(--background-card)] p-3 sm:p-4 rounded-full border-2 border-[var(--accent-secondary)] shadow-lg pulse-animation">
                  <div className="text-2xl sm:text-3xl text-[var(--accent-secondary)]">
                    <div className="icon-chart-pie"></div>
                  </div>
                </div>
                <div className="absolute -top-3 sm:-top-4 -left-3 sm:-left-4 bg-[var(--background-card)] p-2 sm:p-3 rounded-full border-2 border-[var(--accent-tertiary)] shadow-lg">
                  <div className="text-xl sm:text-2xl text-[var(--accent-tertiary)]">
                    <div className="icon-brain"></div>
                  </div>
                </div>
                <div className="absolute top-1/2 -right-4 sm:-right-6 transform -translate-y-1/2 bg-[var(--background-card)] p-2 sm:p-3 rounded-full border-2 border-[var(--accent-color)] shadow-lg">
                  <div className="text-xl sm:text-2xl text-[var(--accent-color)]">
                    <div className="icon-database"></div>
                  </div>
                </div>
                <div className="absolute top-1/4 -left-4 sm:-left-6 bg-[var(--background-card)] p-2 sm:p-3 rounded-full border-2 border-[var(--accent-color)] shadow-lg">
                  <div className="text-xl sm:text-2xl text-[var(--accent-color)]">
                    <div className="icon-code"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error('Hero component error:', error);
    return null;
  }
}

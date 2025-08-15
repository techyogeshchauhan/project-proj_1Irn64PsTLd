function Hero() {
  try {
    const [typedText, setTypedText] = React.useState('');
  const fullText = "AI & Data Science | Computer Vision | ML";
    const typingSpeed = 50; // milliseconds per character
    
    React.useEffect(() => {
      let currentIndex = 0;
      const typingInterval = setInterval(() => {
        if (currentIndex <= fullText.length) {
          setTypedText(fullText.substring(0, currentIndex));
          currentIndex++;
        } else {
          clearInterval(typingInterval);
          // Reset after a pause
          setTimeout(() => {
            setTypedText('');
            currentIndex = 0;
            // Restart typing effect
            setTimeout(() => {
              const newTypingInterval = setInterval(() => {
                if (currentIndex <= fullText.length) {
                  setTypedText(fullText.substring(0, currentIndex));
                  currentIndex++;
                } else {
                  clearInterval(newTypingInterval);
                }
              }, typingSpeed);
            }, 1000);
          }, 3000);
        }
      }, typingSpeed);
      
      return () => clearInterval(typingInterval);
    }, []);
    
    return (
      <section
        id="home"
        className="min-h-screen flex items-center bg-gradient-to-b from-[var(--primary-color)] to-[var(--background-dark)] text-[var(--text-primary)] section-padding"
        data-name="hero"
        data-file="components/Hero.js"
      >
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            {/* Left Side */}
            <div className="order-2 lg:order-1">
              <div className="mb-6 floating-animation">
                <div className="inline-flex items-center px-4 py-2 border border-[var(--accent-color)] text-[var(--accent-color)] text-sm font-medium rounded-full mb-8 shadow-lg hover:shadow-[var(--accent-color)]/20 transition-all duration-300">
                  <div className="w-2 h-2 bg-[var(--accent-color)] rounded-full mr-3 pulse-animation"></div>
                  Open to collaborations & new opportunities
                </div>
              </div>
              <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 leading-tight">
                Hi, I'm <span className="text-gradient">Yogesh Chauhan</span>
              </h1>
              <div className="text-xl lg:text-2xl mb-6 font-medium text-[var(--text-secondary)] h-8">
                <span>{typedText}</span><span className="animate-pulse">|</span>
              </div>
              <p className="text-lg mb-10 text-[var(--text-secondary)] leading-relaxed max-w-xl">
                I’m an AI & Data Science enthusiast who builds intelligent, data-driven web applications.
                My work blends Python, Flask, MongoDB, and OpenCV to create solutions that solve real-world problems.
                Always curious, always learning, always innovating.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <button
                  onClick={() =>
                    document
                      .getElementById("contact")
                      .scrollIntoView({ behavior: "smooth" })
                  }
                  className="btn-primary flex items-center justify-center space-x-2 hover:scale-105 transition-transform duration-300"
                >
                  <span>Get In Touch</span>
                  <div className="icon-arrow-right text-lg"></div>
                </button>
                <button
                  onClick={() =>
                    document
                      .getElementById("projects")
                      .scrollIntoView({ behavior: "smooth" })
                  }
                  className="btn-secondary flex items-center justify-center space-x-2 hover:scale-105 transition-transform duration-300"
                >
                  <span>View My Work</span>
                  <div className="icon-external-link text-lg"></div>
                </button>
              </div>
              
              <div className="mb-12 flex space-x-4">
                <a href="https://github.com/techyogeshchauhan" target="_blank" rel="noopener noreferrer" className="text-[var(--text-secondary)] hover:text-[var(--accent-color)] transition-colors duration-300">
                  <div className="icon-github text-2xl"></div>
                </a>
                <a href="https://linkedin.com/in/yogeshchauhan" target="_blank" rel="noopener noreferrer" className="text-[var(--text-secondary)] hover:text-[var(--accent-color)] transition-colors duration-300">
                  <div className="icon-linkedin text-2xl"></div>
                </a>
                <a href="https://twitter.com/yogeshchauhan" target="_blank" rel="noopener noreferrer" className="text-[var(--text-secondary)] hover:text-[var(--accent-color)] transition-colors duration-300">
                  <div className="icon-twitter text-2xl"></div>
                </a>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-8">
                <div className="text-center p-4 rounded-lg bg-[var(--background-card)] shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <div className="text-2xl font-bold text-gradient mb-1">3+</div>
                  <div className="text-sm text-[var(--text-secondary)]">
                    Years Learning & Building
                  </div>
                </div>
                <div className="text-center p-4 rounded-lg bg-[var(--background-card)] shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <div className="text-2xl font-bold text-gradient mb-1">50+</div>
                  <div className="text-sm text-[var(--text-secondary)]">
                    Projects & Experiments
                  </div>
                </div>
                <div className="text-center p-4 rounded-lg bg-[var(--background-card)] shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <div className="text-2xl font-bold text-gradient mb-1">100%</div>
                  <div className="text-sm text-[var(--text-secondary)]">
                    Passion for Innovation
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Profile Image */}
            <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
              <div className="relative floating-animation">
                <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-2xl overflow-hidden border-2 border-[var(--accent-color)] bg-[var(--background-card)] shadow-2xl">
                  <img
                    src="/trickle/assets/1737493431658.jpg"
                    alt="Yogesh Chauhan - AI & Data Science"
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 bg-[var(--background-card)] p-4 rounded-full border-2 border-[var(--accent-color)] shadow-lg pulse-animation">
                  <div className="text-3xl text-[var(--accent-color)]">
                    <div className="icon-code"></div>
                  </div>
                </div>
                <div className="absolute -top-4 -left-4 bg-[var(--background-card)] p-3 rounded-full border-2 border-[var(--accent-color)] shadow-lg">
                  <div className="text-2xl text-[var(--accent-color)]">
                    <div className="icon-brain"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error("Hero component error:", error);
    return null;
  }
}

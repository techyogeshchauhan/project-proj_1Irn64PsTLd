function About() {
  try {
    return (
      <section
        id="about"
        className="section-padding bg-[var(--primary-color)] px-4 sm:px-6 py-16 sm:py-20"
        data-name="about"
        data-file="components/About.js"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-20">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[var(--text-primary)] mb-4 sm:mb-6 uppercase tracking-wider">
              About Me
            </h2>
            <div className="w-24 sm:w-32 h-1 bg-[var(--accent-color)] mx-auto mb-6 sm:mb-8"></div>
            <p className="text-lg sm:text-xl text-[var(--text-secondary)] max-w-3xl mx-auto leading-relaxed px-2">
              Hi, I'm Yogesh Chauhan — an AI & Data Science student with a passion
              for building intelligent, impactful web applications. I work with Python,
              Flask, MongoDB, and OpenCV, and enjoy turning ideas into useful solutions.
              I'm always learning and driven to create tech that makes a difference.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-start md:items-center">
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold text-[var(--text-primary)] mb-4 sm:mb-8">My Story</h3>
              <p className="text-sm sm:text-base text-[var(--text-secondary)] mb-4 sm:mb-6 leading-relaxed">
                My journey started with a curiosity for how computers think and
                learn. Now, I focus on creating AI and web projects that solve
                real-world problems, blending creativity with technical precision.
              </p>
              <p className="text-sm sm:text-base text-[var(--text-secondary)] mb-6 sm:mb-8 leading-relaxed">
                Every project is a chance to innovate, learn, and make an impact.
                I believe in clean code, user-friendly design, and practical
                innovation.
              </p>

              <div className="grid grid-cols-2 gap-4 sm:gap-6">
                <div className="text-center card">
                  <div className="text-4xl font-bold text-[var(--accent-color)] mb-2">50+</div>
                  <div className="text-[var(--text-secondary)] font-medium">Projects</div>
                </div>
                <div className="text-center card">
                  <div className="text-4xl font-bold text-[var(--accent-color)] mb-2">3+</div>
                  <div className="text-[var(--text-secondary)] font-medium">Years</div>
                </div>
              </div>
            </div>

            <div className="mt-8 md:mt-0">
              <h3 className="text-2xl sm:text-3xl font-bold text-[var(--text-primary)] mb-4 sm:mb-8">What I Do</h3>
              <div className="space-y-4 sm:space-y-6">
                <div className="card">
                  <div className="flex items-start space-x-3 sm:space-x-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[var(--accent-color)] flex items-center justify-center shadow-lg rounded-full hover:scale-110 transition-transform duration-300 flex-shrink-0">
                      <div className="icon-brain text-2xl sm:text-3xl text-[var(--text-primary)]"></div>
                    </div>
                    <div>
                      <h4 className="text-base sm:text-lg font-semibold text-[var(--text-primary)] mb-1 sm:mb-2">AI Development</h4>
                      <p className="text-sm sm:text-base text-[var(--text-secondary)]">
                        Building smart applications using machine learning and computer vision
                        to understand and assist users.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="card">
                  <div className="flex items-start space-x-3 sm:space-x-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[var(--accent-color)] flex items-center justify-center shadow-lg rounded-full hover:scale-110 transition-transform duration-300 flex-shrink-0">
                      <div className="icon-code text-2xl sm:text-3xl text-[var(--text-primary)]"></div>
                    </div>
                    <div>
                      <h4 className="text-base sm:text-lg font-semibold text-[var(--text-primary)] mb-1 sm:mb-2">Backend Development</h4>
                      <p className="text-sm sm:text-base text-[var(--text-secondary)]">
                        Designing APIs and server-side systems for AI-powered apps with a focus
                        on scalability and reliability.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="card">
                  <div className="flex items-start space-x-3 sm:space-x-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[var(--accent-color)] flex items-center justify-center shadow-lg rounded-full hover:scale-110 transition-transform duration-300 flex-shrink-0">
                      <div className="icon-chart-bar text-2xl sm:text-3xl text-[var(--text-primary)]"></div>
                    </div>
                    <div>
                      <h4 className="text-base sm:text-lg font-semibold text-[var(--text-primary)] mb-1 sm:mb-2">AI & Data Science Student</h4>
                      <p className="text-sm sm:text-base text-[var(--text-secondary)]">
                        Exploring machine learning, computer vision, and data analytics to
                        build innovative solutions and gain deep insights from data.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error('About component error:', error);
    return null;
  }
}

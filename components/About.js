function About() {
  try {
    return (
      <section
        id="about"
        className="section-padding bg-[var(--primary-color)]"
        data-name="about"
        data-file="components/About.js"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl lg:text-6xl font-black text-[var(--text-primary)] mb-6 uppercase tracking-wider">
              About Me
            </h2>
            <div className="w-32 h-1 bg-[var(--accent-color)] mx-auto mb-8"></div>
            <p className="text-xl text-[var(--text-secondary)] max-w-3xl mx-auto leading-relaxed">
              Hi, I’m Yogesh Chauhan — an AI & Data Science student with a passion
              for building intelligent, impactful web applications. I work with Python,
              Flask, MongoDB, and OpenCV, and enjoy turning ideas into useful solutions.
              I’m always learning and driven to create tech that makes a difference.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h3 className="text-3xl font-bold text-[var(--text-primary)] mb-8">My Story</h3>
              <p className="text-[var(--text-secondary)] mb-6 leading-relaxed">
                My journey started with a curiosity for how computers think and
                learn. Now, I focus on creating AI and web projects that solve
                real-world problems, blending creativity with technical precision.
              </p>
              <p className="text-[var(--text-secondary)] mb-8 leading-relaxed">
                Every project is a chance to innovate, learn, and make an impact.
                I believe in clean code, user-friendly design, and practical
                innovation.
              </p>

              <div className="grid grid-cols-2 gap-6">
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

            <div>
              <h3 className="text-3xl font-bold text-[var(--text-primary)] mb-8">What I Do</h3>
              <div className="space-y-6">
                <div className="card">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-[var(--accent-color)] flex items-center justify-center shadow-lg rounded-full hover:scale-110 transition-transform duration-300">
                      <div className="icon-brain text-3xl text-[var(--text-primary)]"></div>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-[var(--text-primary)] mb-2">AI Development</h4>
                      <p className="text-[var(--text-secondary)]">
                        Building smart applications using machine learning and computer vision
                        to understand and assist users.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="card">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-[var(--accent-color)] flex items-center justify-center shadow-lg rounded-full hover:scale-110 transition-transform duration-300">
                      <div className="icon-code text-3xl text-[var(--text-primary)]"></div>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-[var(--text-primary)] mb-2">Backend Development</h4>
                      <p className="text-[var(--text-secondary)]">
                        Designing APIs and server-side systems for AI-powered apps with a focus
                        on scalability and reliability.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="card">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-[var(--accent-color)] flex items-center justify-center shadow-lg rounded-full hover:scale-110 transition-transform duration-300">
                      <div className="icon-chart-bar text-3xl text-[var(--text-primary)]"></div>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-[var(--text-primary)] mb-2">AI & Data Science Student</h4>
                      <p className="text-[var(--text-secondary)]">
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

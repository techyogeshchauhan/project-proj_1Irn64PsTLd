function Skills() {
  try {
    const skillCategories = [
      {
        title: "AI & Data Science",
        icon: "brain",
        skills: [
          "Machine Learning",
          "Deep Learning",
          "Computer Vision",
          "OpenCV",
          "NLP",
          "Pandas",
          "NumPy",
          "Matplotlib"
        ]
      },
      {
        title: "Backend Development",
        icon: "server",
        skills: [
          "Python",
          "Flask",
          "Node.js",
          "Express.js",
          "MongoDB",
          "PostgreSQL",
          "REST APIs",
          "Scalable Architecture"
        ]
      },
      {
        title: "Frontend & Tools",
        icon: "monitor",
        skills: [
          "React",
          "JavaScript",
          "HTML5",
          "CSS3",
          "Tailwind CSS",
          "Git",
          "Docker",
          "Linux"
        ]
      }
    ];

    return (
      <section
        id="skills"
        className="section-padding bg-[var(--primary-color)]"
        data-name="skills"
        data-file="components/Skills.js"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl lg:text-6xl font-black text-[var(--text-primary)] mb-6 uppercase tracking-wider">
              Skills & Tech
            </h2>
            <div className="w-32 h-1 bg-[var(--accent-color)] mx-auto mb-8"></div>
            <p className="text-xl text-[var(--text-secondary)] max-w-3xl mx-auto leading-relaxed">
              The core technologies and tools I use to build AI-powered, full-stack applications.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
              <div key={index} className="card">
                <div className="text-center mb-8">
                  <div className="w-16 h-16 bg-[var(--accent-color)] flex items-center justify-center mx-auto mb-6">
                    <div className={`icon-${category.icon} text-2xl text-[var(--text-primary)]`}></div>
                  </div>
                  <h3 className="text-xl font-semibold text-[var(--text-primary)]">{category.title}</h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-3 py-1 bg-[var(--primary-color)] border border-[var(--border-color)] text-[var(--text-secondary)] text-sm hover:border-[var(--accent-color)] hover:text-[var(--accent-color)] transition-all duration-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <h3 className="text-2xl font-bold text-[var(--text-primary)] mb-6">Always Learning</h3>
            <p className="text-[var(--text-secondary)] max-w-3xl mx-auto mb-8 leading-relaxed">
              Technology evolves rapidly, and so do I. I'm constantly exploring new AI frameworks, computer vision techniques, and backend technologies to deliver cutting-edge solutions.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <span className="px-4 py-2 bg-[var(--background-card)] border border-[var(--border-color)] text-[var(--text-secondary)] hover:border-[var(--accent-color)] hover:text-[var(--accent-color)] transition-all">
                Learning: LangChain
              </span>
              <span className="px-4 py-2 bg-[var(--background-card)] border border-[var(--border-color)] text-[var(--text-secondary)] hover:border-[var(--accent-color)] hover:text-[var(--accent-color)] transition-all">
                Exploring: Generative AI
              </span>
              <span className="px-4 py-2 bg-[var(--background-card)] border border-[var(--border-color)] text-[var(--text-secondary)] hover:border-[var(--accent-color)] hover:text-[var(--accent-color)] transition-all">
                Interested: MLOps
              </span>
            </div>
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error("Skills component error:", error);
    return null;
  }
}

function Skills() {
  try {
    // Reference to chart containers
    const chartRefs = React.useRef([]);
    
    // Functions to get theme-based colors
    const getGridColor = () => {
      const isDark = document.documentElement.classList.contains('dark');
      return isDark ? 'rgba(209, 213, 219, 0.2)' : 'rgba(75, 85, 99, 0.2)';
    };
    
    const getLegendColor = () => {
      const isDark = document.documentElement.classList.contains('dark');
      return isDark ? '#D1D5DB' : '#4B5563';
    };
    
    // Store chart instances for theme updates
    const chartInstances = React.useRef([]);
    const distributionChartInstance = React.useRef(null);
    
    // Initialize charts after component mounts
    React.useEffect(() => {
      // Initialize skill proficiency charts
      if (chartRefs.current) {
        chartRefs.current.forEach((ref, index) => {
          if (ref && skillProficiencyData[index]) {
            const ctx = ref.getContext('2d');
            const chart = new Chart(ctx, {
              type: 'radar',
              data: {
                labels: skillProficiencyData[index].skills.map(s => s.name),
                datasets: [{
                  label: skillProficiencyData[index].title,
                  data: skillProficiencyData[index].skills.map(s => s.level),
                  backgroundColor: `${getComputedStyle(document.documentElement).getPropertyValue(`--chart-color-${index+1}`).trim()}33`,
                  borderColor: getComputedStyle(document.documentElement).getPropertyValue(`--chart-color-${index+1}`).trim(),
                  borderWidth: 2,
                  pointBackgroundColor: getComputedStyle(document.documentElement).getPropertyValue(`--chart-color-${index+1}`).trim(),
                  pointRadius: 4
                }]
              },
              options: {
                scales: {
                  r: {
                    angleLines: {
                      color: getGridColor()
                    },
                    grid: {
                      color: getGridColor()
                    },
                    pointLabels: {
                      color: getLegendColor(),
                      font: {
                        size: 12
                      }
                    },
                    ticks: {
                      backdropColor: 'transparent',
                      color: getLegendColor(),
                      z: 100
                    },
                    suggestedMin: 0,
                    suggestedMax: 100
                  }
                },
                plugins: {
                  legend: {
                    display: false
                  }
                },
                responsive: true,
                maintainAspectRatio: false
              }
            });
            
            // Store chart instance for theme updates
            chartInstances.current[index] = chart;
          }
        });
      }
      
      // Initialize skill distribution chart
      const distributionCtx = document.getElementById('skillDistributionChart');
      if (distributionCtx) {
        const distributionChart = new Chart(distributionCtx, {
          type: 'doughnut',
          data: {
            labels: ['Data Science', 'Machine Learning', 'Backend', 'Frontend', 'DevOps'],
            datasets: [{
              data: [35, 25, 20, 15, 5],
              backgroundColor: [
                getComputedStyle(document.documentElement).getPropertyValue('--chart-color-1').trim(),
                getComputedStyle(document.documentElement).getPropertyValue('--chart-color-3').trim(),
                getComputedStyle(document.documentElement).getPropertyValue('--chart-color-2').trim(),
                getComputedStyle(document.documentElement).getPropertyValue('--chart-color-4').trim(),
                getComputedStyle(document.documentElement).getPropertyValue('--chart-color-5').trim()
              ],
              borderWidth: 2,
              borderColor: getComputedStyle(document.documentElement).getPropertyValue('--background-card').trim()
            }]
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
              legend: {
                position: 'bottom',
                labels: {
                  color: getLegendColor(),
                  padding: 15,
                  font: {
                    size: 12
                  }
                }
              },
              cutout: '70%'
            }
          }
        });
        
        // Store distribution chart instance after creation
        distributionChartInstance.current = distributionChart;
      }
      
      // Add theme change listener
      const observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
          if (mutation.attributeName === 'class') {
            // Update radar charts
            chartInstances.current.forEach((chart) => {
              if (chart) {
                chart.options.scales.r.angleLines.color = getGridColor();
                chart.options.scales.r.grid.color = getGridColor();
                chart.options.scales.r.pointLabels.color = getLegendColor();
                chart.options.scales.r.ticks.color = getLegendColor();
                chart.update();
              }
            });
            
            // Update distribution chart
            if (distributionChartInstance.current) {
              distributionChartInstance.current.options.plugins.legend.labels.color = getLegendColor();
              distributionChartInstance.current.update();
            }
          }
        });
      });
      
      observer.observe(document.documentElement, { attributes: true });
      
      // Cleanup observer on unmount
      return () => observer.disconnect();
    }, []);
    
    // Skill categories for the skill tags display
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
    
    // Detailed skill proficiency data for radar charts
    const skillProficiencyData = [
      {
        title: "AI & Data Science",
        skills: [
          { name: "Machine Learning", level: 85 },
          { name: "Deep Learning", level: 75 },
          { name: "Computer Vision", level: 80 },
          { name: "NLP", level: 70 },
          { name: "Data Analysis", level: 90 },
          { name: "Data Visualization", level: 85 }
        ]
      },
      {
        title: "Programming Languages",
        skills: [
          { name: "Python", level: 90 },
          { name: "JavaScript", level: 75 },
          { name: "SQL", level: 80 },
          { name: "R", level: 65 },
          { name: "C++", level: 60 },
          { name: "Java", level: 55 }
        ]
      },
      {
        title: "Tools & Frameworks",
        skills: [
          { name: "TensorFlow", level: 80 },
          { name: "PyTorch", level: 75 },
          { name: "Flask", level: 85 },
          { name: "React", level: 70 },
          { name: "Docker", level: 65 },
          { name: "Git", level: 90 }
        ]
      }
    ];

    return (
      <section
        id="skills"
        className="section-padding bg-[var(--primary-color)] px-4 sm:px-6 py-16 sm:py-20"
        data-name="skills"
        data-file="components/Skills.js"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-20" data-aos="fade-up">
            <h2 className="section-title">
              Skills & Expertise
            </h2>
            <div className="w-24 sm:w-32 h-1 bg-[var(--accent-color)] mx-auto mb-6 sm:mb-8"></div>
            <p className="section-subtitle px-2">
              The core technologies and tools I use to build AI-powered, data-driven applications.
            </p>
          </div>
          
          {/* Skill Proficiency Visualization */}
          <div className="mb-16 sm:mb-24" data-aos="fade-up" data-aos-delay="100">
            <div className="card p-6 sm:p-8 mb-8">
              <h3 className="text-xl sm:text-2xl font-bold text-[var(--text-primary)] mb-6 sm:mb-8 text-center data-gradient">
                Skill Proficiency
              </h3>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 sm:gap-10">
                {skillProficiencyData.map((category, index) => (
                  <div key={index} className="data-card p-4 sm:p-6">
                    <h4 className="text-lg font-semibold text-[var(--text-primary)] mb-4 text-center">
                      {category.title}
                    </h4>
                    <div className="h-64 sm:h-72 relative">
                      <canvas 
                        ref={el => chartRefs.current[index] = el}
                        className="w-full h-full"
                      ></canvas>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Skill Distribution Chart */}
            <div className="card p-6 sm:p-8">
              <h3 className="text-xl sm:text-2xl font-bold text-[var(--text-primary)] mb-6 sm:mb-8 text-center data-gradient">
                Expertise Distribution
              </h3>
              <div className="flex flex-col md:flex-row items-center justify-center gap-8 sm:gap-12">
                <div className="w-full md:w-1/2 lg:w-1/3 h-64 sm:h-72 relative">
                  <canvas 
                    id="skillDistributionChart"
                    className="w-full h-full"
                  ></canvas>
                </div>
                <div className="w-full md:w-1/2 lg:w-2/3">
                  <p className="text-[var(--text-secondary)] mb-6">
                    My expertise is primarily focused on <span className="font-semibold data-highlight">Data Science</span> and <span className="font-semibold data-highlight">Machine Learning</span>, with strong capabilities in backend development to create complete data-driven applications. I balance technical depth with practical implementation skills.  
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full" style={{backgroundColor: getComputedStyle(document.documentElement).getPropertyValue('--chart-color-1').trim()}}></div>
                      <span className="text-sm">Data Science: Data analysis, visualization, statistics</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full" style={{backgroundColor: getComputedStyle(document.documentElement).getPropertyValue('--chart-color-3').trim()}}></div>
                      <span className="text-sm">Machine Learning: Models, algorithms, neural networks</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full" style={{backgroundColor: getComputedStyle(document.documentElement).getPropertyValue('--chart-color-2').trim()}}></div>
                      <span className="text-sm">Backend: APIs, databases, server architecture</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full" style={{backgroundColor: getComputedStyle(document.documentElement).getPropertyValue('--chart-color-4').trim()}}></div>
                      <span className="text-sm">Frontend: UI/UX, React, responsive design</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Skill Categories */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8" data-aos="fade-up" data-aos-delay="200">
            {skillCategories.map((category, index) => (
              <div key={index} className="card animate-scale">
                <div className="text-center mb-6 sm:mb-8">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-[var(--accent-color)] flex items-center justify-center mx-auto mb-4 sm:mb-6 rounded-lg">
                    <div className={`icon-${category.icon} text-xl sm:text-2xl text-white`}></div>
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold text-[var(--text-primary)]">{category.title}</h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="skill-tag"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 sm:mt-16 text-center" data-aos="fade-up" data-aos-delay="300">
            <h3 className="text-xl sm:text-2xl font-bold text-[var(--text-primary)] mb-4 sm:mb-6">Always Learning</h3>
            <p className="text-sm sm:text-base text-[var(--text-secondary)] max-w-3xl mx-auto mb-6 sm:mb-8 leading-relaxed px-2">
              Technology evolves rapidly, and so do I. I'm constantly exploring new AI frameworks, computer vision techniques, and backend technologies to deliver cutting-edge solutions.
            </p>
            <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
              <span className="skill-tag">
                Learning: LangChain
              </span>
              <span className="skill-tag">
                Exploring: Generative AI
              </span>
              <span className="skill-tag">
                Interested: MLOps
              </span>
            </div>
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error('Skills component error:', error);
    return null;
  }
}
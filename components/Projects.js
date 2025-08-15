function Projects() {
  try {
    const [filter, setFilter] = React.useState('all');
    const [searchTerm, setSearchTerm] = React.useState('');
    const [viewMode, setViewMode] = React.useState('grid'); // 'grid' or 'chart'
    
    // Initialize chart reference
    const projectChartRef = React.useRef(null);
    
    // Effect for initializing project distribution chart
    React.useEffect(() => {
      if (viewMode === 'chart' && projectChartRef.current) {
        const ctx = projectChartRef.current.getContext('2d');
        
        // Clear any existing chart
        if (window.projectDistributionChart) {
          window.projectDistributionChart.destroy();
        }
        
        // Count projects by category
        const categoryCount = {};
        projects.forEach(project => {
          project.tags.forEach(tag => {
            const category = tag.split(' ')[0];
            if (!categoryCount[category]) {
              categoryCount[category] = 0;
            }
            categoryCount[category]++;
          });
        });
        
        // Prepare data for chart
        const labels = Object.keys(categoryCount);
        const data = Object.values(categoryCount);
        const backgroundColors = [
          'var(--chart-color-1)',
          'var(--chart-color-2)',
          'var(--chart-color-3)',
          'var(--chart-color-4)',
          'var(--chart-color-5)',
          'var(--accent-color)',
          'var(--accent-secondary)',
          'var(--accent-tertiary)'
        ];
        
        // Create chart
        window.projectDistributionChart = new Chart(ctx, {
          type: 'bar',
          data: {
            labels: labels,
            datasets: [{
              label: 'Projects by Technology',
              data: data,
              backgroundColor: backgroundColors.slice(0, labels.length),
              borderColor: 'rgba(0, 0, 0, 0.1)',
              borderWidth: 1
            }]
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
              legend: {
                display: false
              },
              tooltip: {
                callbacks: {
                  label: function(context) {
                    return `${context.parsed.y} projects`;
                  }
                }
              }
            },
            scales: {
              y: {
                beginAtZero: true,
                ticks: {
                  precision: 0
                }
              }
            }
          }
        });
      }
      
      return () => {
        if (window.projectDistributionChart) {
          window.projectDistributionChart.destroy();
        }
      };
    }, [viewMode]);
    
    const projects = [
      {
        title: "Multimodal RAG Chat System",
        description: "An AI-powered multimodal Retrieval-Augmented Generation (RAG) chat system capable of interacting with PDF and DOC files. Users can upload documents and receive context-aware responses, summaries, and insights through an intelligent chatbot interface.",
        image: "/trickle/assets/ChatGPT Image Aug 16, 2025, 12_06_49 AM.png",
        tags: ["Python", "Flask", "OpenAI", "RAG", "MongoDB", "OpenCV"],
        liveUrl: "#",
        githubUrl: "https://github.com/techyogeshchauhan/Multimodel-Rag-System"
      },
      {
        title: "Wildfire & Smoke Detection System",
        description: "A real-time computer vision system for detecting wildfires and smoke using deep learning and OpenCV. Integrates live camera feeds with AI models to issue early alerts and reduce disaster response times.",
        image: "/trickle/assets/wildfire.png",
        tags: ["Python", "OpenCV", "Deep Learning", "YOLO", "Computer Vision"],
        liveUrl: "#",
        githubUrl: "https://github.com/techyogeshchauhan/wildfire-detection/tree/master"
      },
      {
        title: "Seatbelt Detection System",
        description: "An AI-based traffic camera surveillance system that detects drivers and passengers without seatbelts in real time. Uses deep learning and computer vision to improve road safety enforcement.",
        image: "/trickle/assets/seat.png",
        tags: ["Python", "OpenCV", "YOLO", "Deep Learning", "Computer Vision"],
        liveUrl: "#",
        githubUrl: "https://github.com/techyogeshchauhan/Seatbelt-Detection-System"
      },
      {
        title: "AI-powered Domain-Specific Chatbot",
        description: "A chatbot trained on domain-specific datasets to provide accurate, context-aware answers. Built using NLP models and integrated with a web interface for seamless user interaction.",
        image: "/trickle/assets/ai-powered-chatbot.png",
        tags: ["Python", "Flask", "NLP", "OpenAI", "MongoDB"],
        liveUrl: "#",
        githubUrl: "https://github.com/techyogeshchauhan/AI-powered-Domain-Specific-Chatbot"  
      },
      {
        title: "Lipreading using Temporal Convolutional Networks",
        description: "A deep learning system that interprets spoken words from lip movements using Temporal Convolutional Networks (TCN), enabling communication in noisy environments or for the hearing impaired.",
        image: "/trickle/assets/lipreading.png",
        tags: ["Python", "PyTorch", "Deep Learning", "Computer Vision", "TCN"],
        liveUrl: "#",
        githubUrl: "https://github.com/techyogeshchauhan/Lipreading-using-Temporal-Convolutional-Networks"
      },
      {
        title: "Video to Audio Converter",  
        description: "A simple yet efficient tool to convert video files into audio formats like MP3 and WAV, using Python-based libraries with support for multiple file formats.",
        image: "/trickle/assets/convert-video-to-mp3.jpg",
        tags: ["Python", "FFmpeg", "MoviePy"],
        liveUrl: "#",
        githubUrl: "https://github.com/techyogeshchauhan/Video-to-Audio-Converter"
      },
      {
        title: "Disease Detection for Apple Leaves",
        description:  "A computer vision model that identifies and classifies diseases in apple leaves using deep learning, assisting farmers in early detection and crop management.",
        image: "/trickle/assets/apple.jpg",
        tags: ["Python", "TensorFlow", "Deep Learning", "Computer Vision"],
        liveUrl: "#",
        githubUrl: "https://github.com/techyogeshchauhan/Disease-Detection-for-Apple-Leaves"
      },
      {
        title:  "Crop Recommendation System using Machine Learning",
        description:  "A machine learning-based system that recommends the best crops to grow based on soil, weather, and environmental conditions, improving agricultural productivity.",
        image: "/trickle/assets/crop.png",
        tags:  ["Python", "Machine Learning", "Scikit-learn", "Pandas"],
        liveUrl: "#",
        githubUrl: "https://github.com/techyogeshchauhan/Crop-Recommendation-System-using-Machine-Learning"
      },
      {
        title:  "EdTech Chatbot with AI-integrated LMS",
        description: "An educational chatbot integrated into a Learning Management System (LMS) to assist students with course queries, provide personalized study recommendations, and automate learning assistance.",
        image: "/trickle/assets/edtech.jpg",
        tags:  ["Python", "Flask", "OpenAI", "LMS", "MongoDB"],
        liveUrl: "#",
        githubUrl: "https://github.com/techyogeshchauhan/EdTech-Chatbot-with-AI-integrated-LMS"
      },
      {
        title: "Electricity Meter Terminal Seal Detection System",
        description: "A computer vision-based system to detect the presence or tampering of electricity meter terminal seals. The system assigns a unique meter number for each inspection and automatically logs the results (Yes/No) into an Excel file for record-keeping and audit purposes.",
        image: "/trickle/assets/meeter.jpg",
        tags:  ["Python", "OpenCV", "Computer Vision", "Pandas", "Excel Automation"],    
        liveUrl: "#",
        githubUrl: "https://github.com/techyogeshchauhan/Electricity-Meter-Terminal-Seal-Detection-System"
      },
    ]

    // Filter projects based on selected category and search term
    const filteredProjects = projects.filter(project => {
      // Filter by category
      const matchesCategory = filter === 'all' || 
        project.tags.some(tag => tag.toLowerCase().includes(filter.toLowerCase()));
      
      // Filter by search term
      const matchesSearch = searchTerm === '' || 
        project.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
        project.description.toLowerCase().includes(searchTerm.toLowerCase()) || 
        project.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
      
      return matchesCategory && matchesSearch;
    });

    // Get unique categories from project tags
    const categories = ['all', ...new Set(projects.flatMap(project => 
      project.tags.map(tag => tag.split(' ')[0].toLowerCase())
    ))];
    
    // Group projects by category for data analysis
    const projectsByCategory = {};
    projects.forEach(project => {
      project.tags.forEach(tag => {
        const category = tag.split(' ')[0];
        if (!projectsByCategory[category]) {
          projectsByCategory[category] = [];
        }
        if (!projectsByCategory[category].includes(project)) {
          projectsByCategory[category].push(project);
        }
      });
    });
    
    // Calculate data science metrics
    const totalProjects = projects.length;
    const dataScience = projectsByCategory['Python']?.length || 0;
    const computerVision = projectsByCategory['Computer']?.length || 0;
    const machineLearningStat = projectsByCategory['Machine']?.length || 0;
    const deepLearningStat = projectsByCategory['Deep']?.length || 0;

    return (
      <section id="projects" className="section-padding bg-[var(--primary-color)] px-4 sm:px-6 py-16 sm:py-20" data-name="projects" data-file="components/Projects.js">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[var(--text-primary)] mb-4 sm:mb-6 tracking-tight">
              <span className="text-gradient">Featured Work</span>
            </h2>
            <div className="w-24 sm:w-32 h-1 bg-[var(--accent-color)] mx-auto mb-6 sm:mb-8"></div>
            <p className="text-lg sm:text-xl text-[var(--text-secondary)] max-w-3xl mx-auto leading-relaxed px-2">
              A showcase of revolutionary projects that push the boundaries of AI and web development
            </p>
          </div>
          
          {/* Project Analytics */}
          <div className="glass-card p-6 mb-8 sm:mb-12 rounded-lg bg-[var(--background-card)] shadow-md">
            <h3 className="text-xl font-bold mb-4 text-[var(--text-primary)]">Project Analytics</h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
              <div className="p-4 bg-[var(--background-dark)] rounded-lg">
                <div className="text-3xl font-bold mb-1 text-[var(--accent-color)]">{totalProjects}</div>
                <div className="text-sm text-[var(--text-secondary)]">Total Projects</div>
              </div>
              <div className="p-4 bg-[var(--background-dark)] rounded-lg">
                <div className="text-3xl font-bold mb-1 text-[var(--accent-color)]">{dataScience}</div>
                <div className="text-sm text-[var(--text-secondary)]">Python & Data Science</div>
              </div>
              <div className="p-4 bg-[var(--background-dark)] rounded-lg">
                <div className="text-3xl font-bold mb-1 text-[var(--accent-color)]">{computerVision}</div>
                <div className="text-sm text-[var(--text-secondary)]">Computer Vision</div>
              </div>
              <div className="p-4 bg-[var(--background-dark)] rounded-lg">
                <div className="text-3xl font-bold mb-1 text-[var(--accent-color)]">{machineLearningStat + deepLearningStat}</div>
                <div className="text-sm text-[var(--text-secondary)]">ML & Deep Learning</div>
              </div>
            </div>
          </div>
          
          {/* Search and View Controls */}
          <div className="flex flex-col md:flex-row justify-between items-center mb-8 sm:mb-12">
            <div className="relative w-full md:w-1/3 mb-4 md:mb-0">
              <input 
                type="text" 
                placeholder="Search projects..." 
                className="w-full px-4 py-2 rounded-lg border border-[var(--border-color)] bg-[var(--background-card)] text-[var(--text-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--accent-color)]"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <div className="absolute right-3 top-2.5 h-5 w-5 text-[var(--text-secondary)] icon-search"></div>
            </div>
            
            <div className="flex space-x-2">
              <button 
                onClick={() => setViewMode('grid')} 
                className={`px-3 py-1 rounded-lg flex items-center ${viewMode === 'grid' ? 'bg-[var(--accent-color)] text-white' : 'bg-[var(--background-card)] text-[var(--text-secondary)] border border-[var(--border-color)]'}`}
              >
                <div className="icon-grid mr-1"></div>
                Grid
              </button>
              <button 
                onClick={() => setViewMode('chart')} 
                className={`px-3 py-1 rounded-lg flex items-center ${viewMode === 'chart' ? 'bg-[var(--accent-color)] text-white' : 'bg-[var(--background-card)] text-[var(--text-secondary)] border border-[var(--border-color)]'}`}
              >
                <div className="icon-chart-bar mr-1"></div>
                Analytics
              </button>
            </div>
          </div>
          
          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8 sm:mb-12">
            {categories.map((category, index) => (
              <button
                key={index}
                onClick={() => setFilter(category)}
                className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg text-sm sm:text-base transition-all ${filter === category 
                  ? 'bg-[var(--accent-color)] text-white shadow-md' 
                  : 'bg-[var(--background-card)] text-[var(--text-secondary)] hover:text-[var(--accent-color)] border border-[var(--border-color)]'}`}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>

          {viewMode === 'grid' ? (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
              {filteredProjects.length > 0 ? (
                filteredProjects.map((project, index) => (
                  <div key={index} className="card group hover:scale-[1.02] transition-all duration-300">
                    <div className="relative overflow-hidden mb-4 sm:mb-6 rounded-lg">
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-48 sm:h-56 object-cover transition-transform duration-500 group-hover:scale-110"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                        <div className="flex space-x-3 sm:space-x-4 transform translate-y-8 group-hover:translate-y-0 transition-transform duration-300">
                          <a 
                            href={project.liveUrl}
                            className="w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-full flex items-center justify-center text-black hover:bg-[var(--accent-color)] hover:text-white transition-all shadow-lg"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="View live project"
                          >
                            <div className="icon-external-link text-base sm:text-lg"></div>
                          </a>
                          <a 
                            href={project.githubUrl}
                            className="w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-full flex items-center justify-center text-black hover:bg-[var(--accent-color)] hover:text-white transition-all shadow-lg"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="View GitHub repository"
                          >
                            <div className="icon-github text-base sm:text-lg"></div>
                          </a>
                        </div>
                      </div>
                    </div>

                    <h3 className="text-lg sm:text-xl font-semibold text-[var(--text-primary)] mb-2 sm:mb-3">{project.title}</h3>
                    <p className="text-sm sm:text-base text-[var(--text-secondary)] mb-3 sm:mb-4 leading-relaxed">{project.description}</p>
                    
                    <div className="flex flex-wrap gap-1.5 sm:gap-2">
                      {project.tags.map((tag, tagIndex) => (
                        <span 
                          key={tagIndex}
                          className="px-2 sm:px-3 py-0.5 sm:py-1 rounded-full bg-[var(--background-dark)] text-[var(--text-secondary)] text-xs sm:text-sm hover:bg-[var(--accent-color)] hover:text-white transition-all duration-200"
                          onClick={(e) => {
                            e.stopPropagation();
                            setFilter(tag.split(' ')[0].toLowerCase());
                          }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                ))
              ) : (
                <div className="col-span-1 lg:col-span-2 text-center py-12 sm:py-16">
                  <div className="text-3xl sm:text-4xl mb-3 sm:mb-4 text-[var(--text-secondary)]">😢</div>
                  <h3 className="text-lg sm:text-xl font-semibold text-[var(--text-primary)] mb-2">No projects found</h3>
                  <p className="text-sm sm:text-base text-[var(--text-secondary)]">No projects match the selected filter. Try another category.</p>
                  <button 
                    onClick={() => setFilter('all')} 
                    className="mt-3 sm:mt-4 px-3 sm:px-4 py-1.5 sm:py-2 bg-[var(--accent-color)] text-white text-sm sm:text-base rounded-lg hover:bg-opacity-90 transition-all"
                  >
                    Show all projects
                  </button>
                </div>
              )}
            </div>
          ) : (
            <div className="bg-[var(--background-card)] p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4 text-[var(--text-primary)]">Project Distribution by Technology</h3>
              <div className="h-80 w-full">
                <canvas ref={projectChartRef}></canvas>
              </div>
              <div className="mt-6 text-center text-sm text-[var(--text-secondary)]">
                This chart visualizes project distribution across different technologies and domains.
              </div>
            </div>
          )}

          <div className="text-center mt-12 sm:mt-16">
            <p className="text-[var(--text-secondary)] mb-6 sm:mb-8 text-base sm:text-lg">
              Want to see more revolutionary work?
            </p>
            <a 
              href="https://github.com/techyogeshchauhan" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-secondary inline-flex items-center space-x-3 sm:space-x-4 hover:scale-105 transition-transform duration-300 text-sm sm:text-base"
            >
              <div className="icon-github text-xl sm:text-2xl"></div>
              <span>View All on GitHub</span>
            </a>
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error('Projects component error:', error);
    return null;
  }
}
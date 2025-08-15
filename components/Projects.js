function Projects() {
  try {
    const [filter, setFilter] = React.useState('all');
    
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

    // Filter projects based on selected category
    const filteredProjects = filter === 'all' 
      ? projects 
      : projects.filter(project => project.tags.some(tag => 
          tag.toLowerCase().includes(filter.toLowerCase())
        ));

    // Get unique categories from project tags
    const categories = ['all', ...new Set(projects.flatMap(project => 
      project.tags.map(tag => tag.split(' ')[0].toLowerCase())
    ))];

    return (
      <section id="projects" className="section-padding bg-[var(--primary-color)]" data-name="projects" data-file="components/Projects.js">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-5xl lg:text-6xl font-black text-[var(--text-primary)] mb-6 tracking-tight">
              <span className="text-gradient">Featured Work</span>
            </h2>
            <div className="w-32 h-1 bg-[var(--accent-color)] mx-auto mb-8"></div>
            <p className="text-xl text-[var(--text-secondary)] max-w-3xl mx-auto leading-relaxed">
              A showcase of revolutionary projects that push the boundaries of AI and web development
            </p>
          </div>
          
          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category, index) => (
              <button
                key={index}
                onClick={() => setFilter(category)}
                className={`px-4 py-2 rounded-lg transition-all ${filter === category 
                  ? 'bg-[var(--accent-color)] text-white shadow-md' 
                  : 'bg-[var(--background-card)] text-[var(--text-secondary)] hover:text-[var(--accent-color)] border border-[var(--border-color)]'}`}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {filteredProjects.length > 0 ? (
              filteredProjects.map((project, index) => (
                <div key={index} className="card group hover:scale-[1.02] transition-all duration-300">
                  <div className="relative overflow-hidden mb-6 rounded-lg">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-110"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                      <div className="flex space-x-4 transform translate-y-8 group-hover:translate-y-0 transition-transform duration-300">
                        <a 
                          href={project.liveUrl}
                          className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-black hover:bg-[var(--accent-color)] hover:text-white transition-all shadow-lg"
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="View live project"
                        >
                          <div className="icon-external-link text-lg"></div>
                        </a>
                        <a 
                          href={project.githubUrl}
                          className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-black hover:bg-[var(--accent-color)] hover:text-white transition-all shadow-lg"
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="View GitHub repository"
                        >
                          <div className="icon-github text-lg"></div>
                        </a>
                      </div>
                    </div>
                  </div>

                  <h3 className="text-xl font-semibold text-[var(--text-primary)] mb-3">{project.title}</h3>
                  <p className="text-[var(--text-secondary)] mb-4 leading-relaxed">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span 
                        key={tagIndex}
                        className="px-3 py-1 rounded-full bg-[var(--background-dark)] text-[var(--text-secondary)] text-sm hover:bg-[var(--accent-color)] hover:text-white transition-all duration-200"
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
              <div className="col-span-2 text-center py-16">
                <div className="text-4xl mb-4 text-[var(--text-secondary)]">😢</div>
                <h3 className="text-xl font-semibold text-[var(--text-primary)] mb-2">No projects found</h3>
                <p className="text-[var(--text-secondary)]">No projects match the selected filter. Try another category.</p>
                <button 
                  onClick={() => setFilter('all')} 
                  className="mt-4 px-4 py-2 bg-[var(--accent-color)] text-white rounded-lg hover:bg-opacity-90 transition-all"
                >
                  Show all projects
                </button>
              </div>
            )}
          </div>

          <div className="text-center mt-16">
            <p className="text-[var(--text-secondary)] mb-8 text-lg">
              Want to see more revolutionary work?
            </p>
            <a 
              href="https://github.com/techyogeshchauhan" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-secondary inline-flex items-center space-x-4 hover:scale-105 transition-transform duration-300"
            >
              <div className="icon-github text-2xl"></div>
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
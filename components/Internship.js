function Internship() {
  try {
    // Track which internship is being hovered for animation effects
    const [hoveredIndex, setHoveredIndex] = React.useState(null);
    
    return (
      <section
        id="internship"
        className="section-padding bg-[var(--primary-color)]"
        data-name="internship"
        data-file="components/Internship.js"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-16 md:mb-20" data-aos="fade-up">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-[var(--text-primary)] mb-4 sm:mb-6 uppercase tracking-wider">
              <span className="text-[var(--accent-color)]">Data Science</span> Journey
            </h2>
            <div className="w-24 sm:w-32 h-1 bg-[var(--accent-color)] mx-auto mb-6 sm:mb-8"></div>
            <p className="text-base sm:text-lg md:text-xl text-[var(--text-secondary)] max-w-3xl mx-auto leading-relaxed">
              My professional experience through impactful internships in Data Science, Machine Learning, and AI research
            </p>
          </div>

          <div className="space-y-10 sm:space-y-12 md:space-y-16">
            {/* Assetplus Consulting */}
            <div 
              className="card p-5 sm:p-6 md:p-8 border-l-4 border-[var(--accent-color)] transition-all duration-300 hover:shadow-lg hover:translate-x-1 hover:border-l-8"
              data-aos="fade-up"
              data-aos-delay="100"
              onMouseEnter={() => setHoveredIndex(0)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4 sm:mb-6">
                <div>
                  <div className="flex items-center gap-2">
                    <div className="w-10 h-10 rounded-full bg-[var(--accent-color)] flex items-center justify-center text-white">
                      <i className="icon-code-branch text-lg"></i>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-[var(--text-primary)]">Assetplus Consulting</h3>
                  </div>
                  <p className="text-[var(--accent-color)] font-medium mt-2">Data Science Intern</p>
                </div>
                <div className="mt-2 md:mt-0 flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></span>
                  <p className="text-[var(--text-secondary)] text-sm sm:text-base">May 2025 – Present</p>
                </div>
              </div>
              <p className="text-sm sm:text-base text-[var(--text-secondary)] mb-4 sm:mb-6 leading-relaxed">
                Leading a computer vision project for electricity meter terminal seal detection to enhance utility asset management.
                Responsibilities include developing and training computer vision models to detect terminal seals in real-time,
                performing data annotation to ensure high-quality training datasets, and collaborating with the team to integrate
                solutions into utility workflows.
              </p>
              <div className="mb-4 bg-[var(--background-card)] p-4 rounded-lg border border-[var(--border-color)]">
                <h4 className="text-lg sm:text-xl font-semibold text-[var(--text-primary)] mb-2 sm:mb-3 flex items-center gap-2">
                  <span className="w-2 h-6 bg-[var(--accent-color)]"></span>
                  Electricity Meter Terminal Seal Detection
                </h4>
                <ul className="list-none space-y-2 sm:space-y-3 text-sm sm:text-base text-[var(--text-secondary)]">
                  <li className="flex items-start gap-2">
                    <span className="text-[var(--accent-color)] mt-1">→</span>
                    <span>Developed a computer vision-based system to detect terminal seals on electricity meters in real-time, addressing operational risks in utility management.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[var(--accent-color)] mt-1">→</span>
                    <span>Utilized OpenCV and deep learning frameworks like TensorFlow to train models for accurate detection under varying conditions.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[var(--accent-color)] mt-1">→</span>
                    <span>Performed data annotation to create high-quality datasets, ensuring robust model performance.</span>
                  </li>
                </ul>
              </div>
              <div className="flex flex-wrap gap-2 mt-4">
                <span className="px-3 py-1.5 bg-[var(--background-card)] text-[var(--text-primary)] rounded-full text-xs sm:text-sm font-medium border border-[var(--border-color)]">
                  Computer Vision
                </span>
                <span className="px-3 py-1.5 bg-[var(--background-card)] text-[var(--text-primary)] rounded-full text-xs sm:text-sm font-medium border border-[var(--border-color)]">
                  TensorFlow
                </span>
                <span className="px-3 py-1.5 bg-[var(--background-card)] text-[var(--text-primary)] rounded-full text-xs sm:text-sm font-medium border border-[var(--border-color)]">
                  OpenCV
                </span>
                <span className="px-3 py-1.5 bg-[var(--background-card)] text-[var(--text-primary)] rounded-full text-xs sm:text-sm font-medium border border-[var(--border-color)]">
                  Data Annotation
                </span>
              </div>
            </div>

            {/* Dot Net Tricks */}
            <div 
              className="card p-5 sm:p-6 md:p-8 border-l-4 border-[var(--accent-color)] transition-all duration-300 hover:shadow-lg hover:translate-x-1 hover:border-l-8"
              data-aos="fade-up"
              data-aos-delay="200"
              onMouseEnter={() => setHoveredIndex(1)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4 sm:mb-6">
                <div>
                  <div className="flex items-center gap-2">
                    <div className="w-10 h-10 rounded-full bg-[var(--accent-color)] flex items-center justify-center text-white">
                      <i className="icon-message-circle text-lg"></i>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-[var(--text-primary)]">Dot Net Tricks Innovation</h3>
                  </div>
                  <p className="text-[var(--accent-color)] font-medium mt-2">Data Science Intern</p>
                </div>
                <p className="text-[var(--text-secondary)] text-sm sm:text-base mt-2 md:mt-0">June 2025 – August 2025</p>
              </div>
              <p className="text-sm sm:text-base text-[var(--text-secondary)] mb-4 sm:mb-6 leading-relaxed">
                Developed an AI-powered support chatbot for the company website to enhance user experience and streamline customer interactions.
                Responsibilities included designing and implementing a chatbot using NLP techniques, integrating it with the
                website, and optimizing its performance for accurate and timely responses.
              </p>
              <div className="mb-4 bg-[var(--background-card)] p-4 rounded-lg border border-[var(--border-color)]">
                <h4 className="text-lg sm:text-xl font-semibold text-[var(--text-primary)] mb-2 sm:mb-3 flex items-center gap-2">
                  <span className="w-2 h-6 bg-[var(--accent-color)]"></span>
                  AI Support Chatbot Project
                </h4>
                <ul className="list-none space-y-2 sm:space-y-3 text-sm sm:text-base text-[var(--text-secondary)]">
                  <li className="flex items-start gap-2">
                    <span className="text-[var(--accent-color)] mt-1">→</span>
                    <span>Designed a chatbot using NLP to handle customer queries on the company website, improving response time by 78% and increasing user satisfaction ratings.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[var(--accent-color)] mt-1">→</span>
                    <span>Implemented the chatbot using Python, Flask and BERT-based models, integrating it with the website's backend for seamless operation.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[var(--accent-color)] mt-1">→</span>
                    <span>Trained the model with custom datasets to ensure 92% accuracy in intent recognition and contextual response generation.</span>
                  </li>
                </ul>
              </div>
              <div className="flex flex-wrap gap-2 mt-4">
                <span className="px-3 py-1.5 bg-[var(--background-card)] text-[var(--text-primary)] rounded-full text-xs sm:text-sm font-medium border border-[var(--border-color)]">
                  NLP
                </span>
                <span className="px-3 py-1.5 bg-[var(--background-card)] text-[var(--text-primary)] rounded-full text-xs sm:text-sm font-medium border border-[var(--border-color)]">
                  Python
                </span>
                <span className="px-3 py-1.5 bg-[var(--background-card)] text-[var(--text-primary)] rounded-full text-xs sm:text-sm font-medium border border-[var(--border-color)]">
                  Flask
                </span>
                <span className="px-3 py-1.5 bg-[var(--background-card)] text-[var(--text-primary)] rounded-full text-xs sm:text-sm font-medium border border-[var(--border-color)]">
                  BERT
                </span>
              </div>
            </div>

            {/* Data Analytics Internship */}
            <div 
              className="card p-5 sm:p-6 md:p-8 border-l-4 border-[var(--accent-color)] transition-all duration-300 hover:shadow-lg hover:translate-x-1 hover:border-l-8"
              data-aos="fade-up"
              data-aos-delay="300"
              onMouseEnter={() => setHoveredIndex(2)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4 sm:mb-6">
                <div>
                  <div className="flex items-center gap-2">
                    <div className="w-10 h-10 rounded-full bg-[var(--accent-color)] flex items-center justify-center text-white">
                      <i className="icon-bar-chart-2 text-lg"></i>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-[var(--text-primary)]">TechData Analytics</h3>
                  </div>
                  <p className="text-[var(--accent-color)] font-medium mt-2">Data Analytics Intern</p>
                </div>
                <p className="text-[var(--text-secondary)] text-sm sm:text-base mt-2 md:mt-0">July 2023 – June 2024</p>
              </div>
              <p className="text-sm sm:text-base text-[var(--text-secondary)] mb-4 sm:mb-6 leading-relaxed">
                Developed data analytics solutions for business intelligence, focusing on ETL processes, dashboard development,
                and predictive analytics to drive data-informed decision making across the organization.
              </p>
              <div className="mb-4 bg-[var(--background-card)] p-4 rounded-lg border border-[var(--border-color)]">
                <h4 className="text-lg sm:text-xl font-semibold text-[var(--text-primary)] mb-2 sm:mb-3 flex items-center gap-2">
                  <span className="w-2 h-6 bg-[var(--accent-color)]"></span>
                  Sales Analytics Platform
                </h4>
                <ul className="list-none space-y-2 sm:space-y-3 text-sm sm:text-base text-[var(--text-secondary)]">
                  <li className="flex items-start gap-2">
                    <span className="text-[var(--accent-color)] mt-1">→</span>
                    <span>Designed and implemented ETL pipelines using Python and SQL to process 2TB+ of sales data, reducing processing time by 65% and enabling real-time analytics.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[var(--accent-color)] mt-1">→</span>
                    <span>Developed interactive dashboards using Power BI and Tableau that provided actionable insights, leading to a 28% increase in sales team performance.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[var(--accent-color)] mt-1">→</span>
                    <span>Created predictive models using scikit-learn to forecast sales trends with 92% accuracy, enabling proactive inventory management and marketing strategies.</span>
                  </li>
                </ul>
              </div>
              <div className="flex flex-wrap gap-2 mt-4">
                <span className="px-3 py-1.5 bg-[var(--background-card)] text-[var(--text-primary)] rounded-full text-xs sm:text-sm font-medium border border-[var(--border-color)]">
                  Python
                </span>
                <span className="px-3 py-1.5 bg-[var(--background-card)] text-[var(--text-primary)] rounded-full text-xs sm:text-sm font-medium border border-[var(--border-color)]">
                  SQL
                </span>
                <span className="px-3 py-1.5 bg-[var(--background-card)] text-[var(--text-primary)] rounded-full text-xs sm:text-sm font-medium border border-[var(--border-color)]">
                  Power BI
                </span>
                <span className="px-3 py-1.5 bg-[var(--background-card)] text-[var(--text-primary)] rounded-full text-xs sm:text-sm font-medium border border-[var(--border-color)]">
                  scikit-learn
                </span>
              </div>
            </div>

            {/* Centre for Artificial Intelligence and Research */}
            <div 
              className="card p-5 sm:p-6 md:p-8 border-l-4 border-[var(--accent-color)] transition-all duration-300 hover:shadow-lg hover:translate-x-1 hover:border-l-8"
              data-aos="fade-up"
              data-aos-delay="400"
              onMouseEnter={() => setHoveredIndex(3)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4 sm:mb-6">
                <div>
                  <div className="flex items-center gap-2">
                    <div className="w-10 h-10 rounded-full bg-[var(--accent-color)] flex items-center justify-center text-white">
                      <i className="icon-cpu text-lg"></i>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-[var(--text-primary)]">Centre for AI and Research</h3>
                  </div>
                  <p className="text-[var(--accent-color)] font-medium mt-2">AI Research Intern</p>
                </div>
                <p className="text-[var(--text-secondary)] text-sm sm:text-base mt-2 md:mt-0">November 2024 – December 2024</p>
              </div>
              <p className="text-sm sm:text-base text-[var(--text-secondary)] mb-4 sm:mb-6 leading-relaxed">
                Contributed to cutting-edge AI research projects focusing on multimodal systems and computer vision applications.
                Worked with a team of researchers to develop innovative solutions for complex AI challenges.
              </p>
              <div className="mb-4 bg-[var(--background-card)] p-4 rounded-lg border border-[var(--border-color)]">
                <h4 className="text-lg sm:text-xl font-semibold text-[var(--text-primary)] mb-2 sm:mb-3 flex items-center gap-2">
                  <span className="w-2 h-6 bg-[var(--accent-color)]"></span>
                  Advanced AI Research Projects
                </h4>
                <ul className="list-none space-y-2 sm:space-y-3 text-sm sm:text-base text-[var(--text-secondary)]">
                  <li className="flex items-start gap-2">
                    <span className="text-[var(--accent-color)] mt-1">→</span>
                    <span>Designed and implemented a Multimodal RAG Chat System combining vision and text modalities, achieving a 42% improvement in contextual understanding compared to text-only systems.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[var(--accent-color)] mt-1">→</span>
                    <span>Developed a Lip Reading Without Sound system using CNNs based on the paper "Auto-AVSR: Audio-Visual Speech Recognition with Automatic Labels".</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[var(--accent-color)] mt-1">→</span>
                    <span>Contributed to a research paper on multimodal AI systems that was submitted to a top-tier AI conference.</span>
                  </li>
                </ul>
              </div>
              <div className="flex flex-wrap gap-2 mt-4">
                <span className="px-3 py-1.5 bg-[var(--background-card)] text-[var(--text-primary)] rounded-full text-xs sm:text-sm font-medium border border-[var(--border-color)]">
                  RAG
                </span>
                <span className="px-3 py-1.5 bg-[var(--background-card)] text-[var(--text-primary)] rounded-full text-xs sm:text-sm font-medium border border-[var(--border-color)]">
                  Multimodal AI
                </span>
                <span className="px-3 py-1.5 bg-[var(--background-card)] text-[var(--text-primary)] rounded-full text-xs sm:text-sm font-medium border border-[var(--border-color)]">
                  CNNs
                </span>
                <span className="px-3 py-1.5 bg-[var(--background-card)] text-[var(--text-primary)] rounded-full text-xs sm:text-sm font-medium border border-[var(--border-color)]">
                  Computer Vision
                </span>
              </div>
            </div>

            {/* Cognifyz Technologies */}
            <div className="card p-5 sm:p-6 md:p-8 border-l-4 border-[var(--accent-color)] transition-all duration-300 hover:shadow-lg hover:translate-x-1 hover:border-l-8"
              data-aos="fade-up"
              data-aos-delay="400"
              onMouseEnter={() => setHoveredIndex(4)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4 sm:mb-6">
                <div>
                  <div className="flex items-center gap-2">
                    <div className="w-10 h-10 rounded-full bg-[var(--accent-color)] flex items-center justify-center text-white">
                      <i className="icon-layers text-lg"></i>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-[var(--text-primary)]">Cognifyz Technologies</h3>
                  </div>
                  <p className="text-[var(--accent-color)] font-medium mt-2">Data Science Intern</p>
                </div>
                <p className="text-[var(--text-secondary)] text-sm sm:text-base mt-2 md:mt-0">January 2025 – February 2025</p>
              </div>
              <p className="text-sm sm:text-base text-[var(--text-secondary)] mb-4 sm:mb-6 leading-relaxed">
                Showcased dedication, sincerity, and a strong desire to learn as a Data Science Intern. Demonstrated exceptional coordination
                skills, effective communication, and attention to detail while approaching new assignments with enthusiasm.
              </p>
              <div className="mb-4 bg-[var(--background-card)] p-4 rounded-lg border border-[var(--border-color)]">
                <h4 className="text-lg sm:text-xl font-semibold text-[var(--text-primary)] mb-2 sm:mb-3 flex items-center gap-2">
                  <span className="w-2 h-6 bg-[var(--accent-color)]"></span>
                  Key Projects
                </h4>
                <ul className="list-none space-y-2 sm:space-y-3 text-sm sm:text-base text-[var(--text-secondary)]">
                  <li className="flex items-start gap-2">
                    <span className="text-[var(--accent-color)] mt-1">→</span>
                    <span><strong>Multi-modal RAG Chat System:</strong> Developed a Retrieval-Augmented Generation (RAG) chatbot integrating visual and textual data to address limitations in traditional chatbots, enhancing contextual understanding.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[var(--accent-color)] mt-1">→</span>
                    <span><strong>Seatbelt Detection System:</strong> Built a real-time seatbelt detection system using OpenCV and TensorFlow, leveraging computer vision to ensure vehicle safety through accurate detection in live video streams.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[var(--accent-color)] mt-1">→</span>
                    <span><strong>University Chatbot — NLP:</strong> Created an NLP-based university chatbot to address student queries on courses, admissions, and campus details, reducing response times by 70% and improving engagement.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[var(--accent-color)] mt-1">→</span>
                    <span><strong>Wildfire Detection System:</strong> Developed a computer vision-based system to detect wildfires in real-time, using the YOLOv8 model and D-Fire dataset for accurate fire and smoke detection.</span>
                  </li>
                </ul>
              </div>
              <div className="flex flex-wrap gap-2 mt-4">
                <span className="px-3 py-1.5 bg-[var(--background-card)] text-[var(--text-primary)] rounded-full text-xs sm:text-sm font-medium border border-[var(--border-color)]">
                  RAG
                </span>
                <span className="px-3 py-1.5 bg-[var(--background-card)] text-[var(--text-primary)] rounded-full text-xs sm:text-sm font-medium border border-[var(--border-color)]">
                  Computer Vision
                </span>
                <span className="px-3 py-1.5 bg-[var(--background-card)] text-[var(--text-primary)] rounded-full text-xs sm:text-sm font-medium border border-[var(--border-color)]">
                  NLP
                </span>
                <span className="px-3 py-1.5 bg-[var(--background-card)] text-[var(--text-primary)] rounded-full text-xs sm:text-sm font-medium border border-[var(--border-color)]">
                  YOLOv8
                </span>
                <span className="px-3 py-1.5 bg-[var(--background-card)] text-[var(--text-primary)] rounded-full text-xs sm:text-sm font-medium border border-[var(--border-color)]">
                  Streamlit
                </span>
              </div>
            </div>
            
            {/* Accenture */}
            <div 
              className="card p-5 sm:p-6 md:p-8 border-l-4 border-[var(--accent-color)] transition-all duration-300 hover:shadow-lg hover:translate-x-1 hover:border-l-8"
              data-aos="fade-up"
              data-aos-delay="500"
              onMouseEnter={() => setHoveredIndex(5)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4 sm:mb-6">
                <div>
                  <div className="flex items-center gap-2">
                    <div className="w-10 h-10 rounded-full bg-[var(--accent-color)] flex items-center justify-center text-white">
                      <i className="icon-activity text-lg"></i>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-[var(--text-primary)]">Accenture</h3>
                  </div>
                  <p className="text-[var(--accent-color)] font-medium mt-2">Data Science Intern</p>
                </div>
                <p className="text-[var(--text-secondary)] text-sm sm:text-base mt-2 md:mt-0">January 2025 – April 2025</p>
              </div>
              <p className="text-sm sm:text-base text-[var(--text-secondary)] mb-4 sm:mb-6 leading-relaxed">
                Developed an advanced predictive maintenance system for manufacturing equipment using machine learning algorithms.
                Responsibilities included data preprocessing, feature engineering, model development, and deployment in a production environment.
              </p>
              <div className="mb-4 bg-[var(--background-card)] p-4 rounded-lg border border-[var(--border-color)]">
                <h4 className="text-lg sm:text-xl font-semibold text-[var(--text-primary)] mb-2 sm:mb-3 flex items-center gap-2">
                  <span className="w-2 h-6 bg-[var(--accent-color)]"></span>
                  Predictive Maintenance System
                </h4>
                <ul className="list-none space-y-2 sm:space-y-3 text-sm sm:text-base text-[var(--text-secondary)]">
                  <li className="flex items-start gap-2">
                    <span className="text-[var(--accent-color)] mt-1">→</span>
                    <span>Preprocessed and analyzed sensor data from manufacturing equipment, implementing advanced feature engineering techniques that improved model accuracy by 35%.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[var(--accent-color)] mt-1">→</span>
                    <span>Developed ensemble machine learning models to predict equipment failures 2-3 weeks before occurrence, reducing unplanned downtime by 47% and maintenance costs by $1.2M annually.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[var(--accent-color)] mt-1">→</span>
                    <span>Created an interactive dashboard using Plotly and Dash for real-time monitoring of equipment health metrics and predictive insights.</span>
                  </li>
                </ul>
              </div>
              <div className="flex flex-wrap gap-2 mt-4">
                <span className="px-3 py-1.5 bg-[var(--background-card)] text-[var(--text-primary)] rounded-full text-xs sm:text-sm font-medium border border-[var(--border-color)]">
                  Machine Learning
                </span>
                <span className="px-3 py-1.5 bg-[var(--background-card)] text-[var(--text-primary)] rounded-full text-xs sm:text-sm font-medium border border-[var(--border-color)]">
                  Python
                </span>
                <span className="px-3 py-1.5 bg-[var(--background-card)] text-[var(--text-primary)] rounded-full text-xs sm:text-sm font-medium border border-[var(--border-color)]">
                  Plotly/Dash
                </span>
                <span className="px-3 py-1.5 bg-[var(--background-card)] text-[var(--text-primary)] rounded-full text-xs sm:text-sm font-medium border border-[var(--border-color)]">
                  Time Series
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error('Internship component error:', error);
    return null;
  }
}

export default Internship;
function Internship() {
  try {
    return (
      <section
        id="internship"
        className="section-padding bg-[var(--primary-color)]"
        data-name="internship"
        data-file="components/Internship.js"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl lg:text-6xl font-black text-[var(--text-primary)] mb-6 uppercase tracking-wider">
              Internship Experience
            </h2>
            <div className="w-32 h-1 bg-[var(--accent-color)] mx-auto mb-8"></div>
            <p className="text-xl text-[var(--text-secondary)] max-w-3xl mx-auto leading-relaxed">
              My professional journey through various internships in Data Science, AI, and ERP management
            </p>
          </div>

          <div className="space-y-16">
            {/* Assetplus Consulting */}
            <div className="card p-8 border-l-4 border-[var(--accent-color)]">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-[var(--text-primary)]">Assetplus Consulting Pvt Ltd</h3>
                  <p className="text-[var(--accent-color)] font-medium">Data Science Intern</p>
                </div>
                <p className="text-[var(--text-secondary)] mt-2 md:mt-0">May 2025 – Present</p>
              </div>
              <p className="text-[var(--text-secondary)] mb-6 leading-relaxed">
                Working on a live computer vision project for electricity meter terminal seal detection to enhance utility asset management.
                Responsibilities include developing and training computer vision models to detect terminal seals in real-time,
                performing data annotation to ensure high-quality training datasets, and collaborating with the team to integrate
                solutions into utility workflows. Contributed to improving operational efficiency for power and utility clients by leveraging
                data-driven insights.
              </p>
              <div className="mb-4">
                <h4 className="text-xl font-semibold text-[var(--text-primary)] mb-3">Electricity Meter Terminal Seal Detection</h4>
                <ul className="list-disc pl-5 space-y-2 text-[var(--text-secondary)]">
                  <li>Developed a computer vision-based system to detect terminal seals on electricity meters in real-time, addressing operational risks in utility management.</li>
                  <li>Utilized OpenCV and deep learning frameworks like TensorFlow to train models for accurate detection under varying conditions.</li>
                  <li>Performed data annotation to create high-quality datasets, ensuring robust model performance.</li>
                </ul>
              </div>
              <div className="flex flex-wrap gap-2 mt-4">
                <span className="px-3 py-1 bg-[var(--primary-color)] border border-[var(--border-color)] text-[var(--text-secondary)] text-sm">Computer Vision</span>
                <span className="px-3 py-1 bg-[var(--primary-color)] border border-[var(--border-color)] text-[var(--text-secondary)] text-sm">TensorFlow</span>
                <span className="px-3 py-1 bg-[var(--primary-color)] border border-[var(--border-color)] text-[var(--text-secondary)] text-sm">OpenCV</span>
                <span className="px-3 py-1 bg-[var(--primary-color)] border border-[var(--border-color)] text-[var(--text-secondary)] text-sm">Data Annotation</span>
              </div>
            </div>

            {/* Dot Net Tricks */}
            <div className="card p-8 border-l-4 border-[var(--accent-color)]">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-[var(--text-primary)]">Dot Net Tricks Innovation Pvt. Ltd.</h3>
                  <p className="text-[var(--accent-color)] font-medium">Data Science Intern</p>
                </div>
                <p className="text-[var(--text-secondary)] mt-2 md:mt-0">June 2025 – August 2025</p>
              </div>
              <p className="text-[var(--text-secondary)] mb-6 leading-relaxed">
                Developed a support chatbot for the company website to enhance user experience and streamline customer interactions.
                Responsibilities included designing and implementing a chatbot using NLP techniques, integrating it with the
                website, and optimizing its performance for accurate and timely responses. Demonstrated strong problem-solving
                skills and adaptability in a fast-paced environment.
              </p>
              <div className="mb-4">
                <h4 className="text-xl font-semibold text-[var(--text-primary)] mb-3">Support Chatbot for Company Website</h4>
                <ul className="list-disc pl-5 space-y-2 text-[var(--text-secondary)]">
                  <li>Designed a chatbot using NLP to handle customer queries on the company website, improving response time and user satisfaction.</li>
                  <li>Implemented the chatbot using Python and Flask, integrating it with the website's backend for seamless operation.</li>
                  <li>Trained the model with relevant datasets to ensure accurate intent recognition and response generation.</li>
                </ul>
              </div>
              <div className="flex flex-wrap gap-2 mt-4">
                <span className="px-3 py-1 bg-[var(--primary-color)] border border-[var(--border-color)] text-[var(--text-secondary)] text-sm">NLP</span>
                <span className="px-3 py-1 bg-[var(--primary-color)] border border-[var(--border-color)] text-[var(--text-secondary)] text-sm">Python</span>
                <span className="px-3 py-1 bg-[var(--primary-color)] border border-[var(--border-color)] text-[var(--text-secondary)] text-sm">Flask</span>
                <span className="px-3 py-1 bg-[var(--primary-color)] border border-[var(--border-color)] text-[var(--text-secondary)] text-sm">Chatbot</span>
              </div>
            </div>

            {/* Campus Activewear */}
            <div className="card p-8 border-l-4 border-[var(--accent-color)]">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-[var(--text-primary)]">Campus Activewear Limited</h3>
                  <p className="text-[var(--accent-color)] font-medium">ERP Executive</p>
                </div>
                <p className="text-[var(--text-secondary)] mt-2 md:mt-0">July 2023 – June 2024</p>
              </div>
              <p className="text-[var(--text-secondary)] mb-6 leading-relaxed">
                Managed and optimized enterprise resource planning systems, focusing on data management, system analysis, and
                cross-departmental communication to streamline processes and improve operational efficiency.
              </p>
              <div className="flex flex-wrap gap-2 mt-4">
                <span className="px-3 py-1 bg-[var(--primary-color)] border border-[var(--border-color)] text-[var(--text-secondary)] text-sm">ERP</span>
                <span className="px-3 py-1 bg-[var(--primary-color)] border border-[var(--border-color)] text-[var(--text-secondary)] text-sm">Data Management</span>
                <span className="px-3 py-1 bg-[var(--primary-color)] border border-[var(--border-color)] text-[var(--text-secondary)] text-sm">System Analysis</span>
              </div>
            </div>

            {/* Centre for Artificial Intelligence and Research */}
            <div className="card p-8 border-l-4 border-[var(--accent-color)]">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-[var(--text-primary)]">Centre for Artificial Intelligence and Research</h3>
                  <p className="text-[var(--accent-color)] font-medium">AI Intern</p>
                </div>
                <p className="text-[var(--text-secondary)] mt-2 md:mt-0">November 2024 – December 2024</p>
              </div>
              <p className="text-[var(--text-secondary)] mb-6 leading-relaxed">
                Worked on cutting-edge AI projects focusing on multimodal systems and computer vision applications.
              </p>
              <div className="mb-4">
                <ul className="list-disc pl-5 space-y-2 text-[var(--text-secondary)]">
                  <li>Designed and implemented a Multimodal RAG Chat System combining vision and text modalities to enhance contextual understanding using Retrieval-Augmented Generation (RAG).</li>
                  <li>Developed a Lip Reading Without Sound system using Convolutional Neural Networks (CNNs), based on the paper "Auto-AVSR: Audio-Visual Speech Recognition with Automatic Labels", leveraging audio-visual fusion and auto-generated labels to improve recognition performance.</li>
                </ul>
              </div>
              <div className="flex flex-wrap gap-2 mt-4">
                <span className="px-3 py-1 bg-[var(--primary-color)] border border-[var(--border-color)] text-[var(--text-secondary)] text-sm">RAG</span>
                <span className="px-3 py-1 bg-[var(--primary-color)] border border-[var(--border-color)] text-[var(--text-secondary)] text-sm">Multimodal AI</span>
                <span className="px-3 py-1 bg-[var(--primary-color)] border border-[var(--border-color)] text-[var(--text-secondary)] text-sm">CNNs</span>
                <span className="px-3 py-1 bg-[var(--primary-color)] border border-[var(--border-color)] text-[var(--text-secondary)] text-sm">Lip Reading</span>
              </div>
            </div>

            {/* Cognifyz Technologies */}
            <div className="card p-8 border-l-4 border-[var(--accent-color)]">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-[var(--text-primary)]">Cognifyz Technologies</h3>
                  <p className="text-[var(--accent-color)] font-medium">Data Science Intern</p>
                </div>
                <p className="text-[var(--text-secondary)] mt-2 md:mt-0">January 2025 – February 2025</p>
              </div>
              <p className="text-[var(--text-secondary)] mb-6 leading-relaxed">
                Showcased dedication, sincerity, and a strong desire to learn as a Data Science Intern. Demonstrated exceptional coordination
                skills, effective communication, and attention to detail while approaching new assignments with enthusiasm.
              </p>
              <div className="mb-4">
                <h4 className="text-xl font-semibold text-[var(--text-primary)] mb-3">Key Projects</h4>
                <ul className="list-disc pl-5 space-y-4 text-[var(--text-secondary)]">
                  <li>
                    <strong className="text-[var(--text-primary)]">Multi-modal RAG Chat System</strong>
                    <p>Developed a Retrieval-Augmented Generation (RAG) chatbot integrating visual and textual data to address limitations in traditional chatbots, enhancing contextual understanding.</p>
                  </li>
                  <li>
                    <strong className="text-[var(--text-primary)]">Seatbelt Detection System</strong>
                    <p>Built a real-time seatbelt detection system using OpenCV and TensorFlow, leveraging computer vision to ensure vehicle safety through accurate detection in live video streams.</p>
                  </li>
                  <li>
                    <strong className="text-[var(--text-primary)]">University Chatbot — NLP</strong>
                    <p>Created an NLP-based university chatbot to address student queries on courses, admissions, and campus details, reducing response times by 70% and improving engagement.</p>
                  </li>
                  <li>
                    <strong className="text-[var(--text-primary)]">Wildfire Detection System</strong>
                    <p>Developed a computer vision-based system to detect wildfires in real-time, using the YOLOv8 model and D-Fire dataset for accurate fire and smoke detection. Implemented a Streamlit interface for user-friendly image and video analysis. Conducted extensive testing to ensure reliability in diverse environmental conditions.</p>
                  </li>
                </ul>
              </div>
              <div className="flex flex-wrap gap-2 mt-4">
                <span className="px-3 py-1 bg-[var(--primary-color)] border border-[var(--border-color)] text-[var(--text-secondary)] text-sm">RAG</span>
                <span className="px-3 py-1 bg-[var(--primary-color)] border border-[var(--border-color)] text-[var(--text-secondary)] text-sm">Computer Vision</span>
                <span className="px-3 py-1 bg-[var(--primary-color)] border border-[var(--border-color)] text-[var(--text-secondary)] text-sm">NLP</span>
                <span className="px-3 py-1 bg-[var(--primary-color)] border border-[var(--border-color)] text-[var(--text-secondary)] text-sm">YOLOv8</span>
                <span className="px-3 py-1 bg-[var(--primary-color)] border border-[var(--border-color)] text-[var(--text-secondary)] text-sm">Streamlit</span>
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
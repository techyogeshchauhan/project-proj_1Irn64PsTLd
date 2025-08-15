function Contact() {
  try {
    const [formData, setFormData] = React.useState({
      name: '',
      email: '',
      message: ''
    });
    const [isSubmitting, setIsSubmitting] = React.useState(false);
    const [submitStatus, setSubmitStatus] = React.useState('');

    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    };

    // Check if EmailJS is available
  const isEmailJSAvailable = () => {
    return typeof emailjs !== 'undefined' && emailjs !== null;
  };

  // Fallback method to open email client
  const sendViaMailto = () => {
    const subject = encodeURIComponent('Contact from Portfolio Website');
    const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage: ${formData.message}`);
    window.location.href = `mailto:yogesh.chauhan.ai@gmail.com?subject=${subject}&body=${body}`;
    return true;
  };

  const handleSubmit = async (e) => {
      e.preventDefault();
      setIsSubmitting(true);
      setSubmitStatus('');

      try {
        // Check if EmailJS is available
        if (!isEmailJSAvailable()) {
          console.warn('EmailJS not available, falling back to mailto link');
          const success = sendViaMailto();
          if (success) {
            setSubmitStatus('success');
            setFormData({ name: '', email: '', message: '' });
          } else {
            throw new Error('Failed to open email client');
          }
          return;
        }

        // Use EmailJS to send the form data
        const templateParams = {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message
        };

        // EmailJS send method
        await emailjs.send(
          'service_f37gaaa',  // Your EmailJS Service ID
          'template_njpfg9a', // Your EmailJS Template ID
          templateParams,
          'EmyjwMPqNA3YaK6xO'  // Your EmailJS Public Key as a parameter (backup method)
        );

        setSubmitStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } catch (error) {
        console.error('Error sending email:', error);
        setSubmitStatus('error');
      } finally {
        setIsSubmitting(false);
      }
    };

    return (
      <section id="contact" className="section-padding bg-[var(--primary-color)] px-4 sm:px-6 py-16 sm:py-20" data-name="contact" data-file="components/Contact.js" data-aos="fade-up">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10 sm:mb-16">
            <h2 className="section-title text-center mb-4" data-aos="fade-up">Let's Collaborate on Data Projects</h2>
            <div className="w-20 sm:w-24 h-1 bg-[var(--accent-color)] mx-auto mb-4 sm:mb-6" data-aos="fade-up" data-aos-delay="100"></div>
            <p className="section-subtitle text-center mb-6" data-aos="fade-up" data-aos-delay="150">
              Looking for a data scientist to help with your next project? I specialize in machine learning, data visualization, and AI solutions.
            </p>
            <div className="flex flex-wrap justify-center gap-3 mb-6" data-aos="fade-up" data-aos-delay="200">
              <span className="skill-tag">Machine Learning</span>
              <span className="skill-tag">Data Analysis</span>
              <span className="skill-tag">Computer Vision</span>
              <span className="skill-tag">Deep Learning</span>
              <span className="skill-tag">Data Visualization</span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 sm:gap-12">
            {/* Contact Information */}
            <div className="lg:col-span-2" data-aos="fade-up" data-aos-delay="100">
              <h3 className="text-xl sm:text-2xl font-bold text-[var(--text-primary)] mb-4 sm:mb-6 data-gradient">Get In Touch</h3>
              <p className="text-sm sm:text-base text-[var(--text-secondary)] mb-6 sm:mb-8 leading-relaxed">
                I'm currently available for data science projects, collaborations, and research opportunities. 
                Let's explore how data can solve your business challenges.
              </p>
              
              <div className="glass-card p-4 mb-6 sm:mb-8" data-aos="fade-up" data-aos-delay="150">
                <h4 className="font-semibold text-[var(--text-primary)] mb-2">Data Science Services</h4>
                <ul className="text-sm space-y-2 text-[var(--text-secondary)]">
                  <li className="flex items-center">
                    <span className="w-1.5 h-1.5 bg-[var(--accent-color)] rounded-full mr-2"></span>
                    Predictive modeling and machine learning solutions
                  </li>
                  <li className="flex items-center">
                    <span className="w-1.5 h-1.5 bg-[var(--accent-secondary)] rounded-full mr-2"></span>
                    Computer vision and image processing
                  </li>
                  <li className="flex items-center">
                    <span className="w-1.5 h-1.5 bg-[var(--accent-tertiary)] rounded-full mr-2"></span>
                    Data visualization and interactive dashboards
                  </li>
                  <li className="flex items-center">
                    <span className="w-1.5 h-1.5 bg-[var(--chart-color-1)] rounded-full mr-2"></span>
                    AI-powered automation and optimization
                  </li>
                </ul>
              </div>

              <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                <a 
                  href="mailto:yogesh.chauhan.ai@gmail.com"
                  className="flex items-center space-x-3 sm:space-x-4 p-3 sm:p-4 bg-[var(--background-card)] border border-[var(--border-color)] rounded-lg hover:border-[var(--accent-color)] transition-all group"
                >
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-[var(--accent-color)] rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                    <div className="icon-mail text-base sm:text-lg text-[var(--text-primary)]"></div>
                  </div>
                  <div>
                    <div className="font-semibold text-[var(--text-primary)] text-sm sm:text-base">Email</div>
                    <div className="text-[var(--text-secondary)] text-xs sm:text-sm">yogesh.chauhan.ai@gmail.com</div>
                  </div>
                </a>

                <a 
                  href="tel:+91 8004116115"
                  className="flex items-center space-x-3 sm:space-x-4 p-3 sm:p-4 bg-[var(--background-card)] border border-[var(--border-color)] rounded-lg hover:border-[var(--accent-color)] transition-all group"
                >
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-[var(--accent-color)] rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                    <div className="icon-phone text-base sm:text-lg text-[var(--text-primary)]"></div>
                  </div>
                  <div>
                    <div className="font-semibold text-[var(--text-primary)] text-sm sm:text-base">Phone</div>
                    <div className="text-[var(--text-secondary)] text-xs sm:text-sm">+91 8004116115</div>
                  </div>
                </a>

                <div className="flex items-center space-x-3 sm:space-x-4 p-3 sm:p-4 bg-[var(--background-card)] border border-[var(--border-color)] rounded-lg">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-[var(--accent-color)] rounded-lg flex items-center justify-center">
                    <div className="icon-map-pin text-base sm:text-lg text-[var(--text-primary)]"></div>
                  </div>
                  <div>
                    <div className="font-semibold text-[var(--text-primary)] text-sm sm:text-base">Location</div>
                    <div className="text-[var(--text-secondary)] text-xs sm:text-sm">Haridwar, India</div>
                  </div>
                </div>
              </div>

              <div className="flex space-x-2 sm:space-x-3">
                <a 
                  href="https://www.linkedin.com/in/yogesh-chauhan-40650523b/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 sm:w-12 sm:h-12 bg-[var(--background-card)] border border-[var(--border-color)] rounded-lg flex items-center justify-center text-[var(--text-secondary)] hover:border-[var(--accent-color)] hover:text-[var(--accent-color)] hover:scale-110 transition-all"
                >
                  <div className="icon-linkedin text-base sm:text-lg"></div>
                </a>
                <a 
                  href="https://github.com/techyogeshchauhan" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 sm:w-12 sm:h-12 bg-[var(--background-card)] border border-[var(--border-color)] rounded-lg flex items-center justify-center text-[var(--text-secondary)] hover:border-[var(--accent-color)] hover:text-[var(--accent-color)] hover:scale-110 transition-all"
                >
                  <div className="icon-github text-base sm:text-lg"></div>
                </a>
                <a 
                  href="https://x.com/yogesh_chau_mca" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 sm:w-12 sm:h-12 bg-[var(--background-card)] border border-[var(--border-color)] rounded-lg flex items-center justify-center text-[var(--text-secondary)] hover:border-[var(--accent-color)] hover:text-[var(--accent-color)] hover:scale-110 transition-all"
                >
                  <div className="icon-twitter text-base sm:text-lg"></div>
                </a>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-3" data-aos="fade-up" data-aos-delay="150">
              <div className="glass-card p-5 sm:p-8">
                <h4 className="text-lg sm:text-xl font-bold text-[var(--text-primary)] mb-4 sm:mb-6 data-gradient">Discuss Your Data Science Project</h4>
                <form onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-4 sm:mb-6">
                    <div>
                      <label htmlFor="name" className="block text-[var(--text-primary)] font-medium mb-1 sm:mb-2 text-sm sm:text-base">Your Name</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-[var(--primary-color)] border border-[var(--border-color)] rounded-lg text-[var(--text-primary)] text-sm sm:text-base focus:border-[var(--accent-color)] focus:ring-2 focus:ring-[var(--accent-color)]/20 outline-none transition-all"
                        placeholder="Your name"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-[var(--text-primary)] font-medium mb-1 sm:mb-2 text-sm sm:text-base">Email Address</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-[var(--primary-color)] border border-[var(--border-color)] rounded-lg text-[var(--text-primary)] text-sm sm:text-base focus:border-[var(--accent-color)] focus:ring-2 focus:ring-[var(--accent-color)]/20 outline-none transition-all"
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>
                  
                  <div className="mb-4 sm:mb-6">
                    <label className="block text-[var(--text-primary)] font-medium mb-1 sm:mb-2 text-sm sm:text-base">Project Type</label>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                      <div className="flex items-center">
                        <input type="checkbox" id="ml" className="mr-2" />
                        <label htmlFor="ml" className="text-sm text-[var(--text-secondary)]">Machine Learning</label>
                      </div>
                      <div className="flex items-center">
                        <input type="checkbox" id="cv" className="mr-2" />
                        <label htmlFor="cv" className="text-sm text-[var(--text-secondary)]">Computer Vision</label>
                      </div>
                      <div className="flex items-center">
                        <input type="checkbox" id="nlp" className="mr-2" />
                        <label htmlFor="nlp" className="text-sm text-[var(--text-secondary)]">NLP</label>
                      </div>
                      <div className="flex items-center">
                        <input type="checkbox" id="viz" className="mr-2" />
                        <label htmlFor="viz" className="text-sm text-[var(--text-secondary)]">Data Visualization</label>
                      </div>
                      <div className="flex items-center">
                        <input type="checkbox" id="consulting" className="mr-2" />
                        <label htmlFor="consulting" className="text-sm text-[var(--text-secondary)]">Consulting</label>
                      </div>
                      <div className="flex items-center">
                        <input type="checkbox" id="other" className="mr-2" />
                        <label htmlFor="other" className="text-sm text-[var(--text-secondary)]">Other</label>
                      </div>
                    </div>
                  </div>

                  <div className="mb-4 sm:mb-6">
                    <label htmlFor="message" className="block text-[var(--text-primary)] font-medium mb-1 sm:mb-2 text-sm sm:text-base">Project Details</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows="4"
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-[var(--primary-color)] border border-[var(--border-color)] rounded-lg text-[var(--text-primary)] text-sm sm:text-base focus:border-[var(--accent-color)] focus:ring-2 focus:ring-[var(--accent-color)]/20 outline-none transition-all resize-none"
                      placeholder="Describe your data science project, goals, available data, and timeline..."
                    ></textarea>
                  </div>

                  {submitStatus === 'success' && (
                    <div className="mb-6 p-4 bg-green-500/20 border border-green-500/30 rounded-lg">
                      <div className="flex items-center space-x-3">
                        <div className="icon-check-circle text-lg text-green-600"></div>
                        <div>
                          <p className="font-medium text-green-400">Message sent successfully!</p>
                          <p className="text-sm text-green-300">Thank you for reaching out. I'll get back to you as soon as possible.</p>
                        </div>
                      </div>
                    </div>
                  )}

                  {submitStatus === 'error' && (
        <div className="mb-6 p-4 bg-red-500/20 border border-red-500/30 rounded-lg">
          <div className="flex items-center space-x-3">
            <div className="icon-alert-circle text-lg text-red-400"></div>
            <div>
              <p className="font-semibold text-red-400">Failed to send message.</p>
              <p className="text-sm text-red-300">Please check your internet connection and try again, or contact me directly at <a href="mailto:yogesh.chauhan.ai@gmail.com" className="underline hover:text-red-200">yogesh.chauhan.ai@gmail.com</a></p>
            </div>
          </div>
          <div className="mt-3">
            <button 
              onClick={() => {
                const subject = encodeURIComponent('Contact from Portfolio Website');
                const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage: ${formData.message}`);
                window.location.href = `mailto:yogesh.chauhan.ai@gmail.com?subject=${subject}&body=${body}`;
              }}
              className="text-sm text-red-300 underline hover:text-red-200 flex items-center space-x-1"
            >
              <span className="icon-mail text-xs"></span>
              <span>Send via Email Client Instead</span>
            </button>
          </div>
        </div>
      )}

                  <button
                    type="submit"
                    className="btn-primary w-full flex justify-center items-center space-x-2 text-sm sm:text-base py-2 sm:py-3 animate-scale"
                    disabled={isSubmitting}
                    data-aos="fade-up" data-aos-delay="200"
                  >
                    {isSubmitting ? (
                      <>
                        <span className="icon-loader-2 animate-spin"></span>
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <span className="icon-send"></span>
                        <span>Submit Data Science Project Inquiry</span>
                      </>
                    )}
                  </button>
                  
                  <div className="mt-4 text-center text-xs text-[var(--text-secondary)]">
                    <p>I typically respond within 24-48 hours to discuss your data science needs</p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error('Contact component error:', error);
    return null;
  }
}

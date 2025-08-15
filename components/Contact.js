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
      <section id="contact" className="section-padding bg-[var(--primary-color)]" data-name="contact" data-file="components/Contact.js">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-[var(--text-primary)] mb-6">Let's Work Together</h2>
            <div className="w-24 h-1 bg-[var(--accent-color)] mx-auto mb-6"></div>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto leading-relaxed">
              Have a project in mind? I'd love to hear about it. Let's discuss how we can bring your ideas to life.
            </p>
          </div>

          <div className="grid lg:grid-cols-5 gap-12">
            {/* Contact Information */}
            <div className="lg:col-span-2">
              <h3 className="text-2xl font-bold text-[var(--text-primary)] mb-6">Get In Touch</h3>
              <p className="text-[var(--text-secondary)] mb-8 leading-relaxed">
                I'm currently available for freelance work and exciting new opportunities. 
                Let's create something amazing together.
              </p>

              <div className="space-y-4 mb-8">
                <a 
                  href="mailto:yogesh.chauhan.ai@gmail.com"
                  className="flex items-center space-x-4 p-4 bg-[var(--background-card)] border border-[var(--border-color)] rounded-lg hover:border-[var(--accent-color)] transition-all group"
                >
                  <div className="w-10 h-10 bg-[var(--accent-color)] rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                    <div className="icon-mail text-lg text-[var(--text-primary)]"></div>
                  </div>
                  <div>
                    <div className="font-semibold text-[var(--text-primary)]">Email</div>
                    <div className="text-[var(--text-secondary)] text-sm">yogesh.chauhan.ai@gmail.com</div>
                  </div>
                </a>

                <a 
                  href="tel:+91 8004116115"
                  className="flex items-center space-x-4 p-4 bg-[var(--background-card)] border border-[var(--border-color)] rounded-lg hover:border-[var(--accent-color)] transition-all group"
                >
                  <div className="w-10 h-10 bg-[var(--accent-color)] rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                    <div className="icon-phone text-lg text-[var(--text-primary)]"></div>
                  </div>
                  <div>
                    <div className="font-semibold text-[var(--text-primary)]">Phone</div>
                    <div className="text-[var(--text-secondary)] text-sm">+91 8004116115</div>
                  </div>
                </a>

                <div className="flex items-center space-x-4 p-4 bg-[var(--background-card)] border border-[var(--border-color)] rounded-lg">
                  <div className="w-10 h-10 bg-[var(--accent-color)] rounded-lg flex items-center justify-center">
                    <div className="icon-map-pin text-lg text-[var(--text-primary)]"></div>
                  </div>
                  <div>
                    <div className="font-semibold text-[var(--text-primary)]">Location</div>
                    <div className="text-[var(--text-secondary)] text-sm">Haridwar, India</div>
                  </div>
                </div>
              </div>

              <div className="flex space-x-3">
                <a 
                  href="https://www.linkedin.com/in/yogesh-chauhan-40650523b/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-[var(--background-card)] border border-[var(--border-color)] rounded-lg flex items-center justify-center text-[var(--text-secondary)] hover:border-[var(--accent-color)] hover:text-[var(--accent-color)] hover:scale-110 transition-all"
                >
                  <div className="icon-linkedin text-lg"></div>
                </a>
                <a 
                  href="https://github.com/techyogeshchauhan" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-[var(--background-card)] border border-[var(--border-color)] rounded-lg flex items-center justify-center text-[var(--text-secondary)] hover:border-[var(--accent-color)] hover:text-[var(--accent-color)] hover:scale-110 transition-all"
                >
                  <div className="icon-github text-lg"></div>
                </a>
                <a 
                  href="https://x.com/yogesh_chau_mca" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-[var(--background-card)] border border-[var(--border-color)] rounded-lg flex items-center justify-center text-[var(--text-secondary)] hover:border-[var(--accent-color)] hover:text-[var(--accent-color)] hover:scale-110 transition-all"
                >
                  <div className="icon-twitter text-lg"></div>
                </a>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-3">
              <div className="bg-[var(--background-card)] border border-[var(--border-color)] rounded-2xl p-8">
                <h4 className="text-xl font-bold text-[var(--text-primary)] mb-6">Send me a message</h4>
                <form onSubmit={handleSubmit}>
                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="name" className="block text-[var(--text-primary)] font-medium mb-2">Your Name</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-[var(--primary-color)] border border-[var(--border-color)] rounded-lg text-[var(--text-primary)] focus:border-[var(--accent-color)] focus:ring-2 focus:ring-[var(--accent-color)]/20 outline-none transition-all"
                        placeholder="Yogesh Chauhan"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-[var(--text-primary)] font-medium mb-2">Email Address</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-[var(--primary-color)] border border-[var(--border-color)] rounded-lg text-[var(--text-primary)] focus:border-[var(--accent-color)] focus:ring-2 focus:ring-[var(--accent-color)]/20 outline-none transition-all"
                        placeholder="yogesh.chauhan.ai@gmail.com"
                      />
                    </div>
                  </div>

                  <div className="mb-6">
                    <label htmlFor="message" className="block text-[var(--text-primary)] font-medium mb-2">Project Details</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows="5"
                      className="w-full px-4 py-3 bg-[var(--primary-color)] border border-[var(--border-color)] rounded-lg text-[var(--text-primary)] focus:border-[var(--accent-color)] focus:ring-2 focus:ring-[var(--accent-color)]/20 outline-none transition-all resize-none"
                      placeholder="Tell me about your project, timeline, and budget..."
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
                    className="btn-primary w-full flex justify-center items-center space-x-2"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <span className="icon-loader-2 animate-spin"></span>
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <span className="icon-send"></span>
                        <span>Send Message</span>
                      </>
                    )}
                  </button>
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

import { motion } from 'framer-motion';
import { useState } from 'react';

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate sending email
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      // Reset form status after 3 seconds
      setTimeout(() => setSubmitted(false), 3000);
      // Reset form fields
      (e.target as HTMLFormElement).reset();
    }, 1000);
  };

  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-6 max-w-3xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-accent font-mono text-sm mb-4">04. What's Next?</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Get In Touch</h2>
          <p className="text-secondary mb-12 max-w-xl mx-auto">
            Although I'm not currently looking for any new opportunities, my inbox is always open. 
            Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>
          
          <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-4 mb-12 text-left">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-secondary mb-1">Name</label>
              <input type="text" id="name" required className="w-full bg-white/[0.03] backdrop-blur-md border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-accent transition-colors shadow-inner" />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-secondary mb-1">Email</label>
              <input type="email" id="email" required className="w-full bg-white/[0.03] backdrop-blur-md border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-accent transition-colors shadow-inner" />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-secondary mb-1">Message</label>
              <textarea id="message" rows={4} required className="w-full bg-white/[0.03] backdrop-blur-md border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-accent transition-colors shadow-inner"></textarea>
            </div>
            <button 
              type="submit" 
              disabled={isSubmitting}
              className="w-full py-3 glass-pill text-white font-semibold hover:bg-accent/20 focus:outline-none focus:ring-2 focus:ring-accent transition-all disabled:opacity-70 disabled:cursor-not-allowed shadow-xl shadow-accent/5"
            >
              {isSubmitting ? 'Sending...' : submitted ? 'Message Sent!' : 'Send Message'}
            </button>
            {submitted && (
              <p className="text-green-400 text-sm text-center mt-2">
                Thanks! Note: In a real app, you'd connect this form to Formspree or Web3Forms. Use the 'Say Hello' button below to actually email me.
              </p>
            )}
          </form>

          <a href="mailto:archiyadav263@gmail.com" className="px-8 py-4 glass-pill text-accent hover:bg-accent hover:text-white transition-all inline-block shadow-lg shadow-accent/10">
            Say Hello
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;

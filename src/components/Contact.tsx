"use client";

import { motion } from "framer-motion";
import { FiMail, FiPhone, FiMapPin, FiSend } from "react-icons/fi";

const Contact = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get("name");
    const email = formData.get("email");
    const message = formData.get("message");
    
    // Using mailto to send email via client
    window.location.href = `mailto:kamrulhasansujon2515@gmail.com?subject=Message from ${name}&body=From: ${name} (${email})%0D%0A%0D%0A${message}`;
  };

  return (
    <section className="py-24 bg-background" id="contact">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tighter">
            Get In <span className="text-primary">Touch</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-10"
          >
            <p className="text-on-surface-variant text-lg">
              I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
            </p>
            
            <div className="space-y-6">
              {[
                { icon: <FiMail />, label: "Email", value: "kamrulhasansujon2515@gmail.com" },
                { icon: <FiPhone />, label: "Phone", value: "01606360147" },
                { icon: <FiMapPin />, label: "Address", value: "Nilphamari Sadar" },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-6 group">
                  <div className="w-14 h-14 rounded-2xl bg-surface-container flex items-center justify-center text-primary text-xl border border-border group-hover:border-primary/50 transition-all shadow-xl">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-on-surface-variant uppercase tracking-widest">{item.label}</h4>
                    <p className="text-on-surface font-medium text-lg break-all">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.form 
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6 bg-surface-container p-8 md:p-12 rounded-[2rem] border border-border shadow-2xl"
          >
            <div className="grid md:grid-cols-2 gap-6">
              <input 
                name="name"
                type="text" 
                placeholder="Name" 
                required
                className="w-full bg-background border border-border rounded-2xl px-6 py-4 text-on-surface placeholder:text-on-surface-variant focus:border-primary outline-none transition-all"
              />
              <input 
                name="email"
                type="email" 
                placeholder="Email" 
                required
                className="w-full bg-background border border-border rounded-2xl px-6 py-4 text-on-surface placeholder:text-on-surface-variant focus:border-primary outline-none transition-all"
              />
            </div>
            <textarea 
              name="message"
              placeholder="Message" 
              required
              rows={5}
              className="w-full bg-background border border-border rounded-2xl px-6 py-4 text-on-surface placeholder:text-on-surface-variant focus:border-primary outline-none transition-all"
            ></textarea>
            <button 
              type="submit"
              className="w-full py-5 bg-gradient-to-r from-primary to-secondary text-white rounded-2xl font-black uppercase tracking-widest flex items-center justify-center gap-3 shadow-lg shadow-primary/20 hover:shadow-primary/40 hover:brightness-110 transition-all active:scale-[0.98]"
            >
              Send Message
              <FiSend size={20} />
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;


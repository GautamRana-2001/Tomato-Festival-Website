'use client';

import { useState } from 'react';


interface ContactForm {
  name: string;
  phone: string;
  email: string;
  message: string;
}

export default function Contact() {
  const [formData, setFormData] = useState<ContactForm>({
    name: '',
    phone: '',
    email: '',
    message: '',
  });

  const [errors, setErrors] = useState<Partial<ContactForm>>({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const newErrors: Partial<ContactForm> = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^\d{10}$/.test(formData.phone)) {
      newErrors.phone = 'Enter a valid 10-digit phone number';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Enter a valid email';
    }
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: '' });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setSubmitted(true);
      setFormData({ name: '', phone: '', email: '', message: '' });
      setTimeout(() => setSubmitted(false), 5000);
    }
  };

  return (
    <section
      id="contact"
      className="relative bg-gradient-to-br from-[#18181a] via-[#2a0909] to-[#1a0e0e] py-24 px-6 overflow-hidden"
    >
      <div className="absolute top-6 left-6 text-5xl animate-float text-[#FF4500]/80">🍅</div>
      <div className="absolute bottom-6 right-6 text-5xl animate-bounce-slow text-[#FF4500]/80">🍅</div>
      <div className="relative z-10 max-w-4xl mx-auto bg-[#18181a]/50 backdrop-blur-sm border border-[#FF4500]/30 p-12 rounded-3xl shadow-xl animate-fadeInUp">
        <h2 className="text-4xl sm:text-5xl font-extrabold text-center text-[#FF4500] mb-6">📬 Contact Us</h2>
        <p className="text-center text-white/80 text-lg mb-8 max-w-2xl mx-auto">
          Got questions or want to collaborate? Let's make this fest juicier together!
        </p>

        {submitted && (
          <div className="mb-6 p-4 bg-[#18181a]/50 border border-[#FF4500]/30 backdrop-blur-sm text-[#FF4500] font-semibold rounded-lg text-center animate-fadeInUp">
            ✅ Message sent successfully!
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6" noValidate>
          <div className="grid sm:grid-cols-2 gap-6">
            {/* Name */}
            <div className="relative">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                className="peer w-full p-4 pl-12 rounded-xl bg-[#18181a]/10 border border-[#FF4500]/30 text-white/90 placeholder-transparent focus:outline-none focus:ring-2 focus:ring-[#FF4500]/50"
              />
              <label className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#FF4500]/80 pointer-events-none peer-placeholder-shown:top-4 peer-placeholder-shown:text-sm transition-all duration-300">
                👤 Name
              </label>
              {errors.name && <p className="text-[#FF4500] mt-1 text-sm">{errors.name}</p>}
            </div>

            {/* Phone */}
            <div className="relative">
              <input
                type="text"
                name="phone"
                placeholder="Your Phone"
                value={formData.phone}
                onChange={handleChange}
                className="peer w-full p-4 pl-12 rounded-xl bg-[#18181a]/10 border border-[#FF4500]/30 text-white/90 placeholder-transparent focus:outline-none focus:ring-2 focus:ring-[#FF4500]/50"
              />
              <label className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#FF4500]/80 pointer-events-none peer-placeholder-shown:top-4 peer-placeholder-shown:text-sm transition-all duration-300">
                📞 Phone
              </label>
              {errors.phone && <p className="text-[#FF4500] mt-1 text-sm">{errors.phone}</p>}
            </div>
          </div>

          {/* Email */}
          <div className="relative">
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              className="peer w-full p-4 pl-12 rounded-xl bg-[#18181a]/10 border border-[#FF4500]/30 text-white/90 placeholder-transparent focus:outline-none focus:ring-2 focus:ring-[#FF4500]/50"
            />
            <label className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#FF4500]/80 pointer-events-none peer-placeholder-shown:top-4 peer-placeholder-shown:text-sm transition-all duration-300">
              📧 Email
            </label>
            {errors.email && <p className="text-[#FF4500] mt-1 text-sm">{errors.email}</p>}
          </div>

          {/* Message */}
          <div className="relative">
            <textarea
              name="message"
              placeholder="Your Message"
              rows={5}
              value={formData.message}
              onChange={handleChange}
              className="peer w-full p-4 pl-12 rounded-xl bg-[#18181a]/10 border border-[#FF4500]/30 text-white/90 placeholder-transparent focus:outline-none focus:ring-2 focus:ring-[#FF4500]/50"
            />
            <label className="absolute left-4 top-6 text-[#FF4500]/80 pointer-events-none peer-placeholder-shown:top-4 peer-placeholder-shown:text-sm transition-all duration-300">
              💬 Message
            </label>
            {errors.message && <p className="text-[#FF4500] mt-1 text-sm">{errors.message}</p>}
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-red-600 to-yellow-400 hover:from-yellow-400 hover:to-red-600 text-white font-bold px-8 py-3 rounded-full shadow-lg transition-transform duration-300 hover:scale-105"
            >
           📨 Submit
           </button>

          </div>
        </form>
      </div>

      <style jsx>{`
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-bounce {
          animation: bounce 4s ease-in-out infinite;
        }
        .animate-fadeInUp {
          animation: fadeInUp 1s ease-out both;
        }
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-12px); }
        }
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-18px); }
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
}




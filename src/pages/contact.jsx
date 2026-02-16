import { useState } from "react";
import {
  Github,
  Linkedin,
  Mail,
  Send,
  CheckCircle,
  AlertCircle,
} from "lucide-react";

// ============================================================
// 🔧 CONFIGURATION
// ============================================================
const CONFIG = {
  emailjs: {
    serviceId: "YOUR_SERVICE_ID",
    templateId: "YOUR_TEMPLATE_ID",
    publicKey: "YOUR_PUBLIC_KEY",
  },
  socials: {
    github: "https://github.com/YOUR_USERNAME",
    linkedin: "https://linkedin.com/in/YOUR_USERNAME",
    email: "mailto:preciouskmutema@gmail.com",
  },
};

// ============================================================

const inputStyle = (focused) => ({
  width: "100%",
  padding: "16px 18px",
  borderRadius: "10px",
  border: `1px solid ${
    focused ? "rgba(56,189,248,0.5)" : "rgba(255,255,255,0.1)"
  }`,
  background: focused
    ? "rgba(56,189,248,0.04)"
    : "rgba(255,255,255,0.04)",
  color: "#fff",
  fontSize: "15px",
  fontFamily: "'DM Sans', sans-serif",
  outline: "none",
  transition: "all 0.2s ease",
});

const labelStyle = {
  fontSize: "13px",
  color: "rgba(255,255,255,0.5)",
  fontFamily: "'DM Sans', sans-serif",
  fontWeight: 500,
  marginBottom: "8px",
  display: "block",
};

export default function ContactSection() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [focused, setFocused] = useState("");
  const [status, setStatus] = useState("idle");

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async () => {
    if (!form.name || !form.email || !form.message) return;

    setStatus("sending");

    try {
      const res = await fetch(
        "https://api.emailjs.com/api/v1.0/email/send",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            service_id: CONFIG.emailjs.serviceId,
            template_id: CONFIG.emailjs.templateId,
            user_id: CONFIG.emailjs.publicKey,
            template_params: {
              from_name: form.name,
              from_email: form.email,
              message: form.message,
            },
          }),
        }
      );

      if (res.ok) {
        setStatus("success");
        setForm({ name: "", email: "", message: "" });
        setTimeout(() => setStatus("idle"), 4000);
      } else {
        throw new Error();
      }
    } catch {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 4000);
    }
  };

  const socials = [
    { icon: <Github />, href: CONFIG.socials.github },
    { icon: <Linkedin />, href: CONFIG.socials.linkedin },
    { icon: <Mail />, href: CONFIG.socials.email },
  ];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&display=swap');

        * { box-sizing: border-box; }

        .contact-wrapper {
          min-height: 100vh;
          padding: 72px 24px;
          display: flex;
          justify-content: center;
          align-items: center;
          
        }

        .form-card {
          width: 100%;
          max-width: 820px;
          background: rgba(13,21,36,0.85);
          border-radius: 20px;
          padding: 40px;
          border: 1px solid rgba(255,255,255,0.08);
        }

        .form-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
        }

        .socials {
          display: flex;
          justify-content: center;
          gap: 28px;
          margin-top: 32px;
        }

        @media (max-width: 768px) {
          .form-grid {
            grid-template-columns: 1fr;
          }
          .form-card {
            padding: 28px;
          }
        }
      `}</style>

      <section 
      id="contact"
      className="contact-wrapper">
        <div className="form-card">
          <h2
            style={{
              textAlign: "center",
              fontSize: "clamp(24px,4vw,38px)",
              color: "#fff",
              marginBottom: "36px",
              fontFamily: "'DM Sans', sans-serif",
            }}
          >
            Let’s Build Something{" "}
            <span
              style={{
                background: "linear-gradient(90deg,#2563eb,#38bdf8)",
                  
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Extraordinary
            </span>
          </h2>

          <div className="form-grid">
            <div>
              <label style={labelStyle}>Name</label>
              <input
                name="name"
                value={form.name}
                onChange={handleChange}
                onFocus={() => setFocused("name")}
                onBlur={() => setFocused("")}
                style={inputStyle(focused === "name")}
              />
            </div>

            <div>
              <label style={labelStyle}>Email</label>
              <input
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                onFocus={() => setFocused("email")}
                onBlur={() => setFocused("")}
                style={inputStyle(focused === "email")}
              />
            </div>
          </div>

          <div style={{ marginTop: "20px" }}>
            <label style={labelStyle}>Message</label>
            <textarea
              name="message"
              rows={5}
              value={form.message}
              onChange={handleChange}
              onFocus={() => setFocused("message")}
              onBlur={() => setFocused("")}
              style={{ ...inputStyle(focused === "message") }}
            />
          </div>

          <button
            onClick={handleSubmit}
            disabled={status === "sending"}
            style={{
              marginTop: "28px",
              width: "100%",
              padding: "18px",
              borderRadius: "10px",
              border: "none",
              fontWeight: 700,
              color: "#fff",
              background:
                status === "success"
                  ? "#22c55e"
                  : status === "error"
                  ? "#ef4444"
                  : "linear-gradient(90deg,#2563eb,#38bdf8)",
              cursor: "pointer",
            }}
          >
            {status === "idle" && "Send Message"}
            {status === "sending" && "Sending..."}
            {status === "success" && "Message Sent!"}
            {status === "error" && "Something went wrong"}
          </button>

          <div className="socials">
            {socials.map((s, i) => (
              <a
                key={i}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                style={{ color: "rgba(255,255,255,0.6)" }}
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

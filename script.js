document.addEventListener("DOMContentLoaded", () => {
  // Scroll Reveal Observer
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -40px 0px",
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
      }
    });
  }, observerOptions);

  document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));

  // Mobile Navigation Toggle
  const navToggle = document.getElementById("navToggle");
  const navLinks = document.getElementById("navLinks");

  if (navToggle && navLinks) {
    navToggle.addEventListener("click", () => {
      const expanded = navToggle.getAttribute("aria-expanded") === "true";
      navToggle.setAttribute("aria-expanded", !expanded);
      navLinks.classList.toggle("nav-active");
      navToggle.textContent = expanded ? "☰" : "✕";
    });

    // Close mobile menu on clicking an internal link
    navLinks.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        navLinks.classList.remove("nav-active");
        navToggle.setAttribute("aria-expanded", "false");
        navToggle.textContent = "☰";
      });
    });
  }

  // ===== Rohith's AI Assistant =====
  const aiWidget = document.getElementById("aiAssistant");
  const aiToggleBtn = document.getElementById("aiToggle");
  const aiBadge = document.getElementById("aiBadge");
  const aiPanel = document.getElementById("aiPanel");
  const aiCloseBtn = document.getElementById("aiClose");
  const aiForm = document.getElementById("aiForm");
  const aiInput = document.getElementById("aiInput");
  const aiMessages = document.getElementById("aiMessages");
  const aiSuggestions = document.getElementById("aiSuggestions");

  if (aiWidget && aiToggleBtn && aiPanel && aiCloseBtn && aiForm && aiInput && aiMessages) {
    // Portfolio Knowledge Base
    const knowledge = {
      name: "Joseph Rohith",
      role: "Aspiring Full-Stack Developer",
      tagline: "I build web applications and learn by turning ideas into working projects.",
      location: "Tirupati, India",
      education: {
        degree: "B.Tech — Computer Science & Engineering",
        institution: "SVCE Tirupati (Sri Venkateswara College of Engineering)",
        duration: "2024 – 2028",
        year: "3rd year"
      },
      skills: {
        frontend: ["HTML5", "CSS3", "JavaScript", "Tailwind CSS"],
        backend: ["Node.js"],
        programming: ["Java"],
        tools: ["Git", "GitHub"]
      },
      currently: {
        learning: "JavaScript + Node.js",
        building: "Web apps & personal projects",
        exploring: "Full-stack development",
        improving: "Problem solving & fundamentals"
      },
      projects: [
        {
          name: "Course Explorer",
          category: "Web App",
          description: "A structured platform for browsing and navigating educational course content with fluid UI filtering and responsive design.",
          tech: "HTML, CSS, JavaScript",
          link: "https://github.com/Rohith676-svg/course_explorer"
        },
        {
          name: "Gesture Driven Spatial",
          category: "Spatial Interface",
          description: "An experimental navigation interface driven by gesture inputs and spatial movement controls for interactive experiences.",
          tech: "HTML, CSS, JavaScript",
          link: "https://github.com/Rohith676-svg/gesture_driven_spatial"
        },
        {
          name: "Notes App",
          category: "Utility Tool",
          description: "A clean note-taking application emphasizing quick entry, minimal distraction, and responsive state handling.",
          tech: "HTML, CSS, JavaScript",
          link: "https://github.com/Rohith676-svg/Notes-app"
        },
        {
          name: "ASCII On Your Own",
          category: "Creative Canvas",
          description: "A creative computing generator converting custom inputs into algorithmic ASCII graphics directly in the browser.",
          tech: "HTML, CSS, JavaScript",
          link: "https://github.com/Rohith676-svg/ASCII_onyourown"
        },
        {
          name: "Landing Pages",
          category: "Web Development",
          description: "A collection of modern, pixel-perfect, and fully responsive website landing pages built with HTML, CSS, and Tailwind CSS.",
          tech: "HTML, CSS, Tailwind CSS",
          link: "https://github.com/Rohith676-svg/Landing-pages"
        }
      ],
      social: {
        github: "https://github.com/Rohith676-svg",
        linkedin: "https://www.linkedin.com/in/rohith-joseph6"
      }
    };

    // Intent matching engine
    function getResponse(query) {
      const q = query.toLowerCase().trim();

      // Greeting
      if (/^(hi|hello|hey|howdy|yo|sup|greetings|good\s*(morning|afternoon|evening))/.test(q)) {
        return `Hey there! 👋 I'm Rohith's Assistant. I can tell you about Joseph Rohith's <strong>skills</strong>, <strong>projects</strong>, <strong>education</strong>, or <strong>contact info</strong>. What would you like to know?`;
      }

      // Who is / about
      if (/who\s*(is|are|'s)|about\s*(him|rohith|joseph)|tell\s*me\s*about|introduce|background/.test(q)) {
        return `<strong>${knowledge.name}</strong> is a ${knowledge.education.year} Computer Science Engineering student based in ${knowledge.location}. ${knowledge.tagline}<p>He's currently learning <strong>${knowledge.currently.learning}</strong> and exploring <strong>${knowledge.currently.exploring}</strong>. His approach is to learn by building real projects and solving practical problems.</p>`;
      }

      // Skills
      if (/skill|tech|stack|technolog|what\s*(can|does)\s*he\s*(do|know|use)|proficien|language|framework/.test(q)) {
        const fe = knowledge.skills.frontend.join(", ");
        const be = knowledge.skills.backend.join(", ");
        const prog = knowledge.skills.programming.join(", ");
        const tools = knowledge.skills.tools.join(", ");
        return `Here are Rohith's skills:<p>🎨 <strong>Frontend:</strong> ${fe}</p><p>⚙️ <strong>Backend:</strong> ${be}</p><p>💻 <strong>Programming:</strong> ${prog}</p><p>🛠️ <strong>Tools:</strong> ${tools}</p><p>He's currently deepening his expertise in <strong>JavaScript</strong> and <strong>Node.js</strong>.</p>`;
      }

      // Projects (general)
      if (/project|work|portfolio|built|build|creat|made|repositor|repo/.test(q)) {
        let list = knowledge.projects.map((p, i) =>
          `<strong>${i+1}. ${p.name}</strong> (${p.category}) — ${p.description}`
        ).join("<p>");
        return `Rohith has built <strong>${knowledge.projects.length} notable projects</strong>:<p>${list}</p><p>You can ask me about any specific project for more details!</p>`;
      }

      // Specific project by name
      const projectMatch = knowledge.projects.find(p =>
        q.includes(p.name.toLowerCase()) ||
        q.includes(p.name.toLowerCase().replace(/\s+/g, ""))
      );
      if (projectMatch) {
        return `<strong>${projectMatch.name}</strong> — <em>${projectMatch.category}</em><p>${projectMatch.description}</p><p>🔧 <strong>Tech:</strong> ${projectMatch.tech}</p><p>🔗 <a href="${projectMatch.link}" target="_blank" rel="noopener noreferrer">View on GitHub ↗</a></p>`;
      }

      // Course explorer
      if (/course/.test(q)) {
        const p = knowledge.projects[0];
        return `<strong>${p.name}</strong> — <em>${p.category}</em><p>${p.description}</p><p>🔗 <a href="${p.link}" target="_blank" rel="noopener noreferrer">View on GitHub ↗</a></p>`;
      }

      // Gesture / spatial
      if (/gesture|spatial/.test(q)) {
        const p = knowledge.projects[1];
        return `<strong>${p.name}</strong> — <em>${p.category}</em><p>${p.description}</p><p>🔗 <a href="${p.link}" target="_blank" rel="noopener noreferrer">View on GitHub ↗</a></p>`;
      }

      // Notes
      if (/note/.test(q)) {
        const p = knowledge.projects[2];
        return `<strong>${p.name}</strong> — <em>${p.category}</em><p>${p.description}</p><p>🔗 <a href="${p.link}" target="_blank" rel="noopener noreferrer">View on GitHub ↗</a></p>`;
      }

      // ASCII
      if (/ascii/.test(q)) {
        const p = knowledge.projects[3];
        return `<strong>${p.name}</strong> — <em>${p.category}</em><p>${p.description}</p><p>🔗 <a href="${p.link}" target="_blank" rel="noopener noreferrer">View on GitHub ↗</a></p>`;
      }

      // Landing pages
      if (/landing/.test(q)) {
        const p = knowledge.projects[4];
        return `<strong>${p.name}</strong> — <em>${p.category}</em><p>${p.description}</p><p>🔗 <a href="${p.link}" target="_blank" rel="noopener noreferrer">View on GitHub ↗</a></p>`;
      }

      // Education
      if (/educat|college|university|school|degree|study|btech|b\.tech|student|svce|tirupati|academic/.test(q)) {
        return `🎓 <strong>${knowledge.education.degree}</strong><p>🏫 ${knowledge.education.institution}</p><p>📅 ${knowledge.education.duration} (currently in ${knowledge.education.year})</p>`;
      }

      // Contact
      if (/contact|reach|connect|email|message|hire|talk|get\s*in\s*touch|linkedin|github|social/.test(q)) {
        return `You can connect with Rohith through:<p>🔗 <a href="${knowledge.social.linkedin}" target="_blank" rel="noopener noreferrer">LinkedIn — rohith-joseph6 ↗</a></p><p>💻 <a href="${knowledge.social.github}" target="_blank" rel="noopener noreferrer">GitHub — Rohith676-svg ↗</a></p><p>He's open to web projects, collaborations, and learning opportunities!</p>`;
      }

      // Location
      if (/where|location|city|based|from|live/.test(q)) {
        return `Rohith is based in <strong>${knowledge.location}</strong>. He's studying at ${knowledge.education.institution}.`;
      }

      // What is he doing / currently
      if (/currently|doing|working\s*on|focus|right\s*now|nowadays/.test(q)) {
        return `Here's what Rohith is up to right now:<p>📚 <strong>Learning:</strong> ${knowledge.currently.learning}</p><p>🔨 <strong>Building:</strong> ${knowledge.currently.building}</p><p>🔭 <strong>Exploring:</strong> ${knowledge.currently.exploring}</p><p>🧠 <strong>Improving:</strong> ${knowledge.currently.improving}</p>`;
      }

      // Experience / fullstack
      if (/experience|fullstack|full-stack|full\s*stack|career|journey|background/.test(q)) {
        return `Rohith's development journey began with <strong>frontend web development</strong>, where he discovered a passion for building clean, intuitive user interfaces.<p>He's now strengthening his foundation in core JavaScript and diving into backend development with <strong>Node.js</strong> to grow into a well-rounded <strong>full-stack developer</strong>.</p><p>His approach: learn by <strong>building projects</strong> and solving practical problems.</p>`;
      }

      // Thank you
      if (/thank|thanks|thx|cheers|appreciate/.test(q)) {
        return `You're welcome! 😊 Feel free to ask me anything else about Rohith's portfolio.`;
      }

      // Bye
      if (/bye|goodbye|see\s*you|later|cya/.test(q)) {
        return `Goodbye! 👋 Feel free to come back anytime. You can also connect with Rohith on <a href="${knowledge.social.linkedin}" target="_blank" rel="noopener noreferrer">LinkedIn</a>!`;
      }

      // Fallback
      return `I'm not sure about that one! 🤔 I can help you with:<p>• <strong>Skills</strong> — what technologies Rohith knows</p><p>• <strong>Projects</strong> — what he has built</p><p>• <strong>Education</strong> — his academic background</p><p>• <strong>Contact</strong> — how to reach him</p><p>Try asking about any of these!</p>`;
    }

    // Utility: add message bubble
    function addMessage(html, sender) {
      const msgDiv = document.createElement("div");
      msgDiv.className = `ai-msg ai-msg-${sender}`;
      msgDiv.innerHTML = `<p>${html}</p>`;
      aiMessages.appendChild(msgDiv);
      aiMessages.scrollTop = aiMessages.scrollHeight;
    }

    // Utility: show typing indicator
    function showTyping() {
      const typingDiv = document.createElement("div");
      typingDiv.className = "ai-typing";
      typingDiv.id = "aiTyping";
      typingDiv.innerHTML = `
        <span class="ai-typing-dot"></span>
        <span class="ai-typing-dot"></span>
        <span class="ai-typing-dot"></span>
      `;
      aiMessages.appendChild(typingDiv);
      aiMessages.scrollTop = aiMessages.scrollHeight;
    }

    function removeTyping() {
      const existing = document.getElementById("aiTyping");
      if (existing) existing.remove();
    }

    // Handle sending a message
    function handleSend(text) {
      const trimmed = text.trim();
      if (!trimmed) return;

      addMessage(trimmed, "user");
      aiInput.value = "";

      // Hide suggestions after first user message
      if (aiSuggestions) aiSuggestions.style.display = "none";

      // Show typing indicator, then respond
      showTyping();
      const delay = 400 + Math.random() * 600;
      setTimeout(() => {
        removeTyping();
        const response = getResponse(trimmed);
        addMessage(response, "bot");
      }, delay);
    }

    // Form submit
    aiForm.addEventListener("submit", (e) => {
      e.preventDefault();
      handleSend(aiInput.value);
    });

    // Suggestion chips
    if (aiSuggestions) {
      aiSuggestions.querySelectorAll(".ai-suggestion-chip").forEach((chip) => {
        chip.addEventListener("click", () => {
          const question = chip.getAttribute("data-q");
          handleSend(question);
        });
      });
    }

    // Open/close panel
    const openAssistant = () => {
      aiWidget.classList.add("open");
      aiPanel.setAttribute("aria-hidden", "false");
      setTimeout(() => aiInput.focus(), 350);
    };

    aiToggleBtn.addEventListener("click", openAssistant);

    if (aiBadge) {
      aiBadge.addEventListener("click", openAssistant);
      aiBadge.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          openAssistant();
        }
      });
    }

    aiCloseBtn.addEventListener("click", () => {
      aiWidget.classList.remove("open");
      aiPanel.setAttribute("aria-hidden", "true");
    });

    // Close on Escape
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && aiWidget.classList.contains("open")) {
        aiWidget.classList.remove("open");
        aiPanel.setAttribute("aria-hidden", "true");
      }
    });
  }
});

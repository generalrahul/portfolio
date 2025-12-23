export const cvData = {
  personalInfo: {
    name: "Rahul Jha",
    title: "Machine Learning | AI | Computer Vision | Web Development",
    email: "jharahul072003@gmail.com",
    phone: "+91-7082410996",
    github: "GitHub", // URL not provided in text, placeholder or generic link if user provided? No, just text. I'll put a placeholder or search if needed. For now just text.
    location: "India",
    summary: "Recent engineering graduate specializing in Machine Learning, Artificial Intelligence, Computer Vision, and Web Development. Passionate about building scalable, intelligent systems for real-world applications.",
  },
  education: [
    {
      institution: "BITS PILANI",
      degree: "B.E. Electronics and Instrumentation (Minor in Computing and Intelligence)",
      year: "2025",
      location: "Hyderabad, India",
      score: "CGPA: 7.56 / 10.0",
    },
    {
      institution: "GOVT. MODEL SR. SEC. SCHOOL",
      degree: "Class 12th",
      year: "2021",
      location: "Chandigarh, India",
      score: "95.0%",
    },
    {
      institution: "ST. JOHN'S HIGH SCHOOL",
      degree: "Class 10th",
      year: "2019",
      location: "Chandigarh, India",
      score: "93.6%",
    },
  ],
  experience: [
    {
      company: "MICRON TECHNOLOGY",
      role: "Associate Engineer – Yield Technology",
      duration: "Jan 2025 – Present",
      location: "Hyderabad, India",
      details: [
        "Performed real-time defect analytics on NAND-SSD production lines using JMP, Python, and Yield3, improving yield insights and line monitoring.",
        "Developed a Tableau dashboard that replaced legacy data visualization methods, streamlining analysis processes and reducing team workload by upto 40%.",
        "Designed trend, Pareto, and SPC charts to compare current and next-gen wafer maps. Automated end-to-end data extraction, increasing process throughput by 200%.",
        "Awarded 4 Micron Bravo Awards for analytics excellence and cross-site collaboration between India and Singapore Teams.",
      ],
    },
    {
      company: "AGNEXT TECHNOLOGIES",
      role: "Machine Learning Intern – Computer Vision",
      duration: "May 2023 – Jul 2023",
      location: "Mohali, India",
      details: [
        "Engineered OpenCV-based segmentation pipeline that reduced preprocessing latency by 30%, enabling real-time grain classification.",
        "Deployed ENet model for segmentation, achieving over 99% accuracy on a dataset of 10,000+ annotated grain images.",
        "Trained ResNet50-based classifier achieving 95%+ accuracy on 10,000+ multi-class grain samples, improving classification reliability for commercial use.",
      ],
    },
  ],
  projects: [
    {
      title: "JARVIS | AI-Powered Wardrobe and Recommender Assistant",
      techStack: "Django, MySQL, REST APIs, Python",
      details: [
        "Developed Django-based backend and REST APIs to manage clothing state, inventory, and outfit recommendations.",
        "Integrated a rule-based recommender system enhanced by user preferences and history.",
        "Added blacklist and status tracking logic to support future ML-based personalization.",
      ],
    },
    {
      title: "MARIORL | Autonomous Super Mario Player",
      techStack: "Python, PyTorch, OpenAI Gym, PPO, DQN",
      details: [
        "Developed a PPO-based agent using OpenAI Gym and PyTorch to beat DQN baseline in stability and training efficiency.",
        "Implemented custom reward shaping and early-stopping criteria, reducing training time by 15% without loss in performance.",
      ],
    },
    {
      title: "PULSEPREDICT | Heart Rate Forecasting Using LSTM",
      techStack: "Python, Keras, Pandas, Matplotlib",
      details: [
        "Built and evaluated LSTM models on wearable time-series data, achieving RMSE of 4.8 BPM and MAE improvement of 15% over baseline models.",
        "Analyzed 10,00,000+ sensor data points from Fitbit and Apple Watch; Apple Watch data showed 18% higher correlation to ECG truth data.",
      ],
    },
  ],
  skills: {
    programming: "Python, C/C++, Java, JavaScript, SQL",
    frameworks: "Django, SpringBoot, Node.js, OpenCV",
    tools: "PyTorch, TensorFlow, Keras, Pandas, NumPy, Matplotlib, Git, JMP, MySQL, MongoDB, LaTeX",
  },
  interests: "Competitive Programming, Web Dev, Machine Learning, Generative AI, Chess",
  achievements: [
    {
      title: "Top 75 – Amazon HackOn",
      description: "Amazon India – Top 75 Coders in India",
    },
    {
      title: "Winner – CCC (CSA)",
      description: "1st Place in BITS - Competitive Coding Competition",
    },
    {
      title: "Runner-Up – CV Hunt",
      description: "2nd place in BITS - OpenCV Tech Week",
    },
  ],
};

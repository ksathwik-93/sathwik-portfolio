export const RESUME_PATH = '/resume/sathwik-resume.pdf';
export const RESUME_FILENAME = 'sathwik-resume.pdf';

export const personalInfo = {
  name: 'K Sathwik Karanth',
  headline: 'Final-Year Computer Science & Engineering Student',
  focusAreas: 'Full-Stack Web Development • Software Development • Machine Learning',
  intro:
    'Final-year Computer Science and Engineering student with a keen interest in Full-Stack Web Development and software development. Enjoy building web applications and learning modern technologies related to web systems.',
  github: 'https://github.com/ksathwik-93',
  linkedin: 'https://linkedin.com/in/k-sathwik-k-739a0a38a/',
  email: 'sathwikkaranth93@gmail.com',
  location: 'Mangalore, Karnataka, India',
  graduationYear: '2027',
  cgpa: '8.2',
  resume: RESUME_PATH,
};

export const aboutText = [
  'Final-year Computer Science and Engineering student with a keen interest in Full-Stack Web Development and software development.',
  'Enjoy building web applications and learning new technologies related to modern web systems.',
  'Strong foundation in programming, databases, and problem-solving concepts.',
  'Motivated to contribute to real-world projects while continuously improving technical and professional skills.',
];

export const education = {
  institution: 'A J Institute of Engineering & Technology',
  degree: 'B.E. in Computer Science & Engineering',
  duration: 'August 2023 – May 2027',
  location: 'Mangalore, Karnataka',
  cgpa: '8.2',
};

export const skillGroups = [
  {
    title: 'Languages',
    icon: 'Code2',
    skills: ['Java', 'Python', 'C', 'HTML', 'CSS', 'JavaScript', 'Dart'],
  },
  {
    title: 'Frameworks',
    icon: 'Layers',
    skills: ['Flutter', 'Flask'],
  },
  {
    title: 'Tools & Platforms',
    icon: 'Wrench',
    skills: ['Google Cloud Platform', 'GitHub', 'Git', 'Gradle', 'Docker', 'Jenkins', 'LaTeX', 'Arduino'],
  },
  {
    title: 'Databases',
    icon: 'Database',
    skills: ['MongoDB', 'MySQL', 'SQLite'],
  },
  {
    title: 'Design & Visualization',
    icon: 'Palette',
    skills: ['Figma', 'Canva', 'Matplotlib', 'Seaborn', 'Plotly'],
  },
] as const;

export type ProjectDetail = {
  problem: string;
  approach: string;
  technologies: string[];
  implementation: string[];
  result: string;
};

export type Project = {
  id: string;
  name: string;
  date: string;
  category?: string;
  description: string;
  features: string[];
  technologies: string[];
  github?: string;
  demo?: string;
  detail: ProjectDetail;
  accent: 'emerald' | 'light';
  variant: 'featured' | 'standard' | 'compact';
};

export const projects: Project[] = [
  {
    id: 'fraud-detection',
    name: 'Online Payment Fraud Detection',
    date: 'January 2026 – Present',
    category: 'Machine Learning',
    description:
      'Built a fraud detection system using Random Forest and Logistic Regression on transactional datasets, achieving approximately 97% accuracy.',
    features: [
      'Data preprocessing',
      'Feature engineering',
      'SMOTE for class imbalance',
      'Fraud detection',
      'Real-time transaction classification',
      'Flask web application',
    ],
    technologies: ['Python', 'Machine Learning', 'Random Forest', 'Logistic Regression', 'SMOTE', 'Flask'],
    github: 'https://github.com/ksathwik-93',
    accent: 'emerald',
    variant: 'featured',
    detail: {
      problem:
        'Online payment fraud is a growing challenge in digital transactions. Detecting fraudulent activity in real-time with high accuracy is critical to protecting users and financial institutions.',
      approach:
        'Applied supervised machine learning techniques — Random Forest and Logistic Regression — to classify transactions as legitimate or fraudulent. Used SMOTE to address class imbalance in the dataset, ensuring the model learns fraud patterns effectively without bias toward the majority class.',
      technologies: ['Python', 'Scikit-learn', 'Random Forest', 'Logistic Regression', 'SMOTE', 'Flask'],
      implementation: [
        'Performed data preprocessing including cleaning, normalization, and encoding of transactional features',
        'Engineered relevant features to improve model discrimination between fraudulent and legitimate transactions',
        'Applied SMOTE (Synthetic Minority Over-sampling Technique) to balance the dataset',
        'Trained and evaluated Random Forest and Logistic Regression classifiers',
        'Deployed the trained model as a Flask web application for real-time transaction classification',
      ],
      result:
        'The system achieved approximately 97% accuracy in classifying transactions, demonstrating the effectiveness of ensemble methods combined with proper data balancing for fraud detection.',
    },
  },
  {
    id: 'women-safety',
    name: 'Women Safety Management System using IoT',
    date: 'September 2025 – November 2025',
    category: 'IoT',
    description:
      'Developed a wearable safety device using Arduino, GPS, and GSM modules to send emergency alerts with live location tracking.',
    features: [
      'SOS functionality',
      'Panic button',
      'Emergency communication',
      'Live location tracking',
      'Pre-configured emergency contacts',
      'Compact low-power embedded system',
    ],
    technologies: ['Arduino', 'GPS', 'GSM', 'IoT'],
    github: 'https://github.com/ksathwik-93',
    accent: 'light',
    variant: 'standard',
    detail: {
      problem:
        'Personal safety remains a critical concern, especially for women. There is a need for a compact, reliable, and accessible device that can quickly alert emergency contacts with location information in dangerous situations.',
      approach:
        'Designed a wearable embedded system combining Arduino microcontroller with GPS for location tracking and GSM for cellular communication. The device activates emergency protocols via a panic button, sending real-time location data to pre-configured emergency contacts.',
      technologies: ['Arduino', 'GPS Module', 'GSM Module', 'Embedded C', 'IoT'],
      implementation: [
        'Built a compact wearable hardware unit integrating Arduino, GPS, and GSM modules',
        'Implemented SOS and panic button functionality for instant emergency triggering',
        'Programmed the system to send automated SMS alerts with live GPS coordinates to pre-configured contacts',
        'Designed for low power consumption to ensure reliable operation as a portable device',
        'Enabled continuous live location tracking during emergency situations',
      ],
      result:
        'A functional, compact, low-power wearable safety device capable of sending emergency alerts with live location data to pre-configured contacts, providing an added layer of personal security.',
    },
  },
  {
    id: 'smart-home',
    name: 'Smart Home Automation System',
    date: 'January 2025 – May 2025',
    category: 'IoT',
    description:
      'Designed an IoT-based home automation system using Arduino, ESP8266, and Blynk for remote control of household appliances.',
    features: [
      'Motion sensing',
      'Temperature sensing',
      'Light sensing',
      'Automated device switching',
      'Cloud communication',
      'Wi-Fi monitoring and control',
    ],
    technologies: ['Arduino', 'ESP8266', 'Blynk', 'IoT', 'Sensors'],
    github: 'https://github.com/ksathwik-93',
    accent: 'emerald',
    variant: 'compact',
    detail: {
      problem:
        'Traditional home appliance control requires manual interaction, which is inconvenient and inefficient. There is a need for an automated, remotely accessible system that can monitor environmental conditions and control devices intelligently.',
      approach:
        'Developed an IoT-based home automation system using Arduino as the main controller, ESP8266 for Wi-Fi connectivity, and the Blynk platform for cloud-based remote monitoring and control. Integrated multiple sensors to enable automated, context-aware device switching.',
      technologies: ['Arduino', 'ESP8266', 'Blynk Cloud Platform', 'PIR Motion Sensor', 'Temperature Sensor', 'Light Sensor'],
      implementation: [
        'Integrated motion, temperature, and light sensors for environmental monitoring',
        'Connected ESP8266 module for Wi-Fi connectivity and cloud communication',
        'Configured Blynk platform for real-time remote monitoring and device control via mobile',
        'Implemented automated device switching based on sensor input (e.g., lights on when motion detected in dark conditions)',
        'Enabled Wi-Fi-based monitoring and manual override of connected appliances',
      ],
      result:
        'A functional IoT home automation system enabling both automated and remote control of household appliances through sensor-driven logic and cloud connectivity via Blynk.',
    },
  },
  {
    id: 'lifeos-app',
    name: 'LifeOS App',
    date: 'June 2026 – October 2026 ',
    category: 'Mobile App',
    description:
      'A modern life-management and productivity application built with Flutter to help users organize tasks, schedules, expenses, notes, goals, and study activities in one place, with authentication and AI-powered assistance.',
    features: [
      'Task and productivity management',
      'Calendar and activity organization',
      'Expense tracking',
      'Notes and goal management',
      'Study activity management',
      'AI-powered chat assistance',
      'User authentication',
      'Local data storage',
      'Responsive Flutter UI',
    ],
    technologies: ['Flutter', 'Dart', 'Firebase', 'Google Authentication', 'Hive', 'AI', 'Provider'],
    github: 'https://github.com/ksathwik-93',
    accent: 'emerald',
    variant: 'standard',
    detail: {
      problem:
        'Managing everyday tasks, schedules, expenses, notes, and study routines across separate applications creates friction and disorganization. Users need a unified, personalized platform to streamline their daily productivity and activities in one place.',
      approach:
        'LifeOS is a Flutter-based productivity and life-management application designed to bring everyday activities into a single organized platform. It provides features for managing tasks, calendar activities, expenses, notes, goals, and study-related activities, along with AI-powered assistance. The application uses authentication to provide a personalized experience and is designed with a modern, responsive interface for convenient day-to-day use.',
      technologies: ['Flutter', 'Dart', 'Firebase', 'Google Authentication', 'Hive', 'AI', 'Provider'],
      implementation: [
        'Task and productivity management',
        'Calendar and activity organization',
        'Expense tracking',
        'Notes and goal management',
        'Study activity management',
        'AI-powered chat assistance',
        'User authentication',
        'Local data storage',
        'Responsive Flutter UI',
      ],
      result:
        'A comprehensive life-management and productivity solution that unifies daily scheduling, task tracking, expense management, and AI assistance within a seamless, responsive Flutter mobile application.',
    },
  },
];

export const certifications = [
  {
    title: 'Tech A Java Developer Certification',
    issuer: 'Infosys Springboard',
    description:
      'Training in Java programming, object-oriented concepts, exception handling, collections, and application development.',
    skills: ['Java', 'OOP', 'Collections', 'Exception Handling'],
    icon: 'Coffee',
  },
  {
    title: 'VLSI Digital Design',
    issuer: 'Infosys Springboard',
    description:
      'Digital circuit design, logic gates, combinational and sequential circuits, and semiconductor fundamentals.',
    skills: ['Digital Circuits', 'Logic Gates', 'Semiconductors'],
    icon: 'Cpu',
  },
  {
    title: 'Generative AI for All',
    issuer: 'Infosys Springboard',
    description:
      'Generative AI, Large Language Models, prompt engineering, and AI-driven applications.',
    skills: ['Generative AI', 'LLMs', 'Prompt Engineering'],
    icon: 'Sparkles',
  },
];

export const workshops = [
  {
    title: 'AI & Cloud Cybersecurity: Building Digital Systems',
    description:
      'Exposure to AI, Cloud Computing, and Cybersecurity concepts including cloud deployment models, security practices, and AI-powered threat detection.',
    tags: ['AI', 'Cloud Computing', 'Cybersecurity', 'Threat Detection'],
    icon: 'ShieldCheck',
  },
  {
    title: 'Internet of Things (IoT) Workshop',
    description:
      'Hands-on exposure to IoT architectures, sensors, microcontrollers, real-time device communication, and connected device ecosystems.',
    tags: ['IoT', 'Sensors', 'Microcontrollers', 'Real-time Communication'],
    icon: 'Wifi',
  },
];

export const stats = [
  { label: 'CGPA', value: 8.2, suffix: '', decimals: 1 },
  { label: 'Featured Projects', value: 3, suffix: '', decimals: 0 },
  { label: 'Certifications', value: 3, suffix: '', decimals: 0 },
  { label: 'Graduation Year', value: 2027, suffix: '', decimals: 0 },
];

export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Education', href: '#education' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Contact', href: '#contact' },
];

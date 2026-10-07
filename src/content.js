// All portfolio content lives in this file. Replace any [bracketed] text with your own.
// PDFs and project images go in the public/ folder and are linked by file name, e.g. 'resume.pdf'.
// A link or PDF left as '' shows as "coming soon".

export const profile = {
  name: 'Hrushi Bhatt',
  headline: 'Computer Engineering · Iowa State University · Class of 2027',
  welcome: 'Welcome! I\'m a computer engineering senior at Iowa State University. This portfolio covers my career goals, senior design project, other projects, internships, résumé, and reflections.',
  contact: [
    { label: 'Email', value: 'hbhatt10@iastate.edu', href: 'mailto:hbhatt10@iastate.edu' },
    { label: 'Phone', value: '(630) 303-6321', href: 'tel:6303036321' },
    { label: 'LinkedIn', value: 'linkedin.com/in/hrushibhatt', href: 'https://linkedin.com/in/hrushibhatt/' },
    { label: 'GitHub', value: 'github.com/HrushiBhatt', href: 'https://github.com/HrushiBhatt' },
  ],
};

// Each string is one paragraph.
export const careerObjective = [
  'I see my career heading toward backend and full-stack engineering, with a growing interest in AI and the work of making those features reliable enough for real users. The problems I want to work on sit between the system and the user, where the technical decision and the product decision are the same decision. My experiences so far have pulled me in that direction, since I have spent time both testing how software actually behaves in people\'s hands and building the tools teams use to decide what gets built.',
  'Long term, I want to own technical direction on a product rather than a single component. What motivates that is wanting to understand the whole picture, not just my piece of it. I graduate in May 2027 and am looking for a software engineering role where I can stay close to both the code and the people using it.',
];

export const seniorDesign = {
  title: 'Cicada',
  subtitle: 'Wildfire detection network · Team sdmay27-34',
  description: 'Cicada is a network of low-power sensor nodes that watch for early signs of wildfire. Each node reads temperature, humidity, pressure, and smoke, checks the readings against alarm thresholds, and reports over LoRa to a base station. Nodes are STM32 B-L475E-IOT01A boards with a Semtech SX1272 LoRa radio, running Zephyr RTOS.',
  role: 'I am on the sensor integration team. My job is to configure each node\'s sensors so they collect accurate data in the field, and to make sure every node\'s hardware works reliably while balancing power, cost, and how it fits into the overall design. Right now I am writing skeleton code in C++ on Zephyr RTOS to test the data from each type of sensor, so all of them can be brought together on a single node.',
  skills: ['Zephyr RTOS', 'Embedded C++', 'Sensor integration and calibration', 'Power and cost tradeoffs', 'Hardware testing', 'Reading datasheets'],
  bigPicture: 'Every alert Cicada sends starts with a sensor reading. If a sensor is inaccurate or a node fails in the field, the network either misses a fire or raises a false alarm. My work makes each node reliable and practical to deploy, so the rest of the system has trustworthy data to act on.',
  links: [
    { label: 'Project Website', href: 'https://sdmay27-34.sd.ece.iastate.edu/' },
  ],
};

export const projects = [
  {
    title: 'NerdMarket',
    course: 'COMS 3090',
    image: 'images/nerdmarket.jpg',
    imagePosition: '50% 8%',
    description: 'A stock-market-style marketplace for Pokémon, Magic: The Gathering, and Yu-Gi-Oh! cards. Users track live prices, see the biggest movers, manage a card binder, and chat in card-specific rooms.',
    role: 'Backend Developer on a four-person team. I built the pipeline that merges three card APIs into one schema, the price analytics, real-time chat and notifications, and the CI pipeline.',
    skills: ['REST API design', 'Real-time messaging', 'Integrating external APIs', 'Database design', 'CI/CD'],
    resources: ['Java', 'Spring Boot', 'MySQL', 'Spring WebSockets', 'GitLab CI/CD', 'OpenCV', 'JPA/Hibernate'],
  },
  {
    title: 'Autonomous Navigation Robot',
    course: 'CPRE 2880',
    image: 'images/robot.jpg',
    imagePosition: '50% 45%',
    description: 'A Roomba-based robot that drives itself through a room of obstacles and measures the distance and width of each object it finds. Readings stream to a live radar map on a laptop.',
    role: 'Embedded Software Engineer on a four-person team. I worked on the C firmware for the servo sweep and sensors, the IR and ultrasonic calibration, and the Python radar GUI.',
    skills: ['Bare-metal C', 'Sensor calibration', 'Designing around unreliable sensors', 'Socket communication'],
    resources: ['C', 'ARM Cortex-M4', 'IR and ultrasonic sensors', 'Python', 'Tkinter', 'Matplotlib'],
  },
  {
    title: 'RISC-V Processors',
    course: 'CPRE 3810',
    image: 'images/riscv.png',
    imageFit: 'contain',
    description: 'Three RISC-V processors built in structural VHDL: a single-cycle design, a five-stage pipeline with software scheduling, and a pipeline with hardware forwarding and hazard detection.',
    role: 'Two-person team. I designed the datapath and control logic, added the forwarding and hazard detection units, and verified each design with ModelSim waveforms.',
    skills: ['Datapath and control design', 'Pipelining', 'Hazard detection and forwarding', 'Waveform debugging'],
    resources: ['VHDL', 'ModelSim', 'Quartus', 'RARS', 'RISC-V Assembly'],
  },
];

// evaluation and presentations are optional; leave them as '' to hide them.
export const internships = [
  {
    position: 'Technical Product Manager Intern',
    company: 'Motorola Mobility LLC',
    location: 'Chicago, Illinois',
    dates: 'May 2026 – Present',
    duties: 'Built an internal monetization platform that shows business teams which apps and services ship on each Motorola phone. Before it existed, answering that question required the physical device. I built the React interface, the Flask API and database behind it, and deployed the service on Google Cloud. It now supports internal users across all business teams.',
    technicalSkills: ['React.js', 'JavaScript', 'Flask', 'PostgreSQL', 'Docker', 'Google Cloud Platform', 'API performance tuning', 'Cloud SQL'],
    softSkills: ['Software Development Life Cycle', 'User Research', 'Stakeholder Communication', 'Cross-Functional Collaboration', 'Problem-Solving', 'Adaptability'],
    evaluation: 'The internship was extended into the fall.',
    presentations: 'Demoed the platform in sprint reviews throughout the summer to manager and stakeholders.',
  },
  {
    position: 'Product Operations Engineering Intern',
    company: 'Motorola Mobility LLC',
    location: 'Chicago, Illinois',
    dates: 'June 2025 – July 2025',
    duties: 'Tested Android and carrier builds before release and tracked each defect through to a fix. Evaluated Moto AI and Gemini against real user flows, tested third-party camera apps against the native camera, and benchmarked AI features against Apple, Samsung, and Google devices. Improved error handling in the Moto Migrate app and redesigned parts of its interface in Figma, reaching over four million users.',
    technicalSkills: ['ADB', 'Fastboot', 'Android SDK', 'Android Mobile Testing', 'Figma', 'Competitive Analysis', 'A/B Testing', 'Jira'],
    softSkills: ['Organization', 'User Research', 'Communication', 'Collaboration', 'Project Ownership', 'Presenting to executives'],
    evaluation: 'Returned to Motorola the next summer as a Technical Product Manager Intern.',
    presentations: 'Presented a business case, on a three-person team, to directors and executives.',
  },
  {
    position: 'IT Support Specialist',
    company: 'Iowa State University IT Solution Center',
    location: 'Ames, Iowa',
    dates: 'January 2025 – May 2026',
    duties: 'Resolved system, network, and endpoint incidents each week for students, faculty, and staff. Diagnosed account, device, and connectivity issues and tracked each ticket through to resolution to keep campus technology running reliably.',
    technicalSkills: ['Microsoft Entra', 'Cisco DNA', 'ServiceNow', 'Network Troubleshooting', 'Endpoint Support'],
    softSkills: ['Customer Service', 'Communication', 'Problem-Solving', 'Time Management'],
    evaluation: '',
    presentations: '',
  },
];

export const resume = {
  pdf: 'Hrushi-Bhatt-Portfolio-Resume.pdf',
  awards: [
    { title: 'Journey Award', detail: 'Iowa State University · August 2023 – Present' },
    { title: 'Expedition Award', detail: 'Iowa State University · August 2023 – Present' },
  ],
  activities: [
    { title: 'Iowa State Ultimate Frisbee Club', detail: 'Captain/Vice President · May 2024 – Present' },
    { title: 'Cyclone Racing Formula SAE', detail: 'Member · August 2023 – May 2024' },
  ],
};

export const reflections = [
  {
    label: 'General Education Reflection',
    title: '',
    summary: 'How courses in personal finance, business law, international studies, and leadership taught me to see the costs, rules, cultures, and people around every engineering decision.',
    pdf: 'General-Education-Reflection-HrushiBhatt.pdf',
  },
  {
    label: 'Cumulative Reflection',
    title: '',
    summary: 'A look back at how Iowa State University changed the way I approach engineering, through coursework, team projects, and two internships.',
    pdf: 'cumulative-reflection.pdf',
  },
  {
    label: 'Ethics Paper',
    title: '',
    summary: 'How my ethics course changed my view of engineering: being a good engineer means thinking about who my work affects, not just solving the problem efficiently.',
    pdf: 'ethics-reflection.pdf',
  },
];

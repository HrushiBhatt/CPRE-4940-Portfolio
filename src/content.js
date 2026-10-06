// All portfolio content lives in this file. Replace any [bracketed] text with your own.
// PDFs and project images go in the public/ folder and are linked as '/file-name'.
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
  role: 'I own the smoke detection module in the node firmware. I wrote the interface for the Sensirion SEN5x sensor (PM2.5 and VOC readings), the alarm check, and a stub driver so the alarm path can be tested before the hardware arrives.',
  skills: ['Zephyr RTOS', 'Embedded C++', 'Sensor driver design', 'LoRa / LoRaWAN', 'Reading datasheets', 'Testing without hardware'],
  bigPicture: 'Smoke is the most direct sign of a fire. My module turns raw sensor readings into an alarm the node can send over LoRa, which is the signal the rest of the system acts on.',
  links: [
    { label: 'Project Website', href: '' },
    { label: 'Design Document', href: '' },
  ],
};

export const projects = [
  {
    title: 'NerdMarket',
    course: 'COMS 3090',
    image: '/images/nerdmarket.jpg',
    imagePosition: '50% 8%',
    description: 'A stock-market-style marketplace for Pokémon, Magic: The Gathering, and Yu-Gi-Oh! cards. Users track live prices, see the biggest movers, manage a card binder, and chat in card-specific rooms.',
    role: 'Backend Engineer on a four-person team. I built the pipeline that merges three card APIs into one schema, the price analytics, real-time chat and notifications, and the CI pipeline.',
    skills: ['REST API design', 'Real-time messaging', 'Integrating external APIs', 'Database design', 'CI/CD'],
    resources: ['Java', 'Spring Boot', 'MySQL', 'Spring WebSockets', 'GitLab CI/CD', 'Swagger'],
  },
  {
    title: 'Autonomous Object-Mapping Robot',
    course: 'CPRE 2880',
    image: '/images/robot.jpg',
    imagePosition: '50% 45%',
    description: 'A Roomba-based robot that drives itself through a room of obstacles and measures the distance and width of each object it finds. Readings stream to a live radar map on a laptop.',
    role: 'Embedded Software Engineer. I worked on the C firmware for the servo sweep and sensors, the IR and ultrasonic calibration, and the Python radar GUI.',
    skills: ['Bare-metal C', 'Sensor calibration', 'Designing around unreliable sensors', 'Socket communication'],
    resources: ['C', 'ARM Cortex-M4', 'IR and ultrasonic sensors', 'Python', 'Tkinter', 'Matplotlib'],
  },
  {
    title: 'RISC-V Processors',
    course: 'CPRE 3810',
    image: '/images/riscv.png',
    imageFit: 'contain',
    description: 'Three RISC-V processors built in structural VHDL: a single-cycle design, a five-stage pipeline with software scheduling, and a pipeline with hardware forwarding and hazard detection. Each was verified against the RARS simulator on benchmark programs.',
    role: 'Hardware Design Engineer. I designed the datapath and control logic, added the forwarding and hazard detection units, and verified each design with ModelSim waveforms.',
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
    technicalSkills: ['React', 'Flask', 'PostgreSQL', 'Docker', 'Google Cloud', 'API performance tuning'],
    softSkills: ['Product judgment', 'Building for non-technical users', 'Stakeholder communication'],
    evaluation: 'The internship was extended into the fall.',
    presentations: 'Demoed the platform in sprint reviews throughout the summer.',
  },
  {
    position: 'Product Operations Engineering Intern',
    company: 'Motorola Mobility LLC',
    location: 'Chicago, Illinois',
    dates: 'June 2025 – July 2025',
    duties: 'Tested Android and carrier builds before release and tracked each defect through to a fix. Evaluated Moto AI and Gemini against real user flows, tested third-party camera apps against the native camera, and benchmarked AI features against Apple, Samsung, and Google devices. Improved error handling in Moto Migrate with Java and redesigned parts of its interface in Figma, reaching over four million users.',
    technicalSkills: ['ADB', 'Fastboot', 'Android testing', 'Java', 'Figma'],
    softSkills: ['Writing clear defect reports', 'Breaking features into test cases', 'Presenting to executives'],
    evaluation: 'Returned to Motorola the next summer as a Technical Product Manager Intern.',
    presentations: 'Presented a cross-device AI concept with my team to executives, who approved it.',
  },
];

export const resume = {
  pdf: '', // Put your resume at public/resume.pdf, then set this to '/resume.pdf'
  research: [
    { title: '[Paper or research title]', detail: '[Where published · Year]' },
  ],
  awards: [
    { title: '[Award name]', detail: '[Organization · Year]' },
  ],
  activities: [
    { title: 'Iowa State Ultimate Frisbee Club', detail: 'Captain & Vice President · May 2024 – Present' },
    { title: 'Cyclone Racing Formula SAE', detail: 'Electrical Systems Engineer · Aug 2023 – May 2024' },
  ],
};

export const reflections = [
  {
    label: 'General Education Reflection',
    title: '',
    summary: '[A short summary of your general education reflection.]',
    pdf: '', // Put the PDF in public/ and set this to its path
  },
  {
    label: 'Cumulative Reflection',
    title: 'A Reflective Journey: Navigating My Cumulative Experience at Iowa State University',
    summary: 'A look back at how Iowa State changed the way I approach engineering, through coursework, team projects, and two internships at Motorola.',
    pdf: '/cumulative-reflection.pdf',
  },
  {
    label: 'Ethics Paper',
    title: 'Ethics Term Reflection',
    summary: 'How my ethics course changed my view of engineering: being a good engineer means thinking about who my work affects, not just solving the problem efficiently.',
    pdf: '/ethics-reflection.pdf',
  },
];

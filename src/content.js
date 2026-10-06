// All portfolio content lives in this file.
// Replace the [bracketed] placeholders with your own information.
// To add more items (internships, awards, links, etc.), copy an entry and edit it.

export const profile = {
  name: 'Your Name',
  headline: '[Your Major] · [Your University]',
  intro: '[A one or two sentence introduction about who you are.]',
  contact: [
    { label: 'Email', value: 'you@example.com', href: 'mailto:you@example.com' },
    { label: 'Phone', value: '(000) 000-0000', href: 'tel:0000000000' },
    { label: 'LinkedIn', value: 'linkedin.com/in/your-profile', href: 'https://linkedin.com/in/your-profile' },
    { label: 'GitHub', value: 'github.com/your-username', href: 'https://github.com/your-username' },
  ],
};

// Each string is one paragraph.
export const careerObjective = [
  '[Where do you see your career heading? What kinds of problems do you want to work on?]',
  '[What are your long-term goals, and what is motivating them?]',
];

export const seniorDesign = {
  title: '[Senior Design Project Title]',
  description: '[Describe the project: the problem, the approach, and the outcome.]',
  role: '[Describe your role and responsibilities on the team.]',
  skills: ['[Skill or knowledge]', '[Skill or knowledge]', '[Skill or knowledge]'],
  bigPicture: '[Explain how your work contributed to the project as a whole and its broader impact.]',
  links: [
    { label: '[Project Website]', href: '#' },
    { label: '[Design Document]', href: '#' },
    { label: '[Final Report]', href: '#' },
  ],
};

export const projects = [
  {
    title: '[Project One Title]',
    description: '[Describe the project.]',
    role: '[Describe your role.]',
    skills: ['[Skill]', '[Skill]', '[Skill]'],
    resources: ['[Tool / Resource]', '[Tool / Resource]'],
  },
  {
    title: '[Project Two Title]',
    description: '[Describe the project.]',
    role: '[Describe your role.]',
    skills: ['[Skill]', '[Skill]', '[Skill]'],
    resources: ['[Tool / Resource]', '[Tool / Resource]'],
  },
  {
    title: '[Project Three Title]',
    description: '[Describe the project.]',
    role: '[Describe your role.]',
    skills: ['[Skill]', '[Skill]', '[Skill]'],
    resources: ['[Tool / Resource]', '[Tool / Resource]'],
  },
];

export const internships = [
  {
    position: '[Position Title]',
    company: '[Company Name]',
    location: '[City, State]',
    dates: '[Month Year – Month Year]',
    description: '[Describe what you worked on, what you learned, and the impact you had.]',
  },
];

export const resume = {
  pdf: '/resume.pdf', // Put your resume at public/resume.pdf
  research: [
    { title: '[Paper or Research Title]', detail: '[Journal / Conference / Lab · Year]', href: '#' },
  ],
  awards: [
    { title: '[Award Name]', detail: '[Issuer · Year]' },
  ],
  activities: [
    { title: '[Organization or Activity]', detail: '[Role · Years]' },
  ],
};

// Each string is one paragraph.
export const generalEdReflection = [
  '[Reflect on your general education courses and how they shaped your perspective.]',
];

// Each string is one paragraph.
export const cumulativeReflection = [
  '[Reflect on your growth across your entire degree program.]',
];

export const ethicsPaper = {
  title: '[Ethics Paper Title]',
  summary: '[A short summary or abstract of your ethics paper.]',
  pdf: '/ethics-paper.pdf', // Put your paper at public/ethics-paper.pdf
};

import {
  Award,
  BrainCircuit,
  Cloud,
  Code2,
  Database,
  Github,
  GraduationCap,
  HeartPulse,
  Instagram,
  Linkedin,
  Mail,
  Network,
  ShieldCheck,
  Trophy,
  Users,
  Volleyball,
} from 'lucide-react';

export const profile = {
  name: 'Vinay Bokka',
  heroName: 'VINAY',
  brand: 'Full Stack Developer • Cybersecurity Enthusiast • AI Explorer • Creative Technologist',
  tagline: 'Full Stack Developer • Cybersecurity Enthusiast • AI Explorer',
  intro:
    'Building immersive digital experiences through intelligent systems, secure architectures, and futuristic web technologies.',
  email: 'bokkavinay1221@gmail.com',
  phone: '+91 7816070766',
  location: 'Amalapuram, Andhra Pradesh',
  resume: '/Vinay_Bokka_Resume.pdf',
  socials: [
    { label: 'GitHub', href: 'https://github.com/Vinay-507', icon: Github },
    { label: 'LinkedIn', href: 'http://www.linkedin.com/in/vinay-bokka', icon: Linkedin },
    { label: 'Instagram', href: '#contact', icon: Instagram },
    { label: 'Gmail', href: 'mailto:bokkavinay1221@gmail.com', icon: Mail },
  ],
};

export const stats = [
  { label: 'Projects', value: 6, suffix: '+' },
  { label: 'Certifications', value: 7, suffix: '+' },
  { label: 'Technologies', value: 18, suffix: '+' },
  { label: 'Internships', value: 2, suffix: '' },
];

export const skills = [
  'Java',
  'Python',
  'JavaScript',
  'React',
  'Node.js',
  'HTML',
  'CSS',
  'Tailwind CSS',
  'Flask',
  'MySQL',
  'MongoDB',
  'AWS',
  'GitHub',
  'OpenCV',
  'TensorFlow',
  'Cybersecurity',
  'Networking',
  'Linux',
];

export const projects = [
  {
    title: 'HealthAI',
    icon: HeartPulse,
    period: 'May 2025 - Jul 2025',
    description: 'AI healthcare assistant built with IBM Granite during the Generative AI internship.',
    stack: ['IBM Granite', 'Generative AI', 'IBM Cloud', 'Prompt Engineering'],
    features: ['Healthcare assistant workflows', 'AI-driven guidance', 'Internship capstone build'],
  },
  {
    title: 'Smart Attendance System',
    icon: ShieldCheck,
    period: 'Jan 2025 - Mar 2025',
    description:
      'Face recognition attendance automation system using OpenCV, RetinaFace, ArcFace, Flask, and MySQL.',
    stack: ['Python', 'OpenCV', 'Flask', 'MySQL', 'RetinaFace', 'ArcFace'],
    features: ['95% efficiency improvement', 'Team lead for 4 members', 'Automated classroom attendance'],
  },
  {
    title: 'Lung Cancer Detection Using CNN',
    icon: BrainCircuit,
    period: 'Oct 2025 - Dec 2025',
    description: 'Deep learning application for CT scan image prediction using TensorFlow and CNN.',
    stack: ['Python', 'Flask', 'TensorFlow', 'Keras', 'CNN', 'HTML', 'CSS'],
    features: ['CT scan uploads', 'Image preprocessing', 'Real-time prediction UI'],
  },
  {
    title: 'MediFolio',
    icon: HeartPulse,
    period: 'Concept Platform',
    description:
      'Healthcare support platform integrating medicine guidance, doctor support, and digital healthcare services.',
    stack: ['React', 'Node.js', 'MongoDB', 'Healthcare UX'],
    features: ['Medicine guidance', 'Doctor support flows', 'Digital healthcare access'],
  },
  {
    title: 'Campus Digital Library',
    icon: Database,
    period: 'Academic Platform',
    description: 'Digital knowledge hub for students providing centralized academic resources.',
    stack: ['HTML', 'CSS', 'JavaScript', 'Database Design'],
    features: ['Centralized resources', 'Student-first discovery', 'Academic content hub'],
  },
  {
    title: 'AWS Serverless Infrastructure Project',
    icon: Cloud,
    period: 'Jan 2024 - Jun 2024',
    description: 'Serverless cloud infrastructure project using AWS services and cloud architecture principles.',
    stack: ['AWS EC2', 'S3', 'IAM', 'Lambda', 'Cloud Architecture'],
    features: ['Serverless workflows', 'Cloud resource design', 'Data engineering foundations'],
  },
];

export const certifications = [
  'Fundamentals of Cybersecurity - ZSCALAR, 2025',
  'Cyber Security and Privacy - NPTEL, 2024',
  'Industry 4.0 & Industrial Internet of Things - NPTEL, 2023',
  'Mastering Figma: Beginner to Expert UI/UX Design - GUVI, 2024',
  'Energy Literacy Training - Energy Swaraj Foundation, 2024',
  'Generative AI Internship - SmartBridge with APSCHE, 2025',
  'AWS Cloud & Data Engineering Internship - EduSkills with APSCHE, 2024',
];

export const timeline = [
  {
    title: 'B.Tech Computer Science Engineering',
    meta: 'Usha Rama College of Engineering and Technology | 2022 - 2026',
    body: 'Graduated with CGPA 8.77, building a foundation in DBMS, OS, computer networks, cybersecurity basics, programming, and system design.',
    icon: GraduationCap,
  },
  {
    title: 'AWS Cloud & Data Engineering Internship',
    meta: 'EduSkills with APSCHE | Jan 2024 - Jun 2024',
    body: 'Built hands-on understanding of EC2, S3, IAM, Lambda, data pipelines, storage, and cloud processing.',
    icon: Cloud,
  },
  {
    title: 'Smart India Hackathon Leadership',
    meta: 'Team Lead',
    body: 'Led a team of four, coordinating project tasks, delivery, collaboration, and problem-solving under tight timelines.',
    icon: Users,
  },
  {
    title: 'Generative AI with IBM Cloud Internship',
    meta: 'SmartBridge with APSCHE | May 2025 - Jul 2025',
    body: 'Applied Generative AI concepts by building HealthAI with the IBM Granite model.',
    icon: BrainCircuit,
  },
  {
    title: 'CyberClue Technical Event Coordination',
    meta: 'College Fest',
    body: 'Handled logistics, volunteer management, and execution for a technical event with strong participation.',
    icon: Network,
  },
  {
    title: 'NSS & Volleyball Leadership',
    meta: 'Community and Sports',
    body: 'Participated in a week-long NSS camp, helped organize a free medical camp, and led the college volleyball team to 1st place.',
    icon: Trophy,
  },
];

export const highlights = [
  { label: 'Programming', value: 'Python, Java', icon: Code2 },
  { label: 'Web Systems', value: 'React, Flask, HTML, CSS, Tailwind', icon: BrainCircuit },
  { label: 'Cloud + Data', value: 'AWS, MySQL, MongoDB', icon: Cloud },
  { label: 'Security Core', value: 'Cybersecurity, Networks, Linux', icon: ShieldCheck },
  { label: 'Leadership', value: 'SIH, CyberClue, NSS, Volleyball', icon: Volleyball },
  { label: 'Recognition', value: '7 certifications and internship credentials', icon: Award },
];

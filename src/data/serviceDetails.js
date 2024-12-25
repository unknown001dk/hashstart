import { 
  Code, 
  Smartphone, 
  TrendingUp, 
  Zap, 
  Database, 
  Cloud, 
  Shield, 
  Settings,
  Globe,
  Layout,
  MessageSquare,
  Search,
  Cpu,
  Bot,
  LineChart
} from 'lucide-react';

export const serviceDetails = [
  {
    id: 'web-development',
    icon: Code,
    title: 'Web Development',
    category: 'Development',
    description: 'Custom websites and web applications built with modern frameworks and best practices.',
    features: [
      'Responsive Design',
      'Progressive Web Apps (PWA)',
      'SEO Optimization',
      'Performance Optimization',
      'Custom CMS Integration',
      'E-commerce Solutions'
    ],
    technologies: [
      'React',
      'Next.js',
      'Vue',
      'Node.js',
      'TypeScript',
      'GraphQL',
      'MongoDB',
      'PostgreSQL'
    ],
    process: [
      'Requirements Analysis',
      'UI/UX Design',
      'Development',
      'Testing',
      'Deployment',
      'Maintenance'
    ],
    caseStudies: [
      {
        title: 'E-commerce Platform',
        description: 'Built a scalable e-commerce platform handling 10k+ daily users',
        metrics: '200% increase in sales'
      },
      {
        title: 'SaaS Dashboard',
        description: 'Developed a comprehensive analytics dashboard',
        metrics: '45% improvement in user engagement'
      }
    ]
  },
  {
    id: 'mobile-development',
    icon: Smartphone,
    title: 'Mobile Development',
    category: 'Development',
    description: 'Native and cross-platform mobile applications for iOS and Android.',
    features: [
      'Native iOS Development',
      'Native Android Development',
      'Cross-Platform Solutions',
      'Push Notifications',
      'Offline Support',
      'App Store Optimization'
    ],
    technologies: [
      'React Native',
      'Swift',
      'Kotlin',
      'Flutter',
      'Firebase',
      'Redux',
      'MobX'
    ],
    process: [
      'Platform Strategy',
      'UX Design',
      'Development',
      'Testing',
      'App Store Submission',
      'Monitoring'
    ],
    caseStudies: [
      {
        title: 'Fitness Tracking App',
        description: 'Developed a comprehensive fitness app with social features',
        metrics: '1M+ downloads'
      },
      {
        title: 'Food Delivery Platform',
        description: 'Built a real-time food delivery tracking system',
        metrics: '98% delivery success rate'
      }
    ]
  },
  {
    id: 'ui-design',
    icon: Layout,
    title: 'UI/UX Design',
    category: 'Design',
    description: 'User-centered design solutions that enhance user experience and engagement.',
    features: [
      'User Research',
      'Wireframing',
      'Prototyping',
      'Visual Design',
      'Interaction Design',
      'Usability Testing'
    ],
    technologies: [
      'Figma',
      'Adobe XD',
      'Sketch',
      'InVision',
      'Principle',
      'Zeplin'
    ],
    process: [
      'User Research',
      'Information Architecture',
      'Wireframing',
      'Visual Design',
      'Prototyping',
      'User Testing'
    ],
    caseStudies: [
      {
        title: 'Banking App Redesign',
        description: 'Redesigned a banking app improving user satisfaction',
        metrics: '60% reduction in support tickets'
      },
      {
        title: 'E-learning Platform',
        description: 'Designed an intuitive learning experience',
        metrics: '85% course completion rate'
      }
    ]
  },
  {
    id: 'ai-ml',
    icon: Bot,
    title: 'AI & Machine Learning',
    category: 'Development',
    description: 'Advanced AI solutions for business automation and intelligence.',
    features: [
      'Predictive Analytics',
      'Natural Language Processing',
      'Computer Vision',
      'Recommendation Systems',
      'Automated Decision Making',
      'Data Mining'
    ],
    technologies: [
      'TensorFlow',
      'PyTorch',
      'Scikit-learn',
      'OpenAI API',
      'Azure ML',
      'AWS SageMaker'
    ],
    process: [
      'Data Collection',
      'Data Preprocessing',
      'Model Development',
      'Training',
      'Validation',
      'Deployment'
    ],
    caseStudies: [
      {
        title: 'Customer Churn Prediction',
        description: 'Implemented ML model for predicting customer churn',
        metrics: '35% reduction in churn rate'
      },
      {
        title: 'Automated Content Moderation',
        description: 'Built AI-powered content moderation system',
        metrics: '99.5% accuracy rate'
      }
    ]
  },
  {
    id: 'data-analytics',
    icon: LineChart,
    title: 'Data Analytics',
    category: 'Development',
    description: 'Transform your data into actionable insights for better decision making.',
    features: [
      'Business Intelligence',
      'Data Visualization',
      'Real-time Analytics',
      'Custom Dashboards',
      'Predictive Analytics',
      'Data Integration'
    ],
    technologies: [
      'Power BI',
      'Tableau',
      'Python',
      'R',
      'SQL',
      'Apache Spark'
    ],
    process: [
      'Data Assessment',
      'Data Cleaning',
      'Analysis',
      'Visualization',
      'Reporting',
      'Optimization'
    ],
    caseStudies: [
      {
        title: 'Retail Analytics Platform',
        description: 'Developed comprehensive retail analytics solution',
        metrics: '25% increase in inventory efficiency'
      },
      {
        title: 'Marketing Analytics',
        description: 'Built marketing performance tracking system',
        metrics: '40% improvement in ROI'
      }
    ]
  },
  {
    id: 'cloud-services',
    icon: Cloud,
    title: 'Cloud Solutions',
    category: 'Development',
    description: 'Scalable cloud infrastructure and migration services.',
    features: [
      'Cloud Migration',
      'Infrastructure as Code',
      'Serverless Architecture',
      'DevOps Integration',
      'Microservices',
      'Container Orchestration'
    ],
    technologies: [
      'AWS',
      'Azure',
      'Google Cloud',
      'Docker',
      'Kubernetes',
      'Terraform'
    ],
    process: [
      'Assessment',
      'Planning',
      'Migration',
      'Testing',
      'Optimization',
      'Monitoring'
    ],
    caseStudies: [
      {
        title: 'Enterprise Cloud Migration',
        description: 'Migrated legacy systems to cloud infrastructure',
        metrics: '45% cost reduction'
      },
      {
        title: 'Serverless Application',
        description: 'Built scalable serverless architecture',
        metrics: '99.99% uptime achieved'
      }
    ]
  }
];
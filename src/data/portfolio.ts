export interface NavLink {
  label: string;
  href: string;
}

export const navLinks: NavLink[] = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export const profile = {
  fullName: "AicaDev",
  legalName: "Angelica Unclara",
  initials: "AD",
  username: "aicadev",
  tagline: "AI Automation Specialist · Marketing Operations · Workflow Automation",
  primaryTitle: "AI Automation Specialist",
  secondaryTitle: "Marketing Operations Professional",
  location: "Pampanga, Philippines",
  availability: "Open to remote opportunities",
  email: "[Professional Email]",
  linkedin: "[LinkedIn URL]",
  github: "[GitHub URL]",
  resumeUrl: "[Resume File URL]",
  resumeFilename: "AicaDev-AI-Automation-Specialist-Resume.pdf",
};


export interface CredibilityCard {
  title: string;
  description: string;
}

export const credibility: CredibilityCard[] = [
  {
    title: "Marketing Operations Experience",
    description:
      "Hands-on experience managing data-heavy workflows, direct-mail operations, quality checks, customer records, and team reporting.",
  },
  {
    title: "Practical Workflow Automation",
    description:
      "Designing automations that connect email, documents, spreadsheets, cloud storage, Slack, OCR, and business applications.",
  },
  {
    title: "Data and Document Processing",
    description:
      "Working with large datasets, inconsistent file structures, PDF documents, Excel files, field mappings, and validation rules.",
  },
];

export const principles: CredibilityCard[] = [
  {
    title: "Process Before Tools",
    description:
      "I understand the complete workflow before selecting an automation platform or technical solution.",
  },
  {
    title: "Reliable Data Handling",
    description:
      "I design workflows with validation rules, duplicate checking, error handling, structured logging, and clear outputs.",
  },
  {
    title: "Human-Centered Automation",
    description:
      "I automate repetitive work while preserving human review for sensitive, unclear, or high-risk decisions.",
  },
  {
    title: "Continuous Improvement",
    description:
      "I test, document, monitor, and improve automations based on actual operational feedback.",
  },
];

export interface SkillCategory {
  title: string;
  icon: string;
  description: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    title: "Workflow Automation",
    icon: "Workflow",
    description: "Designing reliable end-to-end automations with clear logic, routing, and recovery.",
    skills: [
      "n8n",
      "Workflow Design",
      "Trigger and Action Logic",
      "Conditional Routing",
      "Scheduled Automation",
      "Error Handling",
      "Fallback Routes",
      "Human-in-the-Loop Workflows",
      "Webhook Concepts",
      "Workflow Documentation",
    ],
  },
  {
    title: "AI and Document Automation",
    icon: "Sparkles",
    description: "Combining AI, OCR, and rules to process documents and route ambiguous cases to review.",
    skills: [
      "AI-Assisted Workflows",
      "Prompt Engineering",
      "OCR",
      "PDF Data Extraction",
      "Invoice Processing",
      "Job Number Extraction",
      "Document Validation",
      "Rule-Based Classification",
      "Data Matching",
      "Manual Review Routing",
    ],
  },
  {
    title: "Integrations",
    icon: "Plug",
    description: "Connecting the everyday tools operations teams actually use.",
    skills: [
      "Outlook",
      "Gmail",
      "Slack",
      "Google Sheets",
      "Google Drive",
      "Microsoft Excel",
      "REST APIs",
      "Microsoft Graph Concepts",
      "Cloud Storage",
      "Email Automation",
    ],
  },
  {
    title: "Data and Development",
    icon: "Database",
    description: "Clean, mapped, validated data — the foundation of trustworthy automation.",
    skills: [
      "Python",
      "JavaScript",
      "SQL",
      "MySQL",
      "SQLite",
      "JSON",
      "CSV Processing",
      "Excel Processing",
      "pandas",
      "Data Cleaning",
      "Field Standardization",
      "Schema Mapping",
      "Regular Expressions",
    ],
  },
  {
    title: "Marketing Operations",
    icon: "Mailbox",
    description: "Real business context behind the automation — the workflows themselves.",
    skills: [
      "Direct-Mail Operations",
      "CRM Workflows",
      "Database Management",
      "Quality Assurance",
      "Opt-Out Processing",
      "File Validation",
      "Return-to-Sender Processing",
      "Phone Removal",
      "Operational Reporting",
      "Process Documentation",
      "Cross-Team Coordination",
    ],
  },
];

export interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  summary: string;
  bullets: string[];
}

export const experience: ExperienceItem[] = [
  {
    role: "Marketing Operations Assistant",
    company: "Community Minerals",
    period: "Oct 2025 – Present",
    summary:
      "Manage data-heavy marketing operations processes while identifying opportunities to reduce manual work through automation, validation, structured data workflows, and process documentation.",
    bullets: [
      "Manage recurring marketing operations workflows involving direct-mail databases, customer records, spreadsheets, CRM information, file validation, quality checks, and operational reporting.",
      "Process and validate large datasets that may contain approximately 50,000 to 200,000 records.",
      "Support direct-mail, well-matching, pooling-order, return-to-sender, opt-out, phone-removal, and database-standardization processes.",
      "Participated in a field-standardization project involving 537 source files, approximately 166 distinct column variations, and 38 target standard fields.",
      "Compare source files against master templates, rearrange columns, preserve existing values, insert missing fields, and flag unrecognized columns.",
      "Design automation workflows connecting email, Slack, cloud storage, Google Sheets, file attachments, PDFs, OCR tools, and databases.",
      "Create workflow rules for job-number extraction, attachment classification, duplicate prevention, validation, logging, and error reporting.",
      "Collaborate with managers, quality-assurance reviewers, database specialists, and other operations team members.",
      "Build and test automation prototypes while considering account permissions, company-security restrictions, and human approval requirements.",
      "Document workflows so that processes can be reviewed, improved, and transferred to other team members.",
    ],
  },
];

export interface PortfolioProject {
  id: string;
  title: string;
  status: string;
  problem: string;
  solution: string;
  workflow: string[];
  tools: string[];
  skills: string[];
  categories?: string[];
  note?: string;
  githubUrl?: string;
  caseStudyUrl?: string;
  featured: boolean;
}

export const projects: PortfolioProject[] = [
  {
    id: "email-attachment-dtm",
    title: "Email Attachment Classification and DTM Tracker Automation",
    status: "Working Prototype",
    problem:
      "Direct-mail emails contain multiple attachments that must be manually downloaded, classified, stored in separate folders, and logged in a tracking spreadsheet.",
    solution:
      "Designed an n8n workflow that detects selected emails, validates the sender or subject, extracts the job number, retrieves attachments, classifies files by filename and category, uploads them to the correct Google Drive folders, and updates a Google Sheets tracker.",
    workflow: [
      "Email Trigger",
      "Sender and Subject Filter",
      "Job Number Extraction",
      "Attachment Retrieval",
      "File Classification",
      "Conditional Routing",
      "Google Drive Upload",
      "Google Sheets Logging",
      "Missing File Validation",
      "Error Notification",
    ],
    categories: ["Clean List or DTM", "Undeliverables", "Removed Records", "Duplicates"],
    tools: ["n8n", "Gmail", "Outlook", "Google Drive", "Google Sheets", "JavaScript", "Conditional Logic", "Regular Expressions"],
    skills: [
      "Email automation",
      "Attachment processing",
      "File classification",
      "Conditional routing",
      "Spreadsheet logging",
      "Error handling",
      "Business process mapping",
    ],
    note: "Uses temporary email forwarding during testing while company account permissions are being reviewed.",
    githubUrl: "[GitHub URL]",
    caseStudyUrl: "#",
    featured: true,
  },
  {
    id: "outlook-slack-county",
    title: "Outlook-to-Slack County Summary Automation",
    status: "Tested Prototype",
    problem:
      "County information and mailing totals from approval emails must be manually reviewed, reformatted, and posted to Slack.",
    solution:
      "Built an automation that monitors selected emails, extracts county information and totals from the email body, removes unnecessary signature content, validates the information, formats it into a clear message, and sends it to Slack.",
    workflow: [
      "Email Trigger",
      "Sender Validation",
      "Subject Filtering",
      "HTML Cleaning",
      "County Data Extraction",
      "Mailing Total Validation",
      "Slack Message Formatting",
      "Slack Channel Notification",
    ],
    tools: ["n8n", "Outlook", "Gmail", "Slack API", "JavaScript", "HTML Parsing", "Regular Expressions"],
    skills: [
      "Text parsing",
      "API integration",
      "Slack automation",
      "Email filtering",
      "Data transformation",
      "Message formatting",
    ],
    note: "Tested using a personal mailbox while company Outlook integration requires administrative approval.",
    githubUrl: "[GitHub URL]",
    caseStudyUrl: "#",
    featured: true,
  },
  {
    id: "invoice-ocr-slack",
    title: "Invoice OCR and Slack Thread Matching Workflow",
    status: "In Development",
    problem:
      "Invoices are received separately from Slack job posts, making manual matching, validation, and spreadsheet logging repetitive and vulnerable to errors.",
    solution:
      "Designed a workflow that records job numbers from Slack posts, monitors incoming invoice emails, downloads invoice PDFs, extracts job numbers using OCR, validates the match, updates an invoice tracker, and replies to the original Slack thread.",
    workflow: [
      "Slack Job Post Trigger",
      "Job Number Extraction",
      "Slack Thread Reference Storage",
      "Invoice Email Trigger",
      "PDF Attachment Download",
      "OCR Processing",
      "Job Number Validation",
      "Duplicate Check",
      "Google Sheets Update",
      "Slack Thread Reply",
      "Manual Review Route for Errors",
    ],
    tools: ["n8n", "Slack", "Outlook", "OCR", "PDF Processing", "Google Sheets", "JavaScript", "Validation Logic"],
    skills: [
      "Multi-system automation",
      "OCR",
      "Thread matching",
      "Document processing",
      "Validation logic",
      "Duplicate prevention",
      "Error handling",
    ],
    note: "Automation architecture and initial workflow nodes have been developed, with integration testing ongoing.",
    githubUrl: "[GitHub URL]",
    caseStudyUrl: "#",
    featured: true,
  },
  {
    id: "database-column-standardization",
    title: "Database Column Standardization and File Rearrangement",
    status: "Operational Data Project",
    problem:
      "Hundreds of source files contain inconsistent column names, column sequences, data formats, missing fields, and additional unrecognized fields.",
    solution:
      "Created a structured process for comparing files against a master template, renaming approved field variations, rearranging columns, adding blank fields for missing columns, preserving all data, and flagging additional columns for review.",
    workflow: [
      "Load Master Template",
      "Read Source File",
      "Compare Headers",
      "Match Approved Field Variations",
      "Rename Columns",
      "Reorder Columns",
      "Insert Missing Columns",
      "Move Extra Columns to the Right",
      "Validate Data Preservation",
      "Export Standardized File",
      "Record Flagged Fields",
    ],
    tools: ["Python", "pandas", "Excel", "CSV", "Data Validation", "Field Mapping", "Schema Standardization"],
    skills: [
      "Data engineering fundamentals",
      "Schema mapping",
      "Data integrity",
      "File processing",
      "Quality assurance",
      "Dataset standardization",
    ],
    note: "Project scope: 537 source files, approximately 166 distinct column variations, and 38 target standard fields.",
    githubUrl: "[GitHub URL]",
    caseStudyUrl: "#",
    featured: true,
  },
  {
    id: "ai-image-search",
    title: "AI-Powered Image Search Desktop Application",
    status: "Portfolio Project",
    problem:
      "Users need a fast, focused way to search and browse high-quality reference imagery without navigating a full browser experience.",
    solution:
      "Developed a Python desktop application that allows users to search for high-quality images using the Unsplash API and browse results through a responsive graphical interface.",
    workflow: [
      "Keyword-based image search",
      "Unsplash API integration",
      "Search history",
      "Carousel navigation",
      "Responsive image display",
      "Error handling",
      "Modern desktop interface",
    ],
    tools: ["Python", "CustomTkinter", "Unsplash API", "Requests", "Pillow", "JSON"],
    skills: [
      "Python development",
      "API integration",
      "Desktop interface development",
      "Data handling",
      "Error management",
      "User experience design",
    ],
    githubUrl: "[GitHub URL]",
    caseStudyUrl: "#",
    featured: false,
  },
];

export interface ProcessStep {
  title: string;
  description: string;
  icon: string;
}

export const processSteps: ProcessStep[] = [
  { title: "Discover", icon: "Search", description: "Understand the complete manual workflow, users, systems, data sources, pain points, and business requirements." },
  { title: "Map", icon: "GitBranch", description: "Document triggers, actions, decisions, fields, exceptions, dependencies, and expected outputs." },
  { title: "Build", icon: "Wrench", description: "Create the workflow using n8n, Python, JavaScript, APIs, AI services, spreadsheets, or database tools." },
  { title: "Validate", icon: "ShieldCheck", description: "Check required fields, job numbers, duplicates, file categories, data types, and matching rules." },
  { title: "Handle Errors", icon: "AlertTriangle", description: "Create fallback routes, notifications, logs, retry logic, and manual-review queues." },
  { title: "Improve", icon: "TrendingUp", description: "Monitor outputs and refine the workflow using real operational feedback." },
];

export interface TechGroup {
  title: string;
  description: string;
  items: string[];
}

export const techGroups: TechGroup[] = [
  {
    title: "Primary Tools",
    description: "Daily drivers for building and shipping automations.",
    items: ["n8n", "Python", "Google Sheets", "Microsoft Excel", "Outlook", "Gmail", "Slack", "Google Drive", "JavaScript", "JSON", "CSV"],
  },
  {
    title: "Working Knowledge",
    description: "Comfortable applying in production-adjacent workflows.",
    items: ["REST APIs", "MySQL", "SQLite", "OCR", "pandas", "Regular Expressions", "Microsoft Graph Concepts", "GitHub", "HTML Parsing", "Power BI Fundamentals"],
  },
  {
    title: "Currently Expanding",
    description: "Active areas of learning and prototyping.",
    items: ["AI Agents", "Retrieval-Augmented Generation", "Local AI Assistants", "Advanced API Integrations", "Automated Testing", "Data Pipelines", "Secure Enterprise Automation", "Workflow Monitoring", "Cloud Deployment"],
  },
];

export const education = {
  degree: "Bachelor of Science in Information Technology",
  university: "[University Name]",
  year: "[Graduation Year]",
  summary:
    "Continuously developing skills in AI automation, n8n, Python, API integration, databases, data engineering, marketing technology, and secure workflow design.",
  exploring: [
    "AI agents",
    "Retrieval-augmented generation",
    "Local AI assistants",
    "Advanced n8n workflows",
    "Secure API integrations",
    "Automated workflow testing",
    "Data engineering fundamentals",
    "Workflow observability",
    "Cloud deployment",
  ],
};

export const projectTypes = [
  "AI Automation",
  "n8n Workflow",
  "Marketing Automation",
  "Email Integration",
  "Data Processing",
  "Document Automation",
  "Other",
];

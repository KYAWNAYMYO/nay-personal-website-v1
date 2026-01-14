export const companyLinks = {
    'NCS Group': 'https://www.ncs.co/en-sg/about-us/',
    'NEC Asia Pacific': 'https://sg.nec.com/en_SG/about/index.html',
    'RCL Feeder': 'https://www.rclgroup.com/LocalInfo-Contacts/Singapore',
};

export const profile = {
    name: 'Nay Myo Kyaw',
    title: 'Software Engineer',
    summary: [
        "Hi! My name is Nay Myo Kyaw. I'm a Software Engineer from Myanmar. I am passionate about building systems that support our daily operations. From small CRUD applications, WebAPIs to large ERP solutions.",
        'Most recently, I was a Senior Application Consultant at NCS Group (Singapore), where I contributed to the development, implementation, and support of various applications for clients in different sectors, such as government, healthcare, education, and transportation.',
        'I also worked at NEC Asia Pacific on the Enforcement Management module, which deals with all Enforcement actions like Warning Letters, Notice of Composition, Notice to Attend Court, Summons, and related processes like Case Tracking, Orders/Notices, Financial Penalty, and Minimal Cases.',
        'When I am not coding, you can find me travelling, scuba diving, streaming video games on Twitch, attempting digital art, or binging anime and TV shows.',
    ],
};

export const navSections = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Me' },
    { id: 'experience', label: 'Work Experience' },
    { id: 'skills', label: 'Skills' },
    { id: 'education', label: 'Education' },
    { id: 'contact', label: 'contact Me' },
];

export const workHistory = [
    {
        role: 'Senior Application Consultant',
        company: 'NEC Asia Pacific Pte Ltd',
        start: 'November 2022',
        end: 'November 2023',
        description: [
            '- Participated in requirement gathering, designing and developing crucial project using C#.NET, MS SQL, Javascript with SDLC for the client.',
            '- Designed and created AD-HOC reports using Microsoft RDLC Report as user requested.',
            '- Developed batch jobs for file transfer and processing for integrated systems.',
            '- Led implementation of first-time user experiences like file transfer jobs for data migration from Microsoft Sharepoint to Microsoft Azure BLOB Storage using .NET Core.',
            '- Integrated the third-party APIs into Enforcement Management module and website.',
            '- Supported platform stability and performance across frontend and backend infrastructure.',
        ],
    },
    {
        role: 'Senior Application Consultant',
        company: 'NCS Group',
        start: 'December 2014',
        end: 'November 2022',
        description: [
            '- Participated in requirement gathering, designing and developing crucial Geolocation and Geoprocessing based projects using C#.NET, MS SQL, Javascript, JQuery, Angular JS, NODE JS, J2EE, Oracle SQL, ESRI ArcGIS tools with SDLC for the client. ' +
            '- Designed and created AD-HOC reports using Crystal Report, Microsoft RDLC Report as user requested.' +
            '- Developed core social and meta-game systems such as streak leaderboards, group leaderboards, and a full discussion board with replies, likes, comments, and reporting.',
            '- Led implementation of first-time serverless jobs on AWS',
            '- Integrated the third-party APIs into Enforcement Management module and website.',
            '- Maintained e-portal application (Angular and Java) with concurrent users, partaking in ops, on-call rotations, resolving bugs, updating dependencies, and maintaining releases while developing features for deployment.',
            '- Improved system by ~9% through various A/B tests focused on user behavior, such as recording searching and interface changes.',
            '- Supported platform stability and performance across frontend and backend infrastructure.',
        ],
    },
    {
        role: 'Analyst Programmer',
        company: 'RCL Feeder Pte. Ltd.',
        start: 'January 2013',
        end: 'August 2014',
        description: [
            "- Participated in developing crucial projects in J2EE with SDLC for the company.",
            '- Designed and created business financial reports as user requested.',
            '- Supported existing systems for users (Bug Fixing, Ad hoc reports, etc.)',
            '- Made improvements to the current systems to reduce manual work and to deliver timely reports to users.',
        ],
    }
];

export const skills = {
    Technologies: [
        '.NET',
        '.NET Core',
        'JAVA',
        'Sprint boot',
        'Angular',
        'RxJS',
        'Vue',
        'AWS',
        'MSSQL',
        'Oracle SQL',
        'MySQL',
        'PostgreSQL',
        'Docker',
        'Git',
    ],
    Languages: [
        'C#',
        'JavaScript',
        'TypeScript',
        'HTML & CSS',
        'Java',
        'Python',
        'SQL',
    ],
    Others: ['Web Components', 'UX / UI design', 'Technical writing', 'Systems Analysis and Design', 'System Evaluation'],
};

export const education = {
    institution: "McCombs School of Business, The University of Texas at Austin",
    program: 'Post Graduate Program in Artificial Intelligence and Machine Learning: Business Applications',
    start: 'November 2023',
    end: 'July 2024',
    modules: [
        "Python Foundations",
        "Machine Learning",
        "Advanced Machine Learning",
        "Introduction to Neutral Networks",
        "Introduction to Computer Vision",
        "Introduction to Natural Language Processing",
    ],
    institution2: "Institute of Systems Science, National University Singapore",
    program2: 'Graduate Diploma in Systems Analysis',
    start2: 'September 2012',
    end2: 'August 2011',
    modules2: [
        "Methodology (ADLC)",
        "Technology (Distributed Computing Infrastructure)",
        "Databases (Databases, SQL Programming)",
        "Programming: C# Suite(Fundamentals of Programming using C#, Object Oriented Programming using C#,  User Interface Development with Visual Studio.NET and C#,  Developing Enterprise Systems with .NET Framework)",
        "Programming: Java Suite(Java Programming, Advanced Java, Building Enterprise Application using J2EE)",
        "Internet Application Development (Multimedia And Internet Technology, Internet Programming With Microsoft .NET Framework)",
        "Project Management (Roles and Responsibilities, Project Planning and Control, Change Management and Control, Business Communication)",
        "Mobile Solution (Mobile Application Development with Android Platform)",
    ],
    institution3: "University of Dagon, Yangon",
    program3: 'Bachelor of Arts (English)',
    start3: 'December 2002',
    end3: 'September 2005',
    institution4: "University of Yangon",
    program4: 'Diploma in Information and Communication Technology',
    start4: 'September 2004',
    end4: 'January 2006',
};

export type ContactLink = {
    label: string;
    icon: string;
    href: string;
};

export const contactLinks: ContactLink[] = [
    {
        label: 'Email',
        icon: 'Mail',
        href: 'mailto:naymyokyaw21@gmail.com',
    },
    {
        label: 'Resume',
        icon: 'FileText',
        href: '/resume.pdf',
    },
    {
        label: 'LinkedIn',
        icon: 'Linkedin',
        href: 'https://www.linkedin.com/in/nay-kyaw-6b734437/',
    },
    {
        label: 'GitHub',
        icon: 'Github',
        href: 'https://github.com/KYAWNAYMYO',
    },
];

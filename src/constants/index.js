export const navLinks = [
    {
        id: 1,
        name: 'Home',
        href: '#home',
    },
    {
        id: 2,
        name: 'About',
        href: '#about',
    },
    {
        id: 3,
        name: 'Work',
        href: '#work',
    },
    {
        id: 4,
        name: 'Contact',
        href: '#contact',
    },
];

export const clientReviews = [
    {
        id: 1,
        name: 'Emily Johnson',
        position: 'Marketing Director at GreenLeaf',
        img: 'assets/review1.png',
        review:
            'Working with Adrian was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.',
    },
    {
        id: 2,
        name: 'Mark Rogers',
        position: 'Founder of TechGear Shop',
        img: 'assets/review2.png',
        review:
            'Adrian’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional! Fantastic work.',
    },
    {
        id: 3,
        name: 'John Dohsas',
        position: 'Project Manager at UrbanTech ',
        img: 'assets/review3.png',
        review:
            'I can’t say enough good things about Adrian. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.',
    },
    {
        id: 4,
        name: 'Ether Smith',
        position: 'CEO of BrightStar Enterprises',
        img: 'assets/review4.png',
        review:
            'Adrian was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend backend dev are top-notch.',
    },
];

export const myProjects = [
    {
        title: 'Startupitch - Startup Pitching Platform',
        desc: 'A dynamic platform that empowers individuals to share their innovative startup ideas and explore the creative visions of others online.',
        subdesc:
            'A Next.js 15 platform containing its latest features such as Incremental Static Regeneration (ISR), Server-Side Rendering (SSR) and Partial Prerendering (PPR).',
        href: 'https://startupitch.vercel.app/',
        texture: '/textures/project/project1.png',
        logo: '/assets/project-logo1.png',
        logoStyle: {
            backgroundColor: '#2A1816',
            border: '0.2px solid #36201D',
            boxShadow: '0px 0px 60px 0px #AA3C304D',
        },
        spotlight: '/assets/spotlight1.png',
        tags: [
            {
                id: 1,
                name: 'Next.js',
                path: '/assets/nextjs.png',
            },
            {
                id: 2,
                name: 'TypeScript',
                path: '/assets/typescript.png',
            },
            {
                id: 3,
                name: 'ShadCN UI',
                path: '/assets/shadcn.png',
            },
            {
                id: 4,
                name: 'Tailwind CSS',
                path: 'assets/tailwindcss.png',
            },
        ],
    },
    {
        title: 'Anand Raj - My Portfolio',
        desc: "The primary objective of this project is to showcase the developer's technical expertise and creativity in a visually engaging and interactive manner, leaving a memorable impression on visitors while highlighting their unique skills and attention to detail.",
        subdesc:
            'Built using React.js to manage the dynamic and interactive user interface, Three.js to render stunning 3D elements and animations, and styled with the modern utility-first framework TailwindCSS for a sleek and responsive design, the 3D Minimalistic Portfolio is an innovative website project.',
        href: 'https://anandraj.vercel.app/',
        texture: '/textures/project/project2.png',
        logo: '/assets/project-logo2.png',
        logoStyle: {
            backgroundColor: '#13202F',
            border: '0.2px solid #17293E',
            boxShadow: '0px 0px 60px 0px #2F6DB54D',
        },
        spotlight: '/assets/spotlight2.png',
        tags: [
            {
                id: 1,
                name: 'JavaScript',
                path: '/assets/javascript.png',
            },
            {
                id: 2,
                name: 'React.js',
                path: '/assets/react.svg',
            },
            {
                id: 3,
                name: 'Tailwind CSS',
                path: 'assets/tailwindcss.png',
            },
            {
                id: 4,
                name: 'Three.js',
                path: '/assets/threejs.png',
            },
            {
                id: 5,
                name: 'Framer Motion',
                path: '/assets/framer.png',
            },
        ],
    },
];

export const calculateSizes = (isSmall, isMobile, isTablet) => {
    return {
        deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
        deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
        cubePosition: isSmall ? [4, -5, 0] : isMobile ? [5, -5, 0] : isTablet ? [5, -5, 0] : [9, -5.5, 0],
        reactLogoPosition: isSmall ? [3, 4, 0] : isMobile ? [5, 4, 0] : isTablet ? [5, 4, 0] : [12, 3, 0],
        ringPosition: isSmall ? [-5, 7, 0] : isMobile ? [-10, 10, 0] : isTablet ? [-12, 10, 0] : [-24, 10, 0],
        targetPosition: isSmall ? [-5, -10, -10] : isMobile ? [-9, -10, -10] : isTablet ? [-11, -7, -10] : [-13, -13, -10],
    };
};

export const workExperiences = [
    {
        id: 1,
        name: 'Looking For The First Client',
        pos: '',
        duration: '',
        title: "I specialize in HTML, JavaScript, TypeScript, React.js, Next.js, and Three.js, and I’m currently seeking my first client to help bring their ideas to life with cutting-edge web solutions. If you're interested in working together, don't hesitate to reach out, click on ' I'm Interested '",
        icon: 'logo.png',
        animation: 'victory',
    },
    // {
    //     id: 2,
    //     name: 'Figma',
    //     pos: 'Web Developer',
    //     duration: '2020 - 2022',
    //     title: "Figma is my collaborative design platform of choice. I utilize it to work seamlessly with team members and clients, facilitating real-time feedback and design iterations. Its cloud-based.",
    //     icon: '/assets/figma.svg',
    //     animation: 'clapping',
    // },
    // {
    //     id: 3,
    //     name: 'Notion',
    //     pos: 'Junior Web Developer',
    //     duration: '2019 - 2020',
    //     title: "Notion helps me keep my projects organized. I use it for project management, task tracking, and as a central hub for documentation, ensuring that everything from design notes to.",
    //     icon: '/assets/notion.svg',
    //     animation: 'salute',
    // },
];
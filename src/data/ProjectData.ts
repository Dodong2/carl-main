/* data */
import type { ProjectsTypes } from "../types/shared-types";
/* images */
import Project1 from '../assets/images/Proj1.png'
import Project2 from '../assets/images/Proj2.png'

export const ProjectData: ProjectsTypes[] = [
    {
        id: "1",
        projectTitle: "Inventory",
        created: '2025',
        image: Project1,
        descriptions: [
            'Health Electronic Alert Network',
            'AppCon is a competition focused on developing web or mobile applications that aim to resolve social issues in the Philippines.',
            ' Since this is a team project, my contributions were in front-end development,',
            ' where I coded the UI design into the website and hosted it.'
        ],
        projectStats: [
            { label: 'MongoDB', value: 100 },
            { label: 'Express.js', value: 100 },
            { label: 'React.js', value: 100 },
            { label: 'Node.js', value: 100 }
        ]
    },
    {
        id: "2",
        projectTitle: "LMS",
        created: '2025',
        image: Project2,
        descriptions: [
            'PHP - CRUD',
            'I created this project to learn the basics of backend development.',
            'In this project, I performed CRUD operations using PHP and MySQL, and hosted it on InfinityFree.',
        ],
        projectStats: [
            { label: 'Next.ts', value: 100 },
            { label: 'Prisma ORM', value: 100 },
            { label: 'Postgresql', value: 100 },
            { label: 'Docker', value: 100 }
        ]
    }
]
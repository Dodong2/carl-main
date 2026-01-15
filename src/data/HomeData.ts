/* types */
import type { HomeTypes } from "../types/shared-types";
/* images */
import Me from '../assets/images/Me.png'

export const HomeData: HomeTypes[] = [
    {
        id: '1',
        image: Me,
        dialogue: [
            "Greetings! My name is Carl Stephen Arocha. I'm currently a fourth-year BSIT student and a vibe coder full stack developer.",
            "As a web developer, I'm still at the beginner level, but I'm constantly learning and building projects to level up my skills.",
            "I'm eager to expand my portfolio and open to collaborating on projects that match my skill set. Check out my skills and experience below!",
            "Please click continue to view my resume and see what this warrior can bring to the table!",
            "Thank you for taking the time to learn more about me. Let's build something awesome together!"
        ],
        buttonLabels: [
            { label: 'Resume/Stats' },
            { label: 'continue' },
        ]
    }
]  
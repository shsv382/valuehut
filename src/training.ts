// Here you can add the new coaching and training. 
// Use Interface below as a template to add right fields 
// when you will create a new training

// Important!
// Each word of title should be in Capitalize Case

export interface PriceTypes {
    [key: string]: number | undefined
}

export interface StreamTypes {
    date: any,
    price: PriceTypes
}

export interface TrainingTypes {
    id: number,
    title: string,
    acronym?: string,
    description?: string,
    iconURL?: string,
    iconBorder?: string,
    imageURL: string,
    whatWillILearn?: string,
    whoShouldAttend?: string,
    streams?: StreamTypes[], 
    isTraining?: boolean
    
    // Please Note!
    /*
        Dates should be created by JavaScript method in UTC format
        new Date("2023-03-11T11:30:00+09:00")
    */
}

interface TrainingObject {
    coaching: TrainingTypes[],
    training: TrainingTypes[]
}

export const training:TrainingObject = {
    coaching: [
        {
            id: 1,
            title: "Enterprise and Organizational Coaching",
            acronym: "",
            description: `Efforts to embark on Agility at the team level especially when it doesn’t involve the whole organisation could be an uphill battle; we advise our clients that in other to deliver sustainable and long-lasting change, agility should be introduced using a “whole organisation” approach to agility. This approach however comes with it own sets of challenges which might be familiar to you.`,
            imageURL: "./cameron.jpg",
            iconURL: "",
            iconBorder: "https://static.scrum.org/web/tokens/token-psm-color.svg",
            whatWillILearn: `Typical challenges that are faced include:
            \n•	Resistance at different levels within the organisation.\n
            \n•	Organisational structure & culture that is not optimised for Agility.\n
            \n•	Disjointed perceptions of the current and the future state for the Organisation across the Organisation.\n
            `,
            whoShouldAttend: `We have helped a lot of organisation to navigate these kinds of challenges to deliver true agility across the enterprise by leverage their experience and skills in Large scale facilitation, co-creation of outcomes and the use of experimentation across the enterprise.`,
            isTraining: true
        }, {
            id: 5,
            title: "Team Coaching",
            acronym: "",
            description: `Far too many teams are “Doing Agile” rather than “Being Agile”. Often times, the this could mean that the “Agile Rituals” are being done but Agile doesn’t seem to be delivering on it’s promise. The Principles of Agile are very simple but take a long time to be consistent in its application to every aspect of Delivery.`,
            imageURL: "./mikael.jpg",
            iconURL: "",
            iconBorder: "https://static.scrum.org/web/tokens/token-psm-color.svg",
            whatWillILearn: `Our Agile coaches apply their extensive knowledge of Agile principles and framework to guide struggling individual and teams. Our mission is to unlock the potentials in every individual and team so that they can continue to deliver better products faster. Our Agile coaches engage with your team in a number of roles as Agile Coaches, Scrum Master and sometime as Delivery Managers; the mission remains the same regardless of the role that is being filled with one of our coaches.
            `,
            whoShouldAttend: `We have helped a lot of organisation to navigate these kinds of challenges to deliver true agility across the enterprise by leverage their experience and skills in Large scale facilitation, co-creation of outcomes and the use of experimentation across the enterprise.`,
            isTraining: true
        }
    ],
    training: [
        {
            id: 2,
            title: "Professional Scrum Master",
            acronym: "PSM",
            description: `The PSM is an interactive, activity-based course where 
                        students gain insight into Professional Scrum and the 
                        role of the Scrum Master. The class is structured through 
                        a combination of discussion and exercises. This enables 
                        students to develop a deep understanding of the 
                        underlying principles of Scrum and the Agile mindset 
                        while learning the practices applied by successful Scrum 
                        Teams. PSM is recommended for organisation leaders 
                        including Mid-Level Managers, Project Managers, Project 
                        Management Office Managers, Senior Practitioners, 
                        anyone working within a Product Team or anyone who 
                        intends to become a Scrum Master. The class is delivered 
                        over a two days (8hrs per day).`,
            imageURL: "./energy.jpg",
            iconURL: "https://static.scrum.org/web/logos/psm.svg",
            iconBorder: "https://static.scrum.org/web/tokens/token-psm-color.svg",
            whatWillILearn: `Through this online interactive mentoring and coaching program of 16 hours of learning, ending with a coaching session for continuous growth, you will be able to advance the HOW TO dimension of ScrumMastering and agile coaching, and grow skills that help improve your Scrum Team, organizations and yourself. You can join from anywhere online. However please note that there is pre-work prior and homework after each online mentoring and coaching session (read more in commitment session).`,
            whoShouldAttend: `The Advanced Certified ScrumMaster workshop requires previous Scrum knowledge and experience.

            This is NOT a session for those who are new to Agile and Scrum.
            
            All attendees must have the Certified ScrumMaster certification (CSM) and with a minimum of one year practice prior to the Advanced Certified ScrumMaster (A-CSM) workshop. If you don’t currently have a CSM certification, please contact us for options.
            
            Participants should be passionate in advancing as a ScrumMaster and an Agile coach, and therefore be willing to challenge their own thinking and approaches within this course.`,
            streams: [
                {
                    date: new Date("2023-06-11T11:30:00+07:00"),
                    price: {
                        "us": 1000,
                        "uk": 800,
                        "africa": 500
                    }
                },
                {
                    date: new Date("2023-07-11T11:30:00+09:00"),
                    price: {
                        "us": 1000,
                        "uk": 800,
                        "africa": 500
                    }
                }
            ],
            isTraining: true
        },
        {
            id: 3,
            title: "Professional Agile Leadership",
            acronym: "PAL-E",
            description: `Leaders at all levels play a vital role in the Agile 
                        Transformational Journey of their organisation. PAL 
                        is structured to help managers at all levels who 
                        work with agile teams on developing the required 
                        mindset for Agility to thrive and teach techniques for 
                        building effective organisations. The PAL class is highly 
                        recommended for C- Suite Executives, Middle-Level 
                        Management, Agile Team Leaders, and Human Resource 
                        Leaders. The class can be delivered over a two days (8hrs 
                        per day) class or a four days (4hrs per day) class.`,
            imageURL: "./fauxels.jpg",
            iconURL: "https://static.scrum.org/web/logos/pal-e.svg",
            iconBorder: "https://static.scrum.org/web/tokens/token-psm-color.svg",
            whatWillILearn: `Through this online interactive mentoring and coaching program of 16 hours of learning, ending with a coaching session for continuous growth, you will be able to advance the HOW TO dimension of ScrumMastering and agile coaching, and grow skills that help improve your Scrum Team, organizations and yourself. You can join from anywhere online. However please note that there is pre-work prior and homework after each online mentoring and coaching session (read more in commitment session).`,
            whoShouldAttend: `The Advanced Certified ScrumMaster workshop requires previous Scrum knowledge and experience.
            This is NOT a session for those who are new to Agile and Scrum.
            All attendees must have the Certified ScrumMaster certification (CSM) and with a minimum of one year practice prior to the Advanced Certified ScrumMaster (A-CSM) workshop. If you don’t currently have a CSM certification, please contact us for options.
            Participants should be passionate in advancing as a ScrumMaster and an Agile coach, and therefore be willing to challenge their own thinking and approaches within this course.`,
            streams: [
                {
                    date: new Date("2023-06-11T11:30:00+07:00"),
                    price: {
                        "us": 1000,
                        "uk": 800,
                        "africa": 500
                    }
                },
                {
                    date: new Date("2023-07-11T11:30:00+09:00"),
                    price: {
                        "us": 1000,
                        "uk": 800,
                        "africa": 500
                    }
                }
            ],
            isTraining: true
        },
        {
            id: 4,
            title: "Applying Professional Scrum",
            acronym: "APS",
            description: `The APS is a hands-on, activity-based course in which 
                        students experience how Professional Scrum and the Scrum framework 
                        improves their capacity to deliver 
                        value compared to traditional methods. Scrum enables 
                        a better way of working that highlights the use of 
                        experimentation, incremental delivery of customer value, 
                        frequent feedback loops and the fostering of strong team 
                        dynamics. The course is high recommended for teams 
                        that already work together in an organisation to improve 
                        their ways of working using Scrum. The class is delivered 
                        over a two days (8hrs per day).`,
            imageURL: "./morillo.jpg",
            iconURL: "",
            iconBorder: "https://static.scrum.org/web/tokens/token-psm-color.svg",
            whatWillILearn: `Through this online interactive mentoring and coaching program of 16 hours of learning, ending with a coaching session for continuous growth, you will be able to advance the HOW TO dimension of ScrumMastering and agile coaching, and grow skills that help improve your Scrum Team, organizations and yourself. You can join from anywhere online. However please note that there is pre-work prior and homework after each online mentoring and coaching session (read more in commitment session).`,
            whoShouldAttend: `The Advanced Certified ScrumMaster workshop requires previous Scrum knowledge and experience.

            This is NOT a session for those who are new to Agile and Scrum.
            
            All attendees must have the Certified ScrumMaster certification (CSM) and with a minimum of one year practice prior to the Advanced Certified ScrumMaster (A-CSM) workshop. If you don’t currently have a CSM certification, please contact us for options.
            
            Participants should be passionate in advancing as a ScrumMaster and an Agile coach, and therefore be willing to challenge their own thinking and approaches within this course.`,
            streams: [
                {
                    date: new Date("2023-06-11T11:30:00+07:00"),
                    price: {
                        "us": 1000,
                        "uk": 800,
                        "africa": 500
                    }
                },
                {
                    date: new Date("2023-07-11T11:30:00+09:00"),
                    price: {
                        "us": 1000,
                        "uk": 800,
                        "africa": 500
                    }
                }
            ],
            isTraining: true
        }
    ]
}
// Here you can add the new coaching and training. 
// Use Interface below as a template to add right fields 
// when you will create a new training

// Important!
// Each word of title should be in Capitalize Case

export interface TrainingTypes {
    id: number,
    title: string,
    acronym?: string,
    description?: string,
    iconURL?: string,
    iconBorder?: string,
    imageURL?: string,
    price?: number,
    whatWillILearn?: string,
    whoShouldAttend?: string,
    dates?: any[]    // Please Note!
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
            title: "Enterprise Coaching",
            acronym: "",
            description: `Value Hut transforms organisations using a Top – Down 
                        approach; we would usually take a holistic view of the 
                        organisation and assist in building a structure that 
                        promotes autonomy, self-mastery and clarifies purpose. 
                        Our Agile Coaches engage with Leaders within the 
                        organisation to understand the pain points and then 
                        working with Leaders to co-creates experiments that 
                        would help develop the required mindset to alleviate 
                        these pain points.`,
            imageURL: "./landscape-large.jpg",
            iconURL: "",
            iconBorder: "https://static.scrum.org/web/tokens/token-psm-color.svg",
            price: 1000,
            whatWillILearn: `Through this online interactive mentoring and coaching program of 16 hours of learning, ending with a coaching session for continuous growth, you will be able to advance the HOW TO dimension of ScrumMastering and agile coaching, and grow skills that help improve your Scrum Team, organizations and yourself. You can join from anywhere online. However please note that there is pre-work prior and homework after each online mentoring and coaching session (read more in commitment session).`,
            whoShouldAttend: `The Advanced Certified ScrumMaster workshop requires previous Scrum knowledge and experience.

            This is NOT a session for those who are new to Agile and Scrum.
            
            All attendees must have the Certified ScrumMaster certification (CSM) and with a minimum of one year practice prior to the Advanced Certified ScrumMaster (A-CSM) workshop. If you don’t currently have a CSM certification, please contact us for options.
            
            Participants should be passionate in advancing as a ScrumMaster and an Agile coach, and therefore be willing to challenge their own thinking and approaches within this course.`,
            dates: [
                new Date("2023-06-11T11:30:00+07:00"),
                new Date("2023-07-11T11:30:00+09:00"),
                new Date("2023-08-11T11:30:00+11:00")
            ]
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
            imageURL: "./business.jpg",
            iconURL: "https://static.scrum.org/web/logos/psm.svg",
            iconBorder: "https://static.scrum.org/web/tokens/token-psm-color.svg",
            price: 1000,
            whatWillILearn: `Through this online interactive mentoring and coaching program of 16 hours of learning, ending with a coaching session for continuous growth, you will be able to advance the HOW TO dimension of ScrumMastering and agile coaching, and grow skills that help improve your Scrum Team, organizations and yourself. You can join from anywhere online. However please note that there is pre-work prior and homework after each online mentoring and coaching session (read more in commitment session).`,
            whoShouldAttend: `The Advanced Certified ScrumMaster workshop requires previous Scrum knowledge and experience.

            This is NOT a session for those who are new to Agile and Scrum.
            
            All attendees must have the Certified ScrumMaster certification (CSM) and with a minimum of one year practice prior to the Advanced Certified ScrumMaster (A-CSM) workshop. If you don’t currently have a CSM certification, please contact us for options.
            
            Participants should be passionate in advancing as a ScrumMaster and an Agile coach, and therefore be willing to challenge their own thinking and approaches within this course.`,
            dates: [
                new Date("2023-06-11T11:30:00+07:00"),
                new Date("2023-07-11T11:30:00+09:00"),
                new Date("2023-08-11T11:30:00+11:00")
            ]
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
            imageURL: "./business.jpg",
            iconURL: "https://static.scrum.org/web/logos/pal-e.svg",
            iconBorder: "https://static.scrum.org/web/tokens/token-psm-color.svg",
            price: 1000,
            whatWillILearn: `Through this online interactive mentoring and coaching program of 16 hours of learning, ending with a coaching session for continuous growth, you will be able to advance the HOW TO dimension of ScrumMastering and agile coaching, and grow skills that help improve your Scrum Team, organizations and yourself. You can join from anywhere online. However please note that there is pre-work prior and homework after each online mentoring and coaching session (read more in commitment session).`,
            whoShouldAttend: `The Advanced Certified ScrumMaster workshop requires previous Scrum knowledge and experience.

            This is NOT a session for those who are new to Agile and Scrum.
            
            All attendees must have the Certified ScrumMaster certification (CSM) and with a minimum of one year practice prior to the Advanced Certified ScrumMaster (A-CSM) workshop. If you don’t currently have a CSM certification, please contact us for options.
            
            Participants should be passionate in advancing as a ScrumMaster and an Agile coach, and therefore be willing to challenge their own thinking and approaches within this course.`,
            dates: [
                new Date("2023-06-11T11:30:00+07:00"),
                new Date("2023-07-11T11:30:00+09:00"),
                new Date("2023-08-11T11:30:00+11:00")
            ]
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
            imageURL: "./business.jpg",
            iconURL: "",
            iconBorder: "https://static.scrum.org/web/tokens/token-psm-color.svg",
            price: 1000,
            whatWillILearn: `Through this online interactive mentoring and coaching program of 16 hours of learning, ending with a coaching session for continuous growth, you will be able to advance the HOW TO dimension of ScrumMastering and agile coaching, and grow skills that help improve your Scrum Team, organizations and yourself. You can join from anywhere online. However please note that there is pre-work prior and homework after each online mentoring and coaching session (read more in commitment session).`,
            whoShouldAttend: `The Advanced Certified ScrumMaster workshop requires previous Scrum knowledge and experience.

            This is NOT a session for those who are new to Agile and Scrum.
            
            All attendees must have the Certified ScrumMaster certification (CSM) and with a minimum of one year practice prior to the Advanced Certified ScrumMaster (A-CSM) workshop. If you don’t currently have a CSM certification, please contact us for options.
            
            Participants should be passionate in advancing as a ScrumMaster and an Agile coach, and therefore be willing to challenge their own thinking and approaches within this course.`,
            dates: [
                new Date("2023-06-11T11:30:00+07:00"),
                new Date("2023-07-11T11:30:00+09:00"),
                new Date("2023-08-11T11:30:00+11:00")
            ]
        }
    ]
}
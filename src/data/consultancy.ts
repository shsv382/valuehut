// Here you can add the new consultancy. 
// Use Interface below as a template to add right fields 
// when you will create a new consultancy

export interface ConsultancyArticleTypes {
    title?: string,
    content: string,
    imageURL?: string,
    textAlign?: string,
    imagePosition?: string
}

export interface ConsultancyTypes {
    title: string,
    acronym?: string,
    description?: string,
    imageURL: string,
    articles: ConsultancyArticleTypes[],
}

interface ConsultancyObject {
    consultancy: ConsultancyTypes,
}

export const consultancy: ConsultancyObject = {
    consultancy: {
        title: "Agile Consultancy",
        description: `Efforts to embark on Agility at the team level especially when it doesn’t involve the whole organisation could be an uphill battle; we advise our clients that in other to deliver sustainable and long-lasting change, agility should be introduced using a “whole organisation” approach to agility. This approach however comes with it own sets of challenges which might be familiar to you.`,
        imageURL: "./mikael.jpg",
        articles: [
            {
                title: "Continuous Integration / Continous Delivery",
                content: `that are faced include:
                \n•	Resistance at different levels within the organisation.\n
                \n•	Organisational structure & culture that is not optimised for Agility.\n
                \n•	Disjointed perceptions of the current and the future state for the Organisation across the Organisation.\n
                `
            }, 
            {
                title: "Behaviour Driven Development",
                content: `Behaviour Driven Development is an Agile Development practise that fosters collaboration between the Business and the Development teams. It encourages communication based on the expected behaviour of the product to be implmented and subsequently enables the team to capture requirements as specification which can then be automated by the Development Team.`
            },
            {
                title: "Agile Fundamentals",
                content: `This training covers the fundamentals of working using any Agile Methodology and is particular targetted for team that are new to Agile. The training introduces some of the popular Agile Frameworks such as Scrum and Kanban. Attendees will have gained have sufficient knowledge to work in a team that has adopted any of the Agile frameworks that was covered as part of the training.
                        \n• Agile Principles
                        \n• Roles within an Agile Team (Agile BA, Developer & Tester)
                        \n• Estimation & Product Planning
                        \n• User Stories & Vertical Slicing of Stories.
                         `,
                imageURL: "./cameron.jpg"
            }
        ]
    }
}

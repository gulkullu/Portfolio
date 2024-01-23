import SOCIAL from '@salesforce/resourceUrl/social'
import my_photo from '@salesforce/resourceUrl/my_photo';
export const PROFILE_IMAGE = my_photo

export const SOCIAL_LINKS=[
    {
        type:'Linkedin',
        label:"Linkedin/gul_kullu",
        link:"https://www.linkedin.com/in/gulkullu",
        icon: SOCIAL+'/SOCIAL/linkedin.svg'
    },
  
    {
        type: "github",
        label: "github/gulkullu",
        link: "https://github.com/gulkullu",
        icon: SOCIAL + '/SOCIAL/github.svg'
    },
    {
        type: "trailhead",
        label: "trailhead/gulkullu",
        link: "https://www.salesforce.com/trailblazer/gulkullu",
        icon: SOCIAL + '/SOCIAL/trailhead.svg'
    }
]

export const USER_DETAILS={
    NAME: 'GUL KULLU',
    ROLE: 'Salesforce Developer & Administrator',
    EMAIL:'wguleren@gmail.com',
    ADDRESS: 'Buffalo, New York'
}

export const CAREER_SUMMARY={
    HEADING:"SUMMARY",
    DESCRIPTION: "Salesforce Developer with 1+ year of hands-on experience in configuring, customizing,and \
    programming within the Salesforce ecosystem, covering APEX, Triggers, Flow with Actions,Security Settings and Deployment. \
    Built upon an 8+ year foundation in the education sector, fostering a versatile skill set and demonstrating team collaboration, \
    data interpretation, analytical thinking, and solution-oriented approaches harmonize transferable skills with Salesforce expertise. \
    With Salesforce certiﬁcations in Administration, App Building, and Platform Development, there is a blend of technical acumen \
    and innovative problem-solving skills, poised to drive digital transformation in dynamic business environments."
};


export const EXPERIENCE_DATA={
    HEADING: "Work Experience",
    EXPERIENCES: [
        {
            ROLE: "Salesforce Developer",
            COMPANY_NAME: "Triforcia IT Consulting",
            DURATION: "2023 - Present",
            
            DESCRIPTION_POINTS: [
                "Managed   projects  within  Agile/Scrum  frameworks,  leading  to  enhanced  efficiency  and  improved team collaboration.",
                "Developed and implemented Apex classes, Triggers, Handler Classes, and Unit Tests, reducing manual errors and increasing user efficiency by 40%. This improvement allows users to operate more effectively, make better-informed decisions, and receive real-time updates swiftly, thereby improving the overall system performance.",
                "Enhanced system performance by expertly implementing Asynchronous Apex, including Batch and Scheduled processes, resulting in a substantial increase in data processing speed.",
                "Strategically implemented dynamic SOQL and relationship queries in Apex and Triggers have optimized data retrieval from sObjects. This approach has resulted in enhanced data access efficiency.",
                "Executed the integration of SOAP and REST API callouts with a third-party application, streamlining data interaction and transfer, which significantly improved data accuracy and boosted overall operational efficiency.",
                "Streamlined   development   and   deployment   processes  by  eﬀectively  utilizing  Git  and  Github  with Salesforce DX, leveraging Visual Studio Code and Scratch orgs for optimal code management.",
                "Designed   and   deployed   Lightning   Web   Components   (LWC)  on  the  home  page  for  efficient  data entry,  and  developed  customized  user  interfaces  in  line  with  client  and  application  specifications using LWC and Visualforce pages, thereby improving user experience and interface efficiency.",
                "Promoted  by  the  strategic  use  of  Flows,  Approval  Processes,  and  Validation  Rules  in  our  hospital system   project,   we   witnessed   a  remarkable  70%  boost  in  data  quality,  expedited  approvals,  and reduced errors. This transformation significantly enhanced overall efficiency and user experience",
                "Eﬃciently  implemented  Salesforce, incorporating Experience Cloud, Sales Cloud, and Service Cloud, fostering    enhanced   customer   engagement,   streamlined   sales   processes,   and   improved   service delivery.",
                "Actively   engaged   in  utilizing  Data  Loader  and  Workbench  for  uploading  data  in  CSV  format  into Salesforce, meticulously ensuring the integrity and quality of the data entered.",
                "Demonstrated competence in Salesforce Administration, skillfully customizing and implementing proﬁles, roles, security settings, sharing rules, permission sets, OWD, applications, custom objects, custom ﬁelds, page layouts, record types, and rollup summaries to optimize CRM functionality and user experience.",
                "Proactively generated Reports and Dashboards to continuously monitor data quality and deliver insightful performance indicators, contributing to informed decision-making and operational excellence"
            ],
            TECHNOLOGIES_USED: {
                HEADING: 'Technical Skills',
                LIST: [
                    " Salesforce.com",
                    "Sales Cloud",
                    "Service Cloud",
                    "Experience (Community) Cloud",
                    "Jira",
                    "Agile",
                    "Apex / Triggers/ Test class / Async",
                    "Lightning Web Components",
                    "Aura Component",
                    " Visualforce",
                    "DataLoader.io ",
                    "Approval Process",
                    "Salesforce Flows",
                    "REST/SOAP",
                    " Git/Github ",
                    "Visual Studio Code",
                    "Salesforce Security Settings",
                    "Dashboards/Reports",
                    "Deployment"
                ]
            },
        },
        {
            ROLE: "Biology Instructor & Department Team Leader",
            COMPANY_NAME: "Intellectual Schools",
            DURATION: "2015 - 2020",
            DESCRIPTION_POINTS: [
                "Applied information technology to prepare interactive lessons, conducted efficient data analysis, and managed multiple tasks efficiently. This led to a groundbreaking teaching strategy and a remarkable 20% improvement in student performance.",
                 "As a Department Team Leader, developed strategic timelines, delegated responsibilities, provided comprehensive training, and applied information technology expertise. These actions improved team efficiency, demonstrated strong leadership, and contributed to the attainment of departmental objectives."
            ],
            TECHNOLOGIES_USED: {
                HEADING: "Skills",
                LIST: [
                    "Effective Communication",
                    "Teamwork",
                    "Mentorship",
                    "Creative Thinking",
                    "Strong Problem-Solving Abilities",
                    "Multitasking",
                    "Microsoft Teams"
                ]
            }
        },
        
        
        {
            ROLE: "Biology & Science Instructor",
            COMPANY_NAME: "Chindamanee Schools",
            DURATION: "2012 - 2015",
            DESCRIPTION_POINTS: [
                "Managed and presented educational data, optimizing teaching strategies and performance. Pioneered a novel teaching approach, signiﬁcantly enhancing student performance and showcasing strong educational innovation and problem-solving skills. ",
            ],
            TECHNOLOGIES_USED: {
                HEADING: "Skills",
                LIST: [
                    "Adaptability to Evolving Technologies",
                    "Self-Motivation and Continuous Learning",
                    " Time Management ",
                    "Attention to Detail",
                    "Accurate Documentation",
                    "Excel/Word/Powerpoint/Outlook ",
                ]
            }
        }
    ]
};
    
    

export const EDUCATION_DATA={
            
            HEADING: "EDUCATION",
            LIST:[
                {
                    NAME: "M.Sc. Innovation in Learning and Teaching",
                    UNIVERSITY_NAME: "University of South Wales at United Kingdom",
                    DURATION: "2020 - 2023",
                },
                {
                    NAME: "B.Sc. Biology",
                    UNIVERSITY_NAME: "Balikesir University at Turkey",
                    DURATION: "2006 - 2010",
                }
            ]
        }
     
    
        export const CERTIFICATION_DATA={
          
            HEADING: "CERTIFICATIONS",
            LIST: [
                {NAME: "Salesforce Administrator"},
                {NAME: "Salesforce Platform App Builder"},
                {NAME: "Salesforce Platform Developer 1"}
               
            ]
        }

        export const SKILLS_DATA ={
            HEADING: "SKILLS & TOOLS",
            SKILLS:[
                {
                    HEADING: "Platforms",
                    SKILLS_LIST: [
                        { NAME: "Salesforce.com", LEVEL: "95" },
                        { NAME: " Sales Cloud", LEVEL: "80" },
                        { NAME: "Service Cloud", LEVEL: "75" },
                        { NAME: "Experience (Community) Cloud", LEVEL: "89" },
                        { NAME: "Jira", LEVEL: "90" },
                    ],
                },
                {
                    HEADING: "Languages",
                    SKILLS_LIST: [
                        { NAME: "Apex", LEVEL: "80" },
                        { NAME: "SOQL", LEVEL: "95" },
                        { NAME: "SOSL", LEVEL: "98" },
                        { NAME: "JavaScript", LEVEL: "98" },
                        { NAME: "CSS", LEVEL: "98" },
                        { NAME: "SQL", LEVEL: "98" },
                        
                    ],
                },
                {
                    HEADING: "Methodologies",
                    SKILLS_LIST: [
                        { NAME: "Agile", LEVEL: "50" },
                        { NAME: " Scrum-Kanban", LEVEL: "75" },
                    ],
                },

                {
                    HEADING: "Declarative Tools",
                    SKILLS_LIST: [
                        { NAME: "Salesforce Flows", LEVEL: "50" },
                        { NAME: " Approval Process", LEVEL: "75" },
                        { NAME: " Validation Rules", LEVEL: "75" },
                    ],
                },

                {
                    HEADING: "Salesforce Technologies",
                    SKILLS_LIST: [
                        { NAME: "Apex (Triggers, Classes/Controllers, Async) ", LEVEL: "50" },
                        { NAME: "Lightning Web Components (LWC)", LEVEL: "75" },
                        { NAME: "Aura Component", LEVEL: "75" },
                        { NAME: "Visualforce", LEVEL: "75" },
                        { NAME: "DataLoader.io", LEVEL: "75" },
                        { NAME: "Dashboards and Reports", LEVEL: "75" },
                        { NAME: "Sandbox", LEVEL: "75" },
                        { NAME: "Deployment", LEVEL: "75" },
                    ],
                },

                {
                    HEADING: "APIs",
                    SKILLS_LIST: [
                        { NAME: " REST ", LEVEL: "50" },
                        { NAME: " SOAP ", LEVEL: "75" },
                        { NAME: " WorkBench ", LEVEL: "75" },
                        { NAME: " Postman ", LEVEL: "75" },
                    ],
                },

                {
                    HEADING: "Version Control and IDE",
                    SKILLS_LIST: [
                        { NAME: " Git-Github ", LEVEL: "50" },
                        { NAME: " Visual Studio Code ", LEVEL: "75" },
                       
                    ],
                },



            ]
        }
       
       
    
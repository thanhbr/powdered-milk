export const QUESTIONS = [
  {
    id: 1,
    question: "You have been assigned to a new project, where the work is behind schedule and the team are not working together well. The team is relatively new, and conflicts are arising. Team members are blaming each other for work not done, and some people are not showing up to work on the project at all. What will you do next?",
    choices: [
      { id: "A", text: "Meet with the functional manager to agree on the team members' time requirements."},
      { id: "B", text: "Meet with your team to set a team charter and define roles & responsibilities."},
      { id: "C", text: "Meet with the project sponsor to gain additional funding for resources who can work together."},
      { id: "D", text: "Escalate the issue to the steering committee as soon as possible as a project risk."}
    ],
    answer: ["B"],
    explanation: "The Standard for Project Management asks that we create a collaborative team environment, including team agreements, definitions of roles & responsibilities, formal committees tasked with specific objectives, and standing meetings that regularly review a given topic. (PMBOK Guide) – Seventh Edition, 2021, p28, p29, \"Create a Collaborative Team Environment\""
  },
  {
    id: 2,
    question: "You have recently completed a project for a new product and have been asked to manage it after its release to keep it relevant in today's marketplace. Half of your existing project team are rolling off to other projects soon, and your project budget is nearly depleted. What will you do next?",
    choices: [
      { id: "A", text: "Create a business case and project charter for your project sponsor to approve." },
      { id: "B", text: "Retain as many of your current project staff to continue work on the product." },
      { id: "C", text: "Raise a change request for your current project to add scope and continue making changes." },
      { id: "D", text: "Secure funding for a stable team, then use current research to form a suite of projects to improve the product." }
    ],
    answer: ["D"],
    explanation: "This question is referring to product management. Product management involves the integration of people, data, processes and business systems to develop or maintain a product or service throughout its lifecycle. (PMBOK Guide) – Seventh Edition, 2021, p17-19, \"Product Management Considerations\""
  },
  {
    id: 3,
    question: "You are delivering a critical change and several key stakeholders in your organization have added seemingly unnecessary steps for you to take, with extra approvals, reports and meetings. They are also restricting the people you need from working on your project in a larger capacity. What will you do next?",
    choices: [
      { id: "A", text: "Go directly to the people you need to avoid extra back-and-forth with the stakeholders." },
      { id: "B", text: "Raise a risk in the risk register on the lack of access to sufficient resources." },
      { id: "C", text: "Communicate more often with the stakeholders and gain a deeper awareness of their ideas and situation." },
      { id: "D", text: "Show your stakeholders the Resource Assignment Matrix and project roles & responsibilities." }
    ],
    answer: ["C"],
    explanation: "This question refers to the principle of Effectively Engaging with Stakeholders. Stakeholders may add steps or requirements, or restrict team members if not engaged appropriately. Communication and awareness of their ideas, through knowledge sharing and regular meetings (ideally face to face) help. (PMBOK Guide) – Seventh Edition, 2021, p32, 33, \"Effectively Engage with Stakeholders.\""
  },
  {
    id: 4,
    question: "You are managing a project team mostly made up of men. Recently Jane was hired for her high expertise in the brands that make up your industry. You notice she has been left out of some key meetings, and others are overlooking her opinions. You also notice she is paid significantly less than her male colleagues. What will you do next?",
    choices: [
      { id: "A", text: "Make steps to update her pay to the same range as the others on your project, and ask her opinion and advice specifically during each meeting (along with others in your team)." },
      { id: "B", text: "Take the lower pay as a win for your project, as it will help keep costs low and her colleagues don't need to know." },
      { id: "C", text: "Ask Jane to write down her knowledge of the industry, just in case she leaves." },
      { id: "D", text: "No need to rock the boat – this is just how people work in this industry." }
    ],
    answer: ["A"],
    explanation: "This question is on Integrity and Stewardship. We should have respectful engagement of project team members, including their compensation, access to opportunity and fair treatment. (PMBOK Guide) – Seventh Edition, 2021, p25, \"Be a diligent, respectful and caring steward\"."
  },
  {
    id: 5,
    question: "During one of your working group meetings, a stakeholder raises the concern that the product you are working on will be discontinued in the next five months. You were not aware of this, and your project budget has already been approved until the scheduled delivery, which is in five months also. What will you do next?",
    choices: [
      { id: "A", text: "Keep the project going as it is – the discontinued product isn't your responsibility." },
      { id: "B", text: "Set a meeting with your project sponsor to share the information and a recommendation to terminate the project." },
      { id: "C", text: "Change the scope of the project to meet a different product so your project can remain relevant." },
      { id: "D", text: "Ask for additional funding to see if you can improve the product instead of discontinuing it." }
    ],
    answer: ["B"],
    explanation: "This question is about delivering value – the primary motivator for a project. If the project is no longer aligned with the business need or it seems unlikely to provide value, the organisation may choose to terminate the effort. (PMBOK Guide) – Seventh Edition, 2021, p35, \"Focus on Value\""
  },
  {
    id: 6,
    question: "You have collected the requirements for your project and are creating the scope statement and work breakdown structure. During this process you notice some functionality in your database system that will help a different project you are aware of within your Project Management Office (PMO). What will you do next?",
    choices: [
      { id: "A", text: "Place the feature in the other project's backlog, and ask them to prioritise it as soon as possible." },
      { id: "B", text: "Raise the functionality in your risk register as a threat, with the response to \"mitigate\"." },
      { id: "C", text: "Add the scope to your project and complete it as soon as possible." },
      { id: "D", text: "Raise the functionality in your risk register as an opportunity with the response to \"exploit\", and meet with the other project team and sponsor to discuss." }
    ],
    answer: ["D"],
    explanation: "Systems thinking involves taking a holistic view of how project parts interact with each other, and external systems. Projects operate within programs, and small systems affect larger ones. Finding a previously unknown opportunity, the next best step is to make it known and exploit the opportunity. (PMBOK Guide) – Seventh Edition, 2021, p39, \"Respond to System Interactions: Systems Thinking\" p125, \"Opportunities\""
  },
  {
    id: 7,
    question: "You are working on a high profile project. Several high-ranking senior executives want to take the credit for this initiative, while limiting the impact to their own resources. This has led to several conflicts and a scope statement that is unclear, leading to a risk of project failure. What will you do next?",
    choices: [
      { id: "A", text: "Create a scope statement yourself to avoid further conflict." },
      { id: "B", text: "Facilitate a discussion with the executives as a neutral third party, focusing on agreed project goals." },
      { id: "C", text: "Limit your project resources to the executives until they can agree on a way forward." },
      { id: "D", text: "Escalate the issue to the project steering committee and ask them to resolve the problem." }
    ],
    answer: ["B"],
    explanation: "Leadership is not the same as authority. When senior managers suffer conflict over priorities, neutral facilitation helps more than detailed recommendations. Leadership acumen involves focusing a team around agreed goals, generating consensus on the way forward, negotiating and resolving conflict, and more. (PMBOK Guide) – Seventh Edition, 2021, p42, \"Demonstrate leadership behaviours\""
  },
  {
    id: 8,
    question: "You are managing a project where the majority of the product has been planned up-front, but an external system is needed from a vendor in partial pieces where the requirements are unclear. Half of your stakeholders want to use a waterfall approach, and the other half are advocating for an Agile approach. What will you do next?",
    choices: [
      { id: "A", text: "Use an Agile methodology. The fixed scope is low risk, and you can capture changes using Agile." },
      { id: "B", text: "Use a Waterfall methodology and ask the team to plan the uncertain scope better." },
      { id: "C", text: "Proceed with a hybrid method to start, with pre-planned scope but Agile ceremonies that promote feedback." },
      { id: "D", text: "Use a combination of Waterfall and Agile to capture all the requirements and keep stakeholders happy." }
    ],
    answer: ["C"],
    explanation: "Each project is unique, and success is based on adapting to the unique context of the project to determine the most appropriate methods. The tailoring approach is iterative in nature and refined during the project cycle. This project requires a hybrid of waterfall and agile, with the option to improve it over time. (PMBOK Guide) – Seventh Edition, 2021, p44-46, \"Tailoring\""
  },
  {
    id: 9,
    question: "You are working on a project where senior users have been testing the product as parts are released. They have found some missing requirements and defects. Their manager is worried that the project won't deliver a product that is fit for purpose, without defects and within the timeframe needed. What will you do next?",
    choices: [
      { id: "A", text: "Perform some of the testing yourself to ensure a quality product." },
      { id: "B", text: "Help every team member to focus on quality, from correct acceptance criteria to a developed and tested product." },
      { id: "C", text: "Limit testing until the very end of the project so you can do it all in one go when the product is completely ready." },
      { id: "D", text: "Increase the testing on your project and add more testing resources so no defect goes unnoticed." }
    ],
    answer: ["B"],
    explanation: "Quality focuses on meeting acceptance criteria for deliverables, and satisfying stakeholders' expectations on product requirements. Quality is everyone's responsibility in an Adaptive (Agile) project. (PMBOK Guide) – Seventh Edition, 2021, p47-49, \"Build quality into processes and deliverables.\""
  },
  {
    id: 10,
    question: "You are working through the risk assessment with your team, who are having trouble coming up with ideas for risks. You decide to give them some guidance on types of complexity that might affect your new product. What will you do next?",
    choices: [
      { id: "A", text: "Ask them to brainstorm Qualitative and Quantitative risks." },
      { id: "B", text: "Ask them to perform the Five Whys and Ishikawa analysis." },
      { id: "C", text: "Ask them to brainstorm around possible unwanted human behavior, system behavior, ambiguity and technical innovation impacts." },
      { id: "D", text: "Ask them to perform a retrospective to discover what isn't working well, and what still puzzles us." }
    ],
    answer: ["C"],
    explanation: "Complexity is often the result of human behavior, system interactions, technical innovation, uncertainty and ambiguity. Complexity can be introduced by events or conditions that affect value, scope, stakeholders, risk and more. (PMBOK Guide) – Sixth Edition, 2021, p50, 51, \"Navigate complexity\""
  },
];

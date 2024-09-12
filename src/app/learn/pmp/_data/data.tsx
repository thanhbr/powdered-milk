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
  {
    id: 11,
    question: "You are working on a project where you discover a certain negative risk with a potential impact of $2,000,000. You meet with your project stakeholders who determine that this is within their risk appetite, provided you meet a risk threshold of 10%. What will you do next?",
    choices: [
      { id: "A", text: "Note the acceptable risk level as a threat of $200,000 (10%)." },
      { id: "B", text: "Note the acceptable risk level as a threat of $1,800,000 to $2,200,00 (10% variance)." },
      { id: "C", text: "Note the impact as outside the acceptable risk level of $2,000,000." },
      { id: "D", text: "Note the impact as an opportunity of $200,000 (10%)." }
    ],
    answer: ["B"],
    explanation: "Risk appetite describes the level of uncertainty or risk your stakeholders are willing to accept. Risk threshold is the measure of acceptable variation around an objective that reflects the risk appetite. In this scenario a 10% variation around $2m is $1.8m to $2.2m. (PMBOK Guide) – Seventh Edition, 2021, p54, \"Risk\""
  },
  {
    id: 12,
    question: "A risk has been raised in your project around insufficient building materials. One risk response assigned to the functional manager suggests to use a brand new material, which has not been fully tested in a building project. Half of your stakeholder group are happy with this risk response, but the other half are not, and refuse to sign off on it. What will you do next?",
    choices: [
      { id: "A", text: "Suggest a quantitative risk approach to give a more accurate financial impact." },
      { id: "B", text: "Suggest they proceed with the proposed risk response, and ensure it is followed through." },
      { id: "C", text: "Suggest a different risk owner, as an executive may have more power to respond to the risk." },
      { id: "D", text: "Suggest a different risk response, as they should be timely, cost effective, realistic, and agreed to by relevant stakeholders." }
    ],
    answer: ["D"],
    explanation: "This question refers to risk responses. Risk responses should be appropriate and timely to the significance of the risk, cost effective, realistic within the project context, agreed to by relevant stakeholders, and owned by a responsible person. D is the best answer. (PMBOK Guide) – Seventh Edition, 2021, p54, \"Risk\""
  },
  {
    id: 13,
    question: "Your project is starting to go off track due to a large amount of uncertainty in the requirements and resources. At a significant cost, you have managed to reign in these issues, however your project management office would like you to brainstorm ways to improve with your team so that they do not happen again. What will you do next?",
    choices: [
      { id: "A", text: "Ask your team to increase the project Contingency Reserve, to allow for these impacts." },
      { id: "B", text: "Ask your team to change the project methodology from Waterfall to Agile." },
      { id: "C", text: "Ask your team to use short feedback loops, continuous improvement, and transparent planning." },
      { id: "D", text: "Ask your team to check their work twice before sending it to the next part of the process." }
    ],
    answer: ["C"],
    explanation: "A project team needs to embrace adaptability and resiliency with methods such as using short feedback loops, continuous learning and improvement, regular inspection and adaptation of project work, diverse project teams, transparent planning, using prototypes and more. (PMBOK Guide) – Seventh Edition, 2021, p56, \"Embrace adaptability and resiliency.\""
  },
  {
    id: 14,
    question: "As your project progresses, many of the business stakeholders are starting to voice their concerns, to question some of the changes, and even miss key meetings while trying to sabotage your efforts. What will you do next?",
    choices: [
      { id: "A", text: "Communicate the vision and benefits for the change clearly, along with the impact to their work." },
      { id: "B", text: "Create an impact over influence chart to determine who should be engaged appropriately." },
      { id: "C", text: "Escalate the matter with your project sponsor, and arrange for different stakeholders." },
      { id: "D", text: "Map the current state and the proposed future state of the change for the stakeholders." }
    ],
    answer: ["A"],
    explanation: "This question is on change management, which is a structured approach to transitioning groups to a future state. Too much change or lack of understanding can lead to resistance and change fatigue. Methods include communicating the vision, goals and benefits of the change early, along with the impact to work processes. (PMBOK Guide) – Seventh Edition, 2021, p59, \"Enable change to achieve the envisioned future state\"."
  },
  {
    id: 15,
    question: "You are analyzing your stakeholder through an impact over influence chart and have found more than 100 different groups of people, and over 3000 impacted stakeholders. Other parts of your project are starting to fall behind as you try to keep up with the large amount of people. What will you do next?",
    choices: [
      { id: "A", text: "Ask your project team to engage different groups of stakeholders so everyone is covered." },
      { id: "B", text: "Clearly prioritize the stakeholders then engage and communicate with the highly impacted and influential groups early and often." },
      { id: "C", text: "Monitor the stakeholders for signs of stress and respond to groups most stressed about the project." },
      { id: "D", text: "Create a SharePoint page for changes that any stakeholder can gather information from anytime." }
    ],
    answer: ["B"],
    explanation: "This question is about engaging stakeholders. The process includes: Identify, Understand and Analyze, Prioritize, Engage and Monitor your stakeholders. Where you have too many to engage effectively, prioritisation is the key. Impact and influence are two ways, as well as Power, Beliefs, Expectations, proximity to the project, interest and more. (PMBOK Guide) – Seventh Edition, 2021, p11, 12, \"Stakeholder Engagement: Prioritise and Engage\""
  },
  {
    id: 16,
    question: "You are managing a project which communicates to the customer using mostly pull communication so far. When monitoring the engagement of your stakeholders, you notice a trend that they are not clear on the impacts or benefits of the project. You decide to add push communication to your communication plan. What will you do next?",
    choices: [
      { id: "A", text: "Create a webpage using SharePoint with all the project information, that your stakeholders can see." },
      { id: "B", text: "Push for more funding on your project, and communicate this to your project sponsor." },
      { id: "C", text: "Push your stakeholders to engage in more two-way communication." },
      { id: "D", text: "Send a weekly email to stakeholders with a project update, including the impacts and benefits." }
    ],
    answer: ["D"],
    explanation: "Push communication is sent to stakeholders, using memos, emails, status reports, voice mail and more. Pull communication is something a customer can pull at any time – from a bulletin, a web page, a white board, etc. (PMBOK Guide) – Seventh Edition, 2021, p13, \"Types of Communication\""
  },
  {
    id: 17,
    question: "You have taken over on a project with a vendor where scope and requirements have been missed. You notice that miscommunication and mixed messages are common. You set a meeting with your team and the vendor's team. The meeting is extremely important to get right. What will you do next?",
    choices: [
      { id: "A", text: "Speak slowly and clearly with the vendor's team, at a louder volume if necessary." },
      { id: "B", text: "Confirm they hear your message, determine if they agree, and identify nuanced or unintended messages they may have received." },
      { id: "C", text: "Only communicate with the vendor in writing, so you have a trail of proof if anything goes wrong in the future." },
      { id: "D", text: "Prepare a claim for the mishandled scope of your project through your procurement team." }
    ],
    answer: ["B"],
    explanation: "This question is asking about communication. With all forms of communication, quick feedback loops provide the information you need by confirming they heard the message, determining if they agree, and identifying any nuances or additions to the message they may have added or heard. (PMBOK Guide) – Seventh Edition, 2021, p13, \"Stakeholder Engagement: Engage\""
  },
  {
    id: 18,
    question: "Your stakeholders seem to be engaged, however there are frequent changes to scope and requirements, causing delays. Issues are often raised and result in multiple rounds of feedback. You are not sure who or what could be the cause. What will you do next?",
    choices: [
      { id: "A", text: "Perform root cause analysis with your project team on the problem to brainstorm ideas." },
      { id: "B", text: "Raise a risk in the risk register for the project delay, and review responses with your team." },
      { id: "C", text: "Review the issue log, risk register and change log for the most frequent requestors, then update your stakeholder engagement approach for those people." },
      { id: "D", text: "Ensure your project budget has enough contingency reserves to meet the multiple reviews and delays." }
    ],
    answer: ["C"],
    explanation: "A significant number of changes or modifications to the project requirements or scope may indicate stakeholders are not engaged or aligned with the project objectives. A review of the project issue register or risk register can identify challenges associated with individual stakeholders. (PMBOK Guide) – Seventh Edition, 2021, p15, \"Checking outcomes – Stakeholder Performance\""
  },
  {
    id: 19,
    question: "You have been working on a project where the manager leads in a dictatorship style. Over time, the team have stopped making suggestions, sick days and mental health days have become more frequent, and the pace of work has slowed. The manager comes to you for help. You suggest a servant leadership style instead. What will they do next?",
    choices: [
      { id: "A", text: "Serve the team as much as they can, ensuring their every need is met." },
      { id: "B", text: "Focus on obstacle removal, encouragement and development opportunities." },
      { id: "C", text: "Ensure their team are serving other team members and helping each other succeed." },
      { id: "D", text: "Serve the team new ways to do the work and engage them through additional variety." }
    ],
    answer: ["B"],
    explanation: "Servant leaders allow project teams to self-organize when possible, and increase levels of autonomy by passing appropriate decision making opportunities to project team members. Servant leadership behaviors also include obstacle removal, being a diversion shield, and development opportunities. (PMBOK Guide) – Seventh Edition, 2021, p18, \"Distributed management and leadership.\""
  },
  {
    id: 20,
    question: "You have been allocated to a new project team with members from different parts of the functional business area. It soon becomes clear that very few of them have worked on a project before. There is also a lot of miscommunication and re-work occurring amongst the team, which is starting to cause delays. What will you do next?",
    choices: [
      { id: "A", text: "Set a daily stand-up with your team to ensure they update what they completed." },
      { id: "B", text: "Review the Resource Assignment Matrix with your team and ensure they are doing their job." },
      { id: "C", text: "Help the team set their vision and objectives, roles and responsibilities, and team operations." },
      { id: "D", text: "Send your team members on training in their roles to increase their capability." }
    ],
    answer: ["C"],
    explanation: "When project teams form across different organizations, more work may be required up front to establish a \"one-team\" mindset, ensuring everyone understands how they contribute. Team development such as establishing a vision, clear roles & responsibilities, and a way of working are key. (PMBOK Guide) – Seventh Edition, 2021, p18, \"Common aspects of Team Development\""
  },
  {
    id: 21,
    question: "You have collected the requirements for your project, matched them to project scope, and broken them down into smaller parts and the activities required. In doing this, you notice that the manager of the marketing department has added extra scope that is unrelated to your current project. What will you do next?",
    choices: [
      { id: "A", text: "Start an open dialogue with the functional manager, raise the incorrect scope items and their impacts." },
      { id: "B", text: "Override the marketing manager's decision on scope as you are the senior project manager." },
      { id: "C", text: "Raise a change request for the additional scope and let the Change Control Board decide." },
      { id: "D", text: "Place the additional scope into the product backlog for the product owner to prioritise it." }
    ],
    answer: ["A"],
    explanation: "Without an open dialogue, you may not know if the scope was a mistake, previously approved, or any other reason for it being there. Positive discourse and courage are key aspects of a winning project team culture. Others include support, respect, celebrating success, and transparency. (PMBOK Guide) – Seventh Edition, 2021, p21, \"Project Team Culture\""
  },
  {
    id: 22,
    question: "Your project team are protected by a union agreement. You notice that they don't know how to use the product you are improving, are slow to respond and regularly complain about the work. Your project sponsor has had enough and threatens to shut the project down if improvements can't be made. What will you do next?",
    choices: [
      { id: "A", text: "Set up a new project with different team members and transfer the project work to that team." },
      { id: "B", text: "Set a clear project purpose and vision and pair your team with the customer to show them how they are making a positive difference." },
      { id: "C", text: "Tell your project team that they will lose their jobs if they don't improve the speed of their work." },
      { id: "D", text: "Create a project Gantt Chart schedule and burn-down chart so the project work is transparent to all." }
    ],
    answer: ["B"],
    explanation: "This question calls for leadership skills, where setting a vision and purpose and showing your team how they are making a difference can increase their intrinsic motivation. Transferring to another team in the same company may risk the same result, and threatening your team may embed their behaviour further. (PMBOK Guide) – Seventh Edition, 2021, p24,25, \"Leadership Skills: Establishing a Vision; Motivation\""
  },
  {
    id: 23,
    question: "During a key scope meeting, an argument arises. The business manager accuses the technology manager of not delivering to their needs on past projects, and the technology manager accuses the business manager of changing requirements that impact the delivery schedule. The meeting is at risk, with the stakeholders being closed off to any further discussion. What will you do next?",
    choices: [
      { id: "A", text: "Take the side of the technology manager, as scope that impacts delivery should be controlled." },
      { id: "B", text: "Take the side of the business manager, as we should always deliver to the customer's specification." },
      { id: "C", text: "Facilitate to keep communication respectful, focus on the issue in the present and search for alternatives together." },
      { id: "D", text: "Ensure they both agree to the change control process to avoid disagreements in the future." }
    ],
    answer: ["C"],
    explanation: "Not all conflict is negative. How conflict is handled can either lead to more conflict or to better decision making and stronger solutions. The PMBOK Guide notes open and respectful communication, focusing on the issue not the person, the present not the past, and searching for alternatives together. (PMBOK Guide) – Seventh Edition, 2021, p29, \"Conflict Management\""
  },
  {
    id: 24,
    question: "You are working on a project where the project team is completely distributed around the country in multiple sites, including working from home. Some of the project team members have not been able to contribute to the project, and there are concerns from the program that the project will fall behind. What will you do next?",
    choices: [
      { id: "A", text: "Raise a request to the program to co-locate all your project team members as soon as possible." },
      { id: "B", text: "Proceed with daily stand-ups and working group meetings with any team members in your area." },
      { id: "C", text: "Set team leaders for each area around the country, to report back to you as the centralised project leader." },
      { id: "D", text: "Use technology to maintain ongoing contact with audio and video for meetings, with a team web site to keep all project information available." }
    ],
    answer: ["D"],
    explanation: "This question is on distributed project teams. To improve you can use audio and video capabilities for meetings, use technology (including messaging) for ongoing contact, build in time to get to know remote team members, and have an open project site for information. (PMBOK Guide) – Seventh Edition, 2021, p30, \"Distributed project teams\"."
  },
  {
    id: 25,
    question: "You are initiating a project to a sales team where the process will change significantly, even though the outcome of a completed sale will remain the same. The functional manager is concerned about the change and any disruption it might bring. What will you do next?",
    choices: [
      { id: "A", text: "Kick of the project with multiple deliveries to deliver small parts and reduce the change impact." },
      { id: "B", text: "Kick off the project work with a single delivery at the end of the project when the process change is complete." },
      { id: "C", text: "Kick off the project with continuous delivery in mind, to ensure fast value to the business." },
      { id: "D", text: "Kick off the project using periodic deliveries, delivering value as it is ready." }
    ],
    answer: ["B"],
    explanation: "This question covers delivery cadence and their various benefits. A process re-engineering project may not have any deliveries until near the end of the project when the new process is rolled out and ready. (PMBOK Guide) – Seventh Edition, 2021, p34, \"Delivery Cadence\""
  },
  {
    id: 26,
    question: "You are working on a project where the requirements are clear but the solution ideas are uncertain. The product owner and the technical experts can't be sure which ideas will work in practice, and which ones won't. The organisation cannot afford to get this project wrong, as they have previously made mistakes and customers are starting to leave. What will you do next?",
    choices: [
      { id: "A", text: "Use an Incremental development approach for the project." },
      { id: "B", text: "Use an Iterative development approach for the project." },
      { id: "C", text: "Use a Predictive development approach for the project." },
      { id: "D", text: "Use a hybrid development approach for the project." }
    ],
    answer: ["B"],
    explanation: "For development approaches, an iterative approach is used when you need to capture ideas that might change, while still delivered in one release. Incremental progressively delivers features (or increments), Predictive plans everything up-front, and hybrid is a combination of predictive and adaptive. (PMBOK Guide) – Seventh Edition, 2021, p37, \"Development approaches.\" Agile Practice Guide, 2017, p18, \"Characteristics of project lifecycles.\""
  },
  {
    id: 27,
    question: "You are working on a new product for your organisation where the requirements are complex and are likely to change a few times as the project progresses. The organisation also needs usable parts of the product to be released as soon as possible to try and capture some of the market they are aiming for, away from their competitors. What will you do next?",
    choices: [
      { id: "A", text: "Recommend an Iterative development approach." },
      { id: "B", text: "Recommend a Predictive development approach." },
      { id: "C", text: "Recommend an Adaptive development approach." },
      { id: "D", text: "Recommend a Hybrid development approach." }
    ],
    answer: ["C"],
    explanation: "Adaptive approaches are useful when requirements are subject to uncertainty and change. A clear vision is established at the start of the project, and initial known requirements are refined or replaced in accordance with user feedback or unexpected events. (PMBOK Guide) – Seventh Edition, 2021, p38, \"Adaptive approach\""
  },
  {
    id: 28,
    question: "A new project has been kicked off in your organization due to a recent government inquiry into your industry, which found multiple processes with significant regulatory oversight that need to change. The inquiry ordering these changes has given you a due date of 10 months' time before you start incurring penalties. What will you do next?",
    choices: [
      { id: "A", text: "Proceed, with an Agile development approach to deliver change as quickly as possible." },
      { id: "B", text: "Proceed, with a Hybrid development approach to respond to changes while planning up front." },
      { id: "C", text: "Proceed, with a Predictive methodology to ensure quality control." },
      { id: "D", text: "Proceed, with an Iterative methodology to improve using feedback." }
    ],
    answer: ["C"],
    explanation: "In considerations for selecting a development approach, environments that have significant regulatory oversight may need to use a predictive approach due to the required process, documentation and demonstration needs. (PMBOK Guide) – Seventh Edition, 2021, p40, \"Considerations for selecting a development approach\""
  },
  {
    id: 29,
    question: "Your organization is moving to an Agile way of work. Your project team are strongly opposed to using Agile as they have been burned using iterations, when executives used the team velocity to try and force the team to work faster instead of keeping a sustainable pace. What will you do next?",
    choices: [
      { id: "A", text: "Add extra resources to your team to deliver faster and avoid executives getting involved." },
      { id: "B", text: "Proceed with a predictive development approach, and deal with the consequences later." },
      { id: "C", text: "Ask your team to work with Agile, velocity and iterations despite their hesitations." },
      { id: "D", text: "Suggest the team uses flow-based scheduling, with a Kanban board for visual work." }
    ],
    answer: ["D"],
    explanation: "Kanban is one of the largest parts of Agile approaches, aside from other major parts such as Lean, XP and Scrum. A flow-based scheduling approach does not use sprints, life-cycles or velocity but optimizes deliveries based on resource capacity, and minimizes waste such as context-switching and hand-offs. (PMBOK Guide) – Seventh Edition, 2021, p45, \"Flow-based scheduling.\""
  },
  {
    id: 30,
    question: "Your team have not worked on projects before, and don't know about waterfall, agile, or any of the different models. You project may also have requirements that are certain or uncertain, with varying levels of risk, so are not sure which approach to use as you begin this new project. What will you do next?",
    choices: [
      { id: "A", text: "Use Waterfall and plan everything up front, so the team have more stability." },
      { id: "B", text: "Use general phase definitions such as Feasibility, Design, Build, Test, Deploy and Close." },
      { id: "C", text: "Use Agile to ensure you can respond to change while your team's capability increases." },
      { id: "D", text: "Don't use any project approach – it doesn't matter as long as the work is getting done." }
    ],
    answer: ["B"],
    explanation: "All projects will go through the general phases of Feasibility, Design, Build, Test, Deploy and Close. Waterfall projects will do these in sequence once, while Agile projects will do these multiple times, for each feature or increment. The underlying principle remains the same, so it is a good place to start. (PMBOK Guide) – Seventh Edition, 2021, p42, \"Lifecycle and phase definitions\""
  }
];

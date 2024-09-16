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
    explanation: "This question is about delivering value – the primary motivator for a project. If the project is no longer aligned with the business need or it seems unlikely to provide value, the organization may choose to terminate the effort. (PMBOK Guide) – Seventh Edition, 2021, p35, \"Focus on Value\""
  },
  {
    id: 6,
    question: "You have collected the requirements for your project and are creating the scope statement and work breakdown structure. During this process you notice some functionality in your database system that will help a different project you are aware of within your Project Management Office (PMO). What will you do next?",
    choices: [
      { id: "A", text: "Place the feature in the other project's backlog, and ask them to prioritize it as soon as possible." },
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
    explanation: "Leadership is not the same as authority. When senior managers suffer conflict over priorities, neutral facilitation helps more than detailed recommendations. Leadership acumen involves focusing a team around agreed goals, generating consensus on the way forward, negotiating and resolving conflict, and more. (PMBOK Guide) – Seventh Edition, 2021, p42, \"Demonstrate leadership behaviors\""
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
    question: "You are working on a project where senior users have been testing the product as parts are released. They have found some missing requirements and defects. Their manager is worried that the project won't deliver a product that is fit for purpose, without defects and within the time-frame needed. What will you do next?",
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
    explanation: "This question is about engaging stakeholders. The process includes: Identify, Understand and Analyze, Prioritize, Engage and Monitor your stakeholders. Where you have too many to engage effectively, prioritization is the key. Impact and influence are two ways, as well as Power, Beliefs, Expectations, proximity to the project, interest and more. (PMBOK Guide) – Seventh Edition, 2021, p11, 12, \"Stakeholder Engagement: Prioritize and Engage\""
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
      { id: "D", text: "Place the additional scope into the product backlog for the product owner to prioritize it." }
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
    explanation: "This question calls for leadership skills, where setting a vision and purpose and showing your team how they are making a difference can increase their intrinsic motivation. Transferring to another team in the same company may risk the same result, and threatening your team may embed their behavior further. (PMBOK Guide) – Seventh Edition, 2021, p24,25, \"Leadership Skills: Establishing a Vision; Motivation\""
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
      { id: "C", text: "Set team leaders for each area around the country, to report back to you as the centralized project leader." },
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
    question: "You are working on a project where the requirements are clear but the solution ideas are uncertain. The product owner and the technical experts can't be sure which ideas will work in practice, and which ones won't. The organization cannot afford to get this project wrong, as they have previously made mistakes and customers are starting to leave. What will you do next?",
    choices: [
      { id: "A", text: "Use an Incremental development approach for the project." },
      { id: "B", text: "Use an Iterative development approach for the project." },
      { id: "C", text: "Use a Predictive development approach for the project." },
      { id: "D", text: "Use a hybrid development approach for the project." }
    ],
    answer: ["B"],
    explanation: "For development approaches, an iterative approach is used when you need to capture ideas that might change, while still delivered in one release. Incremental progressively delivers features (or increments), Predictive plans everything up-front, and hybrid is a combination of predictive and adaptive. (PMBOK Guide) – Seventh Edition, 2021, p37, \"Development approaches.\" Agile Practice Guide, 2017, p18, \"Characteristics of project life-cycles.\""
  },
  {
    id: 27,
    question: "You are working on a new product for your organization where the requirements are complex and are likely to change a few times as the project progresses. The organization also needs usable parts of the product to be released as soon as possible to try and capture some of the market they are aiming for, away from their competitors. What will you do next?",
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
  },
  {
    id: 31,
    question: "You a project manager in an organization with a directive Project Management Office, and are currently in between projects. The PMO asks you to prepare for an upcoming project in the accounting area by meeting with the functional manager there. You have no team, no scope or requirements and no timeline as yet. What will you do next?",
    choices: [
      { id: "A", text: "Ask the functional manager for their wish-list of improvements, so you can take these to your PMO." },
      { id: "B", text: "Create a project management plan so the project, scope, budget and schedule are more clear." },
      { id: "C", text: "Create a small backlog of work and start your first sprint, then progressively update the backlog as the project progresses." },
      { id: "D", text: "Progressively elaborate the vision statement and project charter to define a coordinated approach." }
    ],
    answer: ["D"],
    explanation: "Before initiating a project of any sort, we start with a vision statement, project charter or business case in order to identify a co-ordinand path to achieve the desired outcomes. (PMBOK Guide) – Seventh Edition, 2021, p52, \"Planning Overview\""
  },
  {
    id: 32,
    question: "You are working on a project where part of the project delivers a high value, high risk component. Another part of the project delivers a routine change to the system. Your project sponsor wants to gain the business value as quickly as possible, but your project team want to start with the work they are familiar with first. What will you do next?",
    choices: [
      { id: "A", text: "Prioritize the high risk items at the end of the project." },
      { id: "B", text: "Prioritize the high risk items at the start of the project." },
      { id: "C", text: "Use an incremental approach and deliver part of the routine and high risk work in each sprint." },
      { id: "D", text: "Plan out the work in detail and secure a scope baseline, with formal change controls to reduce uncertainty." }
    ],
    answer: ["B"],
    explanation: "This question refers to the concept of the last responsible moment. Work that is novel or risky can be prioritized at the start of the project to reduce uncertainty with the project scope before a large investment has been made. Routine work can be delayed until the cost of further delay would exceed the benefit. (PMBOK Guide) – Seventh Edition, 2021, p54, \"Delivery\", paragraph 3"
  },
  {
    id: 33,
    question: "You are working on an agile project where the functional area you are delivering to only has a high level idea of the system requirements they will need. The functional manager suggests a Work Breakdown Structure, however your team feel that is more for a predictive (waterfall) delivery approach. What will you do next?",
    choices: [
      { id: "A", text: "Use and create a WBS anyway, as it is just a tool." },
      { id: "B", text: "Use rolling wave planning, and keep the work at a high level until you are ready to work on it, when you can plan in detail." },
      { id: "C", text: "Note the high level themes or epics, decompose them into features, and again into user stories." },
      { id: "D", text: "Ask the functional area for more detailed requirements before the project begins." }
    ],
    answer: ["C"],
    explanation: "This question refers to \"decomposition\" or breaking down the work. We could use a WBS, or rolling wave planning, but for an incremental approach breaking down the work from epics to features to user stories is a form of decomposition that fits the delivery approach. (PMBOK Guide) – Seventh Edition, 2021, p54, \"Delivery\", paragraph 3"
  },
  {
    id: 34,
    question: "You are at the beginning of planning a new project, and have researched and gathered the requirements from the area, broken them down into deliverables and activities, which you believe could take 26 weeks to deliver. The project sponsor is asking you for an estimate on how long the project will take. What will you do next?",
    choices: [
      { id: "A", text: "Tell the project sponsor 26 weeks." },
      { id: "B", text: "Tell the project sponsor that you will use an iterative approach, where value is delivered until the project stops." },
      { id: "C", text: "Tell the project sponsor approximately 24 to 28 weeks." },
      { id: "D", text: "Tell the project sponsor approximately 20 to 45 weeks." }
    ],
    answer: ["D"],
    explanation: "This question is related to estimation and range. Estimates should have a broad range at the start of the project, starting at -25% to +75% when there is not much information. Once the project team has a smooth delivery cadence and experience in the product, a smaller range such as -5% to +10% can be used. A 0% range is when everything is known – and the product has been delivered. (PMBOK Guide) – Seventh Edition, 2021, p55, \"Estimating, Range\"."
  },
  {
    id: 35,
    question: "After gathering your project requirements, project scope, and breaking it down into activities, you need to estimate the project schedule with your team. After some analysis and discussion, your team come up with a range of 53 to 75 days assigned across all tasks. What will you do next?",
    choices: [
      { id: "A", text: "The estimate is high accuracy but low precision – ask the team to come back with a more precise estimate." },
      { id: "B", text: "The estimate is low accuracy but high precision – ensure the estimates become more accurate as the project unfolds." },
      { id: "C", text: "The estimate is in high confidence but low precision – proceed as is and adjust using an incremental approach." },
      { id: "D", text: "The estimate is in low confidence but high accuracy – allow the team to become more confident as the project unfolds." }
    ],
    answer: ["B"],
    explanation: "This question is on estimates and their accuracy. The lower the accuracy, the larger the potential range in values. Precision is different from accuracy, as it refers to the exactness of the estimate, for example \"2 days\" is more precise than \"sometime this week\". (PMBOK Guide) – Seventh Edition, 2021, p54, \"Estimating: accuracy, precision, confidence\""
  },
  {
    id: 36,
    question: "You are working on a business case where you know that the industry is undergoing a significant change at the moment, and there could be many different impacts to your project benefits before it is delivered completely. The project sponsor asks you for the best estimate of benefits you can give under the circumstances. What will you do next?",
    choices: [
      { id: "A", text: "Ask your team for a probabilistic estimate." },
      { id: "B", text: "Ask your team for a deterministic estimate." },
      { id: "C", text: "Ask your team for an absolute estimate." },
      { id: "D", text: "Ask your team for a relative estimate." }
    ],
    answer: ["A"],
    explanation: "Probabilistic estimates include a range of estimates, along with the associated probabilities within the range such as a confidence level or a probability distribution. If the estimate is uncertain, this is the best approach. Deterministic is a number, absolute is specific, actual numbers and relative estimates are shown in comparison to other estimates. (PMBOK Guide) – Seventh Edition, 2021, p57, \"Presenting estimates.\""
  },
  {
    id: 37,
    question: "You have noted nine epics for delivery as part of your most recent project. Your team have broken down these epics into user stories, and would like to see the effort involved for these deliverables. You ask your team to find the smallest user story, size it with a \"1\", and then determine the size of the other cards based on how they compare to the original card. What approach are you taking?",
    choices: [
      { id: "A", text: "Relative estimating with your team." },
      { id: "B", text: "Deterministic estimating to determine the effort." },
      { id: "C", text: "Absolute estimating to get an estimate with absolute certainty." },
      { id: "D", text: "Probabilistic estimating with the highest probability items." }
    ],
    answer: ["A"],
    explanation: "This question is about estimating, and making an estimate in comparison to other estimates is relative estimating. (PMBOK Guide) – Seventh Edition, 2021, p57, \"Relative Estimating\""
  },
  {
    id: 38,
    question: "You are working on a project where a competitor is also working on a similar feature, and being first to the market will have a significant impact on this year's profit. Your product owner would like to measure how quickly story cards are being completed, once they start being developed. What will you do next?",
    choices: [
      { id: "A", text: "Check the Lead time of the story cards." },
      { id: "B", text: "Check the Gantt chart with assigned schedule activities." },
      { id: "C", text: "Check the Cycle time of the story cards." },
      { id: "D", text: "Check the schedule network and precedence diagram." }
    ],
    answer: ["C"],
    explanation: "Cycle time is the total elapsed time it takes one unit to get through a process. Lead time is the time from when the customer makes the order (or the requirement is noted) to the time the item is delivered or released. Schedule network diagram is useful for finding the Critical Path, and precedence diagramming is used to find what deliverable or activity relies on others. (PMBOK Guide) – Seventh Edition, 2021, p58, \"Flow-based estimating\""
  },
  {
    id: 39,
    question: "You are working on a project that has recently moved to a more agile way of work. The team have not completely taken on the Scrum approach however, and are comfortable working with a more flow-based approach moving user stories across a Kanban board. You are wanting to get an estimate on how much work can be completed in the next three months, based on the team's existing progress. What will you do next?",
    choices: [
      { id: "A", text: "Multiply the velocity by the number of remaining user stories." },
      { id: "B", text: "Multiply the cycle time by the throughput." },
      { id: "C", text: "Multiply the lead time by the schedule performance index." },
      { id: "D", text: "Multiply the planned value by the actual value." }
    ],
    answer: ["B"],
    explanation: "Scrum uses velocity – Kanban or Flow-based estimates are developed by determining the cycle time and throughput. Cycle time is the total elapsed time it takes one unit to get through a process. Throughput is the number of items that can complete a process in a given amount of time. (PMBOK Guide) – Seventh Edition, 2021, p58, \"Flow-based estimating.\""
  },
  {
    id: 40,
    question: "Your product owner wants to bring the next feature forward so that it is done in parallel to the current feature, but is still released in the existing feature order. You make the necessary adjustments to the product backlog, and decide to adjust the product roadmap, which you have visualized as a Gantt chart. What will you do next?",
    choices: [
      { id: "A", text: "Use a schedule lead on the feature, and change the feature to finish-to-start" },
      { id: "B", text: "Use a schedule lag on the feature, and change the feature to start-to-start" },
      { id: "C", text: "Use a schedule lead on the feature, and change the feature to finish-to-finish" },
      { id: "D", text: "Use a schedule lag on the feature, and change the feature to start-to-finish" }
    ],
    answer: ["C"],
    explanation: "A schedule lag is moving an item back, a schedule lead is bringing an item forward. Precedence diagramming method states for Finish-to-Finish items, the next item cannot finish until the previous item has finished. This allows the items to be worked on in parallel, while still keeping the same delivery order. (PMBOK Guide) – Seventh Edition, 2021, p59, \"Schedules; Lead, Lag.\" (PMBOK Guide) – Sixth Edition, 2017, p180, \"Precedence diagramming method\""
  },
  {
    id: 41,
    question: "You are working on a project where you have been completing the deliverables in sequence, and the project work is starting to fall behind. The project sponsor asks you to speed up the work and reduce the time for the project to be delivered, but also makes it very clear that there is no more money to use when speeding up the work. What will you do next?",
    choices: [
      { id: "A", text: "Apply leads and lags to your project schedule." },
      { id: "B", text: "Apply fast tracking to your project schedule." },
      { id: "C", text: "Apply schedule crashing to your project." },
      { id: "D", text: "Apply resource levelling to your project." }
    ],
    answer: ["B"],
    explanation: "Project fast tracking is a schedule compression method in which activities or tasks that are normally done in sequence are performed in parallel. Schedule crashing includes adding people to activities, working overtime, or paying to expedite deliveries. (PMBOK Guide) – Seventh Edition, 2021, p59, \"Schedules; Fast tracking, crashing.\""
  },
  {
    id: 42,
    question: "After reviewing your project schedule you notice you are behind by three weeks and the schedule will need to be compressed. Your project does not have enough budget to crash the schedule. You check with the lead for each area and review the schedule as to whether they can fast track their deliverables. What will you do next?",
    choices: [
      { id: "A", text: "Fast track team items with discretionary dependencies." },
      { id: "B", text: "Fast track team items with mandatory dependencies." },
      { id: "C", text: "Fast track team items with external dependencies." },
      { id: "D", text: "Fast track team items based on industry regulation." }
    ],
    answer: ["A"],
    explanation: "When compressing the schedule, some activities cannot be fast-tracked because of the nature of the work, others can. A discretionary dependency is based on project preferences, and may be modifiable. External and Mandatory dependencies usually cannot be modified. Internal dependencies may be modifiable, except when based on specific regulatory needs. (PMBOK Guide) – Seventh Edition, 2021, p60, \"Four types of dependencies.\""
  },
  {
    id: 43,
    question: "Your team are new to agile, and had previously been working with Waterfall. Your key customer asks you for a project schedule. The project team believes using a project schedule is from the old waterfall way of working and they shouldn't have to create one. What will you do next?",
    choices: [
      { id: "A", text: "Create a project Gantt chart to visualize the activities within the project." },
      { id: "B", text: "Determine the project's planned versus actual value, instead of working with a schedule directly." },
      { id: "C", text: "Advise the customer that we don't need to plan ahead in an adaptive way of work." },
      { id: "D", text: "Ask your team to develop a high level release plan like a product roadmap, showing the features to be included in each release." }
    ],
    answer: ["D"],
    explanation: "Adaptive schedule planning uses incremental planning. A high level release plan is developed that indicates basic features and functionality to be included in each release. (PMBOK Guide) – Seventh Edition, 2021, p61, \"Adaptive schedule planning.\""
  },
  {
    id: 44,
    question: "You are working in a project team that has recently moved to an Agile way of work. Your business analysts want to gather the requirements, solutions, match them to the scope and do a WBS for the whole deliverable. Your product owner says this will take too long, and is not agile enough for their needs. What will you do next?",
    choices: [
      { id: "A", text: "Ask your team to review the scope management plan for the proper process." },
      { id: "B", text: "Break the deliverable down into smaller pieces so you can deliver those faster." },
      { id: "C", text: "Ask your team to time-box work on the highest priority items in the backlog, update the estimates then re-prioritize as necessary." },
      { id: "D", text: "Review the project charter for the high level scope, and use this to begin delivery quickly." }
    ],
    answer: ["C"],
    explanation: "Adaptive approaches often use time-boxes. The work is based on a prioritized backlog. The project team determines the amount of work they can do in each time-box, estimates the work and self-manages to accomplish the work. At this point, the backlog may be re-prioritized for the next time-box. (PMBOK Guide) – Seventh Edition, 2021, p62, \"Timeboxes\""
  },
  {
    id: 45,
    question: "When reviewing the current progress with your project sponsor, they notice that the system solution is missing a critical piece that will impact the benefit of the project. The project sponsor approves this scope. Your project has a Planned Value of $520,000 and an Actual Cost of $535,000. What will you do next?",
    choices: [
      { id: "A", text: "Work with the PMO to unlock the project management reserves for the extra work." },
      { id: "B", text: "Ask the Product Owner to re-prioritize the backlog and see if the new work will fit." },
      { id: "C", text: "Perform the work within your normal budget as your project is on track." },
      { id: "D", text: "Raise a change request for the changes and gain approval from the Change Control Board." }
    ],
    answer: ["A"],
    explanation: "Management reserves are set aside for unexpected activities related to in-scope work. Depending on the organization's policies, management reserves may be managed by the PMO at the program or portfolio level. (PMBOK Guide) – Seventh Edition, 2021, p62, \"Budget\""
  },
  {
    id: 46,
    question: "You are in the planning stages of an Agile project where the functional manager and senior users have provided the high level requirements and scope. You have been asked to put together a project team that will be able to deliver quickly. What will you do next?",
    choices: [
      { id: "A", text: "Select project members from each city to ensure diversity of knowledge within the team." },
      { id: "B", text: "Put together a resource management plan outlining the resources required." },
      { id: "C", text: "Ask your PMO for current available resources and assign them to the work." },
      { id: "D", text: "Select a small team that can work in the same area so they can solve problems as they arise." }
    ],
    answer: ["D"],
    explanation: "When planning for the team, the project manager considers the ability and necessity for them to work in the same location. Small project teams that can work in the same room are able to take advantage of osmotic communication and can solve problems as they arise. (PMBOK Guide) – Seventh Edition, 2021, p64, \"Project Team Composition and Structure\""
  },
  {
    id: 47,
    question: "You are putting together a project team to deliver an accounting system to offices around the country. The accounting system you are moving to has not been used by anyone in your organization before. The project is quite high risk, and the delivery needs to be right the first time. What will you do next?",
    choices: [
      { id: "A", text: "Select a small team that can work in the same area so they can solve problems as they arise." },
      { id: "B", text: "Use a predictive project approach and source part of your team externally if they have skill-sets in the new system." },
      { id: "C", text: "Train existing internal staff in the new system then have them work on the project." },
      { id: "D", text: "Perform a make or buy analysis on the different software options." }
    ],
    answer: ["B"],
    explanation: "The benefit that outside skills bring to the project are weighed against the costs that will be incurred. With higher risk and a single delivery, a waterfall or predictive project delivery approach is best. (PMBOK Guide) – Seventh Edition, 2021, p63, \"Project Team Composition and Structure\""
  },
  {
    id: 48,
    question: "You are putting together a project plan for a change that affects nearly ten thousand stakeholders in your organization. You have identified the affected stakeholders, analyzed and prioritized them, and are putting together a communication plan to ensure the right engagement is made. What will you NOT include in your plan?",
    choices: [
      { id: "A", text: "Why should information be shared with stakeholders?" },
      { id: "B", text: "What is the best way to provide information?" },
      { id: "C", text: "How can they make changes to the communication plan?" },
      { id: "D", text: "When and how often is information needed?" }
    ],
    answer: ["C"],
    explanation: "Planning communication for the project entails considering the following: Who needs information? Who has the information needed? Why should information be shared with stakeholders? When and how often is information needed? What is the best way to provide information? What information does each stakeholder need? (PMBOK Guide) – Seventh Edition, 2021, p64, \"Communication\""
  },
  {
    id: 49,
    question: "You put together a resource plan for a large amount of physical inventory to be purchased from overseas. You ordered the inventory during project execution, however global supply chains were impacted and the shipment was delayed by three months, significantly impacting your project. What should you have done differently?",
    choices: [
      { id: "A", text: "Hired a resource manager to take care of the resource tasks on your project." },
      { id: "B", text: "Planned strategically about the timing from order to delivery to usage, managing resource risks and their responses." },
      { id: "C", text: "Ensured a means to track the inventory from arrival on site to the delivery of an integrated product." },
      { id: "D", text: "Sourced the inventory locally to reduce the impact of global supply chains." }
    ],
    answer: ["B"],
    explanation: "Project teams whose projects require significant physical materials think and plan strategically about the timing from order, to delivery, to usage. This can include evaluation of bulk ordering versus the cost of storage, global logistics and more. (PMBOK Guide) – Seventh Edition, 2021, p65, \"Physical resources.\""
  },
  {
    id: 50,
    question: "You are half way through your agile project when there is a significant change to the project scope, after it was found that the project would not be able to deliver the benefits it had promised. You check your project budget and there are contingency and management reserves available. What will you do next?",
    choices: [
      { id: "A", text: "Take the project scope change to the change control board for approval." },
      { id: "B", text: "Use the available contingency reserves to make the appropriate change to project scope." },
      { id: "C", text: "Review the change management plan for the change control process." },
      { id: "D", text: "Re-prioritize the product backlog, including the new scope and begin work on the highest priority straight away." }
    ],
    answer: ["D"],
    explanation: "Changes may occur as a result of a risk event, environment change, a deeper understanding of requirements, customer requests and more. Project teams should prepare a process for adapting plans throughout the project. In an Agile team, this may take the form of re-prioritizing the backlog instead of a change control process with project baselines. (PMBOK Guide) – Seventh Edition, 2021, p66, \"Changes\""
  },
  {
    id: 51,
    question: "You have recently taken over on a project that is behind schedule, and slightly over budget. You raise an issue at the steering committee meeting, where they advise that there is no additional funding available and the project must finish on time. You believe you can optimize the project process to try and bring the project back on track. What will you do next?",
    choices: [
      { id: "A", text: "Add additional people and resources to the project to speed it up." },
      { id: "B", text: "Utilize the project's contingency reserve to source the resources you need." },
      { id: "C", text: "Perform project activities in parallel, completing multiple items at once instead of one at a time." },
      { id: "D", text: "Use Lean production methods to reduce non-value add activities, and retrospectives for the team to suggest improvements." }
    ],
    answer: ["D"],
    explanation: "Ways of optimizing the project processes for the environment include Lean production methods, retrospectives or lessons learned, and finding where the next best funding is spent. Adding people and resources may not always improve things – it can also increase the complexity and communication channels. (PMBOK Guide) – Seventh Edition, 2021, p71, \"Project Processes\""
  },
  {
    id: 52,
    question: "Your Project Management Office (PMO) is optimizing all the projects within their portfolio. They ask for your advice in tracking the type of work each team member is doing and how long it takes, suggesting that they categorize and record their work in addition to the work itself. What will you do next?",
    choices: [
      { id: "A", text: "Ask your team to record and categorize their work, as gathering project data is important." },
      { id: "B", text: "Recommend an automated reporting tool where possible, as categorizing their work is NVA." },
      { id: "C", text: "Recommend an automated reporting tool where possible, as recording their work is VA." },
      { id: "D", text: "Ask your team to ignore the request and focus on delivering customer value only." }
    ],
    answer: ["B"],
    explanation: "The time taken to track or record time can be viewed as \"non-value added\" work, that does not directly benefit the output of the receiving customer. We should respect the PMO request, but in addition to being efficient, processes should be effective. (PMBOK Guide) – Seventh Edition, 2021, p72, \"Project Processes\""
  },
  {
    id: 53,
    question: "You are working on an agile project as a scrum master, where the functional manager has worked with some people in your development team before. She approaches them directly to see if they can add a feature to the product in the current sprint. What will you do next?",
    choices: [
      { id: "A", text: "Adjust the sprint backlog to allow for the additional feature." },
      { id: "B", text: "Adjust the product backlog to add the customer requirement." },
      { id: "C", text: "Ask the manager to speak with the Product Owner for product priorities, then protect the team from direct requests in the future." },
      { id: "D", text: "Ask the manager to create a change request so it can go through the proper process." }
    ],
    answer: ["C"],
    explanation: "Project Managers have a responsibility for assessing and balancing project team focus and attention. This may involve protecting the team's production capability – their team health and satisfaction. In Agile, this also means being a diversion shield for the team and removing blockers that get in the way of them making progress in their work. (PMBOK Guide) – Seventh Edition, 2021, p73, \"Maintaining Project Team Focus\""
  },
  {
    id: 54,
    question: "Part of your project management plan is a detailed communications plan, which has the stakeholders on the project, their communication needs, and how information will be communicated. While this is being signed off by the project sponsor, you receive many ad-hoc requests for information from new stakeholders. What will you do next?",
    choices: [
      { id: "A", text: "Review the communications management plan to include the stakeholders, the information they need and their communication preferences." },
      { id: "B", text: "Create an information radiator and ask the stakeholders to pull the information they need." },
      { id: "C", text: "Ignore the new requests, as you have captured all the stakeholders you need to in your plan." },
      { id: "D", text: "Ask the new stakeholders to review your communications management plan to see how you are distributing information." }
    ],
    answer: ["A"],
    explanation: "Once collected, information is distributed as indicated in the project management communications plan. An abundance of ad-hoc communication requests may indicate that the communication planning was not sufficient to meet stakeholder needs – it is a good idea to review it. (PMBOK Guide) – Seventh Edition, 2021, p72, \"Project Communications and Engagement\""
  },
  {
    id: 55,
    question: "You are working on a high value construction project to include smart-home components within multi-million dollar buildings. After completing a make-or-buy analysis, you find that it will cost $700,000 to make the new system, or $500,000 to buy it from a vendor. You prepare a procurement management plan to purchase it. What will you do before conducting a procurement?",
    choices: [
      { id: "A", text: "Work with your project team to complete as much of the system in-house as possible." },
      { id: "B", text: "Work with contracting professionals to develop RFP, SOW, and terms and conditions." },
      { id: "C", text: "Adjust your stakeholder register to include the new vendor, and add the scope to your work breakdown dictionary." },
      { id: "D", text: "Work with your project team to develop an RMP, SMP, and list of resources." }
    ],
    answer: ["B"],
    explanation: "Prior to conducting a procurement, the project manager and technically qualified project team members work with contracting professionals to develop the Request for proposals (RFP), Statement of Work (SOW), terms and conditions, and other necessary documents to go out to bid. (PMBOK Guide) – Seventh Edition, 2021, p74, \"Working with Procurements\""
  },
  {
    id: 56,
    question: "A missing item has been uncovered in the project scope that your project team cannot deliver. The item is not complex and seems to be fairly readily available from various sources. You are ready to move to source selection and choose a vendor that will meet their needs. What will you do before sending out bid documents to vendors?",
    choices: [
      { id: "A", text: "Prepare a Request for Proposal for vendors to provide a solution to your needs." },
      { id: "B", text: "Prepare a Request for Quote to determine the best price from the vendors." },
      { id: "C", text: "Prepare a Request for Information to gather more information and viable sources from the market." },
      { id: "D", text: "Review the procurement management plan for your project's procurement process." }
    ],
    answer: ["C"],
    explanation: "A Request for Information is used to gather more information from the market prior to sending out bid documents to a set of selected vendors. A Request for Proposal is used where scope is complex or the buyer is looking for the vendor to provide a solution. Request for Quote is when price is the deciding factor. (PMBOK Guide) – Seventh Edition, 2021, p75, \"The Bid Process\""
  },
  {
    id: 57,
    question: "You are working on a project where part of the work is planned carefully upfront, and another part is subject to change. You negotiate terms and conditions, including cost, delivery and payment dates. The vendor is concerned about confusion that might occur between the pre-planned and changeable work. What will you do next?",
    choices: [
      { id: "A", text: "Use a Firm Fixed Price contract, to ensure cost is fixed but scope can remain flexible." },
      { id: "B", text: "Use a time and materials contract, to ensure only the time and materials used are paid for." },
      { id: "C", text: "Adjust your project plan to suit either a predictive or adaptive approach to reduce the confusion." },
      { id: "D", text: "Use a master agreement for the overall contract, with adaptive work placed in an appendix." }
    ],
    answer: ["D"],
    explanation: "For projects that use an adaptive approach for some deliverables and a predictive approach for others, a master agreement is used and the adaptive work may be placed in an appendix or supplement. This allows the changes to occur on the adaptive scope without impacting the overall contract. (PMBOK Guide) – Seventh Edition, 2021, p76, \"The Bid Process: Contracting\""
  },
  {
    id: 58,
    question: "You are working on an agile project where there are vastly differing levels of product knowledge within your team. The scrum master suggests that you try to gain knowledge by osmosis, because the project information may be lost when only communicating by email. What will you do next?",
    choices: [
      { id: "A", text: "Co-locate the team to capture the benefit of each person's tacit knowledge." },
      { id: "B", text: "Refer to the organizational process assets to capture the team's explicit knowledge." },
      { id: "C", text: "Refer to the project's knowledge management system to capture the project's explicit knowledge." },
      { id: "D", text: "Create a process to capture the team's tacit knowledge." }
    ],
    answer: ["A"],
    explanation: "Learning by Osmosis is capturing information from the immediate surroundings, such as co-locating the team. Tacit knowledge is information that is not straight forward, such as experience, insights, and practical knowledge or skill. Explicit knowledge can be readily codified using words, a process, pictures. (PMBOK Guide) – Seventh Edition, 2021, p77, \"Explicit and tacit knowledge\""
  },
  {
    id: 59,
    question: "You are working as a Product Owner, and have placed high level information about the product in the product backlog, and the highest priority feature at the top. Senior users informing the project are unable to clearly articulate their requirements, and are concerned that the product will not truly meet their needs. What will you do next?",
    choices: [
      { id: "A", text: "Proceed with the highest priority item during the first sprint." },
      { id: "B", text: "Work with the customer to create mock-ups and prototypes to discover what works for them." },
      { id: "C", text: "Ask your stakeholders to submit a change request and update the project scope accordingly." },
      { id: "D", text: "Begin breaking the work down into user stories to place in the sprint." }
    ],
    answer: ["B"],
    explanation: "On projects that do not have clearly defined requirements prototypes, demonstrations, storyboards and mock-ups can be used to evolve the requirements. In these situations, Stakeholders are more likely to take an \"I'll know it when I see it\" approach. (PMBOK Guide) – Seventh Edition, 2021, p83, \"Evolving and discovering requirements.\""
  },
  {
    id: 60,
    question: "You are gathering requirements for a new feature in a customer management system. The product owner has given a user interface feature as the next highest priority, and you are co-located with the team receiving the benefits. What will you do next?",
    choices: [
      { id: "A", text: "Show the customer team how the new user interface will look, as they will be using it." },
      { id: "B", text: "Communicate the requirements to developers with a coherent, logical flow of ideas." },
      { id: "C", text: "Elicit requirements into user stories using acceptance criteria that is clear, verifiable and traceable." },
      { id: "D", text: "Show the mock up or prototype to the developers and ask them to develop based on that." }
    ],
    answer: ["C"],
    explanation: "Elicitation means to draw out. Well-documented requirements are Clear, Concise, Verifiable, Consistent, Complete and Traceable. A prototype useful but may need more information for developers to turn into a product. Clear purpose, coherent ideas, controlling flow, concise expression and correct grammar are part of the Five C's of communication. (PMBOK Guide) – Seventh Edition, 2021, p83, \"Requirements Elicitation\""
  },
  {
    id: 61,
    question: "You are working in an agile team who are trying to break down the project requirements and scope. They have created a scope statement and work breakdown structure, but are not sure how it will work now that they are using sprints and user stories. What will you do next?",
    choices: [
      { id: "A", text: "Assign activities to each of the scope items in the WBS, and place them on a Gantt Chart." },
      { id: "B", text: "Create a product roadmap with the team, using the lowest, most detailed part of the WBS." },
      { id: "C", text: "Group the work by large themes of customer value, shown as Epics, then break them down into smaller user stories to complete in each sprint." },
      { id: "D", text: "Ask the team to trace the requirements properly using a Requirements traceability Matrix." }
    ],
    answer: ["C"],
    explanation: "One way to identify scope is identifying the themes of customer value, associated by a common factor such as functionality, data source or security level. These are shown as Epics, which are too big to complete in a sprint, and have smaller user stories within them. (PMBOK Guide) – Seventh Edition, 2021, p84, \"Scope decomposition.\""
  },
  {
    id: 62,
    question: "Your project team are trialing an agile way of work. The Product Owner has a clear vision for the product. There is confusion in the team as to how much work should be done on a user story before it is taken to the sprint review, and how they will know a story is complete. What will you do next?",
    choices: [
      { id: "A", text: "Refer to the user story acceptance criteria and your team's Definition of Done." },
      { id: "B", text: "Review the user story with multiple customers and senior users to ensure it is correct." },
      { id: "C", text: "Ask the product owner to sign off on the completed user story." },
      { id: "D", text: "Ensure quality testing on the user story is completed and passed." }
    ],
    answer: ["A"],
    explanation: "Different ways to describe component completion include acceptance or completion criteria, technical performance measures, and Definition of Done. Quality testing will be done to the acceptance criteria, as will Product Owner sign off. (PMBOK Guide) – Seventh Edition, 2021, p85, \"Completion of deliverables\""
  },
  {
    id: 63,
    question: "You have been working closely with the quality manager of your project, planning the budget for the project phase that is due to begin in the next two months. They mention the need to budget for appraisal costs, to avoid quality issues in the future. What will you do next?",
    choices: [
      { id: "A", text: "Ensure there is enough for training the staff to reduce the number of errors." },
      { id: "B", text: "Ensure there is enough for a quality tester to verify the deliverables against agreed specifications." },
      { id: "C", text: "Ensure there is enough to create a quality assurance plan." },
      { id: "D", text: "Ensure there is enough to allow for rework or rectification when defects are found." }
    ],
    answer: ["B"],
    explanation: "This question is on the Cost of Quality. Prevention costs are training or quality planning. Appraisal costs are verification or audits. Internal failure is waste, defects, rework. External failure is customer complaints, repairs and servicing, warranty claims. (PMBOK Guide) – Seventh Edition, 2021, p89, \"Cost of Quality\""
  },
  {
    id: 64,
    question: "Your agile project has recently had multiple quality issues. Project features have been prioritized by the Product Owner, and broken down into user stories. What will you do to help reduce the cost of quality issues the most?",
    choices: [
      { id: "A", text: "Quality test each user story according to its acceptance criteria before release." },
      { id: "B", text: "Advise the team that any quality defects will come out of their bonus." },
      { id: "C", text: "Perform testing all in one go at the end, to reduce the cost of testing resources." },
      { id: "D", text: "Ensure a \"triad\" of developer, tester and customer is involved during requirements and design." }
    ],
    answer: ["D"],
    explanation: "This question is about the Cost of Change. The cost is least during requirements and design, is 20x during build, 50x during test, and 150x if a defect has to be rectified in production. If the requirements, design, and acceptance criteria is incorrect, extra quality testing will not help. (PMBOK Guide) – Seventh Edition, 2021, p90, \"Cost of Change\""
  },
  {
    id: 65,
    question: "You are working in an agile team where executives in the team you are delivering to are asking for a large display of reports to be created every two weeks, showing how the project is tracking and updating them on the cost and benefits. What will you do next?",
    choices: [
      { id: "A", text: "Collect the planned value versus earned value to show the executives any variance in the plan." },
      { id: "B", text: "Co-locate the team with the executives so they can answer any questions as they arise." },
      { id: "C", text: "Suggest a demonstration of the feature developed during each sprint instead, and a burn-down chart of future product features." },
      { id: "D", text: "Create the desired reports for the executives to keep them happy." }
    ],
    answer: ["C"],
    explanation: "The value of measurements is not in the collection and dissemination of the data, but is in how to use the data to take appropriate action. Agile projects demonstrate usable value and features delivered and use live information radiators instead of large reports to stakeholders. (PMBOK Guide) – Seventh Edition, 2021, p94, \"Measurement Performance Domain\""
  },
  {
    id: 66,
    question: "Multiple features have been released, but they are not having the effect the product owner believes they should. Your team are using some Key Performance Indicators to track performance, and you agree to move to more Leading indicators. What could you use as examples of Leading indicators for your project?",
    choices: [
      { id: "A", text: "An increase in customer usage once the feature is released, such as sales and repeat purchasing." },
      { id: "B", text: "Stakeholders who are not engaged and lack of a risk management process." },
      { id: "C", text: "Velocity of the work completed each sprint and cycle time of user stories." },
      { id: "D", text: "Variance in the schedule between planned and actual time taken." }
    ],
    answer: ["B"],
    explanation: "There are two types of Key Performance Indicators (KPIs): Leading and Lagging. Leading predict changes or trends in the project, and include Lack of a risk management process, stakeholders who are not engaged, poorly defined project success criteria. Lagging indicators include work completed or schedule variance. (PMBOK Guide) – Seventh Edition, 2021, p96, \"Leading Indicators\""
  },
  {
    id: 67,
    question: "You are working in an agile project team that has increased in size and complexity since the project began. In reviewing the throughput of work with your team, you notice fewer and fewer user stories being completed, and the roadmap of features scheduled to go live is being pushed out. What will you do next?",
    choices: [
      { id: "A", text: "Place a limit on the work in progress and work with the team to reduce the cycle time." },
      { id: "B", text: "Increase meetings with the team so everyone can collaborate together." },
      { id: "C", text: "Ask the team to work overtime until the number of features reduces." },
      { id: "D", text: "Put a Pull system in place, where the team can pull work only when they are ready." }
    ],
    answer: ["A"],
    explanation: "With more work, different tasks and increased complexity, the team are likely context switching between too many different things. Kanban aims to limit the work in progress to avoid multi-tasking. Other things we can use are reducing queue size and batch sizes, and reviewing process efficiency. (PMBOK Guide) – Seventh Edition, 2021, p99, \"What to measure: Delivery\""
  },
  {
    id: 68,
    question: "You are working on an agile project where the project customer wants a reliable way to measure the project performance, and you know you first need a baseline. What measures will you show to your customer as part of your agile project?",
    choices: [
      { id: "A", text: "Start and finish dates." },
      { id: "B", text: "Project team velocity." },
      { id: "C", text: "Rate of Features completed." },
      { id: "D", text: "Schedule and Cost variance." }
    ],
    answer: ["C"],
    explanation: "An agile project tracks and demonstrates actual features delivered. With a stable team, cost is most often fixed. The schedule is also fixed, and the scope is variable depending on what the customer wants to prioritize in the given time. (PMBOK Guide) – Seventh Edition, 2021, p100, \"Baseline performance\""
  },
  {
    id: 69,
    question: "The product owner has worked with a team of senior users to gather feature ideas. They now have a list of more than fifty ideas for your team to develop, which is far too many to complete in the time-frame you have. What will you do next?",
    choices: [
      { id: "A", text: "Ask the new product owner to return to the senior users and ask for a shortened list." },
      { id: "B", text: "Start work on the smallest features first, to ensure you are delivering value quickly." },
      { id: "C", text: "Workshop the features with a wider audience to get a completely diverse view on their priority." },
      { id: "D", text: "Ask the new product owner to prioritize the features using cost to benefit, then deliver in priority order until time or money runs out." }
    ],
    answer: ["D"],
    explanation: "Product Owners prioritize features based on business value. Metrics that measure business value include Cost-benefit ratio, planned to actual benefits delivery, return on investment, and Net Present Value. (PMBOK Guide) – Seventh Edition, 2021, p102, \"Business value.\""
  },
  {
    id: 70,
    question: "Your agile project team has only recently formed. The product is still unclear, and there have been disagreements and minor conflicts over the past two weeks as the team find their rhythm. You would like things to improve, but can't quite pinpoint or address the problem. What will you do next?",
    choices: [
      { id: "A", text: "Hold a workshop with your team to ask them why they are unhappy." },
      { id: "B", text: "Have the team complete a Net Promoter Score with comments, and ask for improvement ideas at the next retrospective." },
      { id: "C", text: "Raise the issue with their line managers, to ensure all levels are aware of and working on the issue." },
      { id: "D", text: "Have the team pair up together for their tasks, so they can learn from each other." }
    ],
    answer: ["B"],
    explanation: "Measuring stakeholders can be done with a Net Promoter Score or satisfaction score, especially with a comment, or a mood chart. Improvement ideas are captured during retrospectives for most agile teams. Pairing is another agile practice, but is not as relevant here. (PMBOK Guide) – Seventh Edition, 2021, p103, \"Measuring: Stakeholders\""
  },
  {
    id: 71,
    question: "The project has faced serious impacts in getting materials, with supply chains being disrupted and a global pandemic, and is currently three weeks behind schedule. You take this information to the next project steering committee meeting, where they advise they need more information on how much the project will end up costing. What will you do next?",
    choices: [
      { id: "A", text: "Use the current project budget with no deviations until it runs out." },
      { id: "B", text: "Use the project burn-down chart to see the burn-rate of accounting funds." },
      { id: "C", text: "Use a regression analysis on the current rate of spending to see where the final cost will end up." },
      { id: "D", text: "Use the project's estimate at completion to show the steering committee the most likely final cost." }
    ],
    answer: ["D"],
    explanation: "This question is talking about budget forecasts. Regression analysis may work but the best answer is the Estimate at Completion, which is the (BAC / (EV / AC)). (PMBOK Guide) – Seventh Edition, 2021, p104, \"Forecasts\""
  },
  {
    id: 72,
    question: "You are working on an agile project where the project sponsor and executive managers require lengthy reports about the project work each week. This takes you and the project team a considerable amount of time to do, and reduces time spent creating the actual product. What will you do next?",
    choices: [
      { id: "A", text: "Reuse most of the information each week so your time spent on them is reduced." },
      { id: "B", text: "Suggest the leaders come to the sprint review and gather what they need from the information radiator." },
      { id: "C", text: "Ask your project sponsor to wait until a steering committee meeting for the information." },
      { id: "D", text: "Share your working project schedule and budget with the executives instead of creating the reports." }
    ],
    answer: ["B"],
    explanation: "Agile teams showcase actual work completed at the sprint review. Information radiators, also known as big visible charts, are visible displays that allow anyone to \"pull\" the information from. They are often \"low tech and high touch\" and contain information on work completed or remaining, risks, and things like a Kanban board and burn-down chart. (PMBOK Guide) – Seventh Edition, 2021, p108, \"Information Radiators\""
  },
  {
    id: 73,
    question: "You are working on a project that has planned as much as they can up-front. You would like them to move to a more agile way of work. Currently, the work is hidden, the team catches up only once a week in a working group, and it is hard to see what each person is working on and keep track of it. What will you do next?",
    choices: [
      { id: "A", text: "Ask your team to report on their work in a written status update each day so you can keep track." },
      { id: "B", text: "Have more working group meetings so you are always up to date on what your team is working on." },
      { id: "C", text: "Ask the team to move their work to a central, visible task board, then have a short meeting each day to discuss progress on the cards." },
      { id: "D", text: "Remove the team meetings altogether and trust your team to get the work done." }
    ],
    answer: ["C"],
    explanation: "This question is talking about stand-ups and a Kanban board. \"Task boards\" are part of the visual controls used, where an increment of work moves from To Do to In Progress to Done. The team meets for 15 minutes each day to discuss progress and raise any impediments. (PMBOK Guide) – Seventh Edition, 2021, p109, \"Visual Controls: Task boards\""
  },
  {
    id: 74,
    question: "You are working on a hybrid project, where the majority of the work has been planned up front. The team manages their work via a Kanban board, and report on progress and blockers each day. As the project evolves, stakeholders have added more and more scope to the product, with one executive raising an urgent feature that needs to be added. What will you do next?",
    choices: [
      { id: "A", text: "Limit the number of cards in the \"Ready\" or \"To Do\" column, and ask the Product Owner to work with stakeholder requests, noting the need to swap the new item for an existing item." },
      { id: "B", text: "Match the number of user stories to the team's velocity, to ensure a sustainable pace." },
      { id: "C", text: "Work with the stakeholder to raise a change request, and note the outcome in the change log." },
      { id: "D", text: "Review the impact of the scope change with the stakeholder using the WBS dictionary." }
    ],
    answer: ["A"],
    explanation: "As a hybrid project using Kanban and some Agile ceremonies, the most appropriate way to manage the work and scope is by using a WIP Limit on the board. The Product Owner has the final say on prioritizing features and scope, so works with stakeholders to ensure they understand something may be de-prioritized by adding a new feature. (PMBOK Guide) – Seventh Edition, 2021, p110, \"Kanban Board\""
  },
  {
    id: 75,
    question: "You are working as a product owner in an agile team, where the main measure of project success is the number of features delivered into production. Over the past six months, the team have delivered the highest number of features your organization has ever seen, however customers are starting to complain about issues and bugs in the product. What will you do next?",
    choices: [
      { id: "A", text: "Ask the team to work harder in delivering more features, to fix the product issues." },
      { id: "B", text: "Adjust the product metrics to include customer satisfaction and quality measures." },
      { id: "C", text: "Add a slack card of 5 points into the sprint backlog, to deal with the technical debt." },
      { id: "D", text: "Remove customer comments and feedback until you have finished delivering all the features." }
    ],
    answer: ["B"],
    explanation: "This question is about the Hawthorne Effect, where what we measure influences the behavior of our team. In this case, we measured the number of features only, and the team delivered, but at the cost of quality and customer satisfaction. Adding measures for those two things will balance the team's behavior. (PMBOK Guide) – Seventh Edition, 2021, p112, \"Measurement pitfalls: Hawthorn Effect\""
  },
  {
    id: 76,
    question: "You have been working on a project for the past eight months. Your project team have been approached by multiple stakeholders for reporting on various performance measures about the project and the product area. Now, a large amount of their time is spent on creating these reports for others. They have escalated this issue to you. What will you do next?",
    choices: [
      { id: "A", text: "Ask the project stakeholders to stop interacting with your project team." },
      { id: "B", text: "Spend a portion of your project budget to automate the reports for your stakeholders." },
      { id: "C", text: "Work with the team, including the stakeholders, to only measure things that will facilitate a decision, help avoid an issue or increase project performance." },
      { id: "D", text: "Invite your stakeholders to your sprint reviews, so they can see a working feature in practice." }
    ],
    answer: ["C"],
    explanation: "The intent in measuring and displaying data is to learn and improve. To optimize project performance and efficiency, only measure and report information that will allow the project team to learn, facilitate a decision, improve some aspect of performance, help avoid an issue, or help prevent performance deterioration. (PMBOK Guide) – Seventh Edition, 2021, p114, \"Growing and Improving\""
  },
  {
    id: 77,
    question: "You are working on a project where there is a significant amount of uncertainty about the requirements. There is also a legislative change coming, and no one knows what it will mean for your industry. As a project manager, how will you deal with this uncertainty?",
    choices: [
      { id: "A", text: "Perform additional planning for your project to improve your view on scope management." },
      { id: "B", text: "Hold additional retrospectives, to capture challenges and improvements from your team." },
      { id: "C", text: "Create a risk assessment of all possible project risks, with their risk ratings and owners." },
      { id: "D", text: "Gather information and prepare for multiple outcomes, and build team resilience through processes and training." }
    ],
    answer: ["D"],
    explanation: "This question is about general uncertainty and risk. Uncertainty cannot be predicted precisely, and methods for responding to uncertainty include gathering information, preparing for multiple outcomes, using set-based design, and building in resilience. (PMBOK Guide) – Seventh Edition, 2021, p118, \"General Uncertainty\""
  },
  {
    id: 78,
    question: "You are working on a project with a vendor where there is significant ambiguity involved and multiple options the team could go with. Many outcomes are possible that have varying degrees of impact to improve the situation. What will you do next?",
    choices: [
      { id: "A", text: "Use experiments and prototypes, and progressive elaboration to work your way through it." },
      { id: "B", text: "Ask your team for additional reporting around the different options so you can make an informed decision." },
      { id: "C", text: "Add all the different options into your project scope, so all your bases are covered." },
      { id: "D", text: "Work more closely with your senior users so they can inform you of the product requirements." }
    ],
    answer: ["A"],
    explanation: "This question is on Ambiguity. There are two types of ambiguity: Conceptual (where it is hard to understand) and situational (where there are multiple options and outcomes). Use progressive elaboration, experiments and prototypes to work through this ambiguity. (PMBOK Guide) – Seventh Edition, 2021, p120, \"Ambiguity\""
  },
  {
    id: 79,
    question: "You are working on a project to improve some software that has been in production for over 17 years, and has been modified extensively over that time. It also integrates with many other systems within your organization. You cannot decide which features to deliver first. How will you deal with the complexity?",
    choices: [
      { id: "A", text: "List out the possible features you can deliver and prioritize them by cost over benefit." },
      { id: "B", text: "Simulate decoupling connecting parts to simplify the number of variables, then reframe your view by brainstorming with a diverse set of stakeholders." },
      { id: "C", text: "Provide an incentive for your project team for whoever can solve this complex problem." },
      { id: "D", text: "Form a business-case for a third party system to replace the existing, complex system, to transfer the risk of delivery." }
    ],
    answer: ["B"],
    explanation: "This question is about Complexity. Methods for dealing with complexity include Systems based – decoupling and simulation; Reframing – Diversity and balanced views; Process based – Iterating, engaging stakeholders and using a fail safe or error proofing. (PMBOK Guide) – Seventh Edition, 2021, p121, \"Complexity\""
  },
  {
    id: 80,
    question: "You are working on a project that requires a very particular programming skill-set that is not very common. It is also the hottest job-market the industry has seen in two decades, people are hard to come by and leave often. The programming language is also evolving at a quick pace. What will you do next?",
    choices: [
      { id: "A", text: "Develop the product from scratch in a more common programming language." },
      { id: "B", text: "Ask your whole team to learn the programming skill-set, to cover the risk." },
      { id: "C", text: "Use alternatives analysis to gather different options, and ensure a sufficient cost reserve to help complete your project." },
      { id: "D", text: "Raise a risk to your project completion, with the threat of project team member skill-sets." }
    ],
    answer: ["C"],
    explanation: "This question is referring to Volatility, which is an environment that is subject to rapid and unpredictable change, including ongoing fluctuations in available skill-sets or materials. Alternatives analysis and cost reserves are ways to deal with volatility. (PMBOK Guide) – Seventh Edition, 2021, p122, \"Volatility\""
  },
  {
    id: 81,
    question: "Your project team have found a significant data vulnerability in one of the features planned in your product backlog, where customer data is exposed without password access. This feature is partially made by a third party vendor, and the relationship is owned by a functional manager in your organization. What will you do next?",
    choices: [
      { id: "A", text: "Avoid the risk and wait for the third party vendor to fix the vulnerability." },
      { id: "B", text: "Transfer the risk by asking a different vendor to create a feature with no vulnerability in their design." },
      { id: "C", text: "Escalate the threat to the manager with appropriate authority to act on the response." },
      { id: "D", text: "Accept the risk and move on the other features so the work continues to get done." }
    ],
    answer: ["C"],
    explanation: "With project risks and responses to threats, there are five main types: Avoid, Escalate, Transfer, Mitigate and Accept. Escalation is appropriate when the project team agrees that a threat is outside the scope of the project, or exceeds the project manager's authority. (PMBOK Guide) – Seventh Edition, 2021, p123, \"Overall Project Risk: Threats\""
  },
  {
    id: 82,
    question: "You brainstorm risk responses with your project team and project sponsor, and decide you cannot transfer a certain high impact risk. You also cannot avoid the risk, and there is no one in the organization to escalate it to. Your project sponsor agrees that you should actively accept the risk. What will you do next?",
    choices: [
      { id: "A", text: "Develop a contingency plan that would be triggered if the event occurred." },
      { id: "B", text: "Shift the ownership to a third party to manage the risk and bear the impact if it does occur." },
      { id: "C", text: "Act to eliminate the threat or protect the project from its impact only." },
      { id: "D", text: "Take action to reduce the probability of its occurrence, and the impact of the threat." }
    ],
    answer: ["A"],
    explanation: "This question is describing the various risk responses to threats. Actively accepting a risk can include developing a contingency plan that would be triggered if the event occurred. Passive acceptance means doing nothing. Acting to eliminate the threat is avoiding it, escalating requires an outside manager's authority, shifting the ownership is transferring the risk, and mitigating the risk is taking action to reduce the probability of occurrence or impact. (PMBOK Guide) – Seventh Edition, 2021, p123, \"Risk: Threats\""
  },
  {
    id: 83,
    question: "You are working on a project to build a new customer database system for an engineering team. In working with the requirements, you realize that this system can also work with other teams within your organization, and the effort to add those teams is quite small. What will you do next?",
    choices: [
      { id: "A", text: "Work with the other teams and their managers to escalate the opportunity." },
      { id: "B", text: "Work with those other teams and their managers to exploit the opportunity." },
      { id: "C", text: "Work with those other teams and their managers to enhance the opportunity." },
      { id: "D", text: "Work with the other teams and their managers to accept the opportunity." }
    ],
    answer: ["B"],
    explanation: "When dealing with opportunities in your project there are five main responses: Exploit is acting to ensure an opportunity occurs, Escalating is when it is outside the authority of the project manager, sharing allocates ownership to a third party who is best able to capture its benefit, enhancing is increasing the probability of occurrence, and accepting merely acknowledges its existence without doing anything further. (PMBOK Guide) – Seventh Edition, 2021, p125, \"Risks: Opportunities\""
  },
  {
    id: 84,
    question: "You are working as a product owner in an agile team, and during a recent risk review the team have uncovered various risks that will impact your project. You brainstorm risk responses with your team. The project customer would like them to be mitigated as soon as possible. What will you do next?",
    choices: [
      { id: "A", text: "Ask your team to work on the risk responses and get them done as soon as possible." },
      { id: "B", text: "Ignore the risks initially, some may dissipate over time and only the important ones will be left." },
      { id: "C", text: "Assign the risk responses to all stakeholders around your project team to share the load." },
      { id: "D", text: "Prioritize the risks by comparing the expected monetary value of the risk to the anticipated return on investment of upcoming deliverables." }
    ],
    answer: ["D"],
    explanation: "Prioritizing risk responses in a risk adjusted backlog is just as important as prioritizing features, to avoid negative risk impacts and technical debt. Comparing the EMV of a risk to the anticipated ROI of a deliverable allows product owners to incorporate risk responses into the planned work. (PMBOK Guide) – Seventh Edition, 2021, p15, \"Checking outcomes – Stakeholder Performance\""
  },
  {
    id: 85,
    question: "You are planning a project where supply chains have been impacted, and the requirements are complex and intertwined with other areas of the business. Your project sponsor asks you to manage these risks before the project moves to execution. What will you do next?",
    choices: [
      { id: "A", text: "Move to project execution, so you can work through risks as they happen." },
      { id: "B", text: "Move to an agile way of work so you can deliver faster and also deal with the complexity." },
      { id: "C", text: "Note the risks with appropriate controls, and add a contingency reserve in the project budget." },
      { id: "D", text: "Assign a management reserve to your project budget and deal with the risks before moving to project execution." }
    ],
    answer: ["C"],
    explanation: "Reserves are an amount of time or budget set aside to account for handling risks. Contingency reserve is for identified risks, should they occur. Management reserve is for unknown events such as un-planned, in-scope work. (PMBOK Guide) – Seventh Edition, 2021, p127, \"Management and contingency reserve\""
  },
  {
    id: 86,
    question: "You are working on an agile project and delivering a usable feature every few weeks. The project sponsor is from a waterfall background and is concerned that there is not enough focus on risk. They would like to hold a regular risk review with a wide group of stakeholders. What will you suggest instead?",
    choices: [
      { id: "A", text: "There is no need for a separate meeting as risk is everyone's responsibility in an agile team." },
      { id: "B", text: "Use daily stand-ups to report blockers early, and fortnightly demonstrations of the product to catch any stakeholder dissatisfaction." },
      { id: "C", text: "Use the Kanban board to see the work and how it flows from the backlog to \"done\"." },
      { id: "D", text: "Hold the risk meeting, but only with the immediate project team to avoid unnecessary participants." }
    ],
    answer: ["B"],
    explanation: "In agile teams the risk review can take the form of the daily stand-up, reporting blockers that could become threats if they continue to delay progress. Frequent demonstrations of the product can also surface threats and opportunities, as can retrospectives. While quality is everyone's responsibility, and the Kanban board does visualize the work, B is the best answer. (PMBOK Guide) – Seventh Edition, 2021, p127, \"Risk Review\""
  },
  {
    id: 87,
    question: "Your Project Management Office has no prescribed way of work, so are working with a vendor who supplies an eXtreme Programming framework at a significant cost. Your organization is using it, but projects are still running behind schedule, over budget, and with low customer satisfaction. What will you do next?",
    choices: [
      { id: "A", text: "Tailor the approach to suit the organization, operating environment and project needs." },
      { id: "B", text: "Use a waterfall approach instead, to ensure the proper planning is completed for every project." },
      { id: "C", text: "Switch to Scrum instead, as it is a more popular framework and has been tested in the market." },
      { id: "D", text: "Tighten the controls around the project environment with a more directive PMO approach." }
    ],
    answer: ["A"],
    explanation: "Projects operate in complex environments that need to balance competing demands. Tailoring is performed to better suit the organization, operating environment and project needs. (PMBOK Guide) – Seventh Edition, 2021, p132, \"Tailoring Overview\""
  },
  {
    id: 88,
    question: "Your Project Management Office is in the middle of a company-wide \"ways of working\" transformation. They have taken a popular project framework and are tailoring it to the organization with branded templates and processes that meet their existing governance requirements. You have been asked to help finalize the process. What will you do next?",
    choices: [
      { id: "A", text: "Gather feedback from the functional business areas to ensure the process meets their needs." },
      { id: "B", text: "Roll out the new way of working to the PMO as a pilot first, then to the rest of the organization." },
      { id: "C", text: "Enable a process for tailoring based on size and complexity, and implement ongoing improvement." },
      { id: "D", text: "Form a working group comprised of executives and project professionals." }
    ],
    answer: ["C"],
    explanation: "This question is referring to the tailoring process, which is: Select the initial development approach, tailor for the organization, tailor for the project, and implement ongoing improvement. (PMBOK Guide) – Seventh Edition, 2021, p137, \"The Tailoring Process\""
  },
  {
    id: 89,
    question: "You are a manager of a PMO in a large organization, which has recently undertaken a company-wide way of working transformation. You need to select an initial development approach for your projects, which you will then tailor to suit them further. What will you do next?",
    choices: [
      { id: "A", text: "Use the framework that best engages your executive team through easy-to-use graphics and presentations." },
      { id: "B", text: "Select the most popular current framework to keep up with what other organizations are doing." },
      { id: "C", text: "Select multiple development approaches as a baseline for your organization." },
      { id: "D", text: "Use a suitability filter to assess the most appropriate development approach." }
    ],
    answer: ["D"],
    explanation: "A suitability filter tool helps project teams consider whether a project has characteristics that lend themselves toward a predictive, hybrid, or adaptive approach. Select one as a base, then enable the ability to tailor to your project or organization's circumstances. (PMBOK Guide) – Seventh Edition, 2021, p138, \"Select Initial Development Approach.\""
  },
  {
    id: 90,
    question: "Your organization is starting to move to an agile way of work and they are setting up a Value Delivery Office (VDO) to complement the existing PMO. The executives in the area have begun working through what the function looks like and the roles and responsibilities that might exist. They approach you for help. What will you tell them?",
    choices: [
      { id: "A", text: "The VDO is responsible for the value delivered, and owns the programs within the organization." },
      { id: "B", text: "The VDO focuses on coaching project teams, building adaptive skills and capabilities and mentoring sponsors and product owners to be more effective." },
      { id: "C", text: "The VDO is responsible for agile resources such as scrum masters and product owners to be allocated effectively to project teams." },
      { id: "D", text: "The VDO creates the organizational framework to be used on each project throughout the company." }
    ],
    answer: ["B"],
    explanation: "A VDO serves an enabling role, rather than a management or oversight function. It focuses on coaching project teams, building adaptive skills and capabilities throughout the organization, and mentoring sponsors and product owners. (PMBOK Guide) – Seventh Edition, 2021, p141, \"Tailor for the organization: VDO\""
  },
  {
    id: 91,
    question: "You have been planning a project for the last two months, gathering requirements and scope and assigning tasks to a schedule. As you get closer to the execution phase of your project you need to decide what delivery approach you will use. The requirements are likely to change, require a medium amount of compliance, but can be released in one go. What will you do next?",
    choices: [
      { id: "A", text: "Set up a Predictive delivery approach with your team." },
      { id: "B", text: "Set up an Incremental delivery approach with your team." },
      { id: "C", text: "Set up an Agile or adaptive delivery approach with your team." },
      { id: "D", text: "Set up an Iterative delivery approach with your team." }
    ],
    answer: ["D"],
    explanation: "Gathering feedback and improving over time, while delivering in one release is an iterative delivery approach. Incremental releases increments of value (like features), Predictive plans everything up front once then delivers in one go, and Agile gathers feedback and releases incrementally. (PMBOK Guide) – Seventh Edition, 2021, p141, \"Tailor for the project: Product / Deliverable\""
  },
  {
    id: 92,
    question: "You have been asked to make a process improvement in the accounting area of your organization. You have been assigned a small team of nine people, each with all the skills you need to complete the project. The team is co-located, and have unlimited access to the project customer. How will you tailor your delivery approach?",
    choices: [
      { id: "A", text: "Use a predictive / waterfall delivery approach." },
      { id: "B", text: "Use an agile / adaptive delivery approach." },
      { id: "C", text: "Use an incremental delivery approach." },
      { id: "D", text: "Use a hybrid delivery approach." }
    ],
    answer: ["B"],
    explanation: "An agile / adaptive delivery approach works best when the team is small (fewer than 9 – 12 people), has close access to the customer, is cross-functional and is co-located. Predictive is best when lots of planning is needed, Hybrid is best when there are two different approaches needed. Incremental delivers features over time. (PMBOK Guide) – Seventh Edition, 2021, p142, \"Tailor for the project: Project team.\""
  },
  {
    id: 93,
    question: "You have been working as a project manager in an organization for some time, where an agile-centric delivery approach and way of work has been selected and tailored for the organization. Over the past few months, you notice several things that are not working and could be improved as you begin new projects. What will you do next?",
    choices: [
      { id: "A", text: "Review the product backlog to see the flow of features going through project teams." },
      { id: "B", text: "Look into issues, threats and quality assurance statistics." },
      { id: "C", text: "Suggest a retrospective with PMO leaders to determine ongoing improvement opportunities." },
      { id: "D", text: "Review a control chart and value stream map to see non-value-added activities and remove waste in the process." }
    ],
    answer: ["C"],
    explanation: "In an agile environment, holding a retrospective to gather what is working well and what is challenging us or could be improved is the best way to find ongoing improvements. (PMBOK Guide) – Seventh Edition, 2021, p151, \"Tailoring: Diagnostics\""
  },
  {
    id: 94,
    question: "You have been working on a project to deliver a new customer data system, and have noticed that the work is starting to slow down. Fewer user stories are appearing in your sprint backlog, as they are not ready. You hold a retrospective with your team and discover that there are long delays waiting for requirements and acceptance criteria approvals. What will you do next?",
    choices: [
      { id: "A", text: "Streamline approval decisions through fewer people (such as a Product Owner) authorized to make decisions up to certain value thresholds." },
      { id: "B", text: "Ask your team to place the user stories in the sprint backlog, reducing the need for customer approval." },
      { id: "C", text: "Note the long delays as a risk to your project, with a high likelihood as it is currently happening." },
      { id: "D", text: "Escalate the issue to the functional manager to ensure approvals are happening quickly." }
    ],
    answer: ["A"],
    explanation: "Where there are long delays or waiting for approvals, the tailoring suggestion is to streamline decisions through fewer people authorized to make decisions up to certain value thresholds. (PMBOK Guide) – Seventh Edition, 2021, p151, \"Common situations and tailoring suggestions\""
  },
  {
    id: 95,
    question: "You have been assigned to take over an existing project as the previous project manager leaves for another opportunity. In working with your team you notice there is a large amount of work currently in progress all at once, with team members working on multiple items at a time and constantly context-switching between tasks. What will you do next?",
    choices: [
      { id: "A", text: "Add more people to your project to get the work done at a faster rate." },
      { id: "B", text: "Use value stream mapping and Kanban boards to visualize the work and brainstorm solutions with your team." },
      { id: "C", text: "Ask your team to work overtime to cover the extra work and bring it back into line." },
      { id: "D", text: "Review the scope of the project and reduce items with a low impact to customer satisfaction." }
    ],
    answer: ["B"],
    explanation: "Where there is too much Work In Progress (WIP) or high rates of scrap, it is recommended to use techniques like value Stream Mapping and Kanban Boards to visualize the work, identify the issues, and propose solutions. Adding more people can also complicate communication and processes. (PMBOK Guide) – Seventh Edition, 2021, p151, \"Common situations and tailoring suggestions\""
  },
  {
    id: 96,
    question: "The product owner has prioritized the product backlog of features, and the team creates user stories with estimates and places enough to fill a two week sprint. You notice that the pieces being completed are being rejected by the customer for defects and missed requirements. What will you do next?",
    choices: [
      { id: "A", text: "Create the project scope from scratch with the project team and customers so it is correct." },
      { id: "B", text: "Have an \"Iteration zero\" planning sprint with your project team to set it up for success." },
      { id: "C", text: "Add more feedback loops such as shoulder checks, peer review, unit and system testing." },
      { id: "D", text: "Have less frequent customer demonstrations, so they only see the product when it is correct." }
    ],
    answer: ["C"],
    explanation: "When a product is facing poor quality deliverables, the tailoring suggestion is to add more feedback verification loops and quality assurance steps, including things such as demonstrations and reviews, peer review, shoulder checks, pair programming, quality audits or testing (unit, system, user, regression, and automated). (PMBOK Guide) – Seventh Edition, 2021, p151, \"Common situations and tailoring suggestions\""
  },
  {
    id: 97,
    question: "Your project team has started to find their rhythm, yet you notice that they seem disengaged in their work and are dragging their feet on normal tasks. You check your project budget and note that the team are all paid fairly for the market and within the same range for the role. What will you do next?",
    choices: [
      { id: "A", text: "Look for ways to reward team members with bonuses above their normal pay rate." },
      { id: "B", text: "Move team members around to different roles frequently, so they experience job variety." },
      { id: "C", text: "Give the team a paid day off to show how much you appreciate their work." },
      { id: "D", text: "Establish ways for the team to grow and advance, such as career paths or learning pathways." }
    ],
    answer: ["D"],
    explanation: "Frederick Herzberg conducted a study of motivational factors in working life, and found hygiene factors (company policies, salary and the physical environment) and motivational factors (achievement, growth and advancement). If hygiene factors are insufficient, they cause dissatisfaction. If they are sufficient, then use motivational factors to provide satisfaction. Paying bonuses or a paid day off may seem like a good idea, but will fade and not address the root cause of engagement. (PMBOK Guide) – Seventh Edition, 2021, p158, \"Hygiene and motivational Factors\""
  },
  {
    id: 98,
    question: "You are working as a project manager on a regulatory change for your organization. You notice that the team are not communicating as well as they could be. You put together a plan to improve team communication by increasing its effectiveness and richness. What will you do?",
    choices: [
      { id: "A", text: "Include methods that will handle multiple information cues, facilitate rapid feedback, and utilize natural language." },
      { id: "B", text: "Include methods to escalate issues easily, with executives being open for anything the team needs." },
      { id: "C", text: "Include ways to get sign off in writing, so it can be recorded and reviewed later when needed." },
      { id: "D", text: "Include communication that ensures everyone gets a voice and input into decisions." }
    ],
    answer: ["A"],
    explanation: "Alistair Cockburn developed a model that describes communication channels along the axes of effectiveness and richness. Media richness includes the ability to handle multiple information cues, facilitate rapid feedback, establish a personal focus and utilize natural language – for example face to face communication, or co-located teams. (PMBOK Guide) – Seventh Edition, 2021, p157, \"Effectiveness of communication channels\""
  },
  {
    id: 99,
    question: "Your deliverables have been signed off by the Product Owner and are ready to be released to the customer, which is the financial analytics team of your organization. The new system will be quite a change from their normal day-to-day work. The team already have the desire to use the new system. What will you do next?",
    choices: [
      { id: "A", text: "Tell them the vision and why the change is necessary." },
      { id: "B", text: "Use training and education to show them the new processes and systems." },
      { id: "C", text: "Give them unlimited hands-on practice so they can get used to the new system." },
      { id: "D", text: "Include rewards, recognition, feedback and measurement." }
    ],
    answer: ["B"],
    explanation: "The ADKAR model for change management has five steps: Awareness, Desire, Knowledge, Ability and Reinforcement. Once people have the desire for the change, the next step is knowledge which includes training and education for the new processes and systems. (PMBOK Guide) – Seventh Edition, 2021, p161, \"ADKAR Model.\""
  },
  {
    id: 100,
    question: "You are leading a large organizational change that affects more than a thousand people across multiple teams. You have engaged with the senior managers of that area, created a brief vision statement that summarizes the change, and created a strategy to realize the vision. You communicate the vision throughout the change process. What will you do next?",
    choices: [
      { id: "A", text: "Release multiple usable features to the affected teams so they can get used to it gradually." },
      { id: "B", text: "Anchor the changes into corporate culture by telling success stories and recognizing people who embody the change." },
      { id: "C", text: "Address the obstacles to change, including outdated processes and people resistance." },
      { id: "D", text: "Set goals for continued improvement on the change throughout the organization." }
    ],
    answer: ["C"],
    explanation: "John Kotter's 8-step process for leading change is a top down approach: 1: Create urgency, 2: Form a powerful coalition, 3: Create a vision for change, 4: Communicate the vision, 5: Remove obstacles, 6: Create short term wins, 7: Build on the change, 8: Anchor the changes in corporate culture. After communicating the vision comes removing obstacles. (PMBOK Guide) – Seventh Edition, 2021, p162, \"The 8-Step Process for Leading Change\""
  },

];

export const QUESTIONS = [
    {
        id: 1,
        question: "What is Scrum?",
        choices: [
            { id: "A", text: "A framework for project management" },
            { id: "B", text: "A methodology for software development" },
            { id: "C", text: "A framework for software development" },
            { id: "D", text: "A methodology for project management" },
        ],
        answer: ["A"],
        explanation: "Scrum is a framework for project management and software development that emphasizes iterative development, cross-functional teamwork, and continuous improvement."
    },
    {
      id: 2,
      question: "What is the primary role of a Scrum Master?",
      choices: [
          { id: "A", text: "Managing the project timeline" },
          { id: "B", text: "Facilitating Scrum events and supporting the team in following Scrum practices" },
          { id: "C", text: "Writing code and fixing bugs" },
          { id: "D", text: "Defining product requirements" },
      ],
      answer: ["B"],
      explanation: "The Scrum Master acts as a servant leader and facilitator for the Scrum Team, helping to ensure that the team adheres to Scrum practices and principles, removes impediments, and fosters an environment where the team can be effective."
  },
  {
    id: 3,
    question: "What is a Sprint in Scrum?",
    choices: [
        { id: "A", text: "A meeting where the team plans their work" },
        { id: "B", text: "A fixed-length event where the team creates a shippable product increment" },
        { id: "C", text: "A review session with stakeholders" },
        { id: "D", text: "A daily check-in for the development team" },
    ],
    answer: ["B"],
    explanation: "A Sprint is a time-boxed period (usually 2-4 weeks) during which the Scrum Team works to complete a set amount of work and produce a potentially releasable increment of the product."
  },
  {
    id: 4,
    question: "Who is responsible for managing the Product Backlog in Scrum?",
    choices: [
        { id: "A", text: "The Scrum Master" },
        { id: "B", text: "The Development Team" },
        { id: "C", text: "The Product Owner" },
        { id: "D", text: "The Project Manager" },
    ],
    answer: ["C"],
    explanation: "The Product Owner is responsible for the Product Backlog, including its content, prioritization, and clarity. This role ensures that the backlog is aligned with the product goals and is transparent to all stakeholders."
  },
  {
    id: 5,
    question: "What is the primary purpose of the Daily Scrum?",
    choices: [
        { id: "A", text: "To report progress to the Product Owner" },
        { id: "B", text: "To update the Sprint Backlog" },
        { id: "C", text: "To solve complex technical problems" },
        { id: "D", text: "For the Development Team to synchronize activities and create a plan for the next 24 hours" },
    ],
    answer: ["D"],
    explanation: "The Daily Scrum is a short meeting for the Development Team to align on their progress towards the Sprint Goal, discuss any impediments, and plan the work for the next 24 hours."
  },
  {
    id: 6,
    question: "How are requirements handled in Scrum?",
    choices: [
        { id: "A", text: "Requirements are fixed for the entire project" },
        { id: "B", text: "Requirements can change at any time, even during a Sprint" },
        { id: "C", text: "Requirements are fixed for the product but can change from Sprint to Sprint" },
        { id: "D", text: "Requirements are never changed once the project starts" },
    ],
    answer: ["C"],
    explanation: "While the Scrum Team commits to certain goals during a Sprint, the requirements can evolve over time. The Product Backlog is a living document where changes can be made, but changes during a Sprint are minimized to ensure focus and goal achievement."
  },
  {
    id: 7,
    question: "What is the primary purpose of the Sprint Retrospective?",
    choices: [
        { id: "A", text: "To plan the next Sprint" },
        { id: "B", text: "To review the product increment with stakeholders" },
        { id: "C", text: "To inspect the Sprint that just ended and identify ways to improve in the next Sprint" },
        { id: "D", text: "To update the Product Backlog" },
    ],
    answer: ["C"],
    explanation: "The Sprint Retrospective is focused on continuous improvement. The team inspects how the last Sprint went in terms of people, relationships, processes, and tools, and then identifies what went well and what could be improved for the next Sprint."
  },
  {
    id: 8,
    question: "Who is responsible for prioritizing the Product Backlog?",
    choices: [
        { id: "A", text: "The Scrum Master" },
        { id: "B", text: "The Development Team" },
        { id: "C", text: "The Product Owner" },
        { id: "D", text: "The Stakeholders" },
    ],
    answer: ["C"],
    explanation: "The Product Owner is responsible for the Product Backlog, including its prioritization. They ensure that the items are ordered in a way that maximizes the value of the work done by the Development Team."
  },
  {
    id: 9,
    question: "What is the recommended time allocation for Sprint Planning?",
    choices: [
        { id: "A", text: "1 hour for each week of the Sprint" },
        { id: "B", text: "2 hours for each week of the Sprint" },
        { id: "C", text: "4 hours for each week of the Sprint" },
        { id: "D", text: "A full day regardless of Sprint length" },
    ],
    answer: ["B"],
    explanation: "Sprint Planning is time-boxed to a maximum of 8 hours for a one-month Sprint. For shorter Sprints, the event is usually shorter. The general guideline is 2 hours for each week of the Sprint."
  },
  {
    id: 10,
    question: "What is the Increment in Scrum?",
    choices: [
        { id: "A", text: "It is the total of all Product Backlog items completed during a Sprint and all previous Sprints" },
        { id: "B", text: "It is only the work completed in the current Sprint" },
        { id: "C", text: "It is the plan for the next Sprint" },
        { id: "D", text: "It is the list of items to be done in the future" },
    ],
    answer: ["A"],
    explanation: "The Increment is the sum of all the Product Backlog items completed during the current Sprint and all previous Sprints, which must be in a usable condition and meet the Scrum Team's definition of \"Done.\""
  },
  {
    id: 11,
    question: "What is the primary responsibility of the Development Team in Scrum?",
    choices: [
        { id: "A", text: "To manage the Product Backlog" },
        { id: "B", text: "To facilitate Scrum events" },
        { id: "C", text: "To deliver a potentially releasable Increment of the product at the end of each Sprint" },
        { id: "D", text: "To communicate with stakeholders" },
    ],
    answer: ["C"],
    explanation: "The primary responsibility of the Development Team is to deliver a \"Done,\" usable, and potentially releasable product Increment at the end of each Sprint, emphasizing the Scrum principle of delivering tangible value."
  },
  {
    id: 12,
    question: "What is the purpose of the Sprint Goal in Scrum?",
    choices: [
        { id: "A", text: "To list all the tasks that need to be completed in the Sprint" },
        { id: "B", text: "To establish a clear objective that will be met within the Sprint by implementing Product Backlog items" },
        { id: "C", text: "To determine the length of the Sprint" },
        { id: "D", text: "To assign roles to team members for the Sprint" },
    ],
    answer: ["B"],
    explanation: "The Sprint Goal is a single objective set for the Sprint, providing the Development Team with a focus and the flexibility to adapt their work in order to achieve it. It offers guidance on why the team is building the Increment, ensuring alignment and purpose."
  },
  {
    id: 13,
    question: "Who are the mandatory participants in the Daily Scrum?",
    choices: [
        { id: "A", text: "The entire Scrum Team (Development Team, Scrum Master, and Product Owner)" },
        { id: "B", text: "The Development Team only" },
        { id: "C", text: "The Development Team and the Scrum Master" },
        { id: "D", text: "The Development Team and the Product Owner" },
    ],
    answer: ["B"],
    explanation: "The Daily Scrum is a meeting for the Development Team by the Development Team. While the Scrum Master often attends to ensure that the meeting is productive and stays within the time-box, their attendance is not mandatory. The Product Owner and other stakeholders typically do not participate unless invited by the Development Team."
  },
  {
    id: 14,
    question: "What is the main outcome of the Sprint Review?",
    choices: [
        { id: "A", text: "A detailed plan for the next Sprint" },
        { id: "B", text: "Performance evaluations of team members" },
        { id: "C", text: "Feedback on the Increment and updates to the Product Backlog" },
        { id: "D", text: "A list of improvements for the Scrum process" },
    ],
    answer: ["C"],
    explanation: "The Sprint Review focuses on inspecting the Increment and adapting the Product Backlog if needed. It's an opportunity for stakeholders to provide feedback that the Product Owner can use to update the Product Backlog, ensuring that the team is always working on the most valuable items."
  },
  {
    id: 15,
    question: "What is the Product Backlog in Scrum?",
    choices: [
        { id: "A", text: "A fixed list of requirements for the entire project" },
        { id: "B", text: "A list of tasks assigned to each team member" },
        { id: "C", text: "A document that outlines the project timeline" },
        { id: "D", text: "It is a dynamic list of features, changes, fixes, and more, ordered by value" },
    ],
    answer: ["D"],
    explanation: "The Product Backlog is a living document that changes over time, with the Product Owner constantly refining and prioritizing it to ensure that the team is focused on delivering the most value. It evolves as new information surfaces and the product progresses."
  },
  {
    id: 16,
    question: "When can the Sprint Backlog be modified?",
    choices: [
        { id: "A", text: "Only during Sprint Planning" },
        { id: "B", text: "Any time during the Sprint as needed by the Development Team" },
        { id: "C", text: "Only during the Sprint Review" },
        { id: "D", text: "It cannot be modified once the Sprint starts" },
    ],
    answer: ["B"],
    explanation: "The Development Team owns the Sprint Backlog and can make changes to their plan as necessary during the Sprint. This allows the team to adapt their work based on emerging insights and challenges, fostering agility and continuous improvement."
  },
  {
    id: 17,
    question: "What is the maximum recommended length for a Sprint in Scrum?",
    choices: [
        { id: "A", text: "1 week" },
        { id: "B", text: "2 weeks" },
        { id: "C", text: "4 weeks" },
        { id: "D", text: "6 weeks" },
    ],
    answer: ["C"],
    explanation: "Sprints are time-boxed to one month or less. The most common durations are 1, 2, or 4 weeks. A 4-week Sprint is typically considered the maximum length to ensure agility and the ability to adapt to changes quickly."
  },
  {
    id: 18,
    question: "What should the Scrum Team do if the Product Owner is consistently absent?",
    choices: [
        { id: "A", text: "Continue working without the Product Owner's input" },
        { id: "B", text: "Assign another team member to act as the Product Owner" },
        { id: "C", text: "The Scrum Team should escalate the issue to management to ensure the Product Owner's responsibilities are addressed" },
        { id: "D", text: "Cancel the project" },
    ],
    answer: ["C"],
    explanation: "The Product Owner's role is crucial for the success of the project. If they are consistently absent, the Scrum Team should escalate the issue to ensure that the necessary support and decisions are provided, maintaining the project's momentum."
  },
  {
    id: 19,
    question: "How should a Scrum Master respond if the Development Team is struggling with collaboration issues?",
    choices: [
        { id: "A", text: "Take over the team's responsibilities to ensure work gets done" },
        { id: "B", text: "Assign blame to specific team members for the collaboration problems" },
        { id: "C", text: "Facilitate a discussion or workshop to help the team identify and resolve their collaboration issues" },
        { id: "D", text: "Report the issues to upper management for disciplinary action" },
    ],
    answer: ["C"],
    explanation: "As a servant leader, the Scrum Master should help the team improve their collaboration skills through facilitation and coaching, not by taking over their responsibilities or assigning blame."
  },
  {
    id: 20,
    question: 'What is the Definition of "Done" in Scrum?',
    choices: [
        { id: "A", text: "A list of tasks to be completed in a Sprint" },
        { id: "B", text: "A set of criteria that specifies the quality standards that must be met for a product Increment" },
        { id: "C", text: "The final approval from the Product Owner" },
        { id: "D", text: "A document that outlines the project timeline" },
    ],
    answer: ["B"],
    explanation: 'The Definition of "Done" is a shared understanding within the Scrum Team of the criteria that an Increment must meet to be considered complete. It ensures transparency and quality in what the team delivers.'
  },
  {
    id: 21,
    question: "What should the Scrum Team do if the Product Owner is unavailable during a Sprint?",
    choices: [
        { id: "A", text: "Stop the Sprint and wait for the Product Owner to return" },
        { id: "B", text: "Ask management to assign a temporary Product Owner" },
        { id: "C", text: "Continue the Sprint using the previously agreed-upon priorities" },
        { id: "D", text: "Make their own decisions about product priorities" },
    ],
    answer: ["C"],
    explanation: "If the Product Owner is not available, the Scrum Team should continue their work based on the existing priorities and goals. The Scrum Team's ability to self-organize allows them to proceed with the agreed-upon work even in the Product Owner's absence."
  },
  {
    id: 22,
    question: "What is a key characteristic of Scrum events?",
    choices: [
        { id: "A", text: "They can be extended indefinitely if needed" },
        { id: "B", text: "Each event has a maximum duration" },
        { id: "C", text: "They are optional and can be skipped" },
        { id: "D", text: "They have no time limit" },
    ],
    answer: ["B"],
    explanation: "Time-boxing is a critical concept in Scrum where each event has a predefined maximum duration. This ensures that the events are efficient and focused, helping the team to manage their time effectively and maintain a sustainable pace."
  },
  {
    id: 23,
    question: "What should the Development Team do if they realize they may not meet their Sprint commitment?",
    choices: [
        { id: "A", text: "Work overtime to complete all items" },
        { id: "B", text: "Silently remove items from the Sprint Backlog" },
        { id: "C", text: "Discuss the situation with the Product Owner to re-negotiate the scope" },
        { id: "D", text: "Continue working and hope for the best" },
    ],
    answer: ["C"],
    explanation: "If the Development Team realizes they are likely to not meet their commitment, they should collaborate with the Product Owner to review and possibly adjust the scope. This maintains the integrity of the Sprint goal and ensures the delivery of the most valuable work."
  },
  {
    id: 24,
    question: "Who should attend Sprint Planning?",
    choices: [
        { id: "A", text: "Only the Development Team" },
        { id: "B", text: "The Product Owner and the Development Team" },
        { id: "C", text: "The entire Scrum Team" },
        { id: "D", text: "The Scrum Master and the Product Owner" },
    ],
    answer: ["C"],
    explanation: "Sprint Planning is a collaborative effort that requires the presence of the Product Owner (to clarify the items and their value), the Development Team (to define the work and effort), and the Scrum Master (to facilitate the meeting)."
  },
  {
    id: 25,
    question: "What is the role of the Scrum Master in the Daily Scrum?",
    choices: [
        { id: "A", text: "To lead the meeting and assign tasks" },
        { id: "B", text: "To report progress to stakeholders" },
        { id: "C", text: "To facilitate the meeting if necessary and ensure it stays within the time-box" },
        { id: "D", text: "To update the Sprint Backlog" },
    ],
    answer: ["C"],
    explanation: "The Daily Scrum is primarily for the Development Team. However, the Scrum Master may attend to facilitate the meeting, ensuring it is productive and stays within the 15-minute time-box, and to help remove any impediments that are raised."
  },
  {
    id: 26,
    question: "What is the Increment in Scrum?",
    choices: [
        { id: "A", text: "The list of tasks to be completed in the next Sprint" },
        { id: "B", text: "The sum of all Product Backlog items completed during the Sprint and all previous Sprints" },
        { id: "C", text: "The increase in team productivity from Sprint to Sprint" },
        { id: "D", text: "The additional features added to the Product Backlog" },
    ],
    answer: ["B"],
    explanation: "The Increment is a concrete step towards the product goal, encompassing all completed and previously \"Done\" Product Backlog items. It must be in a usable state and meet the team's definition of \"Done.\""
  },
  {
    id: 27,
    question: "When does Backlog Refinement occur in Scrum?",
    choices: [
        { id: "A", text: "Only during Sprint Planning" },
        { id: "B", text: "At the end of each Sprint" },
        { id: "C", text: "During a specific Scrum event" },
        { id: "D", text: "Throughout the Sprint as needed" },
    ],
    answer: ["D"],
    explanation: "Backlog Refinement is an ongoing activity that helps keep the Product Backlog updated and ensures that upcoming items are well understood and ready for selection in future Sprints. It's not confined to a specific Scrum event."
  },
  {
    id: 28,
    question: "What is the primary purpose of the Sprint Review?",
    choices: [
        { id: "A", text: "To plan the next Sprint" },
        { id: "B", text: "To inspect the Increment and adapt the Product Backlog" },
        { id: "C", text: "To evaluate team performance" },
        { id: "D", text: "To update the Definition of Done" },
    ],
    answer: ["B"],
    explanation: "The Sprint Review is about inspecting the outcome of the Sprint and determining future adaptations. The Scrum Team and stakeholders collaborate to review what was accomplished, discuss what to do next, and adapt the Product Backlog as necessary."
  },
  {
    id: 29,
    question: "Which of the following is NOT one of the five Scrum Values?",
    choices: [
        { id: "A", text: "Commitment" },
        { id: "B", text: "Focus" },
        { id: "C", text: "Respect" },
        { id: "D", text: "Efficiency" },
    ],
    answer: ["D"],
    explanation: "The five Scrum Values are Commitment, Focus, Openness, Respect, and Courage. While efficiency might be a result of effective Scrum implementation, it is not listed as a core value of Scrum."
  },
  {
    id: 30,
    question: "What is the primary purpose of a Sprint Burn-down Chart?",
    choices: [
        { id: "A", text: "To track individual team member performance" },
        { id: "B", text: "To show the amount of work remaining in the Sprint" },
        { id: "C", text: "To plan the next Sprint" },
        { id: "D", text: "To evaluate the Product Owner's effectiveness" },
    ],
    answer: ["B"],
    explanation: "The Sprint Burn-down Chart is a visual tool that shows how much work remains to be done in the Sprint, helping the team gauge whether they are on track to complete the work they forecasted."
  },
  {
    id: 31,
    question: "Which Scrum event focuses on transparency and inspection of what was accomplished during the Sprint?",
    choices: [
        { id: "A", text: "Sprint Planning" },
        { id: "B", text: "Daily Scrum" },
        { id: "C", text: "Sprint Review" },
        { id: "D", text: "Sprint Retrospective" },
    ],
    answer: ["C"],
    explanation: "The Sprint Review focuses on transparency and inspection by reviewing what was accomplished during the Sprint and determining future adaptations. This event provides a forum for stakeholders to provide feedback and for the team to inspect their work and the progress toward the product goal."
  },
  {
    id: 32,
    question: "What is the key to a Scrum Master's effectiveness?",
    choices: [
        { id: "A", text: "Technical expertise in the product domain" },
        { id: "B", text: "Authority to make decisions for the team" },
        { id: "C", text: "Expertise in facilitating Scrum events and coaching the team" },
        { id: "D", text: "Ability to manage the team's daily tasks" },
    ],
    answer: ["C"],
    explanation: "The Scrum Master's effectiveness lies in their ability to facilitate Scrum events, remove impediments, and coach the team, Product Owner, and organization in Scrum practices. They are a servant leader, not a manager or decision-maker for the team."
  },
  {
    id: 33,
    question: "When is a Product Backlog item considered 'Done' in Scrum?",
    choices: [
        { id: "A", text: "When the Product Owner approves it" },
        { id: "B", text: "When it passes all tests" },
        { id: "C", text: "When it meets the Definition of Done as agreed by the Development Team" },
        { id: "D", text: "When it is deployed to production" },
    ],
    answer: ["C"],
    explanation: "A Product Backlog item is considered \"Done\" when it meets the criteria established in the team's Definition of Done, ensuring a shared understanding of what completion means."
  },
  {
    id: 34,
    question: "What should a Development Team member do if they encounter an impediment they cannot resolve?",
    choices: [
        { id: "A", text: "Ignore the impediment and continue working" },
        { id: "B", text: "Escalate the impediment to the Scrum Master for resolution" },
        { id: "C", text: "Wait for the next Sprint Retrospective to discuss it" },
        { id: "D", text: "Ask the Product Owner to remove the related item from the Sprint Backlog" },
    ],
    answer: ["B"],
    explanation: "The Scrum Master is responsible for removing impediments that the Development Team cannot resolve, enabling the team to maintain focus and momentum in their work."
  },
  {
    id: 35,
    question: "What is the primary purpose of a user story in the Product Backlog?",
    choices: [
        { id: "A", text: "To provide a detailed technical specification" },
        { id: "B", text: "To provide a high-level description of a feature from the user's perspective" },
        { id: "C", text: "To estimate the development time required" },
        { id: "D", text: "To assign tasks to specific team members" },
    ],
    answer: ["B"],
    explanation: "User stories in the Product Backlog help the team understand features from the end-user's perspective, focusing on the value the feature brings rather than technical details."
  },
  {
    id: 36,
    question: "What should the Development Team do if a stakeholder requests a significant change during a Sprint?",
    choices: [
        { id: "A", text: "Immediately implement the change" },
        { id: "B", text: "Discuss the potential impact with the Product Owner and negotiate as needed" },
        { id: "C", text: "Ignore the request until the next Sprint" },
        { id: "D", text: "Cancel the Sprint and start a new one" },
    ],
    answer: ["B"],
    explanation: "The Development Team should collaborate with the Product Owner to understand the impact of the requested change and negotiate to find a solution that respects the Sprint Goal and maintains the integrity of the Sprint's commitments."
  },
  {
    id: 37,
    question: "In Scrum, what is meant by a 'cross-functional team'?",
    choices: [
        { id: "A", text: "A team with members from different departments" },
        { id: "B", text: "A team that works on multiple projects simultaneously" },
        { id: "C", text: "A team where members possess all the skills necessary to create the product Increment" },
        { id: "D", text: "A team that rotates roles frequently" },
    ],
    answer: ["C"],
    explanation: "A cross-functional team has members with varied expertise and skills necessary to complete the project from start to finish without needing to depend on outsiders, enhancing efficiency and collaboration."
  },
  {
    id: 38,
    question: "What is the primary purpose of using Scrum?",
    choices: [
        { id: "A", text: "To complete projects faster" },
        { id: "B", text: "To reduce development costs" },
        { id: "C", text: "To enable teams to adapt to changes and deliver value incrementally" },
        { id: "D", text: "To eliminate the need for project management" },
    ],
    answer: ["C"],
    explanation: "Scrum is designed to embrace change, allowing teams to adapt and pivot based on feedback and changes in requirements, thereby delivering value incrementally and continuously improving."
  },
  {
    id: 39,
    question: "How often should the Scrum Board be updated?",
    choices: [
        { id: "A", text: "Only during Sprint Planning" },
        { id: "B", text: "Weekly" },
        { id: "C", text: "Daily, as tasks progress or are completed" },
        { id: "D", text: "Only at the end of the Sprint" },
    ],
    answer: ["C"],
    explanation: "The Scrum Board should reflect the current state of the Sprint, so it's essential to update it as work progresses, typically during the Daily Scrum, to ensure transparency and visibility for the entire team."
  },
  {
    id: 40,
    question: "In Scrum, what does 'value' primarily refer to?",
    choices: [
        { id: "A", text: "The cost of development" },
        { id: "B", text: "The time spent on a feature" },
        { id: "C", text: "The benefit that the product or feature delivers to the customer or user" },
        { id: "D", text: "The number of features implemented" },
    ],
    answer: ["C"],
    explanation: "In Scrum, value is primarily focused on the benefits and outcomes that the product or features deliver to the customer or user, aligning the team's efforts with customer needs and business objectives."
  },
  {
    id: 41,
    question: "What characterizes a self-managing team in Scrum?",
    choices: [
        { id: "A", text: "The team works without any supervision" },
        { id: "B", text: "The team members assign tasks to each other" },
        { id: "C", text: "The team has the autonomy to decide how to best accomplish their work" },
        { id: "D", text: "The team sets their own deadlines independently of the Product Owner" },
    ],
    answer: ["C"],
    explanation: "In Scrum, a self-managing team is one that has the autonomy to make decisions on how to organize and execute their work, promoting ownership, accountability, and motivation."
  },
  {
    id: 42,
    question: "What should a Scrum Master do when the team is facing communication issues?",
    choices: [
        { id: "A", text: "Assign tasks to team members to resolve the issue" },
        { id: "B", text: "Facilitate communication and collaboration practices to help the team improve" },
        { id: "C", text: "Escalate the issue to management immediately" },
        { id: "D", text: "Take over the team's responsibilities until the issue is resolved" },
    ],
    answer: ["B"],
    explanation: "The Scrum Master should use their skills to facilitate better communication and collaboration within the team, helping them to identify and resolve issues, rather than assigning tasks or escalating the issue prematurely."
  },
  {
    id: 43,
    question: "What is one of the key responsibilities of a Scrum Master in relation to the Product Owner?",
    choices: [
        { id: "A", text: "To prioritize the Product Backlog" },
        { id: "B", text: "To create user stories for the Product Backlog" },
        { id: "C", text: "To support the Product Owner with practices for managing the Product Backlog effectively" },
        { id: "D", text: "To approve the final Product Backlog before each Sprint" },
    ],
    answer: ["C"],
    explanation: "The Scrum Master supports the Product Owner by offering guidance on Scrum practices, helping them manage the Product Backlog effectively, and facilitating collaboration with the Development Team."
  },
  {
    id: 44,
    question: "When does a new Sprint start in Scrum?",
    choices: [
        { id: "A", text: "Immediately after the previous Sprint ends" },
        { id: "B", text: "A week after the previous Sprint ends" },
        { id: "C", text: "When the team feels ready to start" },
        { id: "D", text: "After the Product Owner approves the start" },
    ],
    answer: ["A"],
    explanation: "In Scrum, a new Sprint starts immediately after the conclusion of the previous Sprint, maintaining a continuous flow of work and allowing the team to deliver value consistently."
  },
  {
    id: 45,
    question: "What is the Scrum framework's stance on Sprint Zero?",
    choices: [
        { id: "A", text: "Sprint Zero is mandatory for project setup" },
        { id: "B", text: "Sprint Zero is optional but recommended" },
        { id: "C", text: "Sprint Zero is used for planning only" },
        { id: "D", text: "Scrum does not officially recognize a Sprint Zero" },
    ],
    answer: ["D"],
    explanation: "Scrum does not have a concept of Sprint Zero. All Sprints are meant to deliver a potentially releasable Increment, and the framework encourages starting with actual product development work from the first Sprint."
  },
  {
    id: 46,
    question: "How does Scrum primarily enhance communication and collaboration within a team?",
    choices: [
        { id: "A", text: "Through extensive documentation" },
        { id: "B", text: "By assigning specific roles to each team member" },
        { id: "C", text: "Through frequent and focused interactions among team members" },
        { id: "D", text: "By implementing a strict hierarchy" },
    ],
    answer: ["C"],
    explanation: "Scrum enhances communication and collaboration through its structured events and emphasis on team interaction, allowing team members to synchronize, plan, and address challenges effectively."
  },
  {
    id: 47,
    question: "What is the ultimate goal of a Scrum Master when helping the team remove impediments?",
    choices: [
        { id: "A", text: "To solve all the team's problems directly" },
        { id: "B", text: "Teach the team to become more self-sufficient in solving problems" },
        { id: "C", text: "To document all impediments for future reference" },
        { id: "D", text: "To escalate all issues to management" },
    ],
    answer: ["B"],
    explanation: "While the Scrum Master helps remove impediments, their ultimate goal is to coach and enable the team to develop problem-solving skills, fostering autonomy and self-management."
  },
  {
    id: 48,
    question: "What happens to incomplete items from a Sprint in Scrum?",
    choices: [
        { id: "A", text: "They are automatically carried over to the next Sprint" },
        { id: "B", text: "They are reassessed and can be re-prioritized or modified by the Product Owner" },
        { id: "C", text: "They are discarded and never worked on again" },
        { id: "D", text: "They are assigned to specific team members to complete outside of Sprint time" },
    ],
    answer: ["B"],
    explanation: "Incomplete items are returned to the Product Backlog, where they can be re-prioritized or adjusted by the Product Owner based on the latest information and project needs."
  },
  {
    id: 49,
    question: "What is the main objective of a Sprint in Scrum?",
    choices: [
        { id: "A", text: "To complete all items in the Product Backlog" },
        { id: "B", text: "To work as many hours as possible" },
        { id: "C", text: "To meet the Sprint Goal defined during Sprint Planning" },
        { id: "D", text: "To satisfy all stakeholders' requests" },
    ],
    answer: ["C"],
    explanation: "The main focus of the Sprint is to achieve the Sprint Goal, which provides direction and purpose for the team's work during the Sprint, guiding what features are developed and decisions made."
  },
  {
    id: 50,
    question: "How should a Scrum Team handle a stakeholder who frequently interrupts the team with new ideas during a Sprint?",
    choices: [
        { id: "A", text: "Ignore the stakeholder's ideas completely" },
        { id: "B", text: "Implement all of the stakeholder's ideas immediately" },
        { id: "C", text: "Encourage the stakeholder to attend the Sprint Review for feedback" },
        { id: "D", text: "Ask the stakeholder to join the Development Team" },
    ],
    answer: ["C"],
    explanation: "Engaging stakeholders during the Sprint Review allows them to provide input and see the team's progress, while the team maintains focus on the Sprint Goal. It channels the stakeholder's energy and ideas constructively without disrupting the team's workflow."
},
];

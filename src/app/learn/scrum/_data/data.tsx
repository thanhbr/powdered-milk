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
    explanation: "Sprint Planning is timeboxed to a maximum of 8 hours for a one-month Sprint. For shorter Sprints, the event is usually shorter. The general guideline is 2 hours for each week of the Sprint."
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
    explanation: "The Daily Scrum is a meeting for the Development Team by the Development Team. While the Scrum Master often attends to ensure that the meeting is productive and stays within the timebox, their attendance is not mandatory. The Product Owner and other stakeholders typically do not participate unless invited by the Development Team."
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

]

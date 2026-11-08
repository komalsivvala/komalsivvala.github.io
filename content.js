// All portfolio text lives here. index.html reads it.
// Filled from Sivvala_Komal_Naidu.pdf (the resume dated 2026-11-08). Leave a field as "" to hide it.
// Covers: put images in web/portfolio/images/ and set cover: "images/name.jpg" (1600 x 1000 works best),
// and write a real alt text in coverAlt.
window.PORTFOLIO = {
  name: "Sivvala Komal Naidu",
  initials: "SKN",
  role: "Java full stack developer",
  city: "Visakhapatnam, India",
  timeZone: "Asia/Kolkata", // used for the local-time line in the footer
  intro: "I build production REST APIs and backend services in Java and Spring Boot, with Kafka, Elasticsearch and Cassandra behind them and React in front.",
  email: "sivvalakomalnaidu@gmail.com",
  // Phone stays off the site on purpose (decision 2026-11-05: email only).
  links: { github: "https://github.com/komalsivvala", linkedin: "https://www.linkedin.com/in/sivvalakomalnaidu" },
  coverHints: false, // true shows "Cover image, 1600 x 1000" on covers that have no image yet
  availability: "Looking for a Java full stack developer role.",

  // The vertical motto beside the name. Keep it to one short phrase.
  motto: { jp: "七転び八起き", reading: "nana korobi ya oki", en: "Fall seven times, stand up eight." },

  // "Why I build": the passion section. Drafted around 一期一会 on 2026-11-06; edit freely.
  why: {
    jp: "一期一会",
    reading: "ichi-go ichi-e",
    en: "One time, one meeting.",
    lead: "Every meeting happens only once. That is how I treat every project, every teammate and every line of code: it gets my full attention, because it will not come around again.",
    principles: [
      {
        jp: "一期一会", reading: "ichi-go ichi-e", title: "Every project is one meeting",
        text: "No two problems are the same, so I do not paste yesterday's answer. I read the real requirement, ask the people who will use the result, and build for that case."
      },
      {
        jp: "改善", reading: "kaizen", title: "A little better every day",
        text: "I would rather make small, steady improvements than wait for a grand rewrite. A clearer name, one more test, a shorter path through the code: each day leaves the codebase a little better than it was."
      },
      {
        jp: "職人", reading: "shokunin", title: "Care for the parts nobody sees",
        text: "A craftsman finishes the back of the drawer. For me that is the API contract, the error path, the log line someone will read at 3 a.m., and the README. They get the same care as the screen."
      }
    ]
  },

  about: [
    "I'm a Java full stack developer with over a year of experience building production REST APIs and backend services with Spring Boot, Apache Kafka, Elasticsearch and Cassandra. At Vensai Technologies I look after three live systems end to end: an HRMS, a franchise order-management platform with more than 30 APIs, and a logistics visibility platform for CEVA Logistics.",
    "I studied Electronics and Communication Engineering at Anil Neerukonda Institute of Technology and Sciences (B.Tech, 2025). The work I like most is finding the bottleneck, cutting the latency, and turning unstructured code into an architecture someone else can maintain. I also write Python and Go."
  ],

  // Each group is a heading with its list of skills.
  skills: [
    { label: "Languages", items: ["Java", "JavaScript", "Python", "Go"] },
    { label: "Backend", items: ["Spring Boot", "REST API design", "Microservices integration", "API testing"] },
    { label: "Frontend", items: ["React", "HTML", "CSS", "Responsive design"] },
    { label: "Databases", items: ["PostgreSQL", "MySQL", "MongoDB", "Apache Cassandra"] },
    { label: "Messaging and search", items: ["Apache Kafka", "Elasticsearch", "Kibana"] },
    { label: "Cloud and DevOps", items: ["AWS", "GCP", "Docker", "Kubernetes", "Jenkins"] },
    { label: "Tools", items: ["Swagger UI", "Postman", "Linux", "Shell and Bash", "Git"] }
  ],

  experience: [
    { years: "Jul 2025 - now", role: "Junior Developer", place: "Vensai Technologies, Visakhapatnam" }
  ],

  education: [
    { years: "Dec 2021 - Apr 2025", role: "B.Tech, Electronics and Communication Engineering (CGPA 7.49)", place: "Anil Neerukonda Institute of Technology and Sciences, Visakhapatnam" },
    { years: "Jun 2018 - Apr 2020", role: "Intermediate, M.P.C. (CGPA 8.29)", place: "Sri Chaitanya Junior College" }
  ],

  projects: [
    {
      title: "VTrack, an HRMS",
      year: "2025",
      kind: "Java, Spring Boot, SQL",
      colour: "#5B7FA6",
      cover: "images/vtrack.svg",
      coverAlt: "Ink drawing of a month calendar on the wall: worked days ticked, three days of one week ringed in vermilion as approved leave, and a small weekly status chart beneath.",
      summary: "The HR management system I keep running in production: live issues, database fixes, an automated leave module and status reporting.",
      problem: "An HRMS in daily use had to stay stable across all its modules while slow queries were fixed and a manual leave process was replaced.",
      role: "Primary maintainer. I resolve live production issues, fixed 20 to 30 critical database issues, and built the automated leave management module with daily and weekly status reporting.",
      outcome: "Query performance and overall system efficiency up by 20%. Leave administration and team visibility now handled by the system instead of by hand.",
      link: ""
    },
    {
      title: "Sankranti, franchise software",
      year: "2025",
      kind: "Java, Spring Boot, PostgreSQL, MongoDB",
      colour: "#4F7F6A",
      cover: "images/sankranti.svg",
      coverAlt: "Ink drawing of a kitchen order ticket coming out of a printer, stamped in vermilion, with lines running down to three franchise outlets.",
      summary: "Order management for a franchise: more than 30 REST APIs, a hybrid data layer, and kitchen printers driven by webhooks.",
      problem: "Orders ran through unstructured code and API responses took around 2 seconds; the kitchens also needed every order printed automatically.",
      role: "Product owner of the Orders module. I delivered 30+ RESTful APIs, refactored the code into a layered architecture, designed a hybrid PostgreSQL and MongoDB data layer for relational and document workloads, and integrated kitchen printing through Star Micronics CloudPRNT and Epson ePOS webhooks.",
      outcome: "API response time down from 2 s to 120 ms after query tuning and backend optimisation.",
      link: ""
    },
    {
      title: "OneSearch for CEVA Logistics",
      year: "2025",
      kind: "Java, Spring Boot, microservices",
      colour: "#8C6A4F",
      cover: "images/onesearch.svg",
      coverAlt: "Ink drawing of a shipment route over hills from a ship to a warehouse in five stages; the fourth stage is ringed in vermilion and an envelope leaves it as the email alert.",
      summary: "One window onto a complex microservices architecture, with email alerts the moment a transportation stage completes.",
      problem: "Teams had no unified view across many services, and stakeholders learned late when a shipment moved from one stage to the next.",
      role: "Built the centralised visibility application, developed the automated email notification service that follows each payload through its lifecycle, and debugged and optimised 20 to 30 APIs across the service modules.",
      outcome: "Stakeholders are alerted in real time as stages complete; cross-service troubleshooting and data transparency improved.",
      link: ""
    }
  ]
};

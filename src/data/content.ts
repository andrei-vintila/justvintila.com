export const profile = {
  name: "Andrei Vintila",
  title: "Principal Product Manager",
  location: "Bucharest, Romania",
  email: "contact@justvintila.com",
  github: "https://github.com/andrei-vintila",
  githubUser: "andrei-vintila",
  linkedin: "https://ro.linkedin.com/in/andreivintila88",
  tagline: "Product manager who still ships code: Cloudflare Workers, Nuxt, MCP servers.",
  bio: [
    "At UiPath I look after the shared developer experience across our automation products: Maestro BPMN, RPA, Apps and API workflows. On Maestro I'm involved in our BPMN engine implementation, which is used for all Maestro runtimes. I'm also leading the work to bring Studio Desktop to Mac, the first time our core authoring tool will run outside Windows.",
    "Most of the day-to-day is helping customers get to production across all of it, which means finding where they get stuck and taking that away.",
    "I liked to code before AI made it much easier, so now I build prototypes to help me present my vision. Sometimes even in our Studio Web codebase. If I want to know whether an idea is worth a team's time, building a rough version is usually faster than writing the document that argues for it.",
    "Most of that is built with AI tooling, pushed further than it comfortably goes. Finding where it breaks is useful when the thing you ship is a developer tool.",
    "The side projects keep me grounded about what building software actually costs: an MCP server for a joke site, a citizen-reporting app, an Obsidian plugin that models memory the way brains actually work. Experimenting with different ideas, has helped me to have an much broader view point on all things product.",
  ],
};

export type Experience = {
  company: string;
  role: string;
  period: string;
  detail: string;
  url?: string;
};

export const experience: Experience[] = [
  {
    company: "UiPath",
    role: "Principal Product Manager",
    period: "Apr 2025 — Present",
    detail:
      "Own the shared developer experience across Maestro, RPA, Apps and API workflows. Leading Studio Desktop's port from Windows to macOS, and prototyping directly in the Studio Web codebase when that beats writing the spec.",
    url: "https://www.uipath.com",
  },
  {
    company: "UiPath",
    role: "Senior Product Manager",
    period: "Aug 2022 — Apr 2025",
    detail:
      "Robot and Process Orchestration in the Automate pillar: specced the orchestration APIs and scheduling logic robots run against in production, and took Maestro from concept to public preview in six months.",
    url: "https://www.uipath.com",
  },
  {
    company: "GloriaFood",
    role: "Senior Product Manager",
    period: "Nov 2020 — Aug 2022",
    detail:
      "Ran online payments for 20,000 restaurants, our own subscription billing, and the WordPress ordering plugin codebase (10,000+ active installs). Wrote the SQL and did the data analysis myself, the old-fashioned way.",
  },
  {
    company: "Aurachain",
    role: "Head of Product",
    period: "Apr 2019 — Nov 2020",
    detail:
      "Led a 30-person product and engineering team through a full rebuild of the low-code platform's architecture for scale and performance, and shipped a Figma design system into the product.",
  },
  {
    company: "AGYS AG",
    role: "Product Manager",
    period: "Sept 2016 — Apr 2019",
    detail:
      "Moved from solutions architecture into product ownership for the same platform, and kept owning its technical integrations from the PM seat.",
  },
  {
    company: "AGYS AG",
    role: "Solutions Architect",
    period: "Sept 2014 — Sept 2016",
    detail:
      "End-to-end solution design across software, hardware and infrastructure for client-facing enterprise integrations, including the BankConnect product suite, before moving into product.",
  },
  {
    company: "BPM Wave International AG",
    role: "Business / Technical Analyst",
    period: "Aug 2012 — Aug 2014",
    detail: "Bridged business process design and implementation, from process modeling down to the workflow engine config.",
  },
  {
    company: "EDATA",
    role: "Business Analyst",
    period: "Sept 2009 — Jul 2012",
    detail: "First job: requirements, process mapping, and specs someone else built from. The fundamentals.",
  },
];

export type Project = {
  repo: string;
  name: string;
  description: string;
  stack: string[];
  url: string;
  highlight?: string;
};

export const projects: Project[] = [
  {
    repo: "avemguvern.ro",
    name: "avemguvern.ro",
    description:
      "A joke that needed a landing page: does Romania currently have a government? Runs entirely on a single free-tier Cloudflare Worker: a static page, a token-gated status API, crowd-sourced jokes, and a read-only MCP server exposing the answer as a tool. Zero cost to run, effectively zero to maintain, the scope discipline I'd want from any 0→1 bet.",
    stack: ["Cloudflare Workers", "MCP", "KV", "TypeScript"],
    url: "https://github.com/andrei-vintila/avemguvern.ro",
    highlight: "Ships an MCP tool alongside the website: the same status is queryable by an LLM as by a browser.",
  },
  {
    repo: "mogo-sesizeaza",
    name: "mogo-sesizeaza",
    description: "Lets citizens report local issues without friction. Built on Nuxt, deployed on Cloudflare Pages.",
    stack: ["Nuxt", "TypeScript", "GitHub OAuth", "Cloudflare Pages"],
    url: "https://github.com/andrei-vintila/mogo-sesizeaza",
  },
  {
    repo: "unimem",
    name: "unimem",
    description:
      "Personal knowledge tools fail the same way products do: too many folders, no model of how people actually use them. Built an Obsidian plugin that restructures a vault around how memory actually works instead: working, episodic, procedural, and semantic layers instead of flat folders.",
    stack: ["Obsidian API", "TypeScript"],
    url: "https://github.com/andrei-vintila/unimem",
  },
];

export const skills = {
  Product: ["Developer experience", "0→1 platform launches", "RPA & process automation", "Enterprise Software", "Payments"],
  Build: ["TypeScript", "Nuxt / Vue", "Cloudflare Workers", "MCP servers"],
  Leadership: ["Cross-functional teams (30+)", "Solutions architecture background", "Prototype → spec → ship"],
};

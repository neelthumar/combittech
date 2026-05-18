export const assets = {
  logo: {
    primary: "/placeholders/logo/logo-primary.jpeg",
    dark: "/placeholders/logo/logo-dark.png",
    icon: "/placeholders/logo/logo-icon.png",
  },

  hero: {
    main: "/placeholders/hero/hero-main.jpg",
    secondary: "/placeholders/hero/hero-secondary.jpg",
    pattern: "/placeholders/hero/hero-pattern.svg",
  },

  services: {
    firmware: "/placeholders/services/firmware.jpg",
    pcb: "/placeholders/services/pcb.webp",
    iot: "/placeholders/services/iot.jpg",
    prototyping: "/placeholders/services/prototyping.webp",
    testing: "/placeholders/services/testing.jpg",
    rtos: "/placeholders/services/rtos.jpg",
    automation: "/placeholders/services/automation.webp",
  },

  projects: {
    project1: "/placeholders/projects/project-1.webp",
    project2: "/placeholders/projects/project-2.jpg",
    project3: "/placeholders/projects/project-3.png",
    project4: "/placeholders/projects/project-4.jpg",
    project5: "/placeholders/projects/project-5.webp",
    project6: "/placeholders/projects/project-6.jpg",
  },

  industries: {
    automation: "/placeholders/industries/automation.webp",
    consumer: "/placeholders/industries/consumer.jpg",
    iot: "/placeholders/industries/iot.webp",
    robotics: "/placeholders/industries/robotics.jpg",
  },

  team: {
    member1: "/placeholders/team/member-1.jpg",
    member2: "/placeholders/team/member-2.jpg",
    member3: "/placeholders/team/member-3.jpg",
    member4: "/placeholders/team/member-4.jpg",
  },

  general: {
    office: "/placeholders/general/office.webp",
    lab: "/placeholders/general/lab.jpg",
    workspace: "/placeholders/general/workspace.jpg",
    culture: "/placeholders/general/culture.png",
    about: "/placeholders/general/about.jpg",
  },

  og: {
    default: "/placeholders/og/og-default.jpg",
  },
} as const;

export type Assets = typeof assets;

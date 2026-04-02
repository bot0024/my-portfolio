/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Dip Nalawade",
  title: "Hi there, I'm Dip",
  subTitle: emoji(
    "🔐 Aspiring SOC Analyst | 🛡️ Threat Detection & Incident Response | 💻 Networking • Linux • Threat Analysis | 🚀 Ready to grow in SOC Operations"
  ),
  resumeLink:
    "https://drive.google.com/file/d/1XQwCcH9aSoYhLYu4O1cNUUdhAeNNCCu3/view?usp=drive_link", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/bot0024",
  linkedin: "https://www.linkedin.com/in/dip-nalawade/",
  gmail: "dipnalawade24@gmail.com",
  // gitlab: "https://gitlab.com/",
  // facebook: "https://www.facebook.com/",
  medium: "https://medium.com/@BotHacks",
  tryhackme: "https://tryhackme.com/p/Dip24",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "SECURING THE DIGITAL WORLD, ONE LAYER AT A TIME ",
  skills: [
    emoji("⚔️ SIEM Concepts: Event Correlation, Log Monitoring, Alert Prioritization"),
    emoji("⚔️ Networking: TCP/IP, Firewalls, IDS/IPS Basics"),
    emoji("⚔️ Phishing Analysis: email analysis, URL analysis, attachment analysis"),
    emoji("⚔️ Operating Systems: Windows, Linux (Kali, Ubuntu)"),
    emoji("⚔️ Security Tools: Wireshark, Nmap, Splunk (basic), Nessus(basics),etc"),
    emoji("⚔️ Soft Skills: Critical Thinking, Communication, Time Management, Teamwork")
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "Splunk",
      iconPath: "https://www.cprime.com/wp-content/uploads/2020/10/splunk-logo-150x150.jpg"
    },
    {
      skillName: "Elastic Stack",
      iconPath: "https://www.svgrepo.com/show/373575/elastic.svg"
    },
    {
      skillName: "VirusTotal",
      iconPath: "https://www.svgrepo.com/show/331633/virustotal.svg"
    },
    {
      skillName: "Burp Suite",
      iconPath: "https://www.svgrepo.com/show/454430/burpsuite-security-software.svg"
    },
    {
      skillName: "Wireshark",
      iconPath: "https://www.svgrepo.com/show/407415/shark.svg"
    },
    {
      skillName: "Nessus Essentials",
      iconPath: "https://img.icons8.com/stickers/100/hexagon.png"
    },
    {
      skillName: "NetworkMiner",
      iconPath: "https://www.netresec.com/images/NetworkMiner_logo_313x313.png"
    },
    {
      skillName: "CyberChef",
      iconPath: "https://www.svgrepo.com/show/274912/chef.svg"
    },
    {
      skillName: "Nmap",
      iconPath: "https://www.svgrepo.com/show/387515/eyes.svg"
    },
    {
      skillName: "Zeek",
      iconPath: "https://i0.wp.com/zeek.org/wp-content/uploads/2020/04/zeek-logo-without-text.png?fit=210%2C201&ssl=1"
    },
    {
      skillName: "John The Ripper",
      iconPath: "https://www.kali.org/tools/john/images/john-logo.svg"
    },
    {
      skillName: "SqlMap",
      iconPath: "https://www.kali.org/tools/sqlmap/images/sqlmap-logo.svg"
    },
    {
      skillName: "Hydra",
      iconPath: "https://www.kali.org/tools/hydra/images/hydra-logo.svg"
    },
    {
      skillName: "Gobuster",
      iconPath: "https://www.kali.org/tools/gobuster/images/gobuster-logo.svg"
    },
    {
      skillName: "Metasploit",
      iconPath: "https://www.kali.org/tools/metasploit-framework/images/metasploit-framework-logo.svg"
    },

  ],
  display: true // Set false to hide this section, defaults to true
};
// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Pune University",
      logo: require("./assets/images/sppu.png"),
      subHeader: "Bachelor of Science in Cyber Security",
      duration: "June 2023 - April 2026",
      desc: "Networking, Ethical Hacking, Information Security, Digital Forensics, Cryptography",
      // descBullets: [
      //  "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      // "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      // ]
    },
    {
      schoolName: "Marathwada MitraMandal's College of Commerce",
      logo: require("./assets/images/mmcc.png"),
      subHeader: "Maharashtra State Board of Secondary and Higher Secondary(HSC)",
      duration: "September 2021 - April 2023",
      desc: "Completed My 12th in Science, ...",
      //descBullets: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit"]
    }
  ]
};


// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Security Operations (SOC Fundamentals)", //Insert stack or technology you have experience in
      progressPercentage: "65%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Threat Analysis ",
      progressPercentage: "60%"
    },
    {
      Stack: "Network Security",
      progressPercentage: "67%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Cyber Security Intern",
      company: "Elevate Labs",
      companylogo: require("./assets/images/elavatelabs.jpeg"),
      date: "26 May 2025 to 28 June 2025",
      desc: "Completed a one-month remote internship focused on core areas of cybersecurity through project-based learning and hands-on practice.",
      descBullets: [
        "Gained practical experience in Network Security and  Ethical Hacking, including identifying and mitigating system vulnerabilities.",
        "Performed threat analysis and applied security best practices aligned with industry standards."
      ]
    },
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: true, // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Projects",
  subtitle: " SOME OF MY PROJECTS THAT I HAVE WORKED ON ",
  projects: [
    {
      image: require("./assets/images/tt.webp"),
      projectName: "Global Threat Intelligence Analysis using CloudBased Honeypots ",
      projectDesc: "This project involved the deployment and analysis of a multimodal honeypot system (T-Pot) to capture and study live cyber threats. The infrastructure was hosted on the Microsoft Azure Cloud.",
      footerLink: [
        {
          name: "Visit Report",
          url: "https://github.com/bot0024/Project-Global-Threat-Intelligence-Analysis-using-Cloud-Based-Honeypots"
        }
        //  you can add extra buttons here.
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Cybersecurity",
      subtitle:
        "Foundations in Network Security, Python, and Linux Operations, Practical Expertise in Threat Detection, Incident Response, and SQL , End-to-End Security Analysis: From Risk Management to SIEM Tools ",

      image: require("./assets/images/google.png"),
      imageAlt: "Google Cybersecurity",
      footerLink: [
        {
          name: "Certification",
          url: "https://www.coursera.org/account/accomplishments/professional-cert/3431Q69EXOT9"
        }
      ]
    },
    {
      title: "Cybersecurity Analyst Job Simulation",
      subtitle:
        "Completed a job simulation involving identity and access management (IAM) for Tata Consultancy Services",
      image: require("./assets/images/Tata_logo.png"),
      imageAlt: "Cybersecurity Analyst Job Simulation logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/ifobHAoMjQs9s6bKS/gmf3ypEXBj2wvfQWC_ifobHAoMjQs9s6bKS_jiReKtWBktGTSGC6r_1743945671495_completion_certificate.pdf"
        }
      ]
    },
    {
      title: "Cyber Security 101",
      subtitle:
        "Learn everything you need to embark on a career path in offensive or defensive cyber security.",
      image: require("./assets/images/tryhackme.png"),
      imageAlt: "Cyber Security 101",
      footerLink: [
        {
          name: "Certification",
          url: "https://tryhackme-certificates.s3-eu-west-1.amazonaws.com/THM-R6AXIS6NPD.pdf"
        }
      ]
    },
    {
      title: "Cyber Security Internship",
      subtitle:
        "Completed the Cyber Security Internship at Elevate Labs, demonstrating exceptional skills and dedication in contributing to real-world projects and tasks",
      image: require("./assets/images/elavatelabs.jpeg"),
      imageAlt: "Cybersecurity Analyst Job Simulation logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/1_uzhrQSmDoN4jjLEZQYyzz6KURoePj74/view?usp=drive_link"
        }
      ]
    },
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://medium.com/@BotHacks/%EF%B8%8F-recently-i-did-a-phishing-analysis-on-a-suspicious-email-heres-what-i-found-0ed6785ffc8d",
      title: "Recently, I Did a Phishing Analysis on a Suspicious Email — Here's What I Found",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@BotHacks/pickle-rick-tryhackmes-rick-morty-room-47b2b3e3d420",
      title: "Pickle Rick — TryHackMe's Rick & Morty Room",
      description:
        "I was never a fan of the show, Rick and Morty, but thought this CTF was interesting enough to try out. Web app hacking! Lets get to it. "
    },
    {
      url: "https://medium.com/@BotHacks/vulnversity-walkthrough-tryhackme-8b664ac117b7",
      title: "Vulnversity — Walkthrough Tryhackme",
      description:
        "“Vulnversity” is an introductory level room on TryHackMe that covers various penetration testing methodologies and tools. It includes tasks such as scanning, enumeration, exploitation, and post-exploitation techniques."
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "     ",
      slides_url: "https://bit.ly ",
      event_url: "   "
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "  link "
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+91",
  email_address: "dipnalawade24@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "BotHacks_", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};

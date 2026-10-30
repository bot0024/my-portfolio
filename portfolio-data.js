/**
 * =====================================================================
 * DIP NALAWADE — CYBERSECURITY PORTFOLIO DATA CONFIGURATION
 * =====================================================================
 * Single source of truth for all editable content on this website.
 * Anyone can edit this file to update projects, skills, experience,
 * education, blog posts, achievements, and contact details.
 *
 * NO HTML OR CSS EDITING REQUIRED.
 * All formatting, animations, colors, and design are preserved automatically.
 * =====================================================================
 */

const PORTFOLIO_DATA = {
  // -------------------------------------------------------------------
  // 1. GENERAL INFORMATION & SOCIAL PROFILES
  // -------------------------------------------------------------------
  profile: {
    name: "Dip Nalawade",
    brandMark: "D.",
    rolePrefix: "CYBERSECURITY",
    roles: [
      "SOC operations",
      "Security automation",
      "Incident response",
      "SIEM monitoring"
    ],
    heroIntro: "I’m a cybersecurity graduate focused on security monitoring, investigation, and response automation. I learn by building practical labs and documenting what I discover.",
    heroHighlights: [
      { id: "01", label: "Hands-on labs" },
      { id: "02", label: "Security automation" },
      { id: "03", label: "Always learning" }
    ],
    tickerKeywords: [
      "SIEM",
      "INCIDENT RESPONSE",
      "WINDOWS SECURITY",
      "SOAR",
      "NETWORK ANALYSIS"
    ],
    about: {
      eyebrow: "A curious mind. A practical approach.",
      title: "Learning security by",
      titleMuted: "building and testing.",
      paragraphs: [
        "I'm a Cybersecurity graduate focused on Security Operations (SOC), SIEM monitoring, threat investigation, and security automation. I learn by building practical home labs, investigating security events, and testing workflows from detection to response.", "My hands-on work includes a SOC home lab using Splunk and Wazuh, along with a SOAR-based Active Directory containment workflow integrating Tines, Jira, and Wazuh. I've worked on alert investigation, endpoint-agent lookups, approval-based response actions, and timeout safeguards in a controlled lab environment.", "With 250+ TryHackMe rooms and CTFs, I continue to strengthen my skills in log analysis, network security, threat intelligence, incident response, and automation. I document my projects, testing results, and lessons learned to demonstrate my practical knowledge and continuous learning.", "I'm looking to contribute to a security team where I can apply my skills, learn from experienced professionals, and grow in SOC operations and incident response."
      ],
      tags: [
        "Splunk", "Wazuh", "Tines", "Windows / AD", "Linux",
        "Nmap", "Wireshark", "Jira"
      ]
    },
    contact: {
      email: "dipnalawade24@gmail.com",
      githubUrl: "https://github.com/bot0024",
      linkedinUrl: "https://www.linkedin.com/in/dip-nalawade/",
      copy: "I'm open to entry-level opportunities in SOC operations, cybersecurity, and IT support. I'm eager to apply my hands-on lab experience, contribute to a team, and continue developing my technical skills."
    },
    resume: {
      filePath: "assets/Dip-Nalawade-Resume.pdf",
      fileName: "Dip-Nalawade-Resume.pdf",
      description: "Get the PDF version with my cybersecurity background, internship experience, technical skills, education, and selected projects."
    }
  },

  // -------------------------------------------------------------------
  // 2. SKILLS & TOOLBOX (Filterable by Category)
  // Categories: 'soc', 'automation', 'network', 'systems', and 'development'.
  // -------------------------------------------------------------------


  skills: [
    {
      category: "soc",
      categoryLabel: "SOC / SIEM",
      symbol: "⌁",
      title: "Splunk",
      icon: "https://cdn.jsdelivr.net/gh/homarr-labs/dashboard-icons/svg/splunk.svg",
      description: "Use SPL searches and dashboards to investigate indexed security logs."
    },
    {
      category: "soc",
      categoryLabel: "SOC / SIEM",
      symbol: "◈",
      title: "Wazuh",
      icon: "https://cdn.jsdelivr.net/gh/selfhst/icons/svg/wazuh.svg",
      description: "Monitor endpoints with agent-based alerts, file integrity checks, and security assessments."
    },
    {
      category: "soc",
      categoryLabel: "SOC / SIEM",
      symbol: "▤",
      title: "ELK Stack",
      icon: "https://cdn.jsdelivr.net/gh/homarr-labs/dashboard-icons/svg/elasticsearch.svg",
      description: "Explore and visualize centralized telemetry with Elasticsearch and Kibana."
    },
    {
      category: "soc",
      categoryLabel: "SOC / SIEM",
      symbol: "⌕",
      title: "Security Monitoring & Alert Triage",
      icon: "https://cdn.jsdelivr.net/gh/homarr-labs/dashboard-icons/svg/grafana.svg",
      description: "Review incoming alerts, validate severity, prioritize cases, and record triage decisions."
    },
    {
      category: "soc",
      categoryLabel: "SOC / SIEM",
      symbol: "▦",
      title: "Sysmon & Windows Event Analysis",
      icon: "https://cdn.jsdelivr.net/npm/@lobehub/icons-static-svg@latest/icons/microsoft-color.svg",
      description: "Examine Windows event records and process activity to investigate endpoint behavior."
    },
    {
      category: "soc",
      categoryLabel: "SOC / SIEM",
      symbol: "◎",
      title: "Incident Response",
      icon: "https://www.secuinfra.com/wp-content/uploads/IR-Lifycycle.png",
      description: "Practice structured incident handling, including containment decisions and recovery planning."
    },
    {
      category: "automation",
      categoryLabel: "SOAR / Automation",
      symbol: "⤳",
      title: "Tines",
      icon: "https://cdn.brandfetch.io/id6otPO7Ol/theme/dark/logo.svg?c=1dxbfHSJFAPEGdCLU4o5B",
      description: "Connect security tools and route events through visual, no-code workflows."
    },
    {
      category: "automation",
      categoryLabel: "SOAR / Automation",
      symbol: "⌘",
      title: "Jira",
      icon: "https://cdn.jsdelivr.net/gh/homarr-labs/dashboard-icons/svg/jira.svg",
      description: "Record incidents, assign follow-up work, and track approval and case status."
    },
    {
      category: "automation",
      categoryLabel: "SOAR / Automation",
      symbol: "{ }",
      title: "Python",
      icon: "https://cdn.jsdelivr.net/gh/homarr-labs/dashboard-icons/svg/python.svg",
      description: "Write scripts to parse data, automate checks, and build small security utilities."
    },
    {
      category: "automation",
      categoryLabel: "SOAR / Automation",
      symbol: ">_",
      title: "PowerShell",
      icon: "https://cdn.jsdelivr.net/gh/homarr-labs/dashboard-icons/svg/powershell.svg",
      description: "Run Windows administration tasks and collect endpoint details through scripts."
    },
    {
      category: "automation",
      categoryLabel: "SOAR / Automation",
      symbol: "⇄",
      title: "REST APIs & Webhooks",
      icon: "https://cdn.jsdelivr.net/gh/homarr-labs/dashboard-icons/svg/postman.svg",
      description: "Exchange structured data between tools using HTTP requests and event callbacks."
    },
    {
      category: "automation",
      categoryLabel: "SOAR / Automation",
      symbol: "⎇",
      title: "SOAR Automation",
      icon: "https://cdn.jsdelivr.net/gh/homarr-labs/dashboard-icons/svg/n8n.svg",
      description: "Design response logic with branching, approvals, timeouts, and safety checks."
    },
    {
      category: "network",
      categoryLabel: "Network / Threat",
      symbol: "⌖",
      title: "Nmap",
      icon: "https://nmap.org/images/sitelogo-nmap.svg",
      description: "Discover hosts and enumerate exposed services in authorized lab environments."
    },
    {
      category: "network",
      categoryLabel: "Network / Threat",
      symbol: "⌁",
      title: "Wireshark",
      icon: "https://cdn.jsdelivr.net/gh/homarr-labs/dashboard-icons/png/wireshark.png",
      description: "Inspect packet captures to understand protocols, connections, and suspicious traffic."
    },
    {
      category: "network",
      categoryLabel: "Network / Threat",
      symbol: "⛨",
      title: "Suricata IDS/IPS",
      icon: "https://cdn.brandfetch.io/id8JFT0722/w/1174/h/855/theme/light/logo.png?c=1dxbfHSJFAPEGdCLU4o5B",
      description: "Review signature-based network alerts and investigate matching traffic."
    },
    {
      category: "network",
      categoryLabel: "Network / Threat",
      symbol: "⌗",
      title: "MITRE ATT&CK",
      icon: "https://cdn.brandfetch.io/idt3Ku9CcB/theme/dark/logo.svg?c=1dxbfHSJFAPEGdCLU4o5B",
      description: "Classify observed behaviors using documented adversary tactics and techniques."
    },
    {
      category: "network",
      categoryLabel: "Network / Threat",
      symbol: "◉",
      title: "IOC Analysis",
      icon: "https://cdn.jsdelivr.net/gh/homarr-labs/dashboard-icons/svg/virustotal.svg",
      description: "Enrich and assess specific IPs, domains, URLs, and file hashes."
    },
    {
      category: "network",
      categoryLabel: "Network / Threat",
      symbol: "✳",
      title: "Threat Intelligence",
      icon: "https://cdn.jsdelivr.net/gh/selfhst/icons/svg/global-threat-map.svg",
      description: "Correlate threat reporting and context to understand campaigns, actors, and TTPs."
    },
    {
      category: "network",
      categoryLabel: "Network / Threat",
      symbol: "⌬",
      title: "MISP & Cortex",
      icon: "https://cdn.brandfetch.io/idcDXgW4fm/w/256/h/256/theme/dark/icon.jpeg?c=1dxbfHSJFAPEGdCLU4o5B",
      description: "Organize threat indicators and run enrichment or analysis workflows."
    },
    {
      category: "network",
      categoryLabel: "Network / Threat",
      symbol: "▤",
      title: "TheHive",
      icon: "https://cdn.jsdelivr.net/gh/homarr-labs/dashboard-icons/svg/thehive.svg",
      description: "Structure incident cases, link observables, and track investigation tasks."
    },
    {
      category: "network",
      categoryLabel: "Network / Threat",
      symbol: "⌗",
      title: "Phishing Email Analysis",
      icon: "https://cdn.jsdelivr.net/gh/homarr-labs/dashboard-icons/svg/thunderbird.svg",
      description: "Inspect sender details, headers, URLs, and attachments for phishing indicators."
    },
    {
      category: "network",
      categoryLabel: "Network / Threat",
      symbol: "⌖",
      title: "Vulnerability Assessment",
      icon: "https://cdn.iconscout.com/icon/premium/png-512-thumb/ban-bug-icon-svg-download-png-10138437.png?f=webp&w=512",
      description: "Identify exposed services and prioritize potential weaknesses for further validation."
    },
    {
      category: "network",
      categoryLabel: "Network / Threat",
      symbol: "◉",
      title: "T-Pot Honeypots",
      icon: "https://cdn.jsdelivr.net/gh/homarr-labs/dashboard-icons/png/t-pot.png",
      description: "Analyze captured honeypot telemetry to compare service activity and investigate attack patterns."
    },
    {
      category: "systems",
      categoryLabel: "Systems / Cloud",
      symbol: "▣",
      title: "Windows & Active Directory",
      icon: "https://cdn.jsdelivr.net/gh/homarr-labs/dashboard-icons/svg/windows-10.svg",
      description: "Manage Windows lab endpoints, domain accounts, policies, and directory services."
    },
    {
      category: "systems",
      categoryLabel: "Systems / Cloud",
      symbol: "$_",
      title: "Linux",
      icon: "https://cdn.jsdelivr.net/gh/homarr-labs/dashboard-icons/svg/linux.svg",
      description: "Administer Linux hosts, services, permissions, and security lab environments."
    },
    {
      category: "systems",
      categoryLabel: "Systems / Cloud",
      symbol: "☁",
      title: "Microsoft Azure",
      icon: "https://cdn.jsdelivr.net/gh/homarr-labs/dashboard-icons/svg/azure.svg",
      description: "Provision and operate cloud infrastructure for security experiments and data collection."
    },
    {
      category: "systems",
      categoryLabel: "Systems / Cloud",
      symbol: "⬡",
      title: "Docker",
      icon: "https://cdn.jsdelivr.net/gh/homarr-labs/dashboard-icons/svg/docker.svg",
      description: "Run and manage containerized applications and security services."
    },
    {
      category: "development",
      categoryLabel: "AI / Development",
      symbol: "✧",
      title: "AI-Assisted Development",
      icon: "https://cdn.jsdelivr.net/gh/homarr-labs/dashboard-icons/svg/github-copilot.svg",
      description: "Use coding assistants to draft implementation ideas and accelerate routine development tasks."
    },
    {
      category: "development",
      categoryLabel: "AI / Development",
      symbol: "◇",
      title: "AI-Powered Prototyping",
      icon: "https://cdn.jsdelivr.net/gh/homarr-labs/dashboard-icons/svg/ollama.svg",
      description: "Turn requirements into quick proof-of-concept apps and interface experiments."
    },
    {
      category: "development",
      categoryLabel: "AI / Development",
      symbol: "</>",
      title: "Application Debugging & Code Review",
      icon: "https://cdn.jsdelivr.net/gh/homarr-labs/dashboard-icons/svg/visual-studio-code.svg",
      description: "Trace application errors and inspect code changes for logic, reliability, and maintainability."
    }
  ],

  // -------------------------------------------------------------------
  // 3. SELECTED PROJECTS
  // artType options: "soar" | "siem" | "network" | "scan"
  // Or provide custom imageUrl: "assets/your-screenshot.png"
  // -------------------------------------------------------------------
  projects: [
    {
      id: "project-01",
      number: "PROJECT 01",
      featured: true,
      badgeText: "END-TO-END TESTED",
      badgeType: "status", // "status" (green dot) or "type" (plain label)
      artType: "soar",
      imageUrl: "assets-soar-workflow.png",
      title: "SOAR Active Directory Containment Lab",
      description: "Built and tested a lab-based security response workflow integrating Splunk, Tines, Wazuh, and Jira. Implemented dynamic endpoint-agent lookup, approval handling, and timeout safeguards before containment actions. Documented the workflow and end-to-end test results.",
      technologies: ["Splunk", "Tines", "Wazuh", "Jira"],
      githubUrl: "https://github.com/bot0024/soar-ad-containment-lab"
    },
    {
      id: "project-02",
      number: "PROJECT 02",
      featured: false,
      badgeText: "SECURITY MONITORING",
      badgeType: "type",
      artType: "siem",
      imageUrl: "assets-soc-opnsense.png",
      title: "SOC Home Lab: Threat Detection, SIEM & Automated Incident Response",
      description: "Built an enterprise-style SOC home lab integrating Wazuh, OPNsense, Suricata, TheHive, MISP, and Cortex. Implemented security monitoring, threat detection, threat intelligence enrichment, and automated incident response through controlled attack simulations.",
      technologies: ["OPNsense", "Suricata IDS/IPS", "Wazuh SIEM", "TheHive", "MISP", "Cortex", "Kali Linux", "VirtualBox"],
      githubUrl: "https://github.com/bot0024/soc-lab-opensoure"
    },
    {
      id: "project-03",
      number: "PROJECT 03",
      featured: false,
      badgeText: "THREAT INTELLIGENCE",
      badgeType: "type",
      artType: "scan",
      imageUrl: "assets-threat-intelligence.png",
      title: "Global Threat Intelligence Analysis Using Cloud Honeypots",
      description: "266K+ Honeypot Events in 24 Hours Deployed a T-Pot honeypot on Microsoft Azure to observe internet-facing threat activity. Analyzed captured telemetry to examine SSH/Telnet brute-force attempts, targeted ports, source IPs, geographic distribution, Suricata alerts, and suspicious file downloads.",
      technologies: ["T-Pot", "Microsoft Azure", "ELK Stack", "Suricata IDS", "VirusTotal", "GreyNoise", "Docker"],
      githubUrl: "https://github.com/bot0024/Project-Global-Threat-Intelligence-Analysis-using-Cloud-Based-Honeypots"
    },
    {
      id: "project-04",
      number: "PROJECT 04",
      featured: false,
      badgeText: "NETWORK ANALYSIS",
      badgeType: "type",
      artType: "network",
      imageUrl: "assets-network-wireshark.png",
      title: "Network Recon & Packet Analysis",
      description: "Practiced Nmap scanning in a controlled lab and used Wireshark to inspect packet flows, understand service exposure, and document observations.",
      technologies: ["Nmap", "Wireshark", "Kali Linux"],
      githubUrl: "https://github.com/bot0024/nmap-network-analyzer"
    }

  ],

  // -------------------------------------------------------------------
  // 4. BLOG & FIELD NOTES (with Dialog Previews)
  // visualType options: "flow" | "terminal" | "packet"
  // -------------------------------------------------------------------
  blogNotes: [
    {
      id: "threat-intelligence-tools",
      imageUrl: "https://miro.medium.com/v2/resize:fill:800:533/0*r_o_vMrFSjc9MfFg.png",
      featured: false,
      categoryLabel: "THREAT INTELLIGENCE",
      draftStatus: "Sep 3, 2025",
      visualType: "flow",
      title: "Threat Intelligence Tools — TryHackMe Walkthrough",
      description: "A practical walkthrough of threat-intelligence resources including URLScan, Abuse.ch platforms, PhishTool, and Cisco Talos for investigating indicators and building context.",
      articleUrl: "https://medium.com/@BotHacks/threat-intelligence-tools-tryhackme-walkthrough-8147898eef61",
      dialog: { category: "THREAT INTELLIGENCE", title: "Threat Intelligence Tools — TryHackMe Walkthrough", paragraphs: ["A practical walkthrough of threat-intelligence resources including URLScan, Abuse.ch platforms, PhishTool, and Cisco Talos for investigating indicators and building context."], bullets: [] }
    },
    {
      id: "intro-cyber-threat-intel",
      imageUrl: "https://miro.medium.com/v2/resize:fill:800:533/0*TPIPTgcMwuQsTyQr.png",
      featured: false,
      categoryLabel: "THREAT INTELLIGENCE",
      draftStatus: "Aug 25, 2025",
      visualType: "terminal",
      title: "Intro to Cyber Threat Intel | TryHackMe — Walkthrough",
      description: "An introduction to cyber threat intelligence concepts, collection and analysis, and how CTI supports security investigations and SOC workflows.",
      articleUrl: "https://medium.com/@BotHacks/intro-to-cyber-threat-intel-tryhackme-walkthrough-8e0e768671b4",
      dialog: { category: "THREAT INTELLIGENCE", title: "Intro to Cyber Threat Intel | TryHackMe — Walkthrough", paragraphs: ["An introduction to cyber threat intelligence concepts, collection and analysis, and how CTI supports security investigations and SOC workflows."], bullets: [] }
    },
    {
      id: "unified-kill-chain",
      imageUrl: "https://miro.medium.com/v2/resize:fill:800:533/1*DZUW6TR7bOxrw9AHxvmhPw.png",
      featured: false,
      categoryLabel: "ATTACK FRAMEWORKS",
      draftStatus: "Aug 24, 2025",
      visualType: "packet",
      title: "Unified Kill Chain — TryHackMe",
      description: "A walkthrough of the Unified Kill Chain framework and how attack stages can help structure threat understanding, detection opportunities, and response planning.",
      articleUrl: "https://medium.com/@BotHacks/unified-kill-chain-46419a3bdb29",
      dialog: { category: "ATTACK FRAMEWORKS", title: "Unified Kill Chain — TryHackMe", paragraphs: ["A walkthrough of the Unified Kill Chain framework and how attack stages can help structure threat understanding, detection opportunities, and response planning."], bullets: [] }
    },
    {
      id: "vulnversity",
      imageUrl: "https://miro.medium.com/v2/da:true/resize:fill:800:533/0*AEo7ja7Ej3ir9fxx",
      featured: false,
      categoryLabel: "CTF / WEB SECURITY",
      draftStatus: "Jul 9, 2025",
      visualType: "flow",
      title: "Vulnversity — Walkthrough TryHackMe",
      description: "A controlled-lab walkthrough covering Nmap reconnaissance, web directory discovery, file-upload testing, and Linux privilege-escalation concepts.",
      articleUrl: "https://medium.com/@BotHacks/vulnversity-walkthrough-tryhackme-8b664ac117b7",
      dialog: { category: "CTF / WEB SECURITY", title: "Vulnversity — Walkthrough TryHackMe", paragraphs: ["A controlled-lab walkthrough covering Nmap reconnaissance, web directory discovery, file-upload testing, and Linux privilege-escalation concepts."], bullets: [] }
    },
    {
      id: "phishing-analysis",
      imageUrl: "https://miro.medium.com/v2/resize:fill:800:533/1*5ECSYOk_SXlFRHwZoTl2aA.png",
      featured: false,
      categoryLabel: "EMAIL SECURITY",
      draftStatus: "May 28, 2025",
      visualType: "terminal",
      title: "Recently, I Did a Phishing Analysis on a Suspicious Email — Here’s What I Found",
      description: "An investigation of a suspicious email, focusing on sender clues, email details, suspicious links, and practical steps for recognizing potential phishing.",
      articleUrl: "https://medium.com/@BotHacks/%EF%B8%8F-recently-i-did-a-phishing-analysis-on-a-suspicious-email-heres-what-i-found-0ed6785ffc8d",
      dialog: { category: "EMAIL SECURITY", title: "Recently, I Did a Phishing Analysis on a Suspicious Email — Here’s What I Found", paragraphs: ["An investigation of a suspicious email, focusing on sender clues, email details, suspicious links, and practical steps for recognizing potential phishing."], bullets: [] }
    },
    {
      id: "cybersecurity-career",
      imageUrl: "https://miro.medium.com/v2/resize:fill:800:533/1*HFQHnv6YqztzGTMJYIrR-g.jpeg",
      featured: false,
      categoryLabel: "CAREER / LEARNING",
      draftStatus: "May 19, 2025",
      visualType: "packet",
      title: "How to Start a Career in Cybersecurity (Even If You’re a Complete Beginner)",
      description: "Beginner-focused advice on starting a cybersecurity learning journey, building foundational skills, and taking practical steps toward an entry-level role.",
      articleUrl: "https://medium.com/@BotHacks/how-to-start-a-career-in-cybersecurity-even-if-youre-a-complete-beginner-396062b7270e",
      dialog: { category: "CAREER / LEARNING", title: "How to Start a Career in Cybersecurity (Even If You’re a Complete Beginner)", paragraphs: ["Beginner-focused advice on starting a cybersecurity learning journey, building foundational skills, and taking practical steps toward an entry-level role."], bullets: [] }
    },
    {
      id: "pickle-rick",
      imageUrl: "https://miro.medium.com/v2/resize:fill:800:533/0*aUPO7KLp5qewbHWv.png",
      featured: false,
      categoryLabel: "CTF / WEB SECURITY",
      draftStatus: "May 19, 2025",
      visualType: "flow",
      title: "Pickle Rick — TryHackMe’s Rick & Morty Room",
      description: "A CTF walkthrough covering web reconnaissance, directory enumeration, clues and credential discovery, command execution, and Linux privilege escalation in a lab.",
      articleUrl: "https://medium.com/@BotHacks/pickle-rick-tryhackmes-rick-morty-room-47b2b3e3d420",
      dialog: { category: "CTF / WEB SECURITY", title: "Pickle Rick — TryHackMe’s Rick & Morty Room", paragraphs: ["A CTF walkthrough covering web reconnaissance, directory enumeration, clues and credential discovery, command execution, and Linux privilege escalation in a lab."], bullets: [] }
    }
  ],

  // -------------------------------------------------------------------
  // 5. ACHIEVEMENTS & MILESTONES
  // type options:
  //   - "big" (custom bold styled text, e.g. "TOP <span>1%</span>")
  //   - "count" (animated counter, e.g. target: 266000, suffix: "+", separator: ",")
  //   - "cert" (custom certificate seal mark)
  // -------------------------------------------------------------------
  achievements: [
    {
      featured: true,
      topline: "TRYHACKME ACHIEVEMENT",
      symbol: "↗",
      type: "big",
      valueHtml: 'TOP <span>1%</span>',
      title: "TryHackMe Global Ranking",
      linkUrl: "https://tryhackme.com/p/Dip24?utm_campaign=social_share&utm_medium=social&utm_content=profile&cardVersion=a4a6da11718a&utm_source=copy&sharerId=668fa41910b1a0594f0d6520",
      description: "Ranked in the top 1% of TryHackMe users, demonstrating consistent engagement in hands-on cybersecurity learning and practical challenges.",
      bottomText: "TRYHACKME · TOP 1% GLOBALLY"
    },
    {
      featured: false,
      topline: "THREAT INTELLIGENCE",
      symbol: "⌁",
      type: "count",
      count: 266000,
      suffix: "+",
      separator: ",",
      title: "Attack Events Captured",
      description: "Deployed a cloud honeypot and analyzed captured attack activity, including brute-force attempts, exploitation alerts, and suspicious indicators.",
      bottomText: "CLOUD HONEYPOT RESEARCH"
    },
    {
      featured: false,
      topline: "CERTIFICATION",
      symbol: "✳",
      type: "cert",
      markHtml: 'G<span>✓</span>',
      title: "Google Cybersecurity Certificate",
      linkUrl: "https://coursera.org/share/bee857e0f1bf46c9d68e3633dff318cb",
      description: "Completed training in network security, Linux, Python, SQL, threat detection, and incident response.",
      bottomText: "CERTIFICATE EARNED"
    },
    {
      featured: false,
      topline: "SOAR AUTOMATION",
      symbol: "⤳",
      type: "count",
      count: 4,
      suffix: " tools",
      separator: "",
      title: "SOAR Incident Response Automation",
      description: "Integrated Splunk, Tines, Wazuh, and Jira into a tested response workflow with dynamic endpoint lookup, approval safeguards, and containment actions.",
      bottomText: "END-TO-END LAB TESTED"
    },
    {
      featured: false,
      topline: "JOB SIMULATION",
      symbol: "◈",
      type: "cert",
      markHtml: 'TCS<span>✓</span>',
      title: "Cybersecurity Analyst Job Simulation",
      linkUrl: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/ifobHAoMjQs9s6bKS/gmf3ypEXBj2wvfQWC_ifobHAoMjQs9s6bKS_jiReKtWBktGTSGC6r_1743945671495_completion_certificate.pdf",
      description: "Completed a TCS job simulation involving identity and access management concepts and cybersecurity analyst tasks.",
      bottomText: "JOB SIMULATION COMPLETED"
    },
    {
      featured: false,
      topline: "SOC TRAINING",
      symbol: "⛨",
      type: "cert",
      markHtml: 'SOC<span>✓</span>',
      title: "SOC Level 1",
      linkUrl: "https://tryhackme-certificates.s3-eu-west-1.amazonaws.com/THM-JPHSOCSDNQ.pdf",
      description: "Completed TryHackMe's SOC Level 1 learning path, developing practical skills in security monitoring, alert triage, threat detection, and incident investigation.",
      bottomText: "PATH COMPLETED · JUN 2026"
    },
    {
      featured: false,
      topline: "INTERNSHIP",
      symbol: "✳",
      type: "cert",
      markHtml: 'EL<span>✓</span>',
      title: "Elevate Labs Cyber Security Internship",
      linkUrl: "https://drive.google.com/file/d/1_uzhrQSmDoN4jjLEZQYyzz6KURoePj74/view",
      description: "Gained practical cybersecurity experience in network risk assessment, firewall configuration, phishing investigation, and security documentation.",
      bottomText: "INTERNSHIP · MAY–JUN 2025"
    }
  ],

  // -------------------------------------------------------------------
  // 6. EXPERIENCE TIMELINE
  // -------------------------------------------------------------------
  experience: [
    {
      period: "May – Jun 2025",
      periodLabel: "Elevate Labs",
      badge: "INTERNSHIP",
      title: "Cyber Security Intern",
      summary: "Gained hands-on cybersecurity experience through network risk assessment, firewall configuration, phishing investigation, and security documentation.",
      bullets: [
        "Assisted with network risk assessment and reviewed security configurations to identify potential risks.",
        "Worked with firewall rules and security controls to understand network protection.",
        "Investigated suspicious phishing emails and extracted indicators of compromise (IOCs).",
        "Documented security findings and technical observations to support security analysis."
      ]
    }
  ],

  // -------------------------------------------------------------------
  // 7. EDUCATION
  // -------------------------------------------------------------------

  education: [
    {
      index: "01",
      status: "GRADUATED",
      title: "BSc Cyber Security and Digital Science",
      description: "Suryadatta International Institute of Cyber Security · Graduated 2026"
    },
    {
      index: "02",
      status: "COMPLETED",
      title: "Higher Secondary Certificate (HSC)",
      description: "Maharashtra State Board · Completed 2023"
    },
    {
      index: "03",
      status: "COMPLETED",
      title: "Secondary School Certificate (SSC)",
      description: "Maharashtra State Board · Completed 2021"
    }
  ],

};

// Freeze the configuration in development to avoid unintentional mutations
if (typeof Object.freeze === "function") {
  Object.freeze(PORTFOLIO_DATA);
}

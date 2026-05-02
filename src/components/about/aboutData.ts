export type CertificationItem = {
  name: string;
  src: string;
  issuer: string;
  issued: string;
  credentialId?: string;
};

export type TeamMember = {
  name: string;
  role: string;
  image: string;
  bio: string;
  linkedin: string;
  email: string;
};

export type AboutStat = {
  label: string;
  value: string;
};

export const certificationsAndExpertise: CertificationItem[] = [
  {
    name: "Microsoft Certified: Azure Solutions Architect Expert",
    src: "/logos/microsoft.svg",
    issuer: "Microsoft",
    issued: "Sep 2024",
  },
  {
    name: "Google Cloud Professional Cloud Architect",
    src: "/logos/google-cloud.svg",
    issuer: "Google Cloud",
    issued: "Aug 2024",
  },
  {
    name: "AWS Certified Solutions Architect - Associate",
    src: "/logos/aws.svg",
    issuer: "AWS",
    issued: "Jun 2024",
  },
  {
    name: "Microsoft Certified: Azure Administrator Associate",
    src: "/logos/microsoft.svg",
    issuer: "Microsoft",
    issued: "Jan 2024",
  },
  {
    name: "AWS Certified Developer - Associate",
    src: "/logos/aws.svg",
    issuer: "AWS",
    issued: "Nov 2023",
  },
  {
    name: "Google Cloud Professional Cloud Developer",
    src: "/logos/google-cloud.svg",
    issuer: "Google Cloud",
    issued: "May 2023",
  },
  {
    name: "Salesforce Certified Application Architect",
    src: "/salesforce-certified-logo/applicationarch.png",
    issuer: "Salesforce",
    issued: "Apr 2025",
  },
  {
    name: "Salesforce Certified Sharing and Visibility Architect",
    src: "/salesforce-certified-logo/platformsharingandvisarch.png",
    issuer: "Salesforce",
    issued: "Apr 2025",
  },
  {
    name: "Salesforce Certified Associate",
    src: "/salesforce-certified-logo/platofrmFoundation.png",
    issuer: "Salesforce",
    issued: "Apr 2023",
    credentialId: "3320250",
  },
  {
    name: "Salesforce Certified Data Architect",
    src: "/salesforce-certified-logo/plaformdataarchittect.png",
    issuer: "Salesforce",
    issued: "Mar 2022",
    credentialId: "2162869",
  },
  {
    name: "Salesforce Certified Service Cloud Consultant",
    src: "/salesforce-certified-logo/serviceCloud.png",
    issuer: "Salesforce",
    issued: "Feb 2022",
    credentialId: "22958322",
  },
  {
    name: "Salesforce Certified Sales Cloud Consultant",
    src: "/salesforce-certified-logo/salescloudconsulant.png",
    issuer: "Salesforce",
    issued: "Feb 2022",
    credentialId: "22947761",
  },
  {
    name: "Salesforce Certified Platform Developer I",
    src: "/salesforce-certified-logo/platformdeveloper.png",
    issuer: "Salesforce",
    issued: "Jul 2019",
    credentialId: "20298045",
  },
  {
    name: "Salesforce Certified Platform App Builder",
    src: "/salesforce-certified-logo/platformappbuilder.png",
    issuer: "Salesforce",
    issued: "Feb 2018",
  },
  {
    name: "Salesforce Certified Administrator",
    src: "/salesforce-certified-logo/platformAdmin.png",
    issuer: "Salesforce",
    issued: "Apr 2012",
  },
  {
    name: "Dell Boomi Associate Developer",
    src: "/cert-logos/boomi.svg",
    issuer: "Boomi",
    issued: "Mar 2013",
  },
];

export const teamMembers: TeamMember[] = [
  {
    name: "Babul",
    role: "Founder & CEO",
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=256&h=256&auto=format&fit=crop",
    bio: "Visionary leader with 15+ years exploring enterprise IT transformation. Passionate about leveraging technology to drive business growth.",
    linkedin: "https://linkedin.com",
    email: "founder@babultech.com",
  },
  {
    name: "Jane Smith",
    role: "Co-Founder & COO",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=256&h=256&auto=format&fit=crop",
    bio: "Operational mastermind streamlining processes and ensuring every client project is delivered with precision and excellence.",
    linkedin: "https://linkedin.com",
    email: "cofounder@babultech.com",
  },
  {
    name: "Michael Johnson",
    role: "Chief Technology Officer",
    image:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=256&h=256&auto=format&fit=crop",
    bio: "Technical genius behind our infrastructure strategies. Dedicated to building secure, scalable, and cutting-edge software solutions.",
    linkedin: "https://linkedin.com",
    email: "cto@babultech.com",
  },
];

export const aboutStats: AboutStat[] = [
  { label: "Years Experience", value: "15+" },
  { label: "Enterprise Clients", value: "20+" },
  { label: "Projects Delivered", value: "25+" },
  { label: "Team Experts", value: "10+" },
];

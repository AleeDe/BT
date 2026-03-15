import React from "react";
import { BarChart3, Lock, Rocket, Server, Code, Database } from "lucide-react";

export interface CaseStudy {
  id: string;
  clientName: string;
  category: string;
  title: string;
  problem: string;
  solution: string;
  stats: {
    value: string;
    label: string;
    icon: React.ReactNode;
  }[];
  gifSrc: string;
}

export const caseStudies: CaseStudy[] = [
  {
    id: "cs-01",
    clientName: "GlobalFin Corp",
    category: "Cloud Migration",
    title: "Modernizing Legacy Systems for a Fortune 500 Bank",
    problem: "Outdated on-premise infrastructure was causing significant downtime, slowing down transactions, and increasing maintenance costs by 40% year-over-year.",
    solution: "Architected a hybrid-cloud environment using AWS, containerized legacy monolithic applications, and implemented an automated CI/CD pipeline.",
    stats: [
      { value: "99.99%", label: "Uptime Achieved", icon: <Server className="w-5 h-5 text-blue-400" /> },
      { value: "3x", label: "Faster Deployments", icon: <Rocket className="w-5 h-5 text-indigo-400" /> },
    ],
    gifSrc: "/case-study-1-animation.svg"
  },
  {
    id: "cs-02",
    clientName: "HealthTech Innovations",
    category: "Cybersecurity",
    title: "Securing Patient Data Across 50+ Hospitals",
    problem: "Vulnerable endpoints and fragmented identity management left massive amounts of sensitive health records exposed to potential ransomware attacks.",
    solution: "Deployed a zero-trust architecture, unified identity access management (IAM), and implemented AI-driven threat detection systems.",
    stats: [
      { value: "0", label: "Breaches Since Launch", icon: <Lock className="w-5 h-5 text-emerald-400" /> },
      { value: "-60%", label: "Incident Response Time", icon: <BarChart3 className="w-5 h-5 text-blue-400" /> },
    ],
    gifSrc: "/case-study-2-animation.svg"
  },
  {
    id: "cs-03",
    clientName: "RetailFlow Systems",
    category: "CRM Implementation",
    title: "Unified Customer Intelligence for National Retailer",
    problem: "Sales representatives struggled with 4 disconnected systems to track customer interactions, leading to a 35% churn rate and lost cross-selling opportunities.",
    solution: "Deployed and customized Apex-Accelerator CRM, migrating 2 million customer records and automating follow-up workflows.",
    stats: [
      { value: "+45%", label: "Sales Conversion Rate", icon: <Database className="w-5 h-5 text-blue-400" /> },
      { value: "120hrs", label: "Saved Monthly per Rep", icon: <BarChart3 className="w-5 h-5 text-indigo-400" /> },
    ],
    gifSrc: "/case-study-3-animation.svg"
  },
  {
    id: "cs-04",
    clientName: "Logistics Pro",
    category: "Full-Stack Dev",
    title: "Real-Time Fleet Tracking and Analytics Engine",
    problem: "Legacy spreadsheet-based tracking caused severe delays in dispatching and zero visibility into active fleet diagnostics or driver status.",
    solution: "Developed ShiftDeploy custom React/Node.js web application utilizing WebSockets for real-time geolocation mapping and predictive maintenance alerts.",
    stats: [
      { value: "10,000+", label: "Vehicles Tracked Live", icon: <Code className="w-5 h-5 text-emerald-400" /> },
      { value: "22%", label: "Fuel Cost Reduction", icon: <BarChart3 className="w-5 h-5 text-blue-400" /> },
    ],
    gifSrc: "/case-study-4-animation.svg"
  }
];
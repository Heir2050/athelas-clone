export interface PartnerInfo {
    icon: string;
    title: string;
    description: string;
}
  
export const partnerInfos: PartnerInfo[] = [
    {
      icon: "/deep.svg",
      title: "Deep Personalization",
      description:
        "Ambient AI adapts to your unique style to deliver chart notes just as you’d write them.",
    },
    {
      icon: "/flexible.svg",
      title: "Flexible AI Assistant",
      description:
        "Copilot mode can answer questions, retrieve data, and run tasks on your behalf.",
    },
    {
      icon: "/parallel.svg",
      title: "Parallel Scribing",
      description:
        "When patient encounters overlap, you can quickly switch between multiple active scribes.",
    },
    {
      icon: "/continuous.svg",
      title: "Continuous Data Sync",
      description:
        "Scribed chart notes automatically sync to your EMR while you do other tasks.",
    },
    {
      icon: "/coding.svg",
      title: "Coding and Diagnosis",
      description:
        "Ambient AI automatically generates CPT and ICD-10 codes for your encounter.",
    },
    {
      icon: "/compliance.svg",
      title: "Compliance Nudges",
      description:
        "Automated care cues ensure staff never miss key questions during the encounter.",
    },
];
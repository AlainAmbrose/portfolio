import "../App.css";
import { useNavigate } from "react-router-dom";
import PageTitleWithImagePlaceholder from "../components/PageTitleWithImagePlaceholder";
import SocialMediaLinks from "../components/SocialMediaLinks";
import ExperienceCard from "../components/ExperienceCard";
import { useState } from "react";
import LandingPage from "./LandingPage";
import AboutPage from "./AboutPage";
import ExperiencePage from "./ExperiencePage";
import ProjectsPage from "./ProjectsPage";

function HomePage() {
  const navigate = useNavigate();

  const handleNavClick = (event, location) => {
    event.preventDefault();
    navigate(`/${location}`);
  };

  const leftDivStyle1 = {
    flex: "0 0 48%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  };

  const rightDivStyle1 = {
    flex: "0 0 48%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  };

  const [isParagraphVisible, setIsParagraphVisible] = useState([
    false,
    false,
    false,
  ]);

  const toggleVisibility = (index) => {
    const updatedVisibility = [...isParagraphVisible];
    updatedVisibility[index] = !updatedVisibility[index];
    setIsParagraphVisible(updatedVisibility);
  };

  const leftDivStyle = {
    flex: "0 0 38%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  };

  const rightDivStyle = {
    flex: "0 0 48%",
    display: "flex",
    flexDirection: "column",
    overflow: "auto",
    scrollbarWidth: "none",
    marginTop: "2vh",
  };

  const skillsStyle = {
    flex: "0 0 80%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "left",
    overflow: "scroll",
    scrollbarWidth: "none",
    marginTop: "2vh",
  };

  const creditKarmaContent1 = {
    title: "Credit Karma",
    link: "https://www.intuit.com/intuitassist/",
    description: [
      {
        date: "May 2024 — Aug 2024",
        title: "Software Engineering Intern (Gen AI)",
        bullets: [
          "Created RPC endpoints allowing for suggested user prompts to be displayed to over 200m+ users providing them with relevant follow up prompts allowing them to continue engaging with the AI assistant.",
          "Decreased LLM response render latency by 15% by optimizing the backend call structure to more efficiently display resources.",
          "Incorporated novel integration tests into a CI/CD workflow using CircleCI ensuring that pre-existing RPC calls between several microservices function as expected.",
        ],
      },
    ],
    technologies: ["TypeScript", "CircleCI", "YAML", "Node.js"],
  };

  const creditKarmaContent2 = {
    title: "Credit Karma",
    link: "https://www.creditkarma.com/ck-money/savings",
    description: [
      {
        date: "May 2023 — Aug 2023",
        title: "Software Engineering Intern (CK Money)",
        bullets: [
          "Implemented novel push/email notifications supporting the mobile check deposit feature to enhance the user experience for 600,000+ members during check rejection events via a Thrift + Kafka pipeline.",
          "Created an ETL pipeline from our real-time event queue to BigQuery to enhance analytics and BI processes around check deposit events.",
          "Utilized an internal experimentation platform to design statistically sound A-B testing for new notifications to determine impact on deposit re-submission success rates.",
        ],
      },
    ],
    technologies: ["Scala", "Kafka", "Big Query", "Splunk"],
  };

  const nsbeUCFContent = {
    title: "NSBE UCF",
    link: "https://www.nsbeucf.org",
    description: [
      {
        date: "Aug 2023 — Present",
        title: "Developer",
        bullets: [
          "Developing an app that will allow the UCF chapter of the National Society of Black Engineers' members to stay updated on meeting information, keep track of their application and chapter status, and view convention information.",
          "Volunteering with the TORCH committee to bring engineering concepts to the attention of underprivileged children.",
        ],
      },
    ],
    technologies: ["TypeScript", "React-Native"],
  };

  return (
    <>
      <LandingPage />
      <AboutPage />
      <ExperiencePage />
      <ProjectsPage />
    </>
  );
}

export default HomePage;

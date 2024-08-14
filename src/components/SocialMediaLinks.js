import "../App.css";
import GitHubWhite from "../images/GitHub-White.svg";
import LinkedInWhite from "../images/LinkedIn-White.svg";
import InstagramWhite from "../images/Instagram-White.svg";

const SocialMediaLinks = () => {
  return (
    <div className="socialMediaLinks">
      <div>
        <a href="https://www.github.com/AlainAmbrose">
          <img
            src={GitHubWhite}
            alt="GitHub Link"
            style={{ marginRight: "10px", height: "5vh", width: "5vh" }}
          />
        </a>
        <a href="https://www.linkedin.com/in/alain-ambrose">
          <img
            src={LinkedInWhite}
            alt="LinkedIn Link"
            style={{ marginRight: "10px", height: "5vh", width: "5vh" }}
          />
        </a>
        <a href="https://www.instagram.com/alainambrose911/">
          <img
            src={InstagramWhite}
            alt="Instagram Link"
            style={{ marginRight: "10px", height: "5vh", width: "5vh" }}
          />
        </a>
      </div>
    </div>
  );
};

export default SocialMediaLinks;

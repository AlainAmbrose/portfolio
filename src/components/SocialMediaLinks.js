import "../App.css";
import GitHubWhite from "../images/github-green.svg";
import LinkedInWhite from "../images/linkedin-green.svg";
import InstagramWhite from "../images/instagram-green.svg";

const SocialMediaLinks = () => {
  return (
    <div className="socialMediaLinks">
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
  );
};

export default SocialMediaLinks;

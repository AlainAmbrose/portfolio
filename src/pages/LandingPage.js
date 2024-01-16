import "../App.css";
import GitHubSVG from "../images/GitHub.svg";
import LinkedInSVG from "../images/LinkedIn.svg";
import InstagramSVG from "../images/Instagram.svg";
import GitHubWhite from "../images/GitHub-White.svg";
import LinkedInWhite from "../images/LinkedIn-White.svg";
import InstagramWhite from "../images/Instagram-White.svg";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function LandingPage() {
  const navigate = useNavigate();

  // var TxtType = function (el, toRotate, period) {
  //   this.toRotate = toRotate;
  //   this.el = el;
  //   this.loopNum = 0;
  //   this.period = parseInt(period, 10) || 2000;
  //   this.txt = "";
  //   this.tick();
  //   this.isDeleting = false;
  // };

  // TxtType.prototype.tick = function () {
  //   var i = this.loopNum % this.toRotate.length;
  //   var fullTxt = this.toRotate[i];

  //   if (this.isDeleting) {
  //     this.txt = fullTxt.substring(0, this.txt.length - 1);
  //   } else {
  //     this.txt = fullTxt.substring(0, this.txt.length + 1);
  //   }

  //   this.el.innerHTML = '<span class="wrap">' + this.txt + "</span>";

  //   var that = this;
  //   var delta = 200 - Math.random() * 100;

  //   if (this.isDeleting) {
  //     delta /= 2;
  //   }

  //   if (!this.isDeleting && this.txt === fullTxt) {
  //     delta = this.period;
  //     this.isDeleting = true;
  //   } else if (this.isDeleting && this.txt === "") {
  //     this.isDeleting = false;
  //     this.loopNum++;
  //     delta = 500;
  //   }

  //   setTimeout(function () {
  //     that.tick();
  //   }, delta);
  // };

  // useEffect(() => {
  //   var elements = document.getElementsByClassName("typewrite");
  //   for (var i = 0; i < elements.length; i++) {
  //     var toRotate = elements[i].getAttribute("data-type");
  //     var period = elements[i].getAttribute("data-period");
  //     if (toRotate) {
  //       new TxtType(elements[i], JSON.parse(toRotate), period);
  //     }
  //   }

  //   var css = document.createElement("style");
  //   css.type = "text/css";
  //   css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #0E2C04}";
  //   document.body.appendChild(css);
  // }, []);

  const handleNavClick = (event, location) => {
    event.preventDefault();
    navigate(`/${location}`);
  };

  const leftDivStyle = {
    flex: "0 0 48%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  };

  const rightDivStyle = {
    flex: "0 0 48%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
  };

  const contactNavStyle = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
  };

  return (
    <div className="backgroundBox">
      <div style={leftDivStyle}>
        <div style={{ flex: "0 0 80%" }}>
          {/* <img
            src="https://readme-typing-svg.demolab.com?font=JetBrains+Mono&size=30&pause=1000&color=0E2C04&random=false&width=250&height=50&lines=Hi%2C+I'm;Hola%2C+soy;%E4%BD%A0%E5%A5%BD%EF%BC%8C%E6%88%91%E6%98%AF+;Salut%2C+je+suis;%D0%9F%D1%80%D0%B8%D0%B2%D0%B5%D1%82%2C+%D1%8F"
            alt="Typing SVG"
          /> */}
          {/* <p
            className="typewrite"
            data-period="2000"
            data-type='[ "Hi, Im", "Hola, soy", "你好，我是", "Salut, je suis", "Привет, я" ]'
          >
            <span className="wrap"></span>
          </p> */}
          <p className="typewrite">Hi, Im</p>
          <h1> Alain Ambrose </h1>
        </div>
        <div style={contactNavStyle}>
          <div>
            <a href="https://www.github.com/AlainAmbrose">
              <img
                src={GitHubWhite}
                alt="GitHub Link"
                style={{ marginRight: "10px", height: "50px", width: "50px" }}
              />
            </a>
            <a href="https://www.linkedin.com/in/alain-ambrose">
              <img
                src={LinkedInWhite}
                alt="LinkedIn Link"
                style={{ marginRight: "10px", height: "50px", width: "50px" }}
              />
            </a>
            <a href="https://www.instagram.com/alainambrose911/">
              <img
                src={InstagramWhite}
                alt="Instagram Link"
                style={{ marginRight: "10px", height: "50px", width: "50px" }}
              />
            </a>
          </div>
          <div>
            <p>Orlando, FL</p>
            <p>ambrosealain@gmail.com</p>
          </div>
        </div>
      </div>
      <div style={rightDivStyle}>
        <nav>
          <ul className="navigation">
            <li className="navLi">
              <button
                type="button"
                onClick={(event) => handleNavClick(event, "about")}
              >
                About
              </button>
            </li>
            <li className="navLi">
              <button
                type="button"
                onClick={(event) => handleNavClick(event, "skills")}
              >
                Skills
              </button>
            </li>
            <li className="navLi">
              <button
                type="button"
                onClick={(event) => handleNavClick(event, "projects")}
              >
                Projects
              </button>
            </li>
            <li className="navLi">
              <button
                type="button"
                onClick={(event) => handleNavClick(event, "experience")}
              >
                Experience
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default LandingPage;

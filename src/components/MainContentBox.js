import "../App.css";

function Content() {
  const boxStyle = {
    margin: "2.5vh",
    padding: "20px",
    border: "1px solid #000",
    height: "95vh",
    boxSizing: "border-box",
    borderRadius: "10px",
    backgroundColor: "#f0f0f0",
    opacity: 0.5,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  };

  // const linksContainerStyle = {
  //   display: "flex",
  //   flexDirection: "column",
  //   alignItems: "flex-end",
  //  };

  return (
    <div style={boxStyle}>
      <div>
        <header>
          <img
            src="https://readme-typing-svg.demolab.com?font=JetBrains+Mono&size=30&pause=1000&color=0E2C04&random=false&width=435&height=50&lines=Hi%2C+I'm;Hola%2C+soy;%E4%BD%A0%E5%A5%BD%EF%BC%8C%E6%88%91%E6%98%AF+;Salut%2C+je+suis;%D0%9F%D1%80%D0%B8%D0%B2%D0%B5%D1%82%2C+%D1%8F"
            alt="Typing SVG"
          />
          <h1> Alain Ambrose </h1>
        </header>
      </div>
      <div>
        <ul class="navigation">
          <li class="navLi">
            <a>About</a>
          </li>
          <li class="navLi">
            <a>Skills</a>
          </li>
          <li class="navLi">
            <a>Projects</a>
          </li>
          <li class="navLi">
            <a>Experience</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Content;

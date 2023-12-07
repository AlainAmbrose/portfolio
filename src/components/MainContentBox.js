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

  const linksContainerStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-end", // Align items to the end (right)
  };

  return (
    <div style={boxStyle}>
      <div>
        {/* <header> */}
        <h2> Hello, I'm </h2>
        <h1> Alain Ambrose </h1>
        {/* </header> */}
      </div>
      <div style={linksContainerStyle}>
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

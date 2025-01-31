import "../App.css";

const ExperienceCard = ({ content }) => {
  return (
    <>
      <a
        className="experience-card"
        href={content.link}
        target="_blank"
        rel="noreferrer"
      >
        <div className="experience-card-header">
          <div style={{ flex: "0 0 50%" }}>
            <h1 className="experience-card-title">{content.title}</h1>
          </div>
          <div className="experience-card-arrow">&#8599;</div>
        </div>
        <div className="experience-card-text">
          {content.description.map((position, index) => (
            <div>
              <p key={index}>{position.date} </p>
              <p key={index}>{position.title}</p>
              <ul>
                {position.bullets.map((bullet, index) => (
                  <li
                    style={{ marginBottom: "1rem", fontSize: "2vh" }}
                    key={index}
                  >
                    {bullet}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </a>
    </>
  );
};

export default ExperienceCard;

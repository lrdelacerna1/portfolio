
export const ProjectCard = ({ title, imgUrl, small, big }) => {
  return (
    <div className={`project-card ${small ? "small-card" : ""} ${big ? "big-card" : ""}`}>
      <img src={imgUrl} alt={title} />
      <div className="project-info">
      </div>
    </div>
  );
};



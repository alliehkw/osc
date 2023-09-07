function PastResearch({ title, project_data }) {
  // Function to truncate the title if it's too long. Function cuts off at a full word.
  console.log(project_data);
  function truncate(str, n) {
    if (str.length <= n) {
      return str;
    }
    const subString = str.slice(0, n - 1);
    return subString.slice(0, subString.lastIndexOf(" ")) + "...";
  }

  const pastProjectBlock = project_data.map((project, index) => {
    const truncatedTitle = truncate(project.projectTitle, 325);
    return (
      <div className="past-project" key={index}>
        <div className="green-box">
          <p className="projectTitle">{truncatedTitle}</p>
          <p className="projectAuthor">{project.projectAuthor}</p>
        </div>
        <p className="project-title">{project.projectTitle}</p>
        <p
          className="project-content richText"
          dangerouslySetInnerHTML={{
            __html: project.projectDescription,
          }}
        ></p>
        {project.projectMedia ? (
          <div className="project-media">
            <img
              src={project.projectMedia.mediaItemUrl}
              alt={project.projectMedia.altText}
            />
            <p className="label">{project.projectMedia.altText}</p>
          </div>
        ) : null}
      </div>
    );
  });
  return (
    <div className="past-research-container">
      <h3>{title}</h3>
      <div className="past-projects">{pastProjectBlock}</div>
    </div>
  );
}

export default PastResearch;

function HighlightedResearch({ title, project_data }) {
  const projectsBlock = project_data.map((project, index) => {
    return (
      <div key={index} className="project">
        {project.projectDescription ? (
          <div className="bullet-line">
            <div className="bullet">&#8226;</div>
            <p
              className="richText body-text"
              dangerouslySetInnerHTML={{
                __html: project.projectDescription,
              }}
            ></p>
          </div>
        ) : null}
        {project.projectMedia ? (
          <div className="media-image-container">
            <div className="media-contents">
              <div className="media-image">
                <img
                  src={project.projectMedia.mediaItemUrl}
                  alt={project.projectMedia.altText}
                />
              </div>
              <p className="label">{project.projectMedia.altText}</p>
            </div>
          </div>
        ) : null}
      </div>
    );
  });
  return (
    <div className="highlighted-research-container">
      <h3>{title}</h3>
      {projectsBlock}
    </div>
  );
}

export default HighlightedResearch;

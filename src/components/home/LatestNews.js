function LatestNews({ data }) {
  const latestNewsTitle = data.homePage.nodes[0].latestNewsTitle;
  const newsStories = data.newsStories.nodes;

  const newsStoriesBlock = newsStories.map((story, index) => {
    return (
      <div className="story-block" key={index}>
        <div className="story-image">
          <img
            src={story.newsImage.mediaItemUrl}
            alt={story.newsImage.altText}
          />
        </div>
        <h5>{story.newsTitle}</h5>
        <h6>{story.newsDescription}</h6>
        {/* TO DO: this is gonna be a button  */}
        <p className="read-more">{`READ MORE >>`}</p>
      </div>
    );
  });
  return (
    <div className="latest-news-container">
      <h2>{latestNewsTitle}</h2>
      <div className="stories-block">{newsStoriesBlock}</div>
    </div>
  );
}

export default LatestNews;

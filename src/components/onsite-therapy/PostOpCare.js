function PostOpCare({ postOpCare_data }) {
  return (
    <div className="post-op-care-container">
      <div className="post-op-content">
        <div className="post-op-care-left">
          <h2>{postOpCare_data.postOpCareHeader}</h2>
          <h5
            className="richText"
            dangerouslySetInnerHTML={{
              __html: postOpCare_data.postOpCareContent,
            }}
          ></h5>
        </div>
        <div className="post-op-care-right">
          <img
            src={postOpCare_data.postOpCareImage.mediaItemUrl}
            alt={postOpCare_data.postOpCareImage.altText}
          />
        </div>
      </div>
    </div>
  );
}

export default PostOpCare;

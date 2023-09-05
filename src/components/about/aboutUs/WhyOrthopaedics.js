function WhyOrthopaedics({ header, content }) {
  return (
    <div className="why-orthopaedics">
      <h3
        className="richText"
        dangerouslySetInnerHTML={{
          __html: header,
        }}
      ></h3>
      <h5
        className="richText"
        dangerouslySetInnerHTML={{
          __html: content,
        }}
      ></h5>
    </div>
  );
}

export default WhyOrthopaedics;

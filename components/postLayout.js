const PostLayout = ({ content, hideContent }) => {
  let previewLength, preview;

  if (hideContent) {
    previewLength = Math.floor(content.length * 0.15);
    preview = content.slice(0, previewLength);
  }

  return (
    <>
      {hideContent ? (
        <div>
          <div
            className="fade-out-overlay"
            dangerouslySetInnerHTML={{
              __html: preview,
            }}
          />
          <div>
            <h2>Create a free account to read the full article.</h2>
            <button></button>
            <p>Already have an account? Sign in</p>
          </div>
        </div>
      ) : (
        <>
          <div
            dangerouslySetInnerHTML={{
              __html: content,
            }}
          />
        </>
      )}
    </>
  );
};

export default PostLayout;

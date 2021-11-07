const MorePostsComp = (props) => {
  return (
    <div>
      {<label style={{ margin: "16px" }}>Posts - User: {props.id}</label>}
      <div style={{ border: "1px solid black", width: "500px" }}>
        {props.postList.map((post, index) => {
          return (
            <div
              key={index}
              style={{
                border: "1px solid purple",
                margin: "15px",
                padding: "15px",
                width: "400px",
              }}
            >
              <strong>Title: </strong>
              {post.title}
              <br />
              <br />
              <strong>Body:</strong> {post.body}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MorePostsComp;

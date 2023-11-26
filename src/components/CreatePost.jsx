import { Input, Card, Button, Space } from "antd";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createPost } from "../features/posts/postSlice";
import { LoadingCard } from "./LoadingCard";

export const CreatePost = () => {
  const [values, setValues] = useState({
    title: "",
    body: "",
  });
  const { post, loading } = useSelector((state) => ({ ...state.post }));
  const [showPost, setShowPost] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { title, body } = values;

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createPost({ values }));
    setValues({ title: "", body: "" });
    setShowPost(true);
  };

  const showPostBlog = () => {
    return (
      <>
        {loading ? (
          <LoadingCard count={1} />
        ) : (
          <div className="site-card-border-less-wrapper">
            <Card type="inner" title={post[0].title}>
              <p>User Id: {post[0].id}</p>
              <span>{post[0].body}</span>
            </Card>
          </div>
        )}
      </>
    );
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1>Create Post</h1>
        <Input
          placeholder="Enter Title..."
          value={title}
          style={{ width: "400px" }}
          type="text"
          onChange={(e) => setValues({ ...values, title: e.target.value })}
        />
        <br />
        <br />
        <Input.TextArea
          size="large"
          placeholder="Enter Post..."
          value={body}
          style={{ width: "400px" }}
          type="text"
          onChange={(e) => setValues({ ...values, body: e.target.value })}
        />
        <br />
        <br />
        <Space style={{ margin: 10 }}>
          <Button onClick={() => navigate("/")}>Go Back</Button>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Space>
      </form>
      <br />
      <br />
      {showPost && <div>{showPostBlog()}</div>}
    </div>
  );
};

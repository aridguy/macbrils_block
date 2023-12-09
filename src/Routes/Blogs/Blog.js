import React, { useEffect, useState } from "react";
import "../../GlobalStyle.css";
import { createClient } from "contentful";
import { useNavigate } from "react-router-dom";

const Blog = () => {
  const [blogPosts, setBlogPosts] = useState([]);

  const client = createClient({
   
    space: "k229fl12qfxv",
    accessToken: "ZVDQBvonKtpirTMnAn8-gAYau9fiCQSm-mvXyeLHkYE"
  });
  // console.log(process.env)
  const navigate = useNavigate();

  useEffect(() => {
    const getAllEntries = async () => {
      try {
        await client.getEntries().then((entries) => {
          // console.log(entries);
          setBlogPosts(entries);
        });
      } catch (error) {
        console.log("error");
      }
    };
    getAllEntries();
  }, [client]);

  const [visible, setVisible] = useState(3);
  const shoeMoreBlogs = () => {
    setVisible(visible + 2);
  };

  return (
    <div>
      <section className="pt-5">
        {blogPosts?.items?.slice(0, visible).map((post) => (
          <div className="container mt-5" key={post.sys.id}>
            <div className="row">
              <div className="col-md-2"></div>
              <div className="col-md-8">
                <div className="blogPosts">
                  <img
                    className="blogImage"
                    width="100%"
                    src={post.fields.blogImage.fields.file.url}
                    alt={post.fields.blogImage.title}
                  />
                  <div className="mt-5">
                    <h1
                      onClick={() =>
                        navigate(`/ViewBlogs/${post.sys.id}`, {
                          state: { ...post },
                        })
                      }
                      className="text-black theTitle cursor"
                    >
                      {post.fields.blogTitle} . . .
                    </h1>
                  </div>
                  <div className="comment_blog_title_author_date">
                    <span className="text-black text-muted">
                      <b className="cursor">Leave a Comment</b> /{" "}
                      <b
                        onClick={() =>
                          navigate(`/ViewBlogs/${post.sys.id}`, {
                            state: { ...post },
                          })
                        }
                        className="cursor "
                      >
                        {" "}
                        {post.fields.blogTitle}
                      </b>{" "}
                      post created by &nbsp;
                      <b className="cursor">{post.fields.blogAuthor}</b> /{" "}
                      {post.fields.createdDate}
                    </span>
                  </div>
                  <div className="summary mt-4">
                    <span className="fs-4">{post.fields.blogSummery}</span>
                  </div>
                  <div className="read-more mt-4 mb-5">
                    <span
                      onClick={() =>
                        navigate(`/ViewBlogs/${post.sys.id}`, {
                          state: { ...post },
                        })
                      }
                      className="cursor fs-4 read-mores"
                    >
                      Read more . . .
                    </span>
                  </div>
                </div>
              </div>
              <div className="col-md-2"></div>
            </div>
          </div>
        ))}
        <div className="container mt-4">
          <div className="row">
            <div className="col-md-2"></div>
            <div className="col-md-8">
              <div className="text-center">
                <button  onClick={shoeMoreBlogs} className="btn btn-primary ">
                  <span className="spinner-border spinner-border-sm"></span> &nbsp;
                  Load more . . .
                </button>
               
              </div>
            </div>
            <div className="col-md-2"></div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;

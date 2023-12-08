import React from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../../Components/Navbar/Navbar";
import Socials from "../../Components/Socials/Socials";
import Footer from "../../Components/Footer/Footer";

const ViewBlogs = () => {
  const location = useLocation();
  return (
    <div>
      <Navbar />
      <section className="pt-5">
        <div className="container mt-5">
          <div className="row">
            <div className="col-md-2"></div>
            <div className="col-md-8">
              <div className="blogPosts">
                <img
                  className="blogImage"
                  width="100%"
                  src={location.state.fields.blogImage.fields.file.url}
                  alt={location.state.fields.blogImage.title}
                />
                <div className="mt-5">
                  <h1 className="text-black theTitle cursor">
                    {location.state.fields.blogTitle} . . .
                  </h1>
                </div>
                <div className="comment_blog_title_author_date">
                  <span className="text-black text-muted">
                    <b className="cursor">Leave a Comment</b> /{" "}
                    <b className="cursor ">
                      {" "}
                      {location.state.fields.blogTitle}
                    </b>{" "}
                    post created by &nbsp;
                    <b className="cursor">
                      {location.state.fields.blogAuthor}
                    </b>{" "}
                    / {location.state.fields.createdDate}
                  </span>
                </div>
                <div className="summary mt-4">
                  <span className="fs-4">
                    {location.state.fields.postContents}
                  </span>
                </div>
                <div className="read-more mt-4 mb-5"></div>
              </div>
            </div>
            <div className="col-md-2"></div>
          </div>
        </div>
      </section>

      <section className="comments">
        <div className="container">
          <div className="row">
            <div className="col-md-2"></div>
            <div className="col-md-8">
              <div className="container">
                <div className="row">
                  <div className="col-md-12">
                    <div className="commentPlace">
                      <p className="fs-3">Leave a Comment</p>
                      <small>Your email address will not be published</small>
                      <div>
                        <form>
                          <textarea
                            className="commentss form-control"
                            placeholder="Type here . . ."
                          ></textarea>
                          <div className="mt-3">
                            <div className="row">
                              <div className="col-md-4">
                                <input
                                  type="text"
                                  name="name"
                                  placeholder="Name*"
                                  className="form-control inputs"
                                />
                              </div>
                              <div className="col-md-4">
                                <input
                                  type="text"
                                  name="email"
                                  placeholder="Email*"
                                  className="form-control inputs"
                                />
                              </div>
                              <div className="col-md-4">
                                <input
                                  type="text"
                                  name="website"
                                  placeholder="Website"
                                  className="form-control inputs"
                                />
                              </div>
                            </div>

                            <div className="mt-4">
                              <input type="checkbox" />{" "}
                              <small>
                                Save my name, email and website on this browser
                                for the next time i comment
                              </small>
                            </div>
                            <div className="mt-2">
                              <button className=" btn btn-primary">
                                Post Comment{" "}
                              </button>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-2"></div>
          </div>
        </div>
      </section>

      <Socials />
      <Footer />
    </div>
  );
};

export default ViewBlogs;

import React, { useState } from "react";
import "../../GlobalStyle.css";

const Blog = () => {
  // expand button
  const [isExpanded, setIsExpanded] = useState(false);
  const toggleText = () => {
    setIsExpanded(!isExpanded);
  };
  //   const [blogTime, setBlogTime] = useState("by idowu ariyo");
  return (
    <div className="--blog_page_background">
      <div className="mt-5">
        <h1 className="text-center --blog-title">Welcome to Brils Blog</h1>
      </div>
      {
        // alert
        <div className="container">
          <div className="row">
            <div className="col-md-3"></div>
            <div className="col-md-6 text-center">
              <div
                className="alert alert-primary mb-0 alert-dismissible alert-absolute fade show  "
                id="alertExample"
                role="alert"
                data-mdb-color="secondary"
              >
                <i className="fas fa-check me-2"></i>
                Hello! I am a simple alert
                <a href="/" className="alert-link me-1">
                  with an additional link
                </a>
                <button
                  type="button"
                  className="btn-close ms-2"
                  data-mdb-dismiss="alert"
                  aria-label="Close"
                ></button>
              </div>
            </div>
            <div className="col-md-3"></div>
          </div>
        </div>
      }

      {
        // text
        <div className="container fixedd">
          <h1>All Post</h1>
        </div>
      }

      <div className="container">
        <div className="row">
          <div className="col-md-4"></div>
        </div>
      </div>

      {
        // blog post
        <div className="container mt-5">
          <div className="row p-3">
            <div className="col-md-3"></div>
            <div className="col-md-6 p-5" id="post">
              <div className="blogsPosts">
                <div className="blog-title">
                  <h1 className="text-danger">
                    Six injured as petrol tanker explodes at filling station in
                    Nasarawa
                  </h1>
                </div>
                <div className="blog-content">
                  <p>
                    Six persons sustained various degrees of injuries when a
                    petroleum tanker exploded at Sandaji Filling Station in
                    Lafia, Nasarawa State.
                  </p>
                  <details>
                    <summary>Read more</summary>
                    <small>
                      The tanker, which brought petroleum products to the
                      filling station located at Jos Road Lafia, exploded around
                      noon on Monday, October 9, 2023. The explosion also
                      destroyed property worth millions of naira at the filling
                      station, the eye witness said. The eye witness explained
                      that some staff members of the filling station and
                      Nasarawa State Fire Service officials sustained injuries
                      and are receiving treatments at the Dalhatu Araf
                      Specialist Hospital, Lafia. Mr. Ombugu Joshua, Acting
                      Director, of Nasarawa State Fire Service, said the command
                      was yet to ascertain the cause of the outbreak. He advised
                      residents always to alert the service on time whenever
                      they experience a fire outbreak for prompt response.
                    </small>
                  </details>
                  <div>
                    <small className="cursor" onClick={toggleText}>
                      <i className="fas fa-caret-right"></i>{" "}
                      {isExpanded ? "Read Less . . ." : "Read More . . ."}
                    </small>{" "}
                    <br />
                    <small> Posted June, 15 2023</small>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3"></div>
          </div>
        </div>
      }

      <div className="container mt-5">
        <div className="row p-3">
          <div className="col-md-3"></div>
          <div className="col-md-6 p-5" id="post">
            <div className="blogsPosts">
              <div className="blog-title">
                <h1 className="text-danger">
                  Manchester United will try to offload Jadon Sancho in January
                  with Erik ten Hag convinced he is a "disruptive influence" on
                  the rest of the team
                </h1>
              </div>
              <div className="blog-content">
                <p>
                  Manchester United will look to offload Jadon Sancho in January
                  after being told by Erik Ten Hag that the England forward is a
                  disruptive influence on the club's other players. The United
                  boss is refusing to back down in his stand-off with Sancho,
                  who has been banished from the first-team squad for calling
                  Ten Hag a liar after he was dropped from last month's defeat
                  at Arsenal due to a poor attitude in training.
                </p>
                <details>
                  <summary>Read more</summary>
                  <small>
                    The Dutchman is understood to have told the club that the
                    attitude of other players in training has improved since
                    Sancho was exiled, with their team spirit reflected in
                    Saturday's dramatic injury-time win over Brentford despite a
                    patchy performance. Ten Hag is demanding that Sancho make
                    both a public apology and say sorry in front of his
                    team-mates before he can return to the squad, a stance which
                    has the full backing of his employers, but five weeks after,
                    he is yet to apologise.
                  </small>
                </details>
                <div>
                  <small> Posted June, 15 2023</small>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-3"></div>
        </div>
      </div>

      <div className="container mt-5">
        <div className="row p-3">
          <div className="col-md-3"></div>
          <div className="col-md-6 p-5" id="post">
            <div className="blogsPosts">
              <div className="blog-title">
                <h1 className="text-danger">
                  Six injured as petrol tanker explodes at filling station in
                  Nasarawa
                </h1>
              </div>
              <div className="blog-content">
                <p>
                  Six persons sustained various degrees of injuries when a
                  petroleum tanker exploded at Sandaji Filling Station in Lafia,
                  Nasarawa State.
                </p>
                <details>
                  <summary>Read more</summary>
                  <small>
                    The tanker, which brought petroleum products to the filling
                    station located at Jos Road Lafia, exploded around noon on
                    Monday, October 9, 2023. The explosion also destroyed
                    property worth millions of naira at the filling station, the
                    eye witness said. The eye witness explained that some staff
                    members of the filling station and Nasarawa State Fire
                    Service officials sustained injuries and are receiving
                    treatments at the Dalhatu Araf Specialist Hospital, Lafia.
                    Mr. Ombugu Joshua, Acting Director, of Nasarawa State Fire
                    Service, said the command was yet to ascertain the cause of
                    the outbreak. He advised residents always to alert the
                    service on time whenever they experience a fire outbreak for
                    prompt response.
                  </small>
                </details>
                <div>
                  <small> Posted June, 15 2023</small>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-3"></div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-md-3"></div>
          <div className="col-md-6">
            <nav aria-label="Page navigation example">
              <ul className="pagination">
                <li className="page-item">
                  <a className="page-link" href="/" aria-label="Previous">
                    <span aria-hidden="true">&laquo;</span>
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="/">
                    1
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="/">
                    2
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="/">
                    3
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="/" aria-label="Next">
                    <span aria-hidden="true">&raquo;</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
          <div className="col-md-3"></div>
        </div>
      </div>
    </div>
  );
};

export default Blog;

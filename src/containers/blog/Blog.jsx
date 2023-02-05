import React from "react";
import "./blog.css";
import { Article } from "../../components";
import { blog01, blog02, blog04, blog03, blog05 } from "./imports";
const Blog = () => {
  return (
    <>
      <div className="gpt3__blog section__padding" id="blog">
        <div className="gpt3__blog-heading">
          <h1 className="gradient__text">
            A lot is happening, We are blogging about it.
          </h1>
        </div>
        <div className="gpt3__blog-container">
          <div className="gpt3__blog-container_groupA">
            <Article
              imgUrl={blog01}
              Date="Sep 26, 2021"
              title="GPT-3 and Open  AI is the future. Let us exlore how it is?"
            />
          </div>

          <div className="gpt3__blog-container_groupB">
            <Article
              imgUrl={blog02}
              Date="Sep 26, 2021"
              title="GPT-3 and Open  AI is the future. Let us exlore how it is?"
            />
            <Article
              imgUrl={blog03}
              Date="Sep 26, 2021"
              title="GPT-3 and Open  AI is the future. Let us exlore how it is?"
            />
            <Article
              imgUrl={blog04}
              Date="Sep 26, 2021"
              title="GPT-3 and Open  AI is the future. Let us exlore how it is?"
            />
            <Article
              imgUrl={blog05}
              Date="Sep 26, 2021"
              title="GPT-3 and Open  AI is the future. Let us exlore how it is?"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;

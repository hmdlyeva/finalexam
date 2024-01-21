import React from "react";
import { Helmet } from "react-helmet";
const Blog = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Blog</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <h1>Blog</h1>
    </div>
  );
};

export default Blog;

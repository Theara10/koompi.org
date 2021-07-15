import React from 'react';

function BlogCard() {
  return (
    <div className="news-events-section">
      <img
        alt="example"
        src="https://img-getpocket.cdn.mozilla.net/direct?url=https%3A%2F%2Fwww.protocol.com%2Fmedia-library%2FeyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpbWFnZSI6Imh0dHBzOi8vYXNzZXRzLnJibC5tcy8yNTg5Mzk4MS9vcmlnaW4uanBnIiwiZXhwaXJlc19hdCI6MTY2NTA0NjU4N30.wc3XeEUZRqtc7YJrQT0MSbpPlUanDP78iW-oQD1zcqc%2Fimage.jpg%3Fwidth%3D1200%26coordinates%3D0%252C0%252C0%252C341%26height%3D600&resize=w450"
        className="img-responsive"
      />
      <div className="news-events-background">
        <p className="recentnews-date">18th Feb 2021</p>
        <h2 className="news-event-title">
          Mozilla leads push for FCC to reinstate net neutrality
        </h2>
        <p className="blog-desc">
          Get up to speed on SIM swapping scams and learn how to protect
          yourself from this new form of identity theft.
        </p>
      </div>
    </div>
  );
}

export default BlogCard;

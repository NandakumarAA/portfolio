import React, { useEffect, useState } from "react";
import "../styles/Projects.css";
import { FaExternalLinkAlt } from "react-icons/fa";

const DEFAULT_USERNAME = "nandakumarasokan";
const SHOW_COUNT = 3;

const stripHtml = (html) => {
  if (!html) return "";
  return html.replace(/<[^>]*>/g, "");
};

const extractImageFromHtml = (html) => {
  if (!html) return null;
  const m = html.match(/<img[^>]+src=["']([^"']+)["']/i);
  return m ? m[1] : null;
};

const excerpt = (text, length = 120) => {
  if (!text) return "";
  return text.length > length ? text.slice(0, length).trim() + "…" : text;
};

const Blogs = ({ username = DEFAULT_USERNAME }) => {
  const [posts, setPosts] = useState([]);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    const fetchPosts = async () => {
      if (!username && username === DEFAULT_USERNAME) {
        // fallback placeholder posts
        setPosts([
          {
            id: 1,
            title: "Sample Blog 1",
            link: "#",
            thumbnail: "https://via.placeholder.com/400x250",
            pubDate: "",
            content: "Sample excerpt for blog 1.",
          },
          {
            id: 2,
            title: "Sample Blog 2",
            link: "#",
            thumbnail: "https://via.placeholder.com/400x250",
            pubDate: "",
            content: "Sample excerpt for blog 2.",
          },
          {
            id: 3,
            title: "Sample Blog 3",
            link: "#",
            thumbnail: "https://via.placeholder.com/400x250",
            pubDate: "",
            content: "Sample excerpt for blog 3.",
          },
        ]);
        return;
      }

      try {
        const rssUrl = encodeURIComponent(
          `https://medium.com/feed/@${username}`,
        );
        const api = `https://api.rss2json.com/v1/api.json?rss_url=${rssUrl}`;
        const res = await fetch(api);
        if (!res.ok) throw new Error("Failed to fetch feed");
        const data = await res.json();
        if (data && data.items) {
          const items = data.items.map((it, idx) => {
            const thumb =
              it.thumbnail ||
              extractImageFromHtml(it.content) ||
              "https://via.placeholder.com/400x250";
            return {
              id: idx,
              title: it.title,
              link: it.link,
              thumbnail: thumb,
              pubDate: it.pubDate,
              content: stripHtml(it.content).split("\n").join(" "),
            };
          });
          setPosts(items);
        } else {
          setPosts([]);
        }
      } catch (err) {
        // fallback
        setPosts([
          {
            id: 1,
            title: "Sample Blog 1",
            link: "#",
            thumbnail: "https://via.placeholder.com/400x250",
            pubDate: "",
            content: "Sample excerpt for blog 1.",
          },
          {
            id: 2,
            title: "Sample Blog 2",
            link: "#",
            thumbnail: "https://via.placeholder.com/400x250",
            pubDate: "",
            content: "Sample excerpt for blog 2.",
          },
          {
            id: 3,
            title: "Sample Blog 3",
            link: "#",
            thumbnail: "https://via.placeholder.com/400x250",
            pubDate: "",
            content: "Sample excerpt for blog 3.",
          },
        ]);
      }
    };

    fetchPosts();
  }, [username]);

  const visiblePosts = expanded ? posts : posts.slice(0, SHOW_COUNT);

  return (
    <section id="blogs" className="projects-section">
      <div className="section-header">
        <h2 className="section-title gradient-text">Featured Blogs</h2>
        <p className="section-subtitle">Latest from my Medium.</p>
      </div>

      <div className="projects-grid">
        {visiblePosts.map((post) => (
          <div key={post.id} className="project-card glass">
            <div className="project-image">
              <a href={post.link} target="_blank" rel="noopener noreferrer">
                <img src={post.thumbnail} alt={post.title} />
              </a>
            </div>
            <div className="project-content">
              <h3 className="project-title">
                <a
                  href={post.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="gradient-text"
                >
                  {post.title}
                </a>
              </h3>
              <p className="project-description">
                {excerpt(post.content, 140)}
              </p>
              <div className="project-tech">
                <a
                  href={post.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="icon-link"
                >
                  <FaExternalLinkAlt />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {posts.length > SHOW_COUNT && (
        <div className="text-center mt-4">
          <button
            className="btn btn-primary"
            onClick={() => setExpanded(!expanded)}
          >
            {expanded ? "Show less" : "Show more"}
          </button>
        </div>
      )}
    </section>
  );
};

export default Blogs;

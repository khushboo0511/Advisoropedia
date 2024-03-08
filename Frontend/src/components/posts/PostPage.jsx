import { useEffect, useState, useRef } from "react";
import Axios from "axios";
import { useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import InteractionBtn from "./InteractionBtn";
import EmailVerify from "./EmailVerify";

const PostPage = () => {
  //react states
  const location = useLocation();
  const token = location.state.token;
  const [username, setUsername] = useState("");
  const [posts, setPosts] = useState([]);
  const [skipCount, setSkipCount] = useState(0);
  const [loading, setLoading] = useState(false);
  const loaderRef = useRef(null);
  const [showEmailVerify, setShowEmailVerify] = useState(
    location.state.showEmailVerify
  );

  //fetching posts from server
  useEffect(() => {
    setLoading(true);
    Axios.get(`http://localhost:3000/posts?skipCount=${skipCount}`, {
      headers: {
        authorization: token,
      },
    })
      .then((res) => {
        setUsername(res.data.username);
        setPosts((prevPosts) => [...prevPosts, ...res.data.posts]);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err.response.data);
        setLoading(false);
      });
  }, [skipCount, token]); //dependencies

  // Intersection Observer to detect when loaderRef is in viewport
  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "20px",
      threshold: 1.0,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !loading) {
          setSkipCount((prevSkipCount) => prevSkipCount + 3); // Increase skipCount when loaderRef is in viewport
        }
      });
    }, options);

    if (loaderRef.current) {
      observer.observe(loaderRef.current);
    }

    return () => {
      if (loaderRef.current) {
        observer.unobserve(loaderRef.current);
      }
    };
  }, [loading]);

  //stock images
  const images = [
    "https://advisoropedia.in/wp-content/uploads/2024/02/Affordable-homes-in-thriving-communities-2.png",
    "https://advisoropedia.in/wp-content/uploads/2024/02/Affordable-homes-in-thriving-communities-4-1024x576.png",
    "https://advisoropedia.in/wp-content/uploads/2024/02/Affordable-homes-in-thriving-communities-5-1024x576.png",
    "https://advisoropedia.in/wp-content/uploads/2024/02/Affordable-homes-in-thriving-communities-6-1024x576.png",
    "https://advisoropedia.in/wp-content/uploads/2024/02/Affordable-homes-in-thriving-communities-8-1024x576.png",
  ];

  //vanish verify email pop-up
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowEmailVerify(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {showEmailVerify ? (
        <EmailVerify />
      ) : (
        <span className="hidden -z-50"></span>
      )}
      <div className="w-full">
        <Navbar username={username} />
        <div className="flex flex-col items-center justify-center">
          {posts.map((post) => {
            return (
              <div
                key={post._id}
                className="card w-96 bg-base-100 shadow-xl my-5 pb-4"
              >
                <figure>
                  <img src={images[Math.floor(Math.random() * 5)]} alt="img" />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">{post.title}</h2>
                  <p>{post.content}</p>
                  <div className="card-actions justify-end"></div>
                </div>
                <InteractionBtn />
              </div>
            );
          })}
          {loading && (
            <div className="h-screen flex items-center justify-center">
              <span className="loading loading-spinner loading-lg"></span>
            </div>
          )}
          <div ref={loaderRef}></div>
        </div>
      </div>
    </>
  );
};

export default PostPage;
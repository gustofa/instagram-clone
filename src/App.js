import { useEffect, useState } from "react"; //
import "./App.css";
import Post from "./Post";

import { db } from "./firebase.js";
// eslint-disable-next-line
import { collection, query, onSnapshot } from "@firebase/firestore";

function App() {
  const [posts, setPosts] = useState([
    /*{
      userName: "User 5",
      caption: "I LOVE JAPAN",
      imageUrl:
        "https://images.pexels.com/photos/3408353/pexels-photo-3408353.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
    } 
    {
      userName: "User 5",
      caption: "I LOVE JAPAN TOO",
      imageUrl:
        "https://images.pexels.com/photos/5994150/pexels-photo-5994150.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
    },
    {
      userName: "User 3",
      caption: "I LOVE LOVE JAPAN",
      imageUrl:
        "https://images.pexels.com/photos/1798631/pexels-photo-1798631.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
    },
    {
      userName: "User 4",
      caption: "I REALLY LOVE JAPAN",
      imageUrl:
        "https://images.pexels.com/photos/5745029/pexels-photo-5745029.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
    },*/
  ]);

  useEffect(() => {
    /*    (async function () {
      try {
        const postsCol = collection(db, "posts");
        console.log(postsCol);
        const postsSnapshot = await getDocs(postsCol);
        setPosts(postsSnapshot.docs.map((doc) => doc.data()));
      } catch (error) {
        console.log("Error fetching data from Firebase", error);
      }
    })();
*/

    const postsCol = query(collection(db, "posts"));
    onSnapshot(postsCol, function (querysnapshot) {
      setPosts(querysnapshot.docs.map((doc) => doc.data()));
    });
  }, []);

  return (
    <div className="App">
      <div className="app_header">
        <img
          className="app_headerImage"
          src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
          alt=""
        />
      </div>
      <h1>Instagram</h1>

      {posts.map((post) => (
        <Post
          userName={post.userName}
          caption={post.caption}
          imageUrl={post.imageUrl}
        />
      ))}
    </div>
  );
}

export default App;

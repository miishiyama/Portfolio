import "./App.css";
import Education from "./components/Education/Education";
import Experiences from "./components/Experiences/Experiences";
import Footer from "./components/Footer/Footer";
import Links from "./components/Links/Links";
import MyProjects from "./components/MyProjects/MyProjects";
import Post from "./components/Post/Post";
import Profile from "./components/Profile/Profile";
import Project from "./components/Project/Project";
import RecentPosts from "./components/RecentPosts/RecentPosts";
import Technologies from "./components/Technologies/Technologies";

function App() {
  return (
    <div className="div">
      <main className="main">
        <div className="block-1">
          <Profile />
          <Links />
          <Technologies />
          <Experiences />
          <Education />
        </div>
        <div className="block-2">
          <MyProjects />
          <Project />
          <RecentPosts />
          <Post />
        </div>
        <Footer />
      </main>
    </div>
  );
}

export default App;

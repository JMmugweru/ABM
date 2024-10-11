import Content from "../Layouts/Content";
import Topbar from "../Layouts/Topbar";
import "./../styles/Home.css";
import Contact from "../Layouts/Contact";
import Main from "../Layouts/Main";
import Footer from "../Layouts/Footer";

const Home = () => {
  return (
    <div className="bg-fixed bg-center bg-cover flex flex-col gap-[20rem] custom-img">
      <div>
        <Topbar />
        <Content />
        <Main />
      </div>
      <div>
        <Contact />
        <Footer />
      </div>
    </div>
  );
};

export default Home;

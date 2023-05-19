import "./Home.scss";
import imageBanner from "../../assets/images/image-flower.png";
import cartoonImage from "../../assets/images/cartoon-image1.png";

const Home = () => {
  return (
    <div className="home">
      <div className="title-containter">
        <p className="home-title">
          Elevate <br /> your BusinesS.
        </p>
        <p className="description">
          Unlimited SaaS web design subscription to skyrocket your business.
        </p>
        <button>Explore Plans</button>
      </div>
      <div className="image-container">
        <img className="flower" src={imageBanner} alt="" />
        <img className="cartoon" src={cartoonImage} alt="" />
      </div>
    </div>
  );
};

export default Home;

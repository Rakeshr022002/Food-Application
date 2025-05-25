import briyani from "../../Food_img/noodles.png";
import leaf from "../../Food_img/leaf2.png";
import './HomeIntro.css';

export default function HomeIntro() {
    return (
        <div className="home-welcome-page">
            <div className="home-intro">
                <div className="home-intro-content">
                    <h1>Order Your Favourite Here</h1>
                    <p>Variety of fresh and tasty food served just for you — your solution when hungry in the middle of the night with super-fast delivery.</p>
                    <button className="order-now-btn"><h4>Order Now</h4></button>
                </div>
                <img src={briyani} className="c-briyani" alt="Briyani" />
                <img src={leaf} className="home-leaf" alt="Leaf" />
            </div>
        </div>
    );
}

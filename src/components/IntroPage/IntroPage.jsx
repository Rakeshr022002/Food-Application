import IntroNav from '../Intro_nav/introNav';
import './IntroPage.css';
import introimg from '../Food_img/noodles.png';
import leaf from '../Food_img/leaf1.png'
import Register from '../Register Page/register';
import Dish from './Dish_page/dish';
import Choose from './choos_us/chooseUs';
import Review from './Reviews/review';
import Footer from '../Footer/footer';


export default function Intro_page({setHome}) {
    return (
        <>
            <div className="intropage-overall">
                <IntroNav />
                <div className="intro-page-box">
                    <img src={introimg} className='intro-img' />
                    <div className='intro-info-box'>
                        <h1>Fresh and Healthy Food Specialties</h1>
                        <h3>variety of fresh and fresh food served just for you,your
                            solution when hungry in the middle of the night with super fast  Delivery</h3>
                        <img src={leaf} className='leaf-img' />
                    </div>
                </div>
                <Register setHome={setHome} />
            </div>
            < Dish  />
            <Choose />
            <Review />
            <Footer />
        </>
    )
}
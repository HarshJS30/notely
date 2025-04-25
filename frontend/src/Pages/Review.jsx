import Marquee from "react-fast-marquee";
import { FaHeart } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import img1 from '../assets/twt1.png'
import img2 from '../assets/twt2.png'
import img3 from '../assets/twt3.png'
import img4 from '../assets/twt4.png'
import img5 from '../assets/twt5.png'
import img6 from '../assets/twt6.png'
import img7 from '../assets/twt7.png'
import img8 from '../assets/twt8.png'
export function Reviews(){
    return(
        <div className="reviews">
            <h1>Hear from our Users</h1>
            <Marquee pauseOnHover="true" className="marquee">
                <img src={img1} alt="" />
                <img src={img2} alt="" />
                <img src={img4} alt="" />
                <img src={img3} alt="" />
            </Marquee>
            <Marquee pauseOnHover="true" direction="right" className="marquee">
                <img src={img6} alt="" />
                <img src={img7} alt="" />
                <img src={img5} alt="" />
                <img src={img8} alt="" />
            </Marquee>
            <div className="footer">
                <p>Made with <FaHeart className="heart"/> by Harsh.</p>
                <FaInstagram className="icon"/>
                <FaSquareXTwitter className="icon"/>
            </div>
        </div>
    )
}
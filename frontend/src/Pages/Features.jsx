import fe1 from '../assets/fea1.png';
import fe2 from '../assets/fea2.png';
import { AiFillEdit } from "react-icons/ai";
import { MdDarkMode } from "react-icons/md";
export function Features(){
    return(
        <div className="features">
            <h1>What We Offer?</h1>
            <div className="bento">
                <div className="one">
                    <img src={fe2}></img>
                    <div className="text">
                        <h2>Download Notes</h2>
                        <h5>Take your notes with you.</h5>
                        <p>Download your notes anytime in a clean, readable format. Backup or share with just a click — no hassle, no lock-in.</p>
                    </div>
                </div>
                <div className="two">
                    <AiFillEdit className='fe'/>
                    <div className="text">
                        <h2>Rich Text Editor</h2>
                        <h5>Make your words stand out.</h5>
                        <p>Bold, italic, underline, lists — format your notes just the way you like. Our rich text editor gives you full control, without the clutter.</p>
                    </div>
                </div>
                <div className="three">
                    <MdDarkMode className='fe'/>
                    <div className="text">
                        <h2>Dark Mode</h2>
                        <h5>Comfort meets focus.</h5>
                        <p>Switch to dark mode for a sleek, eye-friendly experience that’s perfect for late-night writing or distraction-free work.</p>
                    </div>
                </div>
                <div className="four">
                    <img src={fe1}></img>
                    <div className="text">
                        <h2>Sync Across Devices</h2>
                        <h5>Your notes, everywhere.</h5>
                        <p>Access your notes seamlessly across all your devices.<br /> Edit on your laptop, view on your phone — always in sync, always updated.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
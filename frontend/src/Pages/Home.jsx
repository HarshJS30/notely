import { useNavigate } from 'react-router-dom';
import '../assets/home.css';

export function Home(){
    const navigate = useNavigate();
    return (
        <div className="home">
            <div className="navbar">
                <h3>Notely</h3>
                <a>About</a>
                <a>Features</a>
                <a>Contact</a>
                <a>Check My Portfolio</a>
                <button className='login' onClick={()=>navigate('/login')}>Login</button>
                <button>Try for free</button>
            </div>
            <h1>All your thoughts at <span>One Place</span> <br></br> without any cost.</h1>
            <p>A simple and secure note-taking website built to help you organize all your thoughts and ideas. <br />Accessible anytime, anywhere - Your personal space to write.</p>
            <div className="buttons">
                <button className='cta1'>Start Jotting</button>
                <button className='cta2'>Know More</button>
            </div>
        </div>
    )
}
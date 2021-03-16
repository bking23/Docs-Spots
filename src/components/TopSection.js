import {Button} from './Button';
import './TopSection.css';
import '../App.css';

function TopSection() {
    return (
        <div className="hero-container">
            {/* <video src="/videos/video-2.mp4" autoPlay loop muted/> */}
            {/* <img src="img1.jpg"/> */}
            <h1>Welcome to Doc's Spots!</h1>
            <p>Let's get started</p>
            <div className="hero-btns">
                <Button className="btns" buttonStyle="btn--outline" buttonSize="btn--large">GET STARTED</Button>
                {/* <Button className="btns" buttonStyle="btn--primary" buttonSize="btn--large">WATCH TRAILER <i className="far fa-play-circle"/></Button> */}
            </div>
        </div>
    )
}

export default TopSection

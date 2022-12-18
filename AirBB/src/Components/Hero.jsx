import hero from "../assets/hero.png"

export const Hero = () => {
    return (
        <hero>
            <img src={hero} className="hero-img"/>
            <h1 className="experiences-title">Online Experiences</h1>
            <p className="paragraph-text">Join unique interactive activities 
                led by one-of-a-kind hosts—all without leaving home.
            </p>
        </hero>
    )
}
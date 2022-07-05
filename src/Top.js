import ProfileImg from "./profile.png"
import Button from "./Button"
import ProfileLogo from "./profileLogo.png"

function Top() {
  return (
    <div className="top">
        <img className="profile-img" src={ProfileImg} alt="profile" />
        <img className="profile-logo" src={ProfileLogo} alt="profile logo" />
        <h1>Arinze Cyril</h1>
        <h3>FrontEnd Developer</h3>
        <a href="https://arinzecyril.github.io/page/">
          <button className="goto"> 
            Go to my Website
          </button>
        </a>
        <Button />
    </div>
  )
}

export default Top
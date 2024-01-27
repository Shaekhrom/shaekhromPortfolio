import './AbtMeStyle.css'
import TypingAnimation from './animation/NameAnimation';

function AbtMe() {
    return (
      <div className="AbtMeContainer">
        <div className ='TitleContainer'>
          <p className='TitleText'>Software Developer</p>
        </div>
        <div>
          <TypingAnimation/>
        </div>
        <div className ='DescriptionContainer'>
          <p className='DescriptionText'>"Focused on full-stack programming and investments, I enjoy spending my free time playing video games with friends and occasionally indulging in skiing."</p>
        </div>
      </div>
    );
  }
  
  export default AbtMe;
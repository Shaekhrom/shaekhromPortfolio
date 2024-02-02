import './FooterStyles.css'
import linkedin from '../../icons/linkedin.svg'
import github from '../../icons/github.svg'
import twitter from '../../icons/twitter.svg'

function Footer() {
    return (
      <div className='footerContainer'>
        <div><img src={linkedin} alt="Linkedin" className="custom-footer-image"></img> </div>
        <div><img src={github} alt="GitHub" className="custom-footer-image"></img> </div>
        <div><img src={twitter} alt="Twitter" className="custom-footer-image"></img> </div>
      </div>
    );
  }
  
  export default Footer;
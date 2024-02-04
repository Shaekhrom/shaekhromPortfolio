import './ContactStyles.css'
import linkedin from '../../icons/linkedin.svg'
import github from '../../icons/github.svg'
import twitter from '../../icons/twitter.svg'


const handleLiClick = () => {
  const linkedinURL = 'https://www.linkedin.com/in/alejandro-barbacil-castro-623742296/';

  window.open(linkedinURL, '_blank');
};

const handleGitHubClick = () => {
  const githubURL = 'https://github.com/Shaekhrom?tab=repositories';

  window.open(githubURL, '_blank');
};

const handleTwitterClick = () => {
  const githubURL = 'https://twitter.com/shaekhrom';

  window.open(githubURL, '_blank');
};

function Contact() {
    return (
      <div className="ContactContainer">
        <div className='ContactTitleContainer'>
              <p className='ContactTitle'>Get in touch!</p>
        </div>
        <form className='ContactFormContainer' action="https://api.web3forms.com/submit" method="POST">

          <input type="hidden" name="access_key" value="080122ef-ca30-4b0d-bb5d-d88e85602b55"/>
          <input className="ContactFormInputName" placeholder='Name:' type="text" name="name" required/>

          <input className="ContactFormInputEmail" placeholder='E-mail:' type="email" name="email" required/>

          <textarea className="ContactFormInputMessage" type="text" placeholder='Message:' name="message" required/>

          <button type="submit">
            <div className="ContactButton">
              <div class="svg-wrapper">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                >
                  <path fill="none" d="M0 0h24v24H0z"></path>
                  <path
                    fill="currentColor"
                    d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"
                  ></path>
                </svg>
              </div>
            </div>
            <span>Send</span>
          </button>

          <div className='footerContainer'>
            <div><img src={linkedin} alt="Linkedin" className="custom-footer-image" onClick={handleLiClick}></img> </div>
            <div><img src={github} alt="GitHub" className="custom-footer-image" onClick={handleGitHubClick}></img> </div>
            <div><img src={twitter} alt="Twitter" className="custom-footer-image" onClick={handleTwitterClick}></img> </div>
          </div>

        </form>
      </div>
    );
  }
  
  export default Contact;
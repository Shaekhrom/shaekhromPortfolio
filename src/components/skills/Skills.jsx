import './SkillsStyles.css'
import html from '../../icons/html5V.svg'
import css from '../../icons/css3.svg'
import javascript from '../../icons/javaScript.svg'
import reactIcon from '../../icons/react.svg'
import java from '../../icons/java.svg'
import sql from '../../icons/sql.svg'
import aws from '../../icons/aws.svg'
import git from '../../icons/git.svg'

function Skills() {
    return (
      <div className="SkillsContainer">
       <div className='SkillsTitleContainer'>
            <p className='SkillsTitle'>Skills</p>
       </div>
       <div className="parent">
          <div><img src={html} alt="Html" className="custom-image"></img> </div>
          <div><img src={css} alt="CSS" className="custom-image"></img> </div>
          <div><img src={javascript} alt="javaScript" className="custom-image"></img> </div>
          <div><img src={reactIcon} alt="react" className="custom-image"></img> </div>
          <div><img src={java} alt="java" className="custom-image"></img> </div>
          <div><img src={sql} alt="sql" className="custom-image"></img> </div>
          <div><img src={aws} alt="aws" className="custom-image"></img> </div>
          <div><img src={git} alt="git" className="custom-image"></img> </div>
        </div>
        
      </div>
    );
  }
  
  export default Skills;
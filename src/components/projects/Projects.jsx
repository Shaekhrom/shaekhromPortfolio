import './ProjectStyles.css'

function Projects() {
    return (
      <div className="ProjectsContainer">
        <div className='ProjectsTitleContainer'>
            <p className='ProjectsTitle'>Projects</p>
       </div>
       <div className='containerCard'>
        <div className='card'>
                <div className='front'></div>
                <div className='back'>
                    <div className='cardTextContainer'>
                        <p className='cardText1'>Business Personal Manager</p>  
                        <p className='cardText2'>Application designed for companies where users within 
                        the same company can communicate with each other. It also features an event and 
                        schedule management system that is customizable by administrators and visible to 
                        employees or groups of employees. Additionally, it will have a scoring system where 
                        supervisors can rate employee performance.</p>  
                        <p className='cardText2'> Currently, work in progress!</p>  
                    </div>
                </div>               
            </div>
       </div>
      </div>
    );
  }
  
  export default Projects;
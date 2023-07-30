import React from 'react'
import { ProjectsURL, singlePortfolio } from '../../EndPoints';
import useFetch from '../../Hooks/useFetch';
import { useParams } from 'react-router-dom';
import Loading from '../../Neccessary/Loading';
import Footer from '../../Neccessary/Footer';

function Portfolio() {

  const { username } = useParams();
  const url = singlePortfolio + username;
  const url2 = ProjectsURL;
  const { data: PortfolioData, isLoading, error } = useFetch(url);
  const { data: ProjectData } = useFetch(url2);

  const PortProject = [];
  if (PortfolioData && ProjectData) {
    ProjectData.map((proj) => {
      if (proj.Portfolio_Id === PortfolioData.Id) {
        PortProject.push(proj);
      }
      return 0;
    })
  }

  // const videoRef = React.useRef(null);

  // const handleHover = () => {
  //   videoRef.current.play();
  // };

  // const handleMouseLeave = () => {
  //   videoRef.current.pause();
  //   videoRef.current.currentTime = 0; // Resets the video to the beginning when hovering stops
  // };

  return (
    <div className="PortBody">
      {isLoading && <div className='contLoad'><Loading /></div>}
      {error && <div>{Error}</div>}
      {PortfolioData && <div className="portData">
        <div className='port1sect'>
          <div className='PortImgDiv'>
            {(PortfolioData.ProfilePath != null) && 
            <img src={require(`../../../../Backend/${PortfolioData.ProfilePath}`)} alt="" className='profilePic'></img>}
          </div>
          <div className="portContext">
            <div className='portText'>
              <h3 className='portName'>{PortfolioData.FirstName} {PortfolioData.LastName}</h3>
              <h5 className='portUser'>@{PortfolioData.UserName}</h5>
            </div>
            <div className='portOthers'>
              <p>Bio: {PortfolioData.Bio}</p>
              <p>Category: {PortfolioData.Category}</p>
              <p>Skill: {PortfolioData.Skill}</p>
              <p>Email : {PortfolioData.Email}</p>
            </div>
          </div>
        </div>
        <div>
          <h3>PROJECTS</h3>
          {PortProject && (
            PortProject.map((Dprojects, Index) => (
              <div key={Index} className='Projects'>
                <div className="projContent">
                  {((Dprojects.ProjectImagePath != null) && (Dprojects.ProjectVideoPath == null)) && <div>
                    <img
                      src={require(`../../../../Backend/${Dprojects.ProjectImagePath}`)}
                      alt=""
                      className='projImage' />
                  </div>}
                  {((Dprojects.ProjectImagePath == null) && (Dprojects.ProjectVideoPath != null)) && <div
                    // onMouseEnter={handleHover}
                    // onMouseLeave={handleMouseLeave}
                  >
                    <video
                      // ref={videoRef}
                      src={require(`../../../../Backend/${Dprojects.ProjectVideoPath}`)}
                      alt=""
                      className='projVideo'
                      controls
                    ></video>

                  </div>}
                  <div className="projDetails">
                    <h4>{Dprojects.Title}</h4>
                    <p>{Dprojects.Description}</p>
                  </div>
                </div>
              </div>
            ))
          )
          }
          {(PortProject.length === 0) && <div>
            <h4>No Projects Uploaded Yet</h4>
          </div>}
        </div>
      </div>}
      <Footer />
    </div>
  )
}

export default Portfolio

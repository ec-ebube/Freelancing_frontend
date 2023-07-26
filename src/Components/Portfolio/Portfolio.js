import React from 'react'
import { ProjectsURL, singlePortfolio } from '../../EndPoints';
import useFetch from '../../Hooks/useFetch';
import { useParams } from 'react-router-dom';
import Loading from '../../Neccessary/Loading';

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
  console.log(PortProject);


  return (
    <div className="PortBody">
      {isLoading && <div className='contLoad'><Loading /></div>}
      {error && <div>{Error}</div>}
      {PortfolioData && <div className="portData">
        <div className='port1sect'>
          <div className='PortImgDiv'>
            <img src={require(`../../../../Backend/${PortfolioData.ProfilePath}`)} alt="" className='profilePic'></img>
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
          {PortProject && (
            PortProject.map((Dprojects, Index) => (
              <div key={Index}>
                {((Dprojects.ProjectImagePath != null) && (Dprojects.ProjectVideoPath == null)) && <div>
                  <img src={require(`../../../../Backend/${Dprojects.ProjectImagePath}`)} alt="" className='projImage' />
                </div>}
                {((Dprojects.ProjectImagePath == null) && (Dprojects.ProjectVideoPath != null)) && <div>
                  <video src={require(`../../../../Backend/${Dprojects.ProjectVideoPath}`)} alt="" className='projVideo' controls ></video>

                </div>}
                <div className="projDetails">
                  {Dprojects.Title}
                </div>
              </div>
            ))
          )
          }
          {(PortProject.length === 0) && <div>
            <h3>No Projects Uploaded Yet</h3>
          </div>}
        </div>
      </div>}
    </div>
  )
}

export default Portfolio

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
        <div>
          <div>
            <img src={require(`../../../../Backend/${PortfolioData.ProfilePath}`)} alt=""></img>
          </div>
          <div>
            <h3>{PortfolioData.FirstName} {PortfolioData.LastName}</h3>
            <h5>@{PortfolioData.UserName}</h5>
          </div>
        </div>
        <div>
          <p>Bio: {PortfolioData.Bio}</p>
          <p>Category: {PortfolioData.Category}</p>
          <p>Skill: {PortfolioData.Skill}</p>
        </div>
        <div>
          {PortProject && (
            PortProject.map((Dprojects, Index) => {
              return (
                <div>
                  <h5>{Dprojects.Title}</h5>
                </div>
              );
            })
          )
          }
        </div>
      </div>}
    </div>
  )
}

export default Portfolio

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
  // console.log(ProjectData.Title);
  if (ProjectData) {
    if (ProjectData) {
      
    }
  }

  // console.log(PortfolioData.FirstName);

  return (
    <div>
      {isLoading && <div className='contLoad'><Loading /></div>}
      {error && <div>{Error}</div>}
      {PortfolioData && <div>
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
      </div>}
    </div>
  )
}

export default Portfolio

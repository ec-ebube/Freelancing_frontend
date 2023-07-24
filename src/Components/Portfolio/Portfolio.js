import React from 'react'
import { singlePortfolio } from '../../EndPoints';
import useFetch from '../../Hooks/useFetch';
import { useParams } from 'react-router-dom';
import Loading from '../../Neccessary/Loading';

function Portfolio() {

  const { username } = useParams();
  // console.log(username)
  const url = singlePortfolio + username;
  const { data: PortfolioData, isLoading, error } = useFetch(url);

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
      </div>}
    </div>
  )
}

export default Portfolio

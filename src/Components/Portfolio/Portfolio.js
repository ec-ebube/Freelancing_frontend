import React from 'react'
import { singlePortfolio } from '../../EndPoints';
import useFetch from '../../Hooks/useFetch';
import { useParams } from 'react-router-dom';

function Portfolio() {

  const { username } = useParams();
  // console.log(username)
  const url = singlePortfolio + username;
  const { data: PortfolioData, isLoading, error } = useFetch(url);

  // console.log(PortfolioData.FirstName);

  return (
    <div>
      <div>
        <img src={require(`../../../../Backend/${PortfolioData.ProfilePath}`)} alt="" />
      </div>
    </div>
  )
}

export default Portfolio

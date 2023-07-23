import React from 'react'
import { useParams } from 'react-router-dom'
import { singlePortfolio } from '../../EndPoints';
import useFetch from '../../Hooks/useFetch';

function Portfolio() {

    const { UserName } = useParams;
    const url = singlePortfolio + UserName;
    const { data, isLoading, error } = useFetch(url);

  return (
    <div>
      {/* {data.FirstName} */}
    </div>
  )
}

export default Portfolio

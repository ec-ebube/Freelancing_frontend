import React from 'react'
import { PortfoliosURL } from '../../EndPoints'
import useFetch from '../../Hooks/useFetch';

function CodingandProgramming() {

    const url = PortfoliosURL;
    const { data, isLoading, error } = useFetch(url);

    var codeCat = [];
    if (data) {
        data.map((ports) => {
          if (ports.Category === "Coding and Programming") {
            codeCat.push(ports)
    
          }
          return 0
        })
      }

  return (
    <div>
      
    </div>
  )
}

export default CodingandProgramming

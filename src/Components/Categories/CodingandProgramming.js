import React from 'react'
import { PortfoliosURL } from '../../EndPoints'
import useFetch from '../../Hooks/useFetch';
import Loading from '../../Neccessary/Loading';

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
    console.log(codeCat);


    return (
        <div>
            {isLoading && <div><Loading /></div>}
            {error && <div>{Error}</div>}
            {data && (
                codeCat.map((d, i) => (
                    <div className="catData" key={i}>
                        <p>{d.FirstName}</p>
                        {/* <img src={d.profilePath} alt="" /> */}
                    </div>
                ))
            )}
            
            <p>P tag</p>
        </div>
    )
}

export default CodingandProgramming

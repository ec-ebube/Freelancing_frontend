import React from 'react'
import { PortfoliosURL } from '../../EndPoints'
import useFetch from '../../Hooks/useFetch';
import Loading from '../../Neccessary/Loading';
import { Link } from 'react-router-dom';

function CodingandProgramming() {

    const url = PortfoliosURL;
    const { data, isLoading, error } = useFetch(url);

    var codeCat = [];
    if (data) {

        data.map((ports) => {
            if (ports.Category === "Coding and Programming") {
                codeCat.push(ports)
                // setProfilePhoto(codeCat.profilePath);
            }
            return 0
        })
    }

    function shuffleArray(arr) {
        return arr.sort(() => Math.random() - 0.5);
    }

    const shuffledArray = shuffleArray(codeCat);
    console.log(codeCat);
    console.log(shuffledArray);


    return (
        <div className='catBody'>
            {isLoading && <div><Loading /></div>}
            {error && <div>{Error}</div>}
            {data && (
                shuffledArray.map((d, i) => (
                    <Link to={"/"} className='catLink'>
                        <div className="catData" key={i}>
                            <img src={require(`../../../../Backend/${d.ProfilePath}`)} alt="" className='catImage' />
                            <h2 className='names'>{d.FirstName} {d.LastName}</h2>
                            <p className='skills'> {d.Skill} </p>
                            <p className="bio">{d.Bio}</p>
                            {/* <p className="mail">{d.Email}</p> */}
                        </div>
                    </Link>
                ))
            )}
        </div>
    )
}

export default CodingandProgramming

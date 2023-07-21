import React from 'react'
import { PortfoliosURL } from '../../EndPoints'
import useFetch from '../../Hooks/useFetch';
import Loading from '../../Neccessary/Loading';
import { Link } from 'react-router-dom';

function GraphicsandDesign() {

    const url = PortfoliosURL;
    const { data, isLoading, error } = useFetch(url);

    var codeCat = [];
    if (data) {

        data.map((ports) => {
            if (ports.Category === "Graphics and Design") {
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


    return (
        <div className='catBody'>
            <div className="welcome2">
                {!isLoading && <div className='fortext'><h3 className='catTexts'>
                    Elevate your experience, Connect or Join with the Best Designers through our website today!
                </h3></div>}
                {isLoading && <div className='contLoad'><Loading /></div>}
                {error && <div>{Error}</div>}
            </div>
            {data && (
                shuffledArray.map((d, i) => (
                    <Link to={"/portfolio/" + d.UserName} className='catLinkdiv'>

                        <div className="catData" key={i}>
                            <img src={require(`../../../../Backend/${d.ProfilePath}`)} alt="" className='catImage' />
                            <div className="catDetails">
                                <h2 className='names'>{d.FirstName} {d.LastName}</h2>
                                <p className='skills'><span>Skill(s):</span> {d.Skill} </p>
                                <p className="bio">{d.Bio}</p>
                                {/* <p className="mail">{d.Email}</p> */}
                            </div>
                        </div>
                    </Link>
                ))
            )}
        </div>
    )
}

export default GraphicsandDesign;

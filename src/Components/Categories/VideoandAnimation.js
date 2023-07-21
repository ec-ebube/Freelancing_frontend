import React, { useState } from 'react'
import { PortfoliosURL } from '../../EndPoints'
import useFetch from '../../Hooks/useFetch';
import Loading from '../../Neccessary/Loading';
import { Link } from 'react-router-dom';

function VideoandAnimation() {

    const url = PortfoliosURL;
    const { data, isLoading, error } = useFetch(url);

    var codeCat = [];
    if (data) {

        data.map((ports) => {
            if (ports.Category === "Video Editing and Animation") {
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

    // Step 1: Add state to store the search query and filtered results
    const [searchQuery, setSearchQuery] = useState("");
    const filteredArray = shuffledArray.filter(
        (item) =>
            item.FirstName.toLowerCase().includes(searchQuery.toLowerCase()) ||
            item.LastName.toLowerCase().includes(searchQuery.toLowerCase()) ||
            item.Skill.toLowerCase().includes(searchQuery.toLowerCase())
    );
    // Step 2: Create a function to handle the search logic and update the state accordingly
    const handleSearch = (e) => {
        setSearchQuery(e.target.value);
    };


    return (
        <div className='catBody'>
            <div className="welcome3">
                {!isLoading && <div><div className='fortext'><h3 className='catTexts'>
                    Elevate your experience, Connect or Join with the Best Video Editors and Animators through our website today!
                </h3></div>
                    <input
                        type="text"
                        id="myInput"
                        value={searchQuery}
                        onChange={handleSearch}
                        placeholder="Search"
                        title="Type in a name"
                    />
                </div>}
                {isLoading && <div className='contLoad'><Loading /></div>}
                {error && <div>{Error}</div>}
            </div>
            {data && (
                filteredArray.map((d, i) => (
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

export default VideoandAnimation;
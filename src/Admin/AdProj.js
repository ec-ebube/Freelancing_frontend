import React from 'react'
import { useParams } from 'react-router-dom'
import useFetch from '../Hooks/useFetch';
import { DeleteProj, singleProject } from '../EndPoints';
import Loading from '../Neccessary/Loading';

function AdProj() {
    const { Id } = useParams();
    const url = singleProject + Id;
    const { data, isLoading, error } = useFetch(url)

    const handleDelete =() => {
        fetch(DeleteProj + data.Id ,
            {
                method: 'DELETE'
            },
            {
                headers: { Authorization: 'Bearer ' }
            }).then(() => {
                console.log('Deleted')
            })
    }

    return (
        <div>
            {isLoading && <div className='contLoad'><Loading /></div>}
            {error && <div>{Error}</div>}
            {data && <div>
                <h2>Title: {data.Title}</h2>
                <h3>Description: {data.Description}</h3>
                <h3>Id: {data.Id}</h3>
                <h3>Portfolio's Id: {data.Portfolio_Id}</h3>
                {(data.ProjectImagePath != null || data.ProjectVideoPath != null) &&
                    <div>
                        {data.ProjectImagePath != null && <img src={require(`../../../Backend/${data.ProjectImagePath}`)} alt="" className='adMedia' />}
                        {data.ProjectVideoPath != null && <video src={require(`../../../Backend/${data.ProjectVideoPath}`)} alt="" controls className='adMedia' />}
                        <div>
                        </div>
                    </div>
                }
                <button onClick={handleDelete}>Delete This project</button>
            </div>}
        </div>
    )
}

export default AdProj

import React from 'react'
import { useAuthContext } from '../Hooks/useAuthContext';
import { portSingle } from '../EndPoints';
import useFetch from '../Hooks/useFetch';
import Loading from '../Neccessary/Loading';

function Dashboard() {
    const { portfolio } = useAuthContext();
    // var port = JSON.parse(localStorage.getItem('port'));
    // var token = JSON.parse(port.token);
    // token = token.token;

    var singleUser = JSON.parse(portfolio)
    if (portfolio && singleUser) {
        var forId = singleUser.Id;
        console.log(portfolio)
    }
    const { data, isLoading, error } = useFetch(portSingle + forId);
    return (
        <div>
           {isLoading && <div className='contLoad'><Loading /></div>}
            {error && <div>{Error}</div>}
            {data && 
            <div>
                {data.Id}
            </div>
            }
        </div>
    )
}

export default Dashboard

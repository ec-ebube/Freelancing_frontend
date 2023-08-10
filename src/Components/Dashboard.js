import React, { useState } from 'react'
import { useAuthContext } from '../Hooks/useAuthContext';
import { portSingle } from '../EndPoints';
import useFetch from '../Hooks/useFetch';
import Loading from '../Neccessary/Loading';
import CreatingProject from './Create&LogIns/CreatingProject';
import { Dialog } from "primereact/dialog";

function Dashboard() {
    const { portfolio } = useAuthContext();
    // var port = JSON.parse(localStorage.getItem('port'));
    // var token = JSON.parse(port.token);
    // token = token.token;

    const [modalVisibility, setModalVisibility] = useState(false)
    var singleUser = JSON.parse(portfolio)
    if (portfolio && singleUser) {
        var forId = singleUser.Id;
        console.log(portfolio)
    }
    const { data, isLoading, error } = useFetch(portSingle + forId);
    function modal() {
        setModalVisibility(true)
    }
    return (
        <div>
            {isLoading && <div className='contLoad'><Loading /></div>}
            {error && <div>{Error}</div>}
            {data &&
                <div>
                    <p>Your Id: {data.Id}</p>
                    <div>
                        <img src={require(`../../../Backend/${data.ProfilePath}`)} alt="" />
                    </div>
                    <h3>{data.FirstName} {data.LastName}</h3>
                    <p>@{data.UserName}</p>
                    <p>{data.DoB}</p>
                    <p>{data.Bio}</p>
                    <p>{data.Skill}</p>
                    <p>{data.Email}</p>
                    <button 
                    className="submit"
                    onClick={modal}
                    >Create Project</button>
                </div>
            }
            <Dialog
                visible={modalVisibility}
                onHide={() => setModalVisibility(false)}
                style={{ width: '50vw' }}
                breakpoints={{ '960px': '100vw', '641px': '100vw' }}
                className='formodal'
            >
                <CreatingProject />
            </Dialog>
        </div>
    )
}

export default Dashboard

import React from 'react'
import { DataTable } from 'primereact/datatable'
import { Column } from 'primereact/column'
import { DeleteProj, ProjectsURL } from '../EndPoints'
import useFetch from '../Hooks/useFetch'
import Loading from '../Neccessary/Loading'
import { Link } from 'react-router-dom'

function Projects() {
    const { data: projects, isLoading, error } = useFetch(ProjectsURL)

    console.log(projects);
    const handleDelete = (id) => {
        fetch(DeleteProj + id,
            {
                method: 'DELETE'
            },
            {
                headers: { Authorization: 'Bearer ' }
            }).then(() => {
                console.log('Deleted')
            })
    }
    // const fullProject = (data) => {
    //    navigate(`/projects/`+ data.Id)
    // }
    const actionClick = (data) => {
        return (
            <div className="flex flex-wrap gap-2">
                <button type="button"> <Link to={`/projects/` + data.Id} >Navigate</Link>  </button>
                <button type="button" onClick={() => handleDelete(data.Id)} > Delete </button>
            </div>
        )
    }


    return (
        <div>
            {isLoading && <div className='contLoad'><Loading /></div>}
            {error && <div>{Error}</div>}
            {projects && <div>
                <DataTable value={projects} stripedRows scrollable paginator rows={5} rowsPerPageOptions={[5, 10, 15, 20]} tableStyle={{ minWidth: '90%', minHeight: '20rem' }} >
                    <Column field='Title' header='Title' />
                    <Column field='Description' header='Description' />
                    <Column body={actionClick} header="Action" />
                </DataTable>
            </div>}
        </div>
    )
}

export default Projects

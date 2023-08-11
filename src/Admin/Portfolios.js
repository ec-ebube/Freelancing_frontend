import React from 'react'
import { DataTable } from 'primereact/datatable'
import { Column } from 'primereact/column'
import { DeletePort, PortfoliosURL } from '../EndPoints'
import useFetch from '../Hooks/useFetch'
import Loading from '../Neccessary/Loading'

function Portfolios() {
    const {data: portfolios, isLoading, error} = useFetch(PortfoliosURL)

    console.log(portfolios);
    const handleDelete = (id) => {
        fetch(DeletePort + id ,
            {
                method: 'DELETE'
            },
            {
                headers: { Authorization: 'Bearer ' }
            }).then(() => {
                console.log('Deleted')
            })
    }

    const actionClick = (data) => {
        return (
            <div className="flex flex-wrap gap-2">
                <button type="button" onClick={() => handleDelete(data.Id)} > Delete </button>
            </div>
        )
    }

  return (
    <div>
      {isLoading && <div className='contLoad'><Loading /></div>}
      {error && <div>{Error}</div>}
      {portfolios && <div>
        <DataTable value={portfolios} stripedRows scrollable paginator rows={5} rowsPerPageOptions={[5, 10, 15, 20]} tableStyle={{ minWidth: '90%', minHeight: '20rem'}}>
            <Column field='FirstName' header='FirstName' />
            <Column field='LastName' header='LastName' />
            <Column field='Email' header='Email' />
            <Column field='UserName' header='UserName' />
            <Column field='Category' header='Category' />
            <Column body={actionClick} header="Action" />
        </DataTable>
      </div> }
    </div>
  )
}

export default Portfolios

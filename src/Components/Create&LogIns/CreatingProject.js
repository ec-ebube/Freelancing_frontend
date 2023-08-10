import React, { useState } from 'react'
import useCreate from "../../Hooks/useCreate"
import Loading from "../../Neccessary/Loading"
import { CreateProject } from "../../EndPoints"
// import { useAuthContext } from '../../Hooks/useAuthContext';

function CreatingProject() {
  const portfolio = localStorage.getItem('port');
  var singleUser = JSON.parse(portfolio)
  var Portfolio_Id = singleUser.Id;
  console.log(Portfolio_Id)

  const [pdisabled, setPdisabled] = useState(false)
  const [vdisabled, setVdisabled] = useState(true)
  const [Title, setTitle] = useState('')
  const [Description, setDescription] = useState('')
  const [ProjectImage, setProjectImage] = useState(null)
  const [ProjectVideo, setProjectVideo] = useState(null)
  const { createUser, isLoading, error } = useCreate()

  const forImg = () => {
    setPdisabled(() => !pdisabled)
    setVdisabled(() => !vdisabled)
  }
  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const formdata = new FormData()
      formdata.append('Portfolio_Id', Portfolio_Id)
      formdata.append('Title', Title)
      formdata.append('Description', Description)
      if (pdisabled === false) {
        formdata.append('ProProjectImage', ProjectImage)
      } else {
        formdata.append('ProjectVideo', ProjectVideo)
      }

      await createUser(CreateProject, formdata)
    } catch (error) {

    }
  }

  return (
    <div>
      {isLoading && <div className='contLoad'><Loading /></div>}
      {error && <div>{Error}</div>}
      {!isLoading &&
        <div className="Createportfolio">
          <div className="cont">
            <h2 className="qtittle">Upload your project</h2>
            <div className="DeBox">
              <form onSubmit={handleSubmit}>
                <div className="questiondiv">
                  <label htmlFor="title" className='question'>Project Title</label>
                  <input
                    type="text"
                    className="input"
                    required
                    name="Title"
                    onChange={(e) => setTitle(e.target.value)}
                  />
                </div>
                <div className="questiondiv">
                  <label htmlFor="Description" className="question">Description</label>
                  <input
                    type="text"
                    className="input"
                    required
                    name='Description'
                    onChange={(e) => setDescription(e.target.value)}
                  />
                </div>
                <label htmlFor="" className="question">video</label>
                <input type="checkbox" name="check" onChange={forImg} id="" />
                <label htmlFor="" className="question">video</label>
                <input type="checkbox" name="check" onChange={forImg} id="" />
                <div className="questiondiv">
                  <label htmlFor="Image" className="question">Upload an Image</label>
                  <input
                    type="file"
                    name="ProjectImage"
                    accept="image/*"
                    id=""
                    disabled={pdisabled}
                    onChange={(event) => setProjectImage(event.target.files[0])}
                  />
                </div>
                <div className="questiondiv">
                  <label htmlFor="Video" className="question">Upload a short Video</label>
                  <input
                    type="file"
                    name="ProjectImage"
                    accept="video/*"
                    id=""
                    disabled={vdisabled}
                    onChange={(event) => setProjectVideo(event.target.files[0])}
                  />
                </div>
                <div className="questiondiv">
                  <button
                    type="submit"
                    className="submit"
                    disabled={isLoading}>Upload Now</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      }
    </div>
  )
}

export default CreatingProject

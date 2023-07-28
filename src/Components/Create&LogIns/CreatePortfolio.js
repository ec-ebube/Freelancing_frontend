import { useState } from "react"
import useCreate from "../../Hooks/useCreate"
// import { createPortfolio } from "../../EndPoints"
import Loading from "../../Neccessary/Loading"
import { CreatePortfolioURL } from "../../EndPoints"


const CreatePortfolio = () => {
    const forCategories = [
        {
            Category: "Coding and Programming"
        },
        {
            Category: "Graphics and Design"
        },
        {
            Category: "Video Editing and Animation"
        },
        {
            Category: "Music and Melody"
        },
        {
            Category: "Arts and Drawing"
        },
        {
            Category: "Modelling"
        },
        {
            Category: "Architectural designs"
        },
        {
            Category: "Influencing"
        },
        {
            Category: "Other Services"
        }
    ]


    // console.log(forCategories);

    const [FirstName, setFirstName] = useState("")
    const [LastName, setLastName] = useState("")
    const [Email, setEmail] = useState("")
    const [Password, setPassword] = useState("")
    const [DoB, setDoB] = useState("")
    const [UserName, setUserName] = useState("")
    const [Skill, setSkill] = useState("")
    const [Category, setCategory] = useState("")
    const [ProfilePhoto, setProfilePhoto] = useState()
    const { createUser, isLoading, error } = useCreate()

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const formdata = new FormData()
            formdata.append('FirstName', FirstName)
            formdata.append('LastName', LastName)
            formdata.append('Email', Email)
            formdata.append('DoB', DoB)
            formdata.append('UserName', UserName)
            formdata.append('Category', Category)
            formdata.append('Skill', Skill)
            formdata.append('ProfilePhoto', ProfilePhoto)
            formdata.append('Password', Password)

            await createUser(CreatePortfolioURL, formdata)
        } catch (error) {

        }
    }


    return (
        <div className="Createportfolio">
            {isLoading && <div className='contLoad'><Loading /></div>}
            {error && <div>{Error}</div>}
            <div className="cont">
                <h2 className="qtittle">Create a Portfolio in 5 mins</h2>
                <div className="DeBox">
                    <form onSubmit={handleSubmit}>
                        <div className="questiondiv">
                            <label htmlFor="FirstName" className="question">What Is your FirstName?</label>
                            <input
                                type="text"
                                className="input"
                                required
                                name="FirstName"
                                onChange={(e) => setFirstName(e.target.value)}
                            />
                        </div>
                        <div className="questiondiv">
                            <label htmlFor="LastName" className="question">What's your LastName?</label>
                            <input
                                type="text"
                                className="input"
                                required
                                name="LastName"
                                onChange={(e) => setLastName(e.target.value)}
                            />
                        </div>
                        <div className="questiondiv">
                            <label htmlFor="Email" className="question">Email Address</label>
                            <input
                                type="email"
                                className="input"
                                required
                                name="Email"
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div className="questiondiv">
                            <label htmlFor="DoB" className="question">Date of Birth</label>
                            <input
                                type="date"
                                className="input"
                                required
                                name="DoB"
                                onChange={(e) => setDoB(e.target.value)}
                            />
                        </div>
                        <div className="questiondiv">
                            <label htmlFor="UserName" className="question">Choose a UserName</label>
                            <input
                                type="text"
                                className="input"
                                required
                                name="UserName"
                                onChange={(e) => setUserName(e.target.value)}
                            />
                        </div>
                        <div className="questiondiv">
                            <label htmlFor="Category" className="question">Choose a Category</label>
                            {/* <input type="date" className="input" required /> */}
                            <select
                                name="Category"
                                id=""
                                required
                                onChange={(e) => setCategory(e.target.value)}>
                                <option value=""
                                    disabled
                                    selected>Select a Category</option>
                                {
                                    forCategories.map((d, i) => (
                                        <option value={d.Category} key={i} className="input">{d.Category}</option>
                                    ))
                                }
                            </select>
                        </div>
                        <div className="questiondiv">
                            <label htmlFor="Skill" className="question">Which Skill(s) do you have</label>
                            <input
                                type="text"
                                className="input"
                                required
                                name="Skill"
                                onChange={(e) => setSkill(e.target.value)}
                            />
                        </div>
                        <div className="questiondiv">
                            <label htmlFor="ProfilePhoto" className="question">Upload a Profile picture</label>
                            <input
                                type="file"
                                className="input"
                                name="ProfilePhoto"
                                onChange={(e) => setProfilePhoto(e.target.value)}
                            />
                        </div>
                        <div className="questiondiv">
                            <label htmlFor="Password" className="question">Choose a strong password</label>
                            <input
                                type="password"
                                className="input"
                                required
                                name="Password"
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        <div className="questiondiv">
                            <button
                                type="submit"
                                className="submit"
                                disabled={isLoading}>Create Now</button>
                        </div>

                    </form>
                </div>
            </div>
        </div>
    );
}

export default CreatePortfolio;
import { useState } from "react"


const CreatePortfolio = () => {
    const Questions = [
        {
            Question: "What Is your FirstName?",
            Advice: "",
            Type: "text",
            Name: "FirstName"
        },
        {
            Question: "What's your LastName?",
            Advice: "",
            Type: "text",
            Name: 'LastName'
        },
        {
            Question: "Email Address",
            Advice: "",
            Type: "email",
            Name: 'Email'
        },
        {
            Question: "Date of Birth",
            Advice: "",
            Type: "date",
            Name: 'DoB'
        },
        {
            Question: "Choose A UserName",
            Advice: "Texts and underscores only. No Spaces ",
            Type: 'text',
            Name: 'UserName'
        },
        {
            Question: "Which Skill(s) do you have",
            Advice: "Separate with coma's",
            Type: "text",
            Name: 'Skill'
        },
        {
            Question: "Category for your Skill(s)",
            Advice: "Choose a category that suits ur skill",
            Type: "select a category",
            Name: 'Category'
        },
        {
            Question: "Choose a Profile Photo",
            Advice: "Preferably potrait",
            Type: "file",
            Name: 'ProfilePhoto'
        },
        {
            Question: "Set your Password",
            Advice: "set a strong password",
            Type: "password",
            Name: 'Password'
        }
    ]

    const [first, setFirst] = useState(0)
    const [FirstName, setFirstName] = useState("")
    const [LastName, setLastName] = useState("")
    const [Email, setEmail] = useState("")
    const [Password, setPassword] = useState("")
    const [DoB, setDoB] = useState("")
    const [UserName, setUserName] = useState("")
    const [Skill, setSkill] = useState("")
    const [Category, setCategory] = useState("")
    const [ProfilePhoto, setprofilePhoto] = useState("")



    const handN = async(e) => {
        if (first < Questions.length - 1) {
            setFirst(first + 1);
            // console.log(Questions[first].Question);
        } else {
            alert('Enough')
        }
    }
    const handP = async(e) => {
        if ((first > 0)) {
            setFirst(first - 1);
            // console.log(Questions[first].Question);
        } else {
            alert('Enough')
        }
    }
    const handleChange = (e) => {
        if (first === 0) {
            setFirstName(e.target.value)
        }
    }

    return (
        <div className="Createportfolio">
            <div className="DeBox">
                {/* {first} of {Questions.length} */}
                <h2>{Questions[first].Question}</h2>
                <div className="input">
                    <input 
                    type={Questions[first].Type} 
                    className="deInput" 
                    name={Questions[first].Name}
                    required
                    onChange={(e)=> handleChange(e)}
                    />
                </div>
                <button onClick={handP}>Previous</button>
                <button onClick={handN}>Next  </button>
            </div>
        </div>
    );
}

export default CreatePortfolio;
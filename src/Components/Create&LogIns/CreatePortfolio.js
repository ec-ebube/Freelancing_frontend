import { useState } from "react"


const CreatePortfolio = () => {
    const Questions = [
        {
            Question: "What Is your FirstName?",
            Advice: "",
            Type: "text"
        },
        {
            Question: "What's your LastName?",
            Advice: "",
            Type: "text"
        },
        {
            Question: "Email Address",
            Advice: "",
            Type: "email"
        },
        {
            Question: "Date of Birth",
            Advice: "",
            Type: "date"
        },
        {
            Question: "Choose A UserName",
            Advice: "Texts and underscores only. No Spaces ",
            Type: 'text'
        },
        {
            Question: "Which Skill(s) do you have",
            Advice: "Separate with coma's",
            Type: "text"
        },
        {
            Question: "Category for your Skill(s)",
            Advice: "Choose a category that suits ur skill",
            Type: "select a category"
        },
        {
            Question: "Choose a Profile Photo",
            Advice: "Preferably potrait",
            Type: "file"
        },
        {
            Question: "Set your Password",
            Advice: "set a strong password",
            Type: "password"
        }
    ]

    const [first, setFirst] = useState(0)
    const [text, setText] = useState("")

    // let questNum = 0;
    // for (let index = 0; index < Questions.length; ) {
    //     const next = () => {
    //         index++
    //     }
    //     const previous = () => {
    //         index--
    //     }
    // }
    const handN = () => {
        if (first < Questions.length - 1) {
            setFirst(first + 1);
            // console.log(Questions[first].Question);
        } else {
            alert('Enough')
        }
    }
    const handP = () => {
        if ((first > 0)) {
            setFirst(first - 1);
            // console.log(Questions[first].Question);
        } else {
            alert('Enough')
        }
    }
    const change = (value) => {
        setText(value)
    }

    return (
        <div>
            <button onClick={handP}>Previous</button>
            {first} of {Questions.length}
            <h2>{Questions[first].Question}</h2>
            <input type={Questions[first].Type} onChange={() => change("ttt")} />
            <button onClick={handN}>Next  </button>
            {text}
        </div>
    );
}

export default CreatePortfolio;
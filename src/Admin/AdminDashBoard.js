import Portfolios from "./Portfolios";
import Projects from "./Projects";


const AdminDashBoard = () => {
    return (
        <div>
            <div>
                <h1>Portfolios</h1>
                <Portfolios />
            </div>
            <div>
                <h1>Projects</h1>
                <Projects />
            </div>
        </div>
    );
}

export default AdminDashBoard;
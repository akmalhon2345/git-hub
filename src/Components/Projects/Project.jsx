import Edid from '../Sideba/Sidebar'
import './project.css'

const Project = () => {
  return (
    <div className="overview_wrapper">
        <Edid/>
        <div className="contaner4">
            <div className="card2">
                <div className="card-card">
                <h1>
                Welcome to projects</h1>
                <p>Built like a spreadsheet, project tables give you a live canvas to filter,
sort, and group issues and pull requests. Tailor them to your needs with
custom fields and saved views.</p>
<button className='q'>Learn More</button>
                </div>
            </div>
            <div className="card3">
                <div className="card-cards">
                <h1>Create your first GitHub project</h1>
                <p>Projects are a customizable, flexible tool for planning and tracking your work.</p>
                <button>New Project</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Project
import { DiVim } from 'react-icons/di'
import Edid from '../Sideba/Sidebar'
import './packages.css'
// import Edid from '../SomeFolder/Edid' // <== Faqat kerak bo‘lsa import qiling

const Packages = () => {
  return (
    < div className="overview_wrapper">
      <Edid/>
    <div className="packages ">
      <div className="card56">
        <h1>Get started with GitHub Packages</h1>
        <p>
          Safely publish packages, store your packages alongside your code, and share your packages privately with your team.
        </p>

    
      </div>

      {/* Title */}
      <div className="res">
        <h1>Choose a registry</h1>
      </div>

      {/* Registry Cards */}
      <div className="contaner65">
        {[...Array(5)].map((_, index) => (
          <div className="card45" key={index}>
            <h1>Apache Maven</h1>
            <p>
              A default package manager used for the Java programming language and the Java runtime environment.
            </p>
            <button>Learn more</button>
          </div>
        ))}
      </div>
    </div>
    </div>
  )
}

export default Packages

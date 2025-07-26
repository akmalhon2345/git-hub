import './sidebar.css';
import img from '../assets/image.png';

const Edid = () => {
  return (
    <div className="sidebar-container">
      <div className="profile-card">
        <img src={img} alt="User avatar" className="profile-img" />
        <p className="username">akmalhon2345</p>
        <p className="username" >@akmalhon2345</p>
        <button className="edit-btn">Edit Profile</button>
      </div>
    </div>
  );
};

export default Edid;

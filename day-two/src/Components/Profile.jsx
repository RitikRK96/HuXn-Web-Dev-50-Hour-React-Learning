import { useState } from "react";

const Profile = () => {
  const [Profile, setProfile] = useState({
    name: "",
    age: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setProfile((prevProfile) => ({
      ...prevProfile,
      [name]: value,
    }));
  };

  return (
    <div className="profile-container">
      <h2 className="profile-title">User Profile</h2>

      <div className="profile-input">
        <label className="input-label">Name:</label>
        <input
          type="text"
          name="name"
          value={Profile.name}
          onChange={handleChange}
          className="input-field"
        />
      </div>

      <div className="profile-input">
        <label className="input-label">Age:</label>
        <input
          type="number"
          name="age"
          value={Profile.age}
          onChange={handleChange}
          className="input-field"
        />
      </div>

      <div className="profile-info">
        <h3 className="profile-info-title">Profile Information</h3>
        <p className="profile-text">Name: {Profile.name}</p>
        <p className="profile-text">Age: {Profile.age}</p>
      </div>
    </div>
  );
};

export default Profile;

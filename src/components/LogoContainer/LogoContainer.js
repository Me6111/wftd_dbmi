


import './LogoContainer.css'; // Import the CSS file
import logo from './logo.jpg'; // Adjust the path if necessary


const LogoContainer = () => {

  return (
    <>
      <div className="LogoContainer">
        <div className="icon-container" id="logo-icon-container">
          <img src={logo} alt="Logo" />
        </div>
      </div>
    </>
  );
};

export default LogoContainer;

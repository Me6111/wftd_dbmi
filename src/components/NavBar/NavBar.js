import './NavBar.css'; // Import the CSS file
import MainMenuButton from '../MainMenuButton/MainMenuButton'; // Import the MainMenu component
import LogoContainer from '../LogoContainer/LogoContainer'

const NavBar = () => {

  return (
    <>
      <div className="nav-bar">

        <LogoContainer />

        <MainMenuButton />

      </div>
    </>
  );
};

export default NavBar;

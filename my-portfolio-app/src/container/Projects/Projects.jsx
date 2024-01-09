import { Link } from "react-router-dom";
import brodman from "../assets/brodman.jpg";
import mediaid from "../assets/doctor-list.png";
import imgVault from "../assets/vault.PNG";
import employee from "../assets/employee.png";
import library from "../assets/library.png";
import ecommerce from "../assets/ecommerce.png";
import "./Projects.css";

const Projects = () => {
  return (
    <div className="projects">
      <h1>Projects</h1>
      <p>Please visit my github to see other projects.</p>
      <a href={"https://github.com/Parvej-Hoque-Palash"} target="_">
        <box-icon type="logo" name="github"></box-icon>
      </a>
      <div className="projects__page">
      <div className="project__details project__card">
        <h3>Employee Management</h3>
          <Link to="https://emp980.netlify.app/" target="_blank">
            <img src={employee} className="emp__logo" alt="Employee Management" />
          </Link>
        </div>
        <div className="project__details project__card">
        <h3>Bandarban Library</h3>
          <Link to="https://github.com/Parvej-Hoque-Palash/Bandarban-Library" target="_blank">
            <img src={library} className="library__logo" alt="Library Management" />
          </Link>
        </div>
        <div className="project__details project__card">
        <h3>Konta Niben</h3>
          <Link to="https://github.com/SQA-PROJECT-1/Konta-Niben" target="_blank">
            <img src={ecommerce} className="ecommerce__logo" alt="Beauty Products" />
          </Link>
        </div>
        <div className="project__details project__card">
        <h3>Medi Aid</h3>
          <Link to="https://medi-aid-app.pages.dev/" target="_blank">
            <img src={mediaid} className="doctor__logo" alt="Doctor Image" />
          </Link>
        </div>
        <div className="project__details project__card">
        <h3>BrodMan</h3>
          <Link to="https://brodman-pure-css.pages.dev/" target="_blank">
            <img src={brodman} className="brodman__logo" alt="Brodman Image" />
          </Link>
        </div>
        <div className="project__details project__card">
        <h3>Image Vault</h3>
          <Link to="https://image-vault-by-palash.netlify.app/" target="_blank">
            <img src={imgVault} className="vault__logo" alt="Image Vault" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Projects;

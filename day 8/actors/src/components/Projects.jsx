import { useState } from "react";

function Projects() {
  const [show, setShow] = useState(false);

  const toggle = () => {
    setShow(!show);
  };

  return (
    <section style={{ padding: "40px", textAlign: "center" }}>
      <h2>My Projects</h2>

      {/* Project 1 */}
      <div className="card">
        <h3>Portfolio Website</h3>
        {show && <p>Personal portfolio built using React.</p>}
        <button onClick={toggle}>
          {show ? "Show Less" : "Show More"}
        </button>
      </div>

      {/* Project 2 */}
      <div className="card">
        <h3>IoT Energy Monitor</h3>
        {show && <p>Detects electricity theft using IoT.</p>}
        <button onClick={toggle}>
          {show ? "Show Less" : "Show More"}
        </button>
      </div>

      {/* Project 3 */}
      <div className="card">
        <h3>Drone Navigation System</h3>
        {show && <p>Autonomous drone using GPS.</p>}
        <button onClick={toggle}>
          {show ? "Show Less" : "Show More"}
        </button>
      </div>
    </section>
  );
}

export default Projects;
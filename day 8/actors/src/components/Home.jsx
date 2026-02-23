import { useState } from "react";

function Home() {
  const [show, setShow] = useState(false);

  return (
    <section style={{ padding: "40px", textAlign: "center" }}>
      <h1 style={{ color: "blue" }}>yugeshwaran</h1> {/* Inline CSS */}
      <h3>Frontend Developer</h3>
      <p>Hello! I am a passionate web developer learning React.</p>

      <button onClick={() => setShow(!show)}>
        {show ? "Hide Message" : "Show Message"}
      </button>

      {show && <p>Welcome to my portfolio website 🚀</p>}
    </section>
  );
}

export default Home;
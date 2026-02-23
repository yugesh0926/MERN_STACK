import { useState } from "react";

function Contact() {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(true);
  };

  return (
    <section style={{ padding: "40px", textAlign: "center" }}>
      <h2>Contact Me</h2>
      <p>Email: yourmail@gmail.com</p>
      <p>Phone: 1234567890</p>

      <button onClick={handleClick}>Click Me</button>

      {clicked && <p>Thanks for contacting me!</p>}
    </section>
  );
}

export default Contact;
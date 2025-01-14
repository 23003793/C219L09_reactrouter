import { useRef } from "react";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const navigate = useNavigate();
  const nameRef = useRef(null); // Fixed the typo here
  const emailRef = useRef(null);

  function handleSubmit(event) {
    event.preventDefault();

    const name = nameRef.current.value.trim();
    const email = emailRef.current.value.trim();

    if (name && email) {
      navigate("/confirmed", { state: { name, email } });
    } else {
      alert("Please fill out both the name and email fields.");
    }
  }

  return (
    <div className="container">
      <h1>Register for Red30 Tech</h1>
      <p>
        Make sure to grab your spot for this year's conference! We love
        technology and consistently work towards being the premier provider of
        technology solutions and events that connect the world.
      </p>
      <form onSubmit={handleSubmit} autoComplete="off">
        <label>
          Name:
          <input type="text" name="name" ref={nameRef} required />
        </label>
        <label>
          Email:
          <input type="email" name="email" ref={emailRef} required />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

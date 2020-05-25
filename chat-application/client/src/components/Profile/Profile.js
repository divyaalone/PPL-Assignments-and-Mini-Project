
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Profile.css";

export default function SignIn(props) {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");

 
  function create() {
      props.history.push(`/vchat/${room}`);
  }

  return (
    <div className="outerContainer">
      <div className="innerContainer">
        <h1 className="heading">Join</h1>
        <div>
          <input
            placeholder="Name"
            className="joinInput"
            type="text"
            onChange={(event) => setName(event.target.value)}
          />
        </div>
        <div>
          <input
            placeholder="Room"
            className="joinInput mt-20"
            type="text"
            onChange={(event) => setRoom(event.target.value)}
          />
        </div>
        <Link
          onClick={(e) => (!name || !room ? e.preventDefault() : null)}
          to={`/chat?name=${name}&room=${room}`}
        >
          <button className={"button mt-20"} type="submit">
            Join
          </button>
        </Link>
        <button className = { "button mt-20" } onClick = {create}>VideoChat</button>

      </div>
    </div>
  );
}

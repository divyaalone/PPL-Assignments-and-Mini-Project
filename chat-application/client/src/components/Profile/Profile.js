// import React, { Component } from "react";
// import { Link } from "react-router-dom";

// //import jwt_decode from 'jwt-decode'

// class Profile extends Component {
//   constructor() {
//     super();
//     this.state = {
//       name: "",
//       room: "",
//       errors: {},
//       link: "",
//     };
//   }
//   onChange = (e) => {
//     this.setState({
//       [e.target.id]: e.target.value,
//     });
//   };

//   render() {
//     if (this.state.join === true) {
//       <Link to={this.state.link} />;
//     }
//     return (
//       <div className="joinOuterContainer">
//         <div className="joinInnerContainer">
//           {/* <div className="col-md-6 mt-5 mx-auto"> */}
//           {/* <form onSubmit={this.onSubmit}> */}
//           <h1 className="heading">JOIN</h1>
//           <hr />

//           <div className="form-group">
//             <label htmlFor="username">Name</label>
//             <input
//               type="text"
//               className="form-control"
//               id="name"
//               placeholder="Name"
//               value={this.state.name}
//               onChange={this.onChange}
//               required
//             />
//           </div>
//           <div className="form-group">
//             <label htmlFor="room">Room</label>
//             <input
//               type="text"
//               className="form-control"
//               id="room"
//               placeholder="Room Name"
//               value={this.state.room}
//               onChange={this.onChange}
//               required
//             />
//           </div>
//           <Link to={"/chat?name="+{this.state.name}+"&room="+{this.state.room}}>
//             <button className={"button mt-20"} type="submit">
//               Join
//             </button>
//           </Link>
//           {/* <button
//               type="submit"
//               className="mb-3 btn btn-lg btn-primary btn-block"
//             >
//               Join
//             </button> */}
//           {/* </form> */}
//           {/* </div> */}
//         </div>
//       </div>
//     );
//   }
// }

// export default Profile;

import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./Profile.css";

export default function SignIn() {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");

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
      </div>
    </div>
  );
}

import React from "react";
import profile from "../images/profile.jpeg";

export default function Avatar() {
  return (
    <img
      className="avatar-img"
      src={profile}
      alt="Francesca Rigoni"
    />
  );
}
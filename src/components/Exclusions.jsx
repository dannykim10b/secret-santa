import React from "react";
import { Link } from "react-router-dom";

export default function OptionalDataForm() {
  return (
    <>
    <div>
        <h3>Set exclusions</h3>
        <h3>set other settings like optional price limit, date time, custom message</h3>
        <h1>send</h1>
        <Link to="/secret-santa-1">back</Link>
        <Link to="/secret-santa-3">submit</Link>
    </div>
    </>
  );
}
import React from "react";
import { Link } from "react-router-dom";

export default function RequiredDataForm() {
  return (
    <>
    <div>
        <h1>YOUR NAME</h1>
        <h1>PARTICIPANTS with email</h1>
        <h3>ADD PARTICIPANTS</h3>
        <h3>Set exclusions</h3>
        <h3>set other settings like optional price limit, date time, custom message</h3>
        <h1>send</h1>
        <Link to="/">back</Link>
        <Link to="/secret-santa-2">continue</Link>
    </div>
    </>
  );
}
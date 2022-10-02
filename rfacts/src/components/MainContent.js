import React from "react";
import "./MainContent.css";

export default function MainContent() {
  return (
    <div className="body">
      <h1>
        Let's learn some facts about React JS the most popular frontend library.
      </h1>
      <ul className="list">
        <li>It's component based</li>
        <li>It's declarative</li>
        <li>It's non restrictive we can use any design pattern we want</li>
        <li>State and Props make developers life a lot easier</li>
        <li>Very supportive community</li>
      </ul>
    </div>
  );
}

import React from "react";
import "./styles.css";

export default function App() {
  const navArr = ["Home", "Products", "Blog", "About"];

  return (
    <header>
      <nav>
        <div className="logo">LOGO</div>
        <ul>
          {navArr.map((el) => (
            <li key={el}>
              <p>{el}</p>
            </li>
          ))}
        </ul>
      </nav>

      <div className="half">
        <h1>Life changing product</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum,
          dolor?
        </p>
        <button>Get Started</button>
      </div>
    </header>
  );
}

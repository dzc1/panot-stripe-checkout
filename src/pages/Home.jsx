import { useState } from "react";
import Logos from "../components/Logos";

function Home() {
  const [count, setCount] = useState(0);
  const text = {
    heading: "Vite + React + React Router + Minimal CSS",
    subheading: "Home Page",
    intro:
      "Welcome, Technigo students! This boilerplate is designed specifically for you. We understand the importance of a smooth start, especially when diving into libraries like React Router. With this in mind, we've crafted an out-of-the-box solution to help you seamlessly integrate the router library into your projects.",
    cleanup: "If you want to remove all stylings you can do the following:",
    html: ` <ul>
    <li>
      Comment line 5 of this file which pertains to the import of the CSS
      file called <strong>App.css</strong> with the
      <code>import "./App.css";</code>
    </li>
    <li>
      Navigate to the file with the name <strong>main.jsx</strong> and
      comment/remove line 4 which pertains to the import of the CSS file
      called <strong>index.css</strong> with the
      <code>import "./index.css";</code>
    </li>
    <li>
      Remove all logos from this file like the Technigo, React or Vite Logo
      and proceed to remove their imports as well as remove the files
    </li>
    <li>
      After these steps have being performed, we recommend removing these
      files to keep the folder structure minimal and easier to navigate.
    </li>
    <li>
      If you are feeling lazy you use this
      <a href="https://github.com/Technigo/react-router-boiler-plate-no-css" target="_blank" rel="noopener noreferrer">
        minimal starter with no styling
      </a>
    </li>
  </ul>`,
  };

  return (
    <>
      <Logos />
      <h1 className="heading">{text.heading}</h1>
      <h2>{text.subheading}</h2>
      <p>{text.intro}</p>
      <p>{text.cleanup}</p>
      {/* Example of using a js property to inject dyanmic html */}
      <div dangerouslySetInnerHTML={{ __html: text.html }} />
      <div className="card">
        {/* Example of using a useState Hook using a simple counter */}
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </>
  );
}

export default Home;

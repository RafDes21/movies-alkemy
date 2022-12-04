import React from "react";
import { BsLinkedin } from "react-icons/bs";

//styles
import "../css/footer.css";

export const Footer = () => {
  return (
    <div>
      <footer>
        <nav>
          <ul>
            <li>
              <a href="https://linkedin.com/in/israelfrontend/" rel="noreferrer" target="_blank">
                <BsLinkedin />
              </a>
            </li>
          </ul>
        </nav>
        <p>Copyright RafCoder</p>
      </footer>
    </div>
  );
};

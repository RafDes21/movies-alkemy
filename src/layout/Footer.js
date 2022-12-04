import React from "react";
import {BsLinkedin} from "react-icons/bs"

//styles
import "../css/footer.css";

export const Footer = () => {
  return (
    <div>
      <footer>
        <nav>
          <ul>
            <li>
              <a
                href="www.linkedin.com/in/israelfrontend" target="_blank"
                rel="noopener noreferrer"
              >
                <BsLinkedin/>
              </a>
            </li>
          </ul>
        </nav>
        <p>Copyright RafCoder</p>
      </footer>
    </div>
  );
};

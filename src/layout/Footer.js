import React from "react";
import { BsLinkedin, BsWhatsapp, BsFacebook, BsGithub } from "react-icons/bs";

//styles
import "../css/footer.css";

export const Footer = () => {
  return (
    <div>
      <footer>
        <nav>
          <ul className="d-flex gap-5">
            <li>
              <a
                href="https://linkedin.com/in/israelfrontend/"
                rel="noreferrer"
                target="_blank"
              >
                <BsLinkedin />
              </a>
            </li>
            <li>
              <a
                href="https://github.com/RafDes21"
                target="_blank"
                rel="noreferrer"
              >
                <BsGithub />
              </a>
            </li>
            <li>
              <a
                href="https://www.facebook.com/israel.tineo.589"
                target="_blank"
                rel="noreferrer"
              >
                <BsFacebook />
              </a>
            </li>
            <li>
              <a
                href="https://api.whatsapp.com/send?phone=541122521870"
                target="_blank"
                rel="noreferrer"
              >
                <BsWhatsapp />
              </a>
            </li>
          </ul>
        </nav>
        <p>Copyright RafCoder</p>
      </footer>
    </div>
  );
};

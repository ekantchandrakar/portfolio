import React from 'react';
import leetcode from "../icons/leetcode.png";

// Fontawesome
import {
  faLinkedin,
  faHackerrank,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import {
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Logos = () => {
  return (
    <div className="ui grid">
      <div className="six wide column"></div>
      <div className="ten wide column logos">
        <a target="_blank" href="https://github.com/ekantchandrakar">
          <FontAwesomeIcon className="icon" size="2x" icon={faGithub} />
        </a>
        <a target="_blank" href="https://www.linkedin.com/in/ekantchandrakar/">
          <FontAwesomeIcon className="icon" size="2x" icon={faLinkedin} />
        </a>
        <a
          target="_blank"
          href="https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcSBptPSrnFJRrrtrQlSVChBlFjdXTJgsjjdZFKvNXPksfGnvVwfcxblMpqgjvFXwSRkQGDNq"
        >
          <FontAwesomeIcon className="icon" size="2x" icon={faEnvelope} />
        </a>
        <a target="_blank" href="https://leetcode.com/Ekant_29/">
          <i className="icon">
            <img className="leetcode" src={leetcode} />
          </i>
        </a>
        <a target="_blank" href="https://www.hackerrank.com/ekantchandrakar">
          <FontAwesomeIcon className="icon" size="2x" icon={faHackerrank} />
        </a>
        <a
          href="https://drive.google.com/file/d/1Qgg31Irj8at148Is-3RdF17Jz_AErF6b/view?usp=drivesdk"
          target="_blank"
        >
          <button className="get-resume-button">Get Resume</button>
        </a>
      </div>
    </div>
  );
};

export default Logos;
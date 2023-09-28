/* eslint-disable react/jsx-no-target-blank */
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai'
import styled from './Footer.module.css'

function Footer()  {
  return (
    <footer className={styled.footer}>
      <div >
          <a target='_blank' href="https://github.com/rennanveras">
            <AiFillGithub/>
          </a>
          <a target='_blank' href="https://www.linkedin.com/in/rennan-veras/">
            <AiFillLinkedin/>
          </a>
      </div>
      <>
        <p className={styled.copy}>
          coded by <a target='_blank' href="https://www.linkedin.com/in/rennan-veras/">rennanveras</a>
          </p> 
      </>
    </footer>
  );
}

export default Footer;
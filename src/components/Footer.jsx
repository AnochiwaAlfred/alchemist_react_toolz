import React from 'react'
import { Link } from 'react-router-dom'
import { FaTwitter, FaLinkedinIn, FaGithub, FaFacebookF } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer>
      <section className="container footer__main">
        <div>
          <h3 className="footer__title">ABOUT</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, consequuntur ex dolore cum optio quidem iure exercitationem eaque nihil in eligendi laudantium facere harum eligendi laudantium facere harum eligendi laudantium facere harum odit sint magnam natus beatae, amet officia impedit ipsa, adipisci earum quod? Nemo ratione reiciendis modi sunt autem ad vero! Earum, neque. Libero aspernatur error provident hic maxime. Quasi, temporibus id? Ab consequuntur quia repellat iste!</p>
        </div>
        <div>
          <h3 className="footer__title">CATEGORIES</h3>
          <ul>
            <li><Link className="footer__title-link" to="/">C</Link></li>
            <li><Link className="footer__title-link" to="/">UI Design</Link></li>
            <li><Link className="footer__title-link" to="/">PHP</Link></li>
            <li><Link className="footer__title-link" to="/">Java</Link></li>
            <li><Link className="footer__title-link" to="/">Android</Link></li>
            <li><Link className="footer__title-link" to="/">Python</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="footer__title">QUICK LINKS</h3>
          <ul>
            <li><Link className="footer__title-link" to="/accordion">Accordion</Link></li>
            <li><Link className="footer__title-link" to="/shopping-list">Shopping List</Link></li>
            <li><Link className="footer__title-link" to="/github-user-search">Github User Search</Link></li>
            <li><Link className="footer__title-link" to="/accordion">Accordion</Link></li>
            <li><Link className="footer__title-link" to="/accordion">Accordion</Link></li>
            <li><Link className="footer__title-link" to="/accordion">Accordion</Link></li>
          </ul>
        </div>
      </section>
      <hr className="footer__rule container"/>
      <section className="footer__copyright container">
        <p>Copyright &copy; 2024 All Rights Reserved by <strong><Link className="green-check" to="https://anochiwaalfred-portfolio.vercel.app/">theapialchemist</Link></strong></p>  
        <div className="foot__socials">
            <Link target="_blank" to="https://m.facebook.com/anochiwaa/"><FaFacebookF className="footer__icon"/></Link>
            <Link target="_blank" to="https://x.com/API__Alchemist/"><FaTwitter className="footer__icon"/></Link>
            <Link target="_blank" to="https://github.com/AnochiwaAlfred/"><FaGithub className="footer__icon"/></Link>
            <Link target="_blank" to="https://www.linkedin.com/in/anochiwaalfred/"><FaLinkedinIn className="footer__icon"/></Link>
        </div>
      </section>
    </footer>
  )
}

export default Footer

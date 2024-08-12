import "./page.css";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import ppic from "../src/assets/ppic.png";
import js from "../src/assets/js.jpg";
import react from "../src/assets/react.jpg";
import git from "../src/assets/git.jpg";
import html from "../src/assets/html.jpg";
import css from "../src/assets/css.jpg";
import { AiOutlineClose } from "react-icons/ai";
import pdf from "../src/assets/Resume.pdf";
import { LiaUniversitySolid } from "react-icons/lia";
import {
  AiOutlineGithub,
  AiOutlineInstagram,
  AiOutlineLinkedin,
  AiOutlinePhone,
  AiOutlineMail,
} from "react-icons/ai";
import { LiaTelegramPlane } from "react-icons/lia";
import { useState } from "react";

import { useInView } from "react-intersection-observer";
import { Helmet } from "react-helmet-async";

export default function Page() {
  let inputn = useRef();
  let inputm = useRef();
  let inpute = useRef();
  let inputn1 = useRef();
  let inpute1 = useRef();
  let inputm1 = useRef();
  let form = useRef();
  let form2 = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_imsqgdo",
        "template_4wxz28f",
        form.current,
        "clWwjzM_Hia2rTXhm"
      )
      .then(
        (result) => {
          console.log(result.text);
          setTimeout(async () => {
            document.querySelectorAll(".submitBtn")[0].innerHTML =
              await "Submit";
          }, 5000);
          document.querySelectorAll(".submitBtn")[0].innerHTML =
            "Message sent, I will Respond ASAP";
          inputn.current.value = "";
          inputm.current.value = "";
          inpute.current.value = "";
          inputn1.current.value = "";
          inpute1.current.value = "";
          inputm1.current.value = "";
        },
        () => {
          setTimeout(async () => {
            document.querySelectorAll(".submitBtn")[0].innerHTML =
              await "Submit";
          }, 5000);
          document.querySelectorAll(".submitBtn")[0].innerHTML =
            "Message not'sent";
        }
      );
  };
  const sendEmail2 = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_imsqgdo",
        "template_4wxz28f",
        form2.current,
        "clWwjzM_Hia2rTXhm"
      )
      .then(
        (result) => {
          console.log(result.text);
          setTimeout(async () => {
            document.querySelectorAll(".submitBtn")[1].innerHTML =
              await "Submit";
          }, 5000);
          document.querySelectorAll(".submitBtn")[1].innerHTML =
            "Message sent, I will Respond ASAP";
          inputn.current.value = "";
          inputm.current.value = "";
          inpute.current.value = "";
          inputn1.current.value = "";
          inpute1.current.value = "";
          inputm1.current.value = "";
        },
        () => {
          setTimeout(async () => {
            document.querySelectorAll(".submitBtn")[1].innerHTML =
              await "Submit";
          }, 5000);
          document.querySelectorAll(".submitBtn")[1].innerHTML =
            "Message not'sent";
        }
      );
  };

  const { ref, inView } = useInView({
    /* Optional options */
    threshold: 0.7,
    triggerOnce: true,
  });

  const { ref: ref2, inView: inView2 } = useInView({
    /* Optional options */
    threshold: 0.5,
    triggerOnce: true,
  });

  const [r, setr] = useState(true);

  function resumec() {
    if (r) {
      document.querySelector(".resume").classList.add("dnone");

      setr(!r);
    }
    if (!r) {
      document.querySelector(".resume").classList.remove("dnone");
      setr(!r);
    }
  }

  function skF(e) {
    let c = "";
    switch (e.target.alt) {
      case "Html Pic":
        c = "addhtml";
        break;
      case "Js Pic":
        c = "addjs";
        break;
      case "Css Pic":
        c = "addcss";
        break;
      case "Git Pic":
        c = "addgit";
        break;
      case "React Pic":
        c = "addreact";
        break;
    }
    document.querySelector(".skillWrapper").classList.add(c);
  }

  function skG(e) {
    let c = "";
    switch (e.target.alt) {
      case "Html Pic":
        c = "addhtml";
        break;
      case "Js Pic":
        c = "addjs";
        break;
      case "Css Pic":
        c = "addcss";
        break;
      case "Git Pic":
        c = "addgit";
        break;
      case "React Pic":
        c = "addreact";
        break;
    }
    document.querySelector(".skillWrapper").classList.remove(c);
  }
  return (
    <>
      <div className="nav">
        
        <Helmet>
          <title>Eyob Betemariam</title>
          <meta name="keywords" content="eyob, betemariam, eyob2m, mern stack, ethiopia, addis ababa,software engineering, freelancer"/>
          <meta
            name="description"
            content=" Currently software engineering student at Addis Ababa Science and
              technology University, working on MERN stack development using the
              REACT framework, Acquired a strong knowledge of HTML, Tailwind, CSS, RTK,Express.js
              JavaScript and other front end frameworks."
          />
          <link rel="canonical" href="/" />
        </Helmet>
        <div className="navWrapper">
          <span onClick={resumec} className="resume0">
            Get in touch
          </span>
        </div>
      </div>

      <div className="home">
        <div className="homeWrapper">
          <img className="pp" src={ppic} alt="" />

          <div className="right">
            <h2>Hello i&apos;m</h2>
            <h3>Eyob Betemariam</h3>
            <span>Frontend Developer</span>
            <p>
              Currently software engineering student at Addis Ababa Science and
              technology University, working on MERN stack development using the
              REACT framework, Acquired a strong knowledge of HTML, Tailwind, CSS, RTK,Express.js
              JavaScript and other front end frameworks.
            </p>
            <a href={pdf} rel="noopener noreferrer" target="_blank">
              {" "}
              <button className="btn1">Resume </button>
            </a>
          </div>
        </div>
      </div>

      <div className="about">
        <h2 className="titleA">About</h2>
        <div className="aboutWrapper">
          <div ref={ref} className={inView ? "whoAmI" : "opaz"}>
            <b>Who I am</b>
            <p>
              My name is Eyob Betemariam and I am a software student at Addis
              Ababa Science and Technology University. I specialize in front-end
              development, particularly in the REACT framework. Throughout my
              studies and work experiences, I have learned how to effectively
              collaborate with teams and think creatively to find innovative
              solutions. My ultimate goal is to work on projects that have a
              positive impact on society and make a difference in people&apos;s
              lives. I am excited to contribute my skills and knowledge to
              meaningful projects.
            </p>
          </div>
          <div ref={ref} className={inView ? "edu" : "opaz2"}>
            <b>Education</b>
            <p>
              <LiaUniversitySolid className="uniLogo" /> Addis Ababa Science And
              Technology University <br />
              Software Engineering
              <br />
              2020-2025
              <br />
              <LiaUniversitySolid className="uniLogo" />
              Entoto Poly Technic Colledge <br />
              Basic Electronics and Communication Multimedia
              <br />
              2017-2019
            </p>
          </div>
        </div>
      </div>

      <div className="skill">
        <h2 className="titleS">Skills</h2>
        <div className="skillWrapper">
          <ul ref={ref2} className={inView2 ? "ul" : "ulv"}>
            <li>
              {" "}
              <span>Html</span>{" "}
              <img
                onMouseLeave={skG}
                onMouseEnter={skF}
                src={html}
                alt="Html Pic"
              />{" "}
            </li>
            <li>
              {" "}
              <span>Css</span>
              <img
                onMouseLeave={skG}
                onMouseEnter={skF}
                src={css}
                alt="Css Pic"
              />
            </li>
            <li>
              {" "}
              <span>Javascript</span>
              <img
                onMouseLeave={skG}
                onMouseEnter={skF}
                src={js}
                alt="Js Pic"
              />
            </li>
            <li>
              {" "}
              <span>React</span>
              <img
                onMouseLeave={skG}
                onMouseEnter={skF}
                src={react}
                alt="React Pic"
              />
            </li>
            <li>
              {" "}
              <span>Git</span>
              <img
                onMouseLeave={skG}
                onMouseEnter={skF}
                src={git}
                alt="Git Pic"
              />
            </li>
          </ul>
        </div>
      </div>

      <div className="contact">
        <div className="contactWrapper">
          <div className="titleC">Contact</div>
          <div className="left">
            <h3 className="emailAdd">
              {" "}
              <AiOutlineMail className="mailLogo" /> eyob2etemariam@gmail.com
            </h3>
            <h3 className="phoneAdd">
              <AiOutlinePhone className="phoneLogo" /> +251985238243
            </h3>
            <div className="linksList">
              <a
                href="https://github.com/eyob2m"
                className=" logos gitLogo"
                rel="noopener noreferrer"
                target="_blank"
              >
                {" "}
                <AiOutlineGithub />{" "}
              </a>
              <a
                href="https://instagram.com/eyob2m"
                className=" logos instaLogo"
                rel="noopener noreferrer"
                target="_blank"
              >
                {" "}
                <AiOutlineInstagram />
              </a>
              <a
                href="https://www.linkedin.com/in/eyob-betemariam-3760a0278"
                className=" logos linkLogo"
                rel="noopener noreferrer"
                target="_blank"
              >
                {" "}
                <AiOutlineLinkedin />
              </a>
              <a
                href="https://t.me/eyob2m"
                className=" logos teleLogo"
                rel="noopener noreferrer"
                target="_blank"
              >
                {" "}
                <LiaTelegramPlane />
              </a>
            </div>
            <a download href={pdf}>
              {" "}
              <button className="btn1">Download CV</button>
            </a>
          </div>
          <form ref={form} onSubmit={sendEmail} action="#">
            <input
              autoComplete="off"
              ref={inputn}
              className="nameInput"
              placeholder="Name"
              type="text"
              name="user_name"
            />
            <input
              autoComplete="off"
              ref={inpute}
              className="emailInput"
              placeholder="Email"
              required
              type="email"
              name="user_email"
            />
            <textarea
              ref={inputm}
              className="msgInput"
              placeholder="Your Message"
              required
              name="message"
              id=""
              cols="20"
              rows="10"
            ></textarea>
            <button className="submitBtn">Submit</button>
          </form>
        </div>
      </div>

      <div className="resume">
        <form ref={form2} onSubmit={sendEmail2} action="#">
          <input
            autoComplete="off"
            ref={inputn1}
            className=" in nameInput"
            placeholder="Name"
            type="text"
            name="user_name"
          />
          <input
            autoComplete="off"
            ref={inpute1}
            className="in emailInput"
            required
            placeholder="Email"
            type="email"
            name="user_email"
          />
          <textarea
            ref={inputm1}
            className=" in msgInput"
            placeholder="Your Message"
            required
            name="message"
            id=""
            cols="20"
            rows="10"
          ></textarea>
          <button className="submitBtn">Submit</button>
        </form>
        <AiOutlineClose onClick={resumec} className="close" />
      </div>
    </>
  );
}

import './page.css'
import ppic from './pic.jpg'
import js from '../src/assets/js.jpg'
import react from '../src/assets/react.jpg'
import git from '../src/assets/git.jpg'
import html from '../src/assets/html.jpg'
import css from '../src/assets/css.jpg'
import {AiOutlineGithub,AiOutlineInstagram,AiOutlineLinkedin, AiOutlinePhone, AiOutlineMail } from "react-icons/ai";
import { LiaTelegramPlane } from "react-icons/lia";
export default function Page() {
  return (
  <>
   <div className="nav">
<div className="navWrapper">
 <span>Resume</span> 
</div>
   </div>

<div className="home">
<div className="homeWrapper">
<img src={ppic} alt="" />

<div className="right">
  
  <h2>Hello i'm</h2>
  <h3>Eyob Betemariam</h3>
  <span>Frontend Developer</span>
   <p>Im Currently software engineering student at aastu interested in working as freelance , parttime and full time frontend developer
   </p> 
   <button className='btn1'>Download CV</button>
   </div>
  
 </div>

</div>



<div className="skill">
<div className="skillWrapper">
<ul>
  <li> <span>Html</span> <img src={html} alt="Html Pic" /> </li>
  <li> <span>Css</span><img src={css} alt="Css Pic" /></li>
  <li> <span>Javascript</span><img src={js} alt="Js Pic" /></li>
  <li> <span>React</span><img  src={react} alt="React Pic" /></li>
  <li> <span>Git / Github</span><img src={git} alt="Git" /></li>
</ul>
</div>
</div>




<div className="contact">
<h2 className='mobileC'>Contact</h2>
<div className="contactWrapper">
<div className="left">
<h2>Contact</h2>
<h3 className='emailAdd' > <AiOutlinePhone />  eyob2etemariam@gmail.com</h3>
<h3 className='phoneAdd'> <AiOutlineMail /> +251985238243</h3>
<div className="linksList">  
<AiOutlineGithub /> <AiOutlineInstagram /> <AiOutlineLinkedin /> <LiaTelegramPlane />

</div>
<button type='submit' className='btn1' >Download Cv</button>
</div>
<form action="#">
<input className='nameInput' placeholder='Name' type="text" name='subject'/>
<input className='emailInput' placeholder='Email' type="email" name='email' />
<textarea className='msgInput' placeholder='Your Message' name="msg" id="" cols="50"  rows="10"></textarea>
<button className='submitBtn' >Submit</button>



</form>

</div>

</div>


</>
  )
}

import './page.css'
import ppic from './pic7.png'
import js from '../src/assets/js.jpg'
import react from '../src/assets/react.jpg'
import git from '../src/assets/git.jpg'
import html from '../src/assets/html.jpg'
import css from '../src/assets/css.jpg'
import { AiOutlineClose } from 'react-icons/ai'
import { LiaUniversitySolid } from 'react-icons/lia'
import {AiOutlineGithub,  AiOutlineInstagram,AiOutlineLinkedin, AiOutlinePhone, AiOutlineMail } from "react-icons/ai";
import { LiaTelegramPlane } from "react-icons/lia";
import { useState } from 'react'
export default function Page() {

function subFun(e) {
  e.preventDefault();  setTimeout( async ()=> {  document.querySelectorAll('.submitBtn')[1].innerHTML = await "Submit"},5000);  document.querySelectorAll('.submitBtn')[1].innerHTML = "Message sent, I will Respond ASAP"; }

function subFun2(e) {
   e.preventDefault();  setTimeout( async ()=> {  document.querySelectorAll('.submitBtn')[0].innerHTML = await "Submit"},5000);  document.querySelectorAll('.submitBtn')[0].innerHTML = "Message sent, I will Respond ASAP"; }


const [r,setr] = useState(true)

function resumec() {
if(r) {
  document.querySelector('.resume').classList.add('dnone') ; 


  setr(!r) }
  if(!r) {
    document.querySelector('.resume').classList.remove('dnone'); setr(!r) }
  

}
  

function skF(e) {
  let c= ''
switch(e.target.alt) {

  case "Html Pic": c = 'addhtml'; break;
  case "Js Pic": c = 'addjs'; break;
  case "Css Pic": c = 'addcss'; break;
  case "Git Pic": c = 'addgit'; break;
  case "React Pic": c = 'addreact'; break; }
  document.querySelector('.skillWrapper').classList.add(c)


}

function skG(e) {

  let c= ''
  switch(e.target.alt) {
  
  
    case "Html Pic": c = 'addhtml'; break;
    case "Js Pic": c = 'addjs'; break;
    case "Css Pic": c = 'addcss'; break;
    case "Git Pic": c = 'addgit'; break;
    case "React Pic": c = 'addreact'; break; }
    document.querySelector('.skillWrapper').classList.remove(c)
  
  
}
  return (
  <>
   <div className="nav">
<div className="navWrapper">
 <span onClick={resumec} className='resume0' >Resume</span> 
</div>
   </div>

<div className="home">
<div className="homeWrapper">
<img className='pp' src={ppic} alt="" />

<div className="right">
  
  <h2>Hello i'm</h2>
  <h3>Eyob Betemariam</h3>
  <span>Frontend Developer</span>
   <p>Im Currently software engineering student at aastu interested in working as freelance , parttime and full time frontend developer
   </p> 
   <a download href="../src/assets/robbins.pdf"> <button className='btn1' >Download CV</button></a>
   </div>
  
 </div>

</div>


<div className="about">
<h2 className='titleA'>About</h2>
  <div className='aboutWrapper'>
  <div className="whoAmI">
  <b>Who I am</b>
<p>
Im Currently software engineering student at aastu interested in working as freelance , parttime and full time frontend developer Im Currently software engineering student at aastu interested in working as freelance , parttime and full time frontend developer
</p>
</div>
<div className="edu">
<b>Education</b>
<p>
<LiaUniversitySolid className='uniLogo' /> Addis Ababa Science And Technology University <br />
Software Engineering<br />
2020-2025<br />
<LiaUniversitySolid className='uniLogo' />Entoto Poly Technic Colledge <br />
Basic Electronics and Communication Multimedia<br />
2017-2019
</p> 
</div>
</div>
</div>



<div className="skill">
<div className="skillWrapper">
<h2 className="titleS">Skills</h2>
<ul>
  <li>  <span>Html</span> <img  onMouseLeave={skG} onMouseEnter={skF} src={html} alt="Html Pic" /> </li>
  <li> <span>Css</span><img onMouseLeave={skG} onMouseEnter={skF} src={css} alt="Css Pic" /></li>
  <li> <span>Javascript</span><img onMouseLeave={skG} onMouseEnter={skF} src={js} alt="Js Pic" /></li>
  <li> <span>React</span><img onMouseLeave={skG} onMouseEnter={skF} src={react} alt="React Pic" /></li>
  <li> <span>Git / Github</span><img onMouseLeave={skG} onMouseEnter={skF} src={git} alt="Git Pic" /></li>
</ul>
</div>
</div>




<div className="contact">
<div className="contactWrapper">
<div className="titleC">Contact</div>
<div className="left">
<h3 className='emailAdd' > <AiOutlinePhone className='phoneLogo'/>  eyob2etemariam@gmail.com</h3>
<h3 className='phoneAdd'> <AiOutlineMail className='mailLogo' /> +251985238243</h3>
<div className="linksList">  
<a href='g.com' className=' logos gitLogo' > <AiOutlineGithub  />     </a>
<a href='g.com' className=' logos instaLogo' >  <AiOutlineInstagram /></a>
<a href='g.com' className=' logos linkLogo' >  <AiOutlineLinkedin /></a>
<a href='g.com' className=' logos teleLogo' >   <LiaTelegramPlane /></a>

</div>
 <a download href="../src/assets/robbins.pdf"> <button className='btn1' >Download CV</button></a>
</div>
<form  onSubmit={subFun2}  action="#">
<input className='nameInput' placeholder='Name' type="text" name='subject'/>
<input className='emailInput' placeholder='Email' type="email" name='email' />
<textarea className='msgInput' placeholder='Your Message' name="msg" id="" cols="20"  rows="10"></textarea>
<button className='submitBtn' >Submit</button>



</form>

</div>

</div>

<div className="resume">
<form onSubmit={subFun}  action="#">
<input className=' in nameInput' placeholder='Name' type="text" name='subject'/>
<input className='in emailInput' placeholder='Email' type="email" name='email' />
<textarea className=' in msgInput' placeholder='Your Message' name="msg" id="" cols="20"  rows="10"></textarea>
<button className='submitBtn' >Submit</button>



</form>
<AiOutlineClose onClick={resumec} className='close' />
</div>

</>
  )
}

import React, { useRef } from 'react';
import GitHub from "../src/img/GitHub.png"
import Image from "../src/img/Image.png"
import ContactI from "../src/img/Contact.png"
function App() {
  const Home = useRef(null)
  const About = useRef(null)
  const Contact = useRef(null)
  function ScrolltoEl(ToElement:any) {
    window.scrollTo({
      top: ToElement.current.offsetTop,
      behavior: "smooth"
    })
  }
  return (
    <div className="App mx-5 mt-4 mb-5">
      <header className='min-h-screen'>
        <nav className='flex justify-between flex-wrap'>
          <div className="main_text">Maksym Voloshyn</div>
          <div className="flex space-x-4 text">
            <div className='cursor-pointer'  onClick={()=>ScrolltoEl(Home)}>Home</div>
            <div className='cursor-pointer' onClick={()=>ScrolltoEl(About)}>About</div>
            <div className='cursor-pointer' onClick={()=>ScrolltoEl(Contact)}>Contact</div>
          </div>
          <div className="flex space-x-4">
            <a href="https://github.com/maxvol123"><img src={GitHub} className="h-6" alt=""/></a>
          </div>
        </nav>
    <div className="flex justify-between flex-wrap mt-20">
      <div className="mt-32">
        <div className="text mb-2">Hello, I'm Max,</div>
        <div className="main_text text-7xl">Front end </div>
        <div className="main_text text-7xl">Developer</div>
        <div className="text">based in Cyprus.</div>
        <a href="https://docs.google.com/document/d/1gUTmmSAyOpubV9SbbcSFPMcdSRW6rNVy/edit?usp=sharing&ouid=109421803578927270896&rtpof=true&sd=true"><button className='button_resume border-spacing-2 rounded px-3 py-1'>RESUME</button></a>
      </div>
      <div className="mt-16">
        <img className='h-72 relative md:h-96 mr-16 sm:h-72' src={Image} alt="" />
      </div>
    </div>
      </header>
      <main className=' text text-[#03045E] mb-28' ref={About}>
        <div className="yellow_text text-7xl">about.</div>
        <div className="text">Hi, I'm Max, I'm 15 years old. And at a young age, I learned a lot of technologies for Front end like:
</div>
<ul className='ml-5 mb-2'>
  <li>1.	HTML and BEM technology</li>
  <li>2.	CSS and preprocessors</li>
  <li>3.	JS and React</li>
</ul>
<div className="text">I recently finished middle school, at this school I went to an IT class. I started doing IT, including Front End, at the age of 12. I tried many technologies, but stopped on Front End.</div>
      </main>
      <footer ref={Contact}>
      <div className="yellow_text text-7xl">contact.</div>
      <div className="flex space-x-12 md:flex-nowrap sm:flex-wrap flex-wrap">
        <img src={ContactI} alt="" className='h-72' />
        <div className="flex flex-col">
          <div className="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet vulputate tristique quam felis. Id phasellus dui orci vulputate consequat nulla proin. Id sit scelerisque neque, proin bibendum diam.</div>
          <ul>
            <li>maxvol200727@gmail.com</li>
            <a href='https://github.com/maxvol123'>https://github.com/maxvol123</a>
            <li>maxvol200727@gmail.com</li>
          </ul>
        </div>
      </div>
      </footer>
    </div>
  );
}

export default App;

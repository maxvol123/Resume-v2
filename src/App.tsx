import React from 'react';
import GitHub from "../src/img/GitHub.png"
import Image from "../src/img/Image.png"
function App() {
  return (
    <div className="App mx-5 mt-4">
      <header>
        <nav className='flex justify-between flex-wrap'>
          <div className="main_text">Maksym Voloshyn</div>
          <div className="flex space-x-4 text">
            <a href="/">Home</a>
            <a href="/">About</a>
            <a href="/">Work</a>
          </div>
          <div className="flex space-x-4">
            <a href="/"><img src={GitHub} className="h-6" alt=""/></a>
          </div>
        </nav>
    <div className="flex justify-between flex-wrap">
      <div className="mt-32">
        <div className="text mb-2">Hello, I'm Max,</div>
        <div className="main_text text-7xl">Front end </div>
        <div className="main_text text-7xl">Developer</div>
        <div className="text">based in Cyprus.</div>
        <button className='button_resume border-spacing-2 rounded px-3 py-1'>RESUME</button>
      </div>
      <div className="mt-16">
        <img className='h-72 relative md:h-96 mr-16 sm:h-72' src={Image} alt="" />
      </div>
    </div>
      </header>
    </div>
  );
}

export default App;

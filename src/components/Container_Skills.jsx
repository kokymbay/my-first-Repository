import React from 'react';
import './content.css'

const Container_Skills = () => {
  return (
    <div className='Skills'>
        <div>
          <img src="https://icon-library.com/images/icon-for-skills/icon-for-skills-12.jpg" />
        </div>
        <h1>Skills</h1>
      <ul>
        <li className='icon_html'>
          <a className='icon_html' href="#">HTML</a>
        </li>
        <li className='icon_css'>
          <a className='icon_css' href="#">CSS</a>
        </li>
      </ul>

    </div>
  )
}

export default Container_Skills; 
import React from 'react';
import './content.css'

const Container_Hobby = () => {
  return (
    <div className='Hobby'>
      <div>
        <div>
          <img src="https://icon-library.com/images/hobby-video-game-controller-joystick-buttons-512.png" alt="" />
        </div>
        <h1>Hobby</h1>
        <ul>
          <li className='icon_football'>
            <a className='icon_football' href="#">Football</a>
          </li>
          <li className='icon_music'>
            <a className='icon_music' href="#">Music</a>
          </li>
          <li className='icon_games'>
            <a className='icon_games' href="#">Camputer Games</a>
          </li>
        </ul>
      </div>

    </div>
  )
}

export default Container_Hobby; 
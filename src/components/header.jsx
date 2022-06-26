import React from 'react';


const Header = () => {
    return (
        <header className='header'>
            <div className="header_body">
                <div className="title">               
                    <h1>
                            <a href="#">Portfolio</a>                       
                    </h1>
                </div>
                <div className="header_burger">
                    <span></span>
                </div>
                <div className='links'>
                    <h1>
                        <a href='#'>About me</a>
                        <a href='#'>Links</a>
                        <a href='#'>Contacts</a>
                    </h1>
                </div>
            </div>

        </header >
    )
}

export default Header
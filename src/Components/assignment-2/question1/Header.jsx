import React from 'react'


const Header = () => {
  return (
    <div className='header-wrapper'>    
        <header className='header'>
            <div className="logo">
                <img src="https://thumbs.dreamstime.com/b/plate-fork-spoon-restaurant-logo-white-background-eps-plate-fork-spoon-restaurant-logo-193685698.jpg" alt="logo" />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Recipies</li>
                    <li>Gallery</li>
                </ul>
            </div>
        </header>
    </div>
  )
}

export default Header

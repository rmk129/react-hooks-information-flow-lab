import React from 'react'

function Header({onDarkModeClick, Mode} ){


    return (
        <header>
        <h2>Shopster</h2>
        <button onClick={onDarkModeClick}>
          {Mode ? "Dark" : "Light"} Mode
        </button>
      </header>
    )
}

export default Header;
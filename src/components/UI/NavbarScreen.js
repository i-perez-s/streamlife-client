import React from 'react'

export const NavbarScreen = () => {
    return (
        <div className="nav">
  <input type="checkbox" id="nav-check" />
  <div className="nav-header">
    <div className="nav-title">
      JoGeek
    </div>
  </div>
  <div className="nav-btn">
    <label for="nav-check">
      <span></span>
      <span></span>
      <span></span>
    </label>
  </div>

  <div className="nav-links">
    <a className="nav-link-item">Github</a>
    <a className="nav-link-item">Stackoverflow</a>
    <a className="nav-link-item">LinkedIn</a>
    <a className="nav-link-item">Codepen</a>
    <a className="nav-link-item">JsFiddle</a>
  </div>
</div>
    )
}

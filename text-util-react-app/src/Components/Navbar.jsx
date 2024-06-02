import React from 'react'
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function Navbar(props) {

  return (
    <div>
      <nav className={`navbar navbar-text-success navbar-expand-lg navbar-${props.theme} bg-${props.theme}`}>
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            {props.title}
          </a>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  About
                </Link>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-primary" type="submit">
                Search
              </button>
            </form>
          </div>

          {/* <div className=' d-flex'>
            <div className={`form-check form-switch text-${props.theme==='light'?'dark':'light'}`}>
              <input className="form-check-input mx-1 bg-success" onClick={()=>props.toggleMode('success')} type="checkbox" role="switch" id="switch1"/>
            </div>
            <div className={`form-check form-switch text-${props.theme==='light'?'dark':'light'}`}>
              <input className="form-check-input mx-1 bg-primary" onClick={()=>props.toggleMode('primary')} type="checkbox" role="switch" id="switch2"/>
            </div>
            <div className={`form-check form-switch text-${props.theme==='light'?'dark':'light'}`}>
              <input className="form-check-input mx-1 bg-danger" onClick={()=>props.toggleMode('danger')} type="checkbox" role="switch" id="switch3"/>
            </div>
            <div className={`form-check form-switch text-${props.theme==='light'?'dark':'light'}`}>
              <input className="form-check-input mx-1 bg-dark" onClick={()=>props.toggleMode('dark')} type="radio"  id="radio4"/>
            </div>
          </div> */}

          <div className=" d-flex">
          <div class={`form-check`}>
              <input class="form-check-input mx-1 bg-success" onClick={()=>props.toggleMode('success')} type="radio" name="flexRadioDefault" id="flexRadioDefault1"/ >
            </div>          
             <div class="form-check">
              <input class="form-check-input bg-primary" onClick={()=>props.toggleMode('primary')} type="radio" name="flexRadioDefault" id="flexRadioDefault1"/ >
            </div>           
            <div class="form-check">
              <input class="form-check-input bg-danger" onClick={()=>props.toggleMode('danger')} type="radio" name="flexRadioDefault" id="flexRadioDefault1"/ >
            </div>
            <div class="form-check">
              <input class="form-check-input  bg-dark" onClick={()=>props.toggleMode('dark')} type="radio" name="flexRadioDefault" id="flexRadioDefault1" / >
            </div>
            <div class="form-check">
              <input class="form-check-input  bg-light" onClick={()=>props.toggleMode('light')} type="radio" name="flexRadioDefault" id="flexRadioDefault1" / >
            </div>
          </div>
            
        </div>
      </nav>
    </div>
  );
}


Navbar.propTypes={
    title:PropTypes.string
}

Navbar.defaultProps={
    title:'default title'
}
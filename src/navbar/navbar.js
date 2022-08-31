import React, { Component } from 'react';
import { MenuItems } from "./MenuItems"
// import { Button } from "../Button"
import './navbar.css'
import { Link } from 'react-scroll';


class Navbar extends Component {
    state = { clicked: false , scrolling: false}

    handleClick = () => {
        this.setState({ clicked: !this.state.clicked })
    }

    handleScroll = (e) => {
        if (window.scrollY < 50 && this.state.scrolling === true) {
            this.setState({ scrolling: false });
        } else if (window.scrollY > 50 && this.state.scrolling !== true) {
            this.setState({ scrolling: true });
        }
      };

    componentDidMount = () => {
        window.addEventListener("scroll", this.handleScroll);
    
        // returned function will be called on component unmount
        
      };

    render() {
        return(
            <nav className="NavbarItems" 
            style={{
                background: this.state.scrolling ? "linear-gradient(to bottom, #54565C 30%, #36373D 100%)" : "none",
                boxShadow: this.state.scrolling ? "0 10px 10px -5px #57585E" : "none",
              }}
            >
                <div>
               <Link  className="flex-grow-1" to="landing" smooth={true} duration={1000}><p className="navbar-logo ">U S</p></Link></div>
                <div className="menu-icon" onClick={this.handleClick}>
                    {/* <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i> */}
<div id="nav-icon1" className={this.state.clicked? 'open' : 'no'}>
  <span></span>
  <span></span>
  <span></span>
</div>
                </div>
                <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'} >
                    {MenuItems.map((item, index) => {
                        return (
                            <li key={index}>
                                <Link onClick={this.handleClick} className={item.cName} to={item.url} smooth={true} duration={1000}>
                                {item.title}
                                </Link>
                            </li>
                        )
                    })}
                </ul>
                 
            </nav>
        )
    }
}

export default Navbar
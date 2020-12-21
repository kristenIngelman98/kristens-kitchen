import React from 'react';
import { NavLink } from "react-router-dom";
// import { NavLink } from 'react-router-dom';
import HamburgerMenu from 'react-hamburger-menu';
import Breakfast from '../Breakfast/Breakfast';
import Lunch from '../Lunch/Lunch';

class NavBar extends React.Component {
    constructor(){
        super()
        this.state = {
            open: false,
            hideOrShowHambugerDropDown: 'nav'
        }
    }

    handleClick = () => {
        this.setState({open: !this.state.open});
    }

    displayHamburgerMenu = () => {
        return (
            <HamburgerMenu
                    isOpen={this.state.open}
                    menuClicked={this.handleClick.bind(this)}
                    width={18}
                    height={15}
                    strokeWidth={1}
                    rotate={0}
                    color='black'
                    borderRadius={0}
                    animationDuration={0.5}
                />
        )
    }

    displayNavBar = () => {
        return (
            <div>
                <ul className='nav'>
                        <li className='nav-link'><NavLink to='/breakfast'>Breakfast</NavLink></li>
                        <li className='nav-link'><NavLink to='/lunch'>Lunch</NavLink></li>
                        <li className='nav-link'><NavLink to='/dinner'>Dinner</NavLink></li>
                        <li className='nav-link'><NavLink to='/snacks'>Snacks</NavLink></li>
                        <li className='nav-link'><NavLink to='/sweets'>Sweets</NavLink></li>
                </ul>
            </div>
        )
    }

    displayMobileMenu = () => {
        return (
           
                <ul className='hamburgerDropDown'>
                    <li className='nav-link'><NavLink to='/breakfast'>Breakfast</NavLink></li>
                    <li className='nav-link'><NavLink to='/lunch'>Lunch</NavLink></li>
                    <li className='nav-link'><NavLink to='/dinner'>Dinner</NavLink></li>
                    <li className='nav-link'><NavLink to='/snacks'>Snacks</NavLink></li>
                    <li className='nav-link'><NavLink to='/sweets'>Sweets</NavLink></li>
                </ul>       
        )  
    }

    

    render() {
        return (
            <div className='navbar'>
                <h1 className="header__title">Kristen's Kitchen</h1>
                { this.state.open ?  this.displayMobileMenu() : null}
                {window.innerWidth > 1200 ? this.displayNavBar() : this.displayHamburgerMenu()}
            </div>

          
         
            

            
        );

        
    }
}

export default NavBar;
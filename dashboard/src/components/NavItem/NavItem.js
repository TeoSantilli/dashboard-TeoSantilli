import React from 'react'

function NavItem(props){
    console.log(props);
    return(
        <div>
            {props.menuContent.map((oneMenu, idx)=>
            <li key={oneMenu+idx}className='nav-item'>
                <a className="nav-link collapsed" href="/">
                    <i className={oneMenu.icon}></i>
                    <span>{oneMenu.label}</span>
                </a>
            </li>)}
        </div>
    )
}
export default NavItem
import React, { useEffect, useState } from 'react'
import Icons from '../../Assets/icons/Icons'
import Images from '../../Assets/images/Images'
import pages from '../../pages/pages'
import style from './Navbar.module.css'
import { Link, NavLink } from 'react-router-dom'
import AOS from 'aos'
import 'aos/dist/aos.css';
import { contactNumber } from '../../Constants/constant'

const Navbar = () => {
  const [opentray, setopentray] = useState(false)
  const menu = pages.filter((page)=> page?.name)
  useEffect(() => {
    if(opentray) {
      AOS.init({
        duration: 1000,
        once: false,
        easing:"linear",
      })
    }
  }, [opentray]);

  return (
    <nav className={style.nav}>
      <Link to="/">
        <img src={Images.logo} alt='lexrea logo'/>
      </Link>
      <div className={`${style.menu} ${opentray ? style.active : ""}`}>
        <div className={`${style.menuHeader} mobile `}>
          <Link to="/" className={`${style.headerlogo} ${opentray ? style.active : ""}`} data-aos= {"fade-left"}>
            <img src={Images.logo} alt='Go back Home'  onClick={()=> setopentray(false)}/>
          </Link>
          <img className={style.times} src={Icons.times} alt={"close menu"} onClick={()=>setopentray(false)} />
        </div>
        <ul>
          {menu.map((e,index)=>(
            <li key={e.name} className={opentray ? style.block : ""} data-aos={"menu-right"} data-aos-delay={`${index * 200}`}>
              <NavLink to={e.route} onClick={()=>setopentray(false)}>{e.name}</NavLink>
            </li>
          ))}
        </ul>
        <div className={style.menuContact}>
          <img src={Icons.phone} alt='contact number' />
          <p>{contactNumber}</p>
        </div>
        <div className={`${style.footer} mobile`}>
          <div className={style.privacy}>
            <p>Privacy Policy</p>
            <p>Terms & Conditions</p>
          </div>
          <p>© 2024 Lexrea support - All rights reserved</p>
        </div>
      </div>
      <div className={style.openTray} >
        <img src={Icons.menu} alt={"open menu"} onClick={()=>setopentray(true)} />
      </div>
    </nav>
  )
}

export default Navbar
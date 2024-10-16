import React, { useEffect, useState } from 'react'
import Icons from '../../Assets/icons/Icons'
import Images from '../../Assets/images/Images'
import pages from '../../pages/pages'
import style from './Navbar.module.css'
import { Link, NavLink } from 'react-router-dom'
import AOS from 'aos'
import 'aos/dist/aos.css';

const Navbar = () => {
  const [opentray, setopentray] = useState(false)
  const menu = pages.filter((page)=> page?.name)
  useEffect(() => {
    AOS.init();
  }, [opentray]);

  return (
    <nav className={style.nav}>
      <Link to="/">
        <img src={Images.logo} alt='lexrea logo'/>
      </Link>
      <div>
        <ul data-aos={"fade-left" } data-aos-duration="1000" className={`${style.menu} ${opentray ? style.active : ""}`}>
        {menu.map((e,index)=>(
          <li key={e.name} className={opentray ? style.active : ""} data-once="false" data-aos="fade-up" data-aos-duration="1000" data-aos-delay={`${index * 200}`}>
            <NavLink to={e.route} onClick={()=>setopentray(false)}>{e.name}</NavLink>
          </li>
        ))}
        <img className={style.times} src={Icons.times} alt={"close menu"} onClick={()=>setopentray(false)} />
      </ul>
      </div>
      
      <div className={style.openTray} >
        <img src={Icons.menu} alt={"open menu"} onClick={()=>setopentray(true)} />
      </div>
    </nav>
  )
}

export default Navbar
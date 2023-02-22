import { Link } from 'react-router-dom'
import style from './Navbar.module.css'
export default function Navbar(){
    return(
        <>
        <div className={style.main}>
        <div className={style.logo}>
        <img width="80px" src="https://cdn.pixabay.com/photo/2014/03/24/17/21/amtrak-295512_960_720.png" alt="logo" />
        <h3>Live Train Status</h3>
        </div>
        <div className={style.option}>
        <h3><Link className={style.navLinnk} to="/">Home </Link></h3>
        <h3><Link className={style.navLinnk} to="/AboutUs">About </Link></h3>
      
        <h3><Link className={style.navLinnk} to="/ContactUs">Contact </Link></h3>
      
        </div>
        </div>
        </>
    )
}
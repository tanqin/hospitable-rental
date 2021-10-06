import React from 'react';
/* 引入图片 */
import index from '../../../assets/images/index.png'
import user from '../../../assets/images/user.png'
import map from '../../../assets/images/map.png'
import rent from '../../../assets/images/rent.png'

/* 引入局部样式 */
import style from  './Nav.module.scss'
// console.log(style);
const Nav = () => {
    return (
        <div className={style.nav}>
            <div className={style.navItem}>
                <img src={index} alt="" />
                <div className={style.text}>整租</div>
            </div>
            <div className={style.navItem}>
                <img src={user} alt="" />
                <div className={style.text}>合租</div>
            </div>
            <div className={style.navItem}>
                <img src={map} alt="" />
                <div className={style.text}>地图找房</div>
            </div>
            <div className={style.navItem}>
                <img src={rent} alt="" />
                <div className={style.text}>出租</div>
            </div>
        </div>
    );
}

export default Nav;

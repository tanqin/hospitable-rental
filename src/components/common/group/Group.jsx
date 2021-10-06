/* 引入 useState、useEffect */
import React, { useState, useEffect } from 'react';
import axios, { baseURL } from '../../../api/instance.js';
import style from './Group.module.scss'
const Group = () => {
    const [groups, setGroups] = useState([])
    /* 定义 useEffect ，第二个参数为空时作用相当于 componentDidMount */
    useEffect(() => {
        axios.get('/home/groups?area=AREA%7C88cff55c-aaa4-e2e0').then((res) => {
            setGroups(res.body)
        })
    }, [])
    return (
        <div className={style.group}>
            <div className={style.groupTitle}>
                <div className={style.groupTitleLeft}>租房小组</div>
                <div className={style.groupTitleRight}>更多&gt;&gt;</div>
            </div>
            <div className={style.groupList}>
                {groups.map((item) =>
                    <div className={style.groupListItem} key={item.id}>
                        <div className={style.listItemLeft}>
                            <div className={style.leftTop}>{item.title}</div>
                            <div className={style.leftBottom}>{item.desc}</div>
                        </div>
                        <div className={style.listItemRight}>
                            <img src={baseURL + item.imgSrc} alt="" />
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Group;

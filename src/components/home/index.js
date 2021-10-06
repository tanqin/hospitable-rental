import React, { Component } from 'react';
import Swiper from '../common/swiper/Swiper'
import Nav from '../common/nav/Nav'
import Group from '../common/group/Group';
class Index extends Component {
    render() {
        return (
            <div>
                <Swiper></Swiper>
                <Nav></Nav>
                <Group></Group>
            </div>
        );
    }
}

export default Index;

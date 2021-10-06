import React from 'react';
import { Carousel } from 'antd-mobile';
import axios, { baseURL } from '../../../api/instance'
export default class App extends React.Component {
    state = {
        data: [],
        imgHeight: 176,
    }
    componentDidMount() {
        axios.get('home/swiper').then((res) => {
            this.setState({
                data: res.body
            })
        })
        // simulate img loading
        // setTimeout(() => {
        //     this.setState({
        //         data: ['AiyWuByWklrrUDlFignR', 'TekJlZRVCjLFexlOCuWn', 'IJOtIlfsYdTyaDTRVrLI'],
        //     });
        // }, 100);
    }
    render() {
        return (
            <Carousel
                autoplay={true}
                infinite
            >
                {this.state.data.map(val => (
                    <img
                        key={val.id}
                        src={baseURL + val.imgSrc}
                        alt=""
                        style={{ width: '100%', verticalAlign: 'top' }}
                        onLoad={() => {
                            // fire window resize event to change height
                            window.dispatchEvent(new Event('resize'));
                            this.setState({ imgHeight: 'auto' });
                        }}
                    />
                ))}
            </Carousel>
        );
    }
}
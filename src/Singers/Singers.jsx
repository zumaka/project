import React, { Component } from 'react';
import s from './Singers.module.scss';
import right from '../img/right.png';
import left from '../img/left.png';
import firstSinger from '../img/1.png';
import secondSinger from '../img/2.jpg';
import thirdSinger from '../img/3.png';


class Singers extends Component {
    constructor(props) {
        super(props);
        this.state = {
            FirstName: ['LAWRIE', 'CHARLIES', 'CURT'],
            SecondName: ['ALTON', 'TIMMY', 'SHEARD'],
            currentSinger: 0,
            images: [firstSinger, secondSinger, thirdSinger]
        };
    }
        next = () => {
            if (this.state.currentSinger >= this.state.images.length - 1)
                return this.setCurrentSinger(0);
            this.setState(state => ({ ...state, currentSinger: ++state.currentSinger }));
        };

        prev = () => {
            if (this.state.currentSinger <= 0)
                return this.setCurrentSinger(this.state.images.length-1 );
            this.setState(state => ({ ...state, currentSinger: --state.currentSinger }));
        };

        setCurrentSinger = number => {
            this.setState(state => ({ ...state, currentSinger: number }));
        };


    render() {
        return (
            <div className={s.Main} style={{ backgroundImage: `url('${this.state.images[this.state.currentSinger]}')` }}>
                <div className={s.Container}>
        <span className={s.Name} >
          <div style={{color: '#826b60'}}>{this.state.FirstName[this.state.currentSinger]}</div>
          <div style={{color: '#241c18'}}>{this.state.SecondName[this.state.currentSinger]}</div>
        </span>
                    <div className={s.TableWrapper}>
                        <table className={s.Table}>
                            <tbody>
                            <tr  className={this.state.currentSinger==0 ? s.Active : '' }>
                                <td>LAWRIE ALTON</td>
                                <td><span className={s.Point}/></td>
                                <td>VOCALIST</td>
                            </tr>
                            <tr className={this.state.currentSinger==1 ? s.Active : ''} >
                                <td>CHARLIES TIMMY</td>
                                <td><span className={s.Point}/></td>
                                <td>GUITAR</td>
                            </tr>
                            <tr className={this.state.currentSinger==2 ? s.Active : ''}  >

                                <td>CURT SHEARD</td>
                                <td><span className={s.Point}/></td>
                                <td>BASS</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className={s.Description}>
                        <h1>Meet our band</h1>
                        <p> {this.state.FirstName[this.state.currentSinger]} {this.state.SecondName[this.state.currentSinger]}, swag iPhone neutra williamsburg, <br/>
                            sriracha you probably haven't heard of them PBR&B<br/>
                            marfa seitan. Four dollar toast wayfarers helvetica<br/>
                            etsy, affogato pinterest schlitz. Squid yr mlkshk, pin-<br/>
                            terest pour-over polaroid photo booth. Yr fixie plaid <br/>
                            kogi.</p>
                    </div>
                    <button data-direction="next" onClick={this.next} className={s.Right}><img
                        src={right}/></button>
                    <button data-direction="prev" onClick={this.prev} className={s.Left}><img
                        src={left}/></button>
                </div>
            </div>
        );
    }
};

export default Singers;

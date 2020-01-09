import React, {Component} from 'react';
import s from './Discography.module.scss';
import ellipse from '../img/Ellipse.png';
import ReactAudioPlayer from 'react-audio-player';
import a from '../mp3/1.mp3';
import b from '../mp3/2.mp3';
import c from '../mp3/3.mp3';
import d from '../mp3/4.mp3';
import e from '../mp3/5.mp3';

class Discography extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Name: ['01. Саня, это для тебя', '02. Rat In The River', '03. Giants And Company', '04. Ashamed Of Light', '05. Doubting The Forest'],
            Length: ['1:44', '2:56', '1:58', '3:57', '3:39'],
            songs: [a, b, c, d, e],
            currentSong: 0

        }
    }

    next=(id)=>{
        this.setState(state => ({ ...state, currentSong: id}))

    };

    render() {
        return (
            <div className={s.Main}>
                <div className={s.Container}>
                    <div className={s.Main_grid}>
                        <img src='' className={s.Img}/>
                        <div className={s.Discography}>
                            <div className={s.Title}>Discography
                                <div className={s.Name}>Surprise Without Flaws <img style={{padding: '0 30px 0 40px '}}
                                                                                    src={ellipse}/><span
                                    className={s.Name}>  2015</span> <a href='#' className={s.button}>BUY</a></div>
                                <div className={s.Name}>Mists Of A Shadow <img style={{padding: '0 30px 0 93px '}}
                                                                               src={ellipse}/><span
                                    className={s.Name}>  2014</span> <a href='#' className={s.button}>BUY</a></div>
                                <div className={s.Name}>Heroes Of The Sun <img style={{padding: '0 30px 0 98px '}}
                                                                               src={ellipse}/><span
                                    className={s.Name}>  2013</span> <a href='#' className={s.button}>BUY</a></div>
                                <div className={s.Name}>Picture Of The Past <img style={{padding: '0 30px 0 94px '}}
                                                                                 src={ellipse}/><span
                                    className={s.Name}>  2012</span> <a href='#' className={s.button}>BUY</a></div>
                            </div>

                        </div>
                        <div className={s.Now}>
                            <div className={s.Title}>Now playing
                                <div className={s.Name}>{this.state.Name[this.state.currentSong]}</div>
                                <ReactAudioPlayer
                                    src={this.state.songs[this.state.currentSong]}
                                    controls
                                /></div>
                            <div className={s.Title}>The best</div>
                            <table className={s.Table}>
                                <tbody>
                                <tr>
                                </tr>
                                <tr>
                                    <td><button onClick={()=>this.next(0)}><span className={s.Listener}/></button></td>
                                    <td>{this.state.Name[0]}</td>
                                    <td>.........................................................................</td>
                                    <td>{this.state.Length[0]}</td>
                                </tr>
                                <tr>
                                    <td><button onClick={()=>this.next(1)}><span className={s.Listener}/></button></td>
                                    <td>{this.state.Name[1]}</td>
                                    <td>.........................................................................</td>
                                    <td>{this.state.Length[1]}</td>
                                </tr>
                                <tr>
                                    <td><button  onClick={()=>this.next(2)}><span className={s.Listener}/></button></td>
                                    <td>{this.state.Name[2]}</td>
                                    <td>.........................................................................</td>
                                    <td>{this.state.Length[2]}</td>
                                </tr>
                                <tr>
                                    <td><button onClick={()=>this.next(3)}><span className={s.Listener}/></button></td>
                                    <td>{this.state.Name[3]}</td>
                                    <td>.........................................................................</td>
                                    <td>{this.state.Length[3]}</td>
                                </tr>
                                <tr>
                                    <td><button onClick={()=>this.next(4)}><span className={s.Listener}/></button></td>
                                    <td>{this.state.Name[4]}</td>
                                    <td>.........................................................................</td>
                                    <td>{this.state.Length[4]}</td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};

export default Discography;

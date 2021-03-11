import React, {Component} from 'react';
import About from '../components/home/About';
import Counter from '../components/home/Counter';
import Pricing from '../components/home/Pricing';
import Features from '../components/home/Features';
import Download from '../components/home/Download';
import Hero from '../components/home/Hero';


class Main extends Component {
    render() {
        return (
            <div id='top'>
                  <div id='hero'>    <Hero/>      </div>
                <div id='download'>    <Download/>      </div>
                <div id="feature">    <Features/>      </div>
               <div id='pricing'>    <Pricing/>      </div>
                <div id='counter'>    <Counter/>      </div>
             <div id='about'>    <About/>      </div>
            </div>
        );
    }
}

export default Main;
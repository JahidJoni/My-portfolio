import React from 'react';
import { Carousel } from '3d-react-carousal';
import classico from "../../images/classico (1).jpg"
import julien from "../../images/classico (2).jpg"
import more from '../../images/1525170944more.jpg'
import js1 from '../../images/4784487897497600.jpg'
import js2 from '../../images/reactpng.png'
import js3 from '../../images/js-2.png'
import js4 from '../../images/Js.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons'
import SharedFooter from '../SharedFooter/SharedFooter'

let technology = [
    <div className="p-4" style={{ backgroundColor: 'white' }}>
        <img src={js1} alt="1" /> <h4>12 JavaScript Interview questions : freshers should go through</h4>
        <a class="btn btn-outline-dark btn-sm px-3" href="https://jh-joni07.medium.com/12-javascript-interview-questions-freshers-should-go-through-4caa0a58fadb">Read  <FontAwesomeIcon className="mx-2" icon={faArrowAltCircleRight} /></a></div>,
    <div className="p-4" style={{ backgroundColor: 'white' }}>
        <img src={js2} alt="2" /> <h4>React JS : 10 Things a beginner should know
   </h4> <a class="btn btn-outline-dark btn-sm px-3" href="https://jh-joni07.medium.com/react-js-10-things-a-beginner-should-know-326236aa4f7">Read  <FontAwesomeIcon className="mx-2" icon={faArrowAltCircleRight} /></a> </div>,
    <div className="p-3" style={{ backgroundColor: 'white' }}><img src={js3} alt="" /><h4>JavaScript and ES6 : A Short Recap</h4>
    <a class="btn btn-outline-dark btn-sm px-3" href="https://jh-joni07.medium.com/javascript-and-es6-a-short-recap-b040e49092a8">Read  <FontAwesomeIcon className="mx-2" icon={faArrowAltCircleRight} /></a></div>,
    <div className="p-5" style={{ backgroundColor: 'white' }}><img src={js4} alt="" /><h4>JavaScript : A Short Hand Note
    </h4> <a class="btn btn-outline-dark btn-sm px-3" href="https://jh-joni07.medium.com/javascript-a-short-hand-note-37325813810e">Read  <FontAwesomeIcon className="mx-2" icon={faArrowAltCircleRight} /></a></div>

];



let sports = [
    <div className="p-4" style={{ backgroundColor: 'white' }}> <img src={julien} alt="1" /> <h4>হুলেন লোপেতেগি : উত্থান-পতনের এক অনন্য উদাহরণ</h4> <a href="https://pavilion.com.bd/user/feeds/5595/details">Read</a></div>,
    <div className="p-4" style={{ backgroundColor: 'white' }}> <img src={classico} alt="2" /> <h4>এল ক্লাসিকো - স্পেনীশ দ্রুপদী লড়াই
   </h4> <a href="https://pavilion.com.bd/user/feeds/5567/details">Read</a> </div>,
    <div style={{ backgroundColor: 'white' }}><img className="img-fluid" src={more} alt="" /></div>];

const Blogs = () => {
    return (
        <section>
            <div className="text-center mt-5">
                <h3>A Versatile <span style={{ color: '#00e991' }}>Content Writer</span>.</h3>
                <h4>Passionate about writing blogs about sports, media and of course technology!</h4>
            </div>
            <div className="container my-5">
            <h5 style={{backgroundColor: '#0f0f0f', color: '#fde3a7', borderRadius: '3rem'}} className="text-center py-2">Technology Blogs - </h5>
                <div>
                    <Carousel slides={technology} autoplay={false} interval={1000}>
                    </Carousel>
                </div>
            </div>
            <div className="container my-5">
                <h5 style={{backgroundColor: '#0f0f0f', color: '#fde3a7', borderRadius: '3rem'}} className="text-center py-2">Sports Blogs - </h5>
                <div className="mt-4">
                    <Carousel slides={sports} autoplay={false} interval={1000}>
                    </Carousel>
                </div>
            </div>
            <SharedFooter></SharedFooter>
        </section>
    );
};

export default Blogs;
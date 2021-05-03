import React, { useState } from 'react';
import profile from '../../../images/profile.jpg'
import { useSpring, animated} from 'react-spring';
import Typical from 'react-typical'
import './Head.css'

const Head = () => {
    const [state, toggle] = useState(true)
    const { x } = useSpring({ from: { x: 0 }, x: state ? 1 : 0, config: { duration: 2000 } })
    return (
        <section style={{ backgroundColor: '#0F0F0F' }}>
            <div className="row p-5">
                <div className="col-md-6 d-flex justify-content-center">
                    <img src={profile} alt="" style={{ border: '3px solid #FDE3A7', borderRadius: '50%', width: '50%' }} data-aos="fade-right" />
                </div>
                <div className="col-md-6 d-flex justify-content-center">
                    <div className="mt-5" style={{ color: '#FDE3A7', textAlign: 'end' }}>
                        <animated.div
                            style={{
                                opacity: x.interpolate({ range: [0, 1], output: [0.3, 1] }),
                                transform: x
                                    .interpolate({
                                        range: [0, 0.25, 0.35, 0.45, 0.55, 0.65, 0.75, 1],
                                        output: [1, 0.97, 0.9, 1.1, 0.9, 1.1, 1.03, 1]
                                    })
                                    .interpolate(x => `scale(${x})`)
                            }}>
                            <h2>Hi! I AM</h2>
                            <h1>JAHID JONI</h1>
                            <Typical
                                steps={['A MERN Stack Developer', 1500, 'A Web Developer', 2000]}
                                loop={Infinity}
                                wrapper="h2"
                            />
                        </animated.div>

                        <a href={`https://drive.google.com/uc?export=download&id=1xw469zQP3bnjK1H0KK-QD6_YMZ2d_58i`} className="btn btn-sm button mt-3 px-3">Download My Resume</a>
                        <div onClick={() => toggle(!state)}>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default Head;
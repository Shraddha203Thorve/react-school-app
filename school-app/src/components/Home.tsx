import React from 'react'
import SchoolImg from './SchoolImg'
import Marquee from "react-fast-marquee";

const Home = () => {
    return (
        <div>
            <div className='bg-light-grey'>
                <Marquee>***Admission opens for year 2022***</Marquee>
            </div>
            <SchoolImg />

            <div className="container-fluid mt-5 ">
                <div className="row">
                    <div className="col-md-6 mt-3">
                        <h5 className="text-uppercase">Wecome to Learning curve public school</h5>
                        <p className="align">Top schools in Pune have always attracted students from all over the country and abroad, and in such an environment The Orbis Schools are the preferred choice of parents seeking admission to good schools in Pune.

                            The school's name, Orbis, which comes from orb, is a metaphor for the world. And our aim as educators is to groom students in harmony with global progress. Today, The Orbis Schools are recognized as one of the best schools in Pune.

                            As the world becomes increasingly flat, and cycles of change grow ever shorter, the good schools in Pune and the rest of the country must acquire the ability to keep up. Tomorrow's winners need to be able to bring the change rather than merely react to it.</p>

                    </div>

                    {/* <hr className="clearfix w-100 d-md-none pb-0" /> */}

                    <div className="col-md-6 mt-3">
                        <h5 className="text-uppercase">Celebrate learning</h5>
                        <p className="align">Celebrate Learning at The Orbis Schools is a process designed to turn work into play. Limitless opportunities to explore and experiment, get involved in fests and concerts, work for exhibitions and workshops, participate in trips and sports, in an atmosphere which is stress-free, secure, stimulating and rewarding will make learning one's experience of a celebratory kind.</p>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home

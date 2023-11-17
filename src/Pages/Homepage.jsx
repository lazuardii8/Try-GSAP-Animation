import React, { Fragment, useState } from 'react'
import { Col, Container, Nav, Row } from 'react-bootstrap'
import Line from '../Components/Path/Line'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import { useEffect } from 'react'
import { ScrollSmoother } from 'gsap-trial/all'
import { Back } from 'gsap'

const Homepage = () => {
    useEffect(() => {
        const elm = document.querySelector(".lineGrow");
        const imageTest = document.querySelector(".imageTest");

        gsap.registerPlugin(ScrollTrigger, ScrollSmoother)

        let skewSetter = gsap.quickTo(".imgSkew", "skewY")
        let clamp = gsap.utils.clamp(-20, 20) // tidak boleh melebih 20 deg taua kurang dari -20deg

        let smoother = ScrollSmoother.create({
            content: "#smooth-content",
            wrapper: "#smooth-wrapper",
            smooth: 2,
            effects: true,
            smoothTouch: 0.1,
            onUpdate: self => skewSetter(clamp(self.getVelocity() / -50)),
            onStop: () => skewSetter(0)
        })

        let buttonSelect = document.querySelector(".button");

        buttonSelect.addEventListener("click", (e) => {
            // first 
            // smoother.scrollTo('.sec3', true, "center center")

            gsap.to(smoother, {
                scrollTop: smoother.offset('.sec2', "left center"),
                duration: 2,
                ease: "back.out"
            })
        })

        // smoother.effects('.box', {
        //     speed: 0.5,
        //     lag: (i) => i * 1
        // })

        gsap.to('.box-a', {
            rotate: 360,
            scrollTrigger: {
                trigger: ".box-a",
                start: "center center",
                markers: true,
                scrub: true
            }
        })

        smoother.effects(".imgParalax", { speed: "auto" })


        let container = document.querySelector('.wrapperContainer')
        const sections = gsap.utils.toArray(".panel");

        gsap.to(sections, {
            xPercent: -100 * (sections.length - 1),
            ease: "none",
            scrollTrigger: {
                trigger: container,
                pin: true,
                scrub: true,
                end: "+=" + container.offsetWidth
            }
        })

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: ".sec1",
                start: 'top-=50px center',
                end: 'bottom+=50px center',
                scrub: 0.5,
            },
        });

        tl.to(elm, { width: "100%", ease: "none", duration: 1 });

        // const animateFrom = (elemet, direction) => {
        //     let direction = 
        //     if(back){

        //     }
        // }

        // gsap.timeline({
        //     scrollTrigger: {
        //         trigger: ".sec2",
        //         onEnter: function () {

        //         },
        //         onEnterBack: function () {

        //         },
        //         onLeave: function () {

        //         },
        //     },
        // });

        const t3 = gsap.timeline({
            scrollTrigger: {
                trigger: ".sec3",
                start: "top center",
                end: 'max',
                scrub: 0.5,
            },
        });

        t3.fromTo(imageTest, { x: 200 }, { x: 0, duration: 1 });
    }, [])

    return (
        <Fragment>
            <div id="smooth-wrapper">
                <div id="smooth-content" className='overflow-hidden relative bg-[#070920]'>
                    <Line />
                    <section className='min-h-screen relative z-[2] sec1'>
                        <Container>

                            <Row>
                                <Col md={6} className='my-auto'>
                                    <h1 className='text__48 font-bold mb-3'>Try explore GSAP</h1>
                                    <p className='text__16 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id cumque commodi eveniet hic minus suscipit ex ut soluta voluptatem asperiores dolore libero, fugiat ratione provident. Alias ducimus deserunt unde nostrum?</p>

                                    <div className="button px-[16px] py-[8px] rounded-md bg-Myellow text-Mblack text-base inline-block font-semibold mt-3 cursor-pointer"> Click Me</div>
                                </Col>
                                <Col md={6} className='my-auto'>
                                    <img src="./../images/gsap-greensock.svg" alt="" />
                                </Col>
                            </Row>

                            <div className="flex items-baseline justify-center mb-10">
                                <div className="w-[300px] h-[500px] relative overflow-hidden">
                                    <img src="https://picsum.photos/1000/1000.jpg" className='imgParalax w-full h-[160%] absolute object-cover' alt="" />
                                </div>
                            </div>
                            <Row>
                                <Col md={6}>
                                    <div className="w-full h-[500px] relative overflow-hidden">
                                        <img src="https://picsum.photos/1001/1000.jpg" className='imgParalax w-full h-[160%] absolute object-cover' alt="" />
                                    </div>
                                </Col>
                                <Col md={6}>
                                    <div className="w-[400px] h-[300px] relative overflow-hidden">
                                        <img src="https://picsum.photos/1002/1000.jpg" className='imgParalax w-full h-[160%] absolute object-cover' alt="" />
                                    </div>
                                </Col>
                            </Row>

                        </Container>
                        <div className="lineGrow absolute overflow-hidden h-[2px] bg-[#8ac640] left-0 bottom-0"></div>
                    </section>

                    <section className='min-h-screen relative z-[2] sec2 flex items-center justify-center'>
                        <Container>

                            <div className="mb-10 flex items-center justify-center">
                                <div className="grid grid-cols-3 gap-x-6 gap-y-12">
                                    <img src="https://picsum.photos/1005/1000.jpg" className='imgSkew object-cover w-[200px] h-auto' alt="" />
                                    <img src="https://picsum.photos/1006/1000.jpg" className='imgSkew object-cover w-[200px] h-auto' alt="" />
                                    <img src="https://picsum.photos/1007/1000.jpg" className='imgSkew object-cover w-[200px] h-auto' alt="" />
                                    <img src="https://picsum.photos/1008/1000.jpg" className='imgSkew object-cover w-[200px] h-auto' alt="" />
                                    <img src="https://picsum.photos/1009/1000.jpg" className='imgSkew object-cover w-[200px] h-auto' alt="" />
                                    <img src="https://picsum.photos/1010/1000.jpg" className='imgSkew object-cover w-[200px] h-auto' alt="" />
                                    <img src="https://picsum.photos/1011/1000.jpg" className='imgSkew object-cover w-[200px] h-auto' alt="" />
                                </div>
                            </div>

                            <div className="flex items-center gap-16 justify-center">
                                {/* <div className="box box-a w-[150px] h-[150px] bg-red-800"></div> */}
                                {/* <div className="box box-b w-[150px] h-[150px] bg-blue-800"></div> */}
                                {/* <div className="box box-c w-[150px] h-[150px] bg-green-800"></div> */}
                                {/* <div data-lag="2" className="box w-[150px] h-[150px] bg-red-800"></div>
                                <div data-lag="1" className="box w-[150px] h-[150px] bg-blue-800"></div>
                                <div data-lag="0.5" className="box w-[150px] h-[150px] bg-green-800"></div> */}
                                <div data-speed="2" className="box box-a w-[150px] h-[150px] bg-red-800"></div>
                                <div data-speed="1" className="box box-b w-[150px] h-[150px] bg-blue-800"></div>
                                <div data-speed="0.5" className="box box-c w-[150px] h-[150px] bg-green-800"></div>
                            </div>
                        </Container>
                    </section>
                    <section className='min-h-screen relative z-[2] sec3'>

                        <Container className='relative z-[2]'>

                            <Row>
                                <Col md={6} className='my-auto'>
                                    <h1 className='text__48 font-bold mb-3'>Try explore GSAP</h1>
                                    <p className='text__16 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id cumque commodi eveniet hic minus suscipit ex ut soluta voluptatem asperiores dolore libero, fugiat ratione provident. Alias ducimus deserunt unde nostrum?</p>
                                </Col>
                                <Col md={6} className='my-auto'>
                                    <img src="./../images/gsap-greensock.svg" className='imageTest' alt="" />
                                </Col>
                            </Row>

                        </Container>
                    </section>
                    <section>
                        <div className="wrapperContainer flex flex-nowrap w-[600%] h-screen">
                            <div className="panel h-full w-full relative bg-red-600"></div>
                            <div className="panel h-full w-full relative bg-yellow-600"></div>
                            <div className="panel h-full w-full relative bg-purple-600"></div>
                            <div className="panel h-full w-full relative bg-blue-600"></div>
                        </div>
                        {/* <div className="h-screen w-screen bg-green-600"></div> */}
                    </section>
                </div>
            </div>

        </Fragment >
    )
}

export default Homepage

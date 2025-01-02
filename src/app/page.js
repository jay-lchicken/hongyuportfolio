"use client";
import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
    useEffect(() => {
        // GSAP Scroll Animation for Images
        gsap.set(".item-img", { y: 100, autoAlpha: 0 });

        ScrollTrigger.batch(".item-img", {
            onEnter: (batch) =>
                gsap.to(batch, {
                    duration: 1,
                    autoAlpha: 1,
                    y: 0,
                    stagger: 0.1,
                }),
            start: "top center",
        });

        // GSAP Scroll Animation for Sections
        gsap.set(".section", { autoAlpha: 0, y: 50 });

        gsap.utils.toArray(".section").forEach((section) => {
            ScrollTrigger.create({
                trigger: section,
                start: "top 80%",
                onEnter: () => {
                    gsap.to(section, {
                        autoAlpha: 1,
                        y: 0,
                        duration: 1,
                        ease: "power2.out",
                    });
                },
                onLeaveBack: () => {
                    gsap.to(section, {
                        autoAlpha: 0,
                        y: 50,
                        duration: 1,
                        ease: "power2.out",
                    });
                },
            });
        });

        // GSAP Typewriter Animation
        gsap.fromTo(
            ".typewriter",
            { width: "0ch" },
            {
                width: "100%",
                duration: 1,
                ease: "steps(40)",
                delay: 0.5,
                scrollTrigger: {
                    trigger: ".typewriter", // The element that triggers the animation
                    start: "top 80%", // When the element enters the viewport
                    end: "top 20%", // When the element is scrolled past
                    scrub: true, // Smooth scrubbing
                },
            }
        );

// Blinking cursor effect triggered by ScrollTrigger
        gsap.fromTo(
            ".typewriter",
            { borderRightColor: "rgba(255, 255, 255, 0.75)" },
            {
                borderRightColor: "rgba(255, 255, 255, 0)",
                duration: 0.5,
                repeat: -1,
                ease: "power1.inOut",
                scrollTrigger: {
                    trigger: ".typewriter", // Same trigger element
                    start: "top 20%", // When the element enters the viewport
                    end: "top 100%", // When the element is scrolled past
                },
            }
        );
        let sections = gsap.utils.toArray(".panel");

        gsap.to(sections, {
            xPercent: -100 * (sections.length - 1),
            ease: "none",
            scrollTrigger: {
                trigger: ".container",
                pin: true,
                scrub: 2,
                snap: 1 / (sections.length - 1),
                end: () => "+=" + document.querySelector(".container").offsetWidth
            }
        });
        const container = document.querySelector(".container")

        gsap.timeline({
            scrollTrigger: {
                trigger: container,
                start: "top 50%",
                end: "bottom 20%",
                toggleActions: "restart none none reverse",
                scrub: true,
                // markers: true,
            }
        })
            .to(container , {
                scale: Math.max(window.innerWidth / container.offsetWidth, window.innerHeight / container.offsetHeight),
            })

        let titles = gsap.utils.toArray(".title"),
            offset = titles[1].offsetTop - titles[0].offsetTop;

// loop through each "h2" element and create an animation/ScrollTrigger for each
        titles.forEach((element, i) => {
            element.anim = gsap.to(element, {
                opacity: 1,
                ease: "none",
                scrollTrigger: {
                    trigger: element,
                    start: "center center+=" + offset / 2,
                    end: "center center-=" + offset / 2,
                    markers: false,
                    toggleActions: "play reverse play reverse"
                }
            });
        });

        return () => {
            ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
        };
    }, []);

    return (

        <div
            className="  grid grid-rows-[auto_1fr_auto] items-center justify-center align-middle justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20  bg-gray-800  "
        >

            <div className="flex flex-col w-screen ">
                <section className="skills w-screen h-screen flex items-center justify-center">
                    <h2
                        className=" opacity-0 title text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold text-white  text-center py-4"
                    >Welcome to my</h2>
                </section>
                <section className=" skills w-screen h-screen flex items-center justify-center">
                    <h2                         className="opacity-0 title text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold text-white  text-center py-4"
                    >Portfolio</h2>
                </section>

            </div>
            {/* Top Row */}
            <div className="flex flex-row items-center w-full max-w-80 sm:max-w-96 md:max-w-screen-xl">
                <img
                    src="/profile.png"
                    alt="Hong Yu"
                    width="50"
                    height="50"
                    className="rounded-full"
                />
                <div className="text-4xl ml-4 font">Lai Hong Yu</div>
            </div>

            {/* Main Content */}
            <div id="section"
                 className="section relative flex justify-center align-middle items-center bg-gray-800 overflow-hidden">
                <div className="relative w-full h-full max-w-80 sm:max-w-96 md:max-w-screen-xl rounded-3xl overflow-hidden bg-gray-800">
                    <img
                        src="/IMG_0927.jpeg"
                        alt="Hong Yu"
                        className="w-full rounded-3xl item-img"
                    />
                    <h1
                        className="absolute inset-x-0 bottom-0 text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold text-white  text-center bg-black bg-opacity-50 py-4 typewriter"
                    >
                        LAI HONG YU
                    </h1>
                </div>
            </div>

            {/* Description Section */}
            <div
                className="section relative flex flex-col sm:flex-row justify-center items-center bg-gray-700 w-full h-full rounded-3xl space-y-4 sm:space-y-0 sm:space-x-4 p-6 max-w-80 md:max-w-96 lg:max-w-screen-xl">
                <div className="w-full max-w-4xl">
                    <h1 className="text-xl sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-semibold text-white text-center m-4">
                        Hello, I'm Lai Hong Yu. I'm a{" "}
                        <span className="bg-text-gradient bg-clip-text text-transparent">software developer</span>,{" "}
                        <span className="bg-text-gradient bg-clip-text text-transparent">
                            hardware engineer
                        </span>
                        , and a{" "}
                        <span className="bg-text-gradient bg-clip-text text-transparent">tech enthusiast</span> too!
                    </h1>
                </div>
                <div className="w-full max-w-4xl">
                    <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-white font-thin text-center m-4">
                        With over 6 years of experience in the technology field, I have learned
                        many coding languages.
                    </h1>
                </div>
            </div>
            <style jsx>{`
                .no-scrollbar {
                    -ms-overflow-style: none; /* Internet Explorer 10+ */
                    scrollbar-width: none; /* Firefox */
                }

                .no-scrollbar::-webkit-scrollbar {
                    display: none; /* Safari and Chrome */
                }
            `}</style>
            <div className="container flex flex-row h-screen overflow-x-scroll rounded-3xl scroll no-scrollbar">
                <div
                    className="description panel bg-gradient-1 text-white flex items-center justify-center min-w-full flex-col">
                    <h1
                        className=" text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold text-white  text-center py-4"
                    >
                        Scroll Down</h1>
                    <img src="/arrow-down.gif.8d9aec7b8f92f2a50a1a64fce1733f3a.gif"/>
                </div>

                <section className="panel bg-gradient-2 text-white flex items-center justify-center min-w-full">
                    <h1
                        className=" text-black text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold text-white  text-center py-4"
                    >Python</h1>
                </section>

                <section className="panel bg-gradient-3 text-white flex items-center justify-center min-w-full">
                    <h1
                        className=" text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold text-white  text-center py-4"
                    >Swift</h1>
                </section>

                <section className="panel bg-gradient-4 text-white flex items-center justify-center min-w-full">
                    <h1
                        className=" text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold text-white  text-center py-4"
                    >C++</h1>
                </section>
                <section className="panel bg-gradient-2 text-white flex items-center justify-center min-w-full">
                    <h1
                        className=" text-black text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold text-white  text-center py-4"
                    >HTML/CSS/JS</h1>
                </section>

                <section className="panel bg-gradient-3 text-white flex items-center justify-center min-w-full">
                    <h1
                        className=" text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold text-white  text-center py-4"
                    >NextJS</h1>
                </section>


            </div>
            <h1>TO BE CONTINUED</h1>
        </div>

    );
}
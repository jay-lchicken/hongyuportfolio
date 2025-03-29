"use client";
import {getGithubBuildData} from "@/components/githubdata";
import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";
gsap.registerPlugin(ScrollTrigger);
import { useForm, ValidationError } from "@formspree/react";
import { useState } from "react";
import { useRouter} from "next/navigation";
export default function Home() {
    const router = useRouter();
    const [githubData, setGithubData] = useState(null);

    const [buildInfo, setBuildInfo] = useState(null);
    const [state, handleSubmit] = useForm("xvggvkrq");
    const validateYesInput = (event) => {
        const value = event.target.value;
        if (value !== "YES") {
            state.errors.push({
                field: "data",
                message: 'You must type "YES" to proceed.',
            });
        } else {
            state.errors = state.errors.filter(error => error.field !== "data");
        }
    };
    function navigateToPath(path){
        router.push(path);
    }
    if (state.succeeded) {
        window.location.href = "/succeed";
    }

    useEffect(() => {
    const fetchData = async () => {
        const data = await getGithubBuildData();
        setGithubData(data);
        ScrollTrigger.refresh(); // Ensure ScrollTrigger recalculates

    };

    fetchData();

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

    gsap.set(".section", { autoAlpha: 0, y: 50 });

    gsap.utils.toArray(".section").forEach((section) => {
        gsap.set(section, {
            scale: 0.8,
            autoAlpha: 0,
            y: 50,
        });

        ScrollTrigger.create({
            trigger: section,
            start: "top 80%",
            onEnter: () => {
                gsap.to(section, {
                    scale: 1,
                    autoAlpha: 1,
                    y: 0,
                    duration: 1,
                    ease: "power2.out",
                });
            },
            onLeaveBack: () => {
                gsap.to(section, {
                    scale: 0.8,
                    autoAlpha: 0,
                    y: 50,
                    duration: 1,
                    ease: "power2.out",
                });
            },
        });
    });

    gsap.fromTo(
        ".typewriter",
        { width: "0ch" },
        {
            width: "100%",
            duration: 1,
            ease: "steps(40)",
            delay: 0.5,
            scrollTrigger: {
                trigger: ".typewriter",
                start: "top 80%",
                end: "top 20%",
                scrub: true,
            },
        }
    );

    gsap.fromTo(
        ".typewriter",
        { borderRightColor: "rgba(255, 255, 255, 0.75)" },
        {
            borderRightColor: "rgba(255, 255, 255, 0)",
            duration: 0.5,
            repeat: -1,
            ease: "power1.inOut",
            scrollTrigger: {
                trigger: ".typewriter",
                start: "top 20%",
                end: "top 100%",
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
            scrub: 1,
            snap: {
                snapTo: 1 / (sections.length - 1),
                duration: 0.01,
            },
            end: "+=3500",
        },
    });

    const container = document.querySelector(".container");

    gsap.timeline({
        scrollTrigger: {
            trigger: container,
            start: "top 50%",
            end: "bottom 20%",
            toggleActions: "restart none none reverse",
            scrub: true,
        },
    }).to(container, {
        scale: Math.max(window.innerWidth / container.offsetWidth, window.innerHeight / container.offsetHeight),
    });

    const contents = gsap.utils.toArray(".content");

    contents.forEach((el) => {
        ScrollTrigger.create({
            trigger: el,
            start: "center center",
            end: "top bottom",
            pin: true,
            pinSpacing: false,
            endTrigger: ".hello",
        });
    });

    let titles = gsap.utils.toArray(".title"),
        offset = titles[1].offsetTop - titles[0].offsetTop;

    titles.forEach((element) => {
        element.anim = gsap.to(element, {
            opacity: 1,
            ease: "none",
            scrollTrigger: {
                trigger: element,
                start: "center center+=" + offset / 2,
                end: "center center-=" + offset / 2,
                toggleActions: "play reverse play reverse",
            },
        });
    });

    gsap.utils.toArray(".flipbox").forEach((card) => {
        gsap.set(card, {
            transformStyle: "preserve-3d",
            transformPerspective: 1000,
        });

        const q = gsap.utils.selector(card);
        const front = q(".cardFront");
        const back = q(".cardBack");

        gsap.set(back, { rotationY: -180 });

        const tl = gsap.timeline({ paused: true })
            .to(front, { duration: 1, rotationY: 180, ease: "power2.inOut" })
            .to(back, { duration: 1, rotationY: 0, ease: "power2.inOut" }, 0)
            .to(card, { z: 50 }, 0)
            .to(card, { z: 0 }, 0.3);

        card.addEventListener("mouseenter", () => tl.play());
        card.addEventListener("mouseleave", () => tl.reverse(0));
    });

    const interval = setInterval(() => {
        if (state.succeeded) {
            window.location.href = "/succeed";
        }
    }, 1000);

    return () => {
        ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
        clearInterval(interval);
    };
}, [state.succeeded]);

    return (

        <div
            className="  grid grid-rows-[auto_1fr_auto] items-center justify-center align-middle justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20  bg-gray-800  " style={{fontFamily: "MyCustomFont"}}
        >

            <div className="flex flex-col w-screen ">
                <section className=" skills w-screen h-screen flex items-center justify-center">
                    <h2
                        className="section opacity-0 title text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold text-white  text-center py-4"
                    >Welcome to my</h2>
                </section>
                <section className=" skills w-screen h-screen flex items-center justify-center">
                    <h2 className="section opacity-0 title text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold text-white  text-center py-4"
                    >Portfolio</h2>
                </section>

            </div>
            {/* Top Row */}
            <div
                className="flex flex-row items-center w-full max-w-small sm:max-w-medium md:max-w-large lg:max-w-large2 xl:max-w-screen-xl">
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
                <div
                    className="relative w-full h-full max-w-small sm:max-w-medium md:max-w-large lg:max-w-large2 xl:max-w-screen-xl rounded-3xl overflow-hidden bg-gray-800">
                    <img
                        src="/IMG_0927.jpeg"
                        alt="Hong Yu"
                        className="w-full rounded-3xl item-img"
                    />
                    <h1 className="absolute inset-x-0 bottom-0 text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold text-white text-center bg-black bg-opacity-50 py-4 typewriter">
                        LAI HONG YU <span
                        className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold">Full-Stack Developer</span>
                    </h1>
                </div>
            </div>

            {/* Description Section */}
            <div
                className="section relative flex flex-col lg:flex-row justify-center items-center bg-gray-700 w-full h-full rounded-3xl space-y-4 sm:space-y-0 sm:space-x-4 p-6 max-w-small sm:max-w-medium md:max-w-large lg:max-w-large2 xl:max-w-screen-xl ">
                <div className="w-full max-w-4xl hover:scale-105 transition-transform">
                    <h1 className="hi text-xl sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-semibold text-white text-center m-4">
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
                    <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-white font-thin text-center m-4 hover:scale-105 transition-transform">
                        With over 6 years of experience in the technology field, I have learnt
                        many coding languages.
                    </h1>
                </div>
            </div>
            <div
                className="section relative flex flex-col lg:flex-row justify-center items-center bg-gray-700 w-full h-full rounded-3xl space-y-4 sm:space-y-0 sm:space-x-4 p-6 max-w-small sm:max-w-medium md:max-w-large lg:max-w-large2 xl:max-w-screen-xl ">
                <div className="w-full max-w-4xl hover:scale-105 transition-transform">
                    <h1 className="hi text-xl sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-semibold text-white text-center m-4">
                        I'm the{" "}
                        <span className="bg-text-gradient bg-clip-text text-transparent">founder of Hack@SST</span>, which is under the program by Hack Club.
                    </h1>
                    </div>
            </div>
            <div
                className="section relative flex flex-col lg:flex-row justify-center items-center bg-gray-700 w-full h-full rounded-3xl space-y-4 sm:space-y-0 sm:space-x-4 p-6 max-w-small sm:max-w-medium md:max-w-large lg:max-w-large2 xl:max-w-screen-xl ">
                <div className="w-full max-w-4xl hover:scale-105 transition-transform">
                    <div className={"flex-row flex justify-center align-middle items-center"}>
                        <button className="animated-button mr-28" onClick={() => window.open("https://leetcode.com/u/eCJXwpaBlY/", "_blank")}>
                        <svg viewBox="0 0 24 24" className="arr-2" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"
                            ></path>
                        </svg>
                        <span className="text">LeetCode Profile</span>
                        <span className="circle"></span>
                        <svg viewBox="0 0 24 24" className="arr-1" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"
                            ></path>
                        </svg>
                    </button>
                    <button className="animated-button" onClick={() => window.open("https://app.codecrafters.io/users/jay-lchicken", "_blank")}>
                        <svg viewBox="0 0 24 24" className="arr-2" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"
                            ></path>
                        </svg>
                        <span className="text">Code Crafter Profile</span>
                        <span className="circle"></span>
                        <svg viewBox="0 0 24 24" className="arr-1" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"
                            ></path>
                        </svg>
                    </button>
                    </div>
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
            {/* Skills Section */}
            <div className="container flex flex-row h-screen overflow-x-scroll rounded-3xl scroll no-scrollbar ">
                <div
                    className="description panel bg-gradient-1 text-white flex items-center justify-center min-w-full flex-col">

                    <h1
                        className=" text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white  text-center py-4"
                    >
                        Languages in my stack</h1>
                    <img src="/arrow-down.gif.8d9aec7b8f92f2a50a1a64fce1733f3a.gif"/>
                </div>

                <section
                    className="panel bg-gradient-2 text-white flex flex-col items-center justify-center min-w-full">

                    <img src="/python-5-logo-png-transparent.png"
                         className="w-36 hover:scale-125 transition-transform"/>
                </section>

                <section
                    className="panel bg-gradient-3 text-white flex flex-col items-center justify-center min-w-full">

                    <img src="/png-clipart-apple-worldwide-developers-conference-swift-ios-apple-orange-logo.png"
                         className="w-40 hover:scale-125 transition-transform"/>
                </section>

                <section
                    className="panel bg-gradient-4 text-white flex flex-col items-center justify-center min-w-full">

                    <img src="/13841574.png"
                         className="w-40 hover:scale-125 transition-transform"/>

                </section>
                <section
                    className="panel bg-gradient-2 text-white flex flex-col items-center justify-center min-w-full">

                    <img src="/front-end-stack.png"
                         className="w-80 hover:scale-125 transition-transform"/>
                </section>

                <section
                    className="panel bg-gradient-3 text-white flex flex-col items-center justify-center min-w-full">

                    <img src="/1_gxOA6-EF8P8vnYdk3Bc9bg.png"
                         className="w-80 hover:scale-125 transition-transform"/>
                </section>


            </div>
            <h2
                className="mt-96  text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white  text-center py-4"
            >LATEST WORK</h2>
            <div
                className="content mt-5 relative flex flex-col bg-gray-700 w-full h-full rounded-3xl space-y-4 p-6 max-w-small sm:max-w-medium md:max-w-large lg:max-w-large2 xl:max-w-screen-xl h-three md:h-six overflow-hidden"
            >
                <div className="flex flex-row items-start justify-between bg-gray-700 p-6 rounded-3xl w-full">
                    <h1
                        className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white"
                    >
                        My Portfolio
                    </h1>
                    <a href="https://hongyu.techtime.coffee" target="_blank" rel="noopener noreferrer">
                        <img
                            src="/171127-200.png"
                            alt="Icon"
                            className="w-8 h-8 md:w-16 md:h-16 object-contain hover:filter hover:brightness-0 hover:invert transition duration-300 ease-in-out scale-125 hover:scale-150"
                        />
                    </a>
                </div>

                <div className="w-full flex justify-center">
                    <img
                        src="/Screenshot%202025-01-12%20at%205.30.13%E2%80%AFPM.png"
                        alt="Second Image"
                        className="w-auto max-w-full h-auto rounded-3xl"
                    />
                </div>
            </div>
            <div
                className="content mt-5 relative flex flex-col bg-gray-700 w-full h-full rounded-3xl space-y-4 p-6 max-w-small sm:max-w-medium md:max-w-large lg:max-w-large2 xl:max-w-screen-xl h-three md:h-six overflow-hidden"
            >
                <div className="flex flex-row items-start justify-between bg-gray-700 p-6 rounded-3xl w-full">
                    <h1
                        className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white"
                    >
                        XO Frenzy
                    </h1>
                    <a href="https://apple.co/4jdZj2T" target="_blank" rel="noopener noreferrer">
                        <img
                            src="/171127-200.png"
                            alt="Icon"
                            className="w-8 h-8 md:w-16 md:h-16 object-contain hover:filter hover:brightness-0 hover:invert transition duration-300 ease-in-out scale-125 hover:scale-150"
                        />
                    </a>
                </div>

                <div className="w-full flex justify-center">
                    <img
                        src="/Landscape%20Banner%20Ad%20-%201200x720.png"
                        alt="Second Image"
                        className="w-auto max-w-full h-auto rounded-3xl"
                    />
                </div>
            </div>
            <div
                className="content mt-5 relative flex flex-col bg-gray-700 w-full h-full rounded-3xl space-y-4 p-6 max-w-small sm:max-w-medium md:max-w-large lg:max-w-large2 xl:max-w-screen-xl h-three md:h-six overflow-hidden"
            >
                <div className="flex flex-row items-start justify-between bg-gray-700 p-6 rounded-3xl w-full">
                    <h1
                        className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white"
                    >
                        SpaceSync
                    </h1>
                    <a href="https://apple.co/3Py3KYG" target="_blank" rel="noopener noreferrer">
                        <img
                            src="/171127-200.png"
                            alt="Icon"
                            className="w-8 h-8 md:w-16 md:h-16 object-contain hover:filter hover:brightness-0 hover:invert transition duration-300 ease-in-out scale-125 hover:scale-150"
                        />
                    </a>
                </div>

                <div className="w-full flex justify-center">
                    <img
                        src="/SpaceSync.png"
                        alt="Second Image"
                        className="w-auto max-w-full h-auto rounded-3xl"
                    />
                </div>
            </div>


            <div
                className="content mt-5 relative flex flex-col bg-gray-700 w-full h-full rounded-3xl space-y-4 p-6 max-w-small sm:max-w-medium md:max-w-large lg:max-w-large2 xl:max-w-screen-xl h-three md:h-six overflow-hidden"
            >
                <div className="flex flex-row items-start justify-between bg-gray-700 p-6 rounded-3xl w-full">
                    <h1
                        className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white"
                    >
                        RollWise
                    </h1>
                    <a href="https://attendance.techtime.coffee/" target="_blank" rel="noopener noreferrer">
                        <img
                            src="/171127-200.png"
                            alt="Icon"
                            className="w-8 h-8 md:w-16 md:h-16 object-contain hover:filter hover:brightness-0 hover:invert transition duration-300 ease-in-out scale-125 hover:scale-150"
                        />
                    </a>
                </div>

                <div className="w-full flex justify-center">
                    <img
                        src="/rollwise.png"
                        alt="Second Image"
                        className="w-auto max-w-full h-auto rounded-3xl"
                    />
                </div>
            </div>
            <div
                className="content mt-5 relative flex flex-col bg-gray-700 w-full h-full rounded-3xl space-y-4 p-6 max-w-small sm:max-w-medium md:max-w-large lg:max-w-large2 xl:max-w-screen-xl h-three md:h-six overflow-hidden"
            >
                <div className="flex flex-row items-start justify-between bg-gray-700 p-6 rounded-3xl w-full">
                    <h1
                        className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white"
                    >
                        SummaSense
                    </h1>
                    <a href="https://github.com/jay-lchicken/Summariser" target="_blank" rel="noopener noreferrer">
                        <img
                            src="/171127-200.png"
                            alt="Icon"
                            className="w-8 h-8 md:w-16 md:h-16 object-contain hover:filter hover:brightness-0 hover:invert transition duration-300 ease-in-out scale-125 hover:scale-150"
                        />
                    </a>
                </div>

                <div className="w-full flex justify-center">
                    <img
                        src="/summasense.png"
                        alt="Second Image"
                        className="w-auto max-w-full h-auto rounded-3xl"
                    />
                </div>
            </div>
            <div
                className="content mt-5 relative flex flex-col bg-gray-700 w-full h-full rounded-3xl space-y-4 p-6 max-w-small sm:max-w-medium md:max-w-large lg:max-w-large2 xl:max-w-screen-xl h-three md:h-six overflow-hidden"
            >
                <div className="flex flex-row items-start justify-between bg-gray-700 p-6 rounded-3xl w-full">
                    <h1
                        className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white"
                    >
                        Pirate Name Generator
                    </h1>
                    <a href="https://jay-lchicken.github.io/PirateNameGenerator/" target="_blank" rel="noopener noreferrer">
                        <img
                            src="/171127-200.png"
                            alt="Icon"
                            className="w-8 h-8 md:w-16 md:h-16 object-contain hover:filter hover:brightness-0 hover:invert transition duration-300 ease-in-out scale-125 hover:scale-150"
                        />
                    </a>
                </div>

                <div className="w-full flex justify-center">
                    <img
                        src="/piratename.png"
                        alt="Second Image"
                        className="w-auto max-w-full h-auto rounded-3xl"
                    />
                </div>
            </div>
            {/*<div*/}
            {/*    className="content mt-5 section relative flex flex-col lg:flex-row justify-center items-center bg-gray-700 w-full h-full rounded-3xl space-y-4 sm:space-y-0 sm:space-x-4 p-6 max-w-small sm:max-w-medium md:max-w-large lg:max-w-large2 xl:max-w-screen-xl h-[600px]">*/}
            <style jsx>{`
                .flipbox {
                    transform-style: preserve-3d;
                    perspective: 1000px;
                }

                .cardFront,
                .cardBack {
                    backface-visibility: hidden;
                    transform: rotateY(0deg); /* Default for front */
                }

                .cardBack {
                    transform: rotateY(-180deg); /* Default for back */
                }`}</style>
            {/*</div> /!*Do not remove, this adds space*!/*/}
            <div className="hello relative flex flex-col lg:flex-row justify-center items-center gap-10 min-w-full">
                <a
                   className="flipbox relative min-w-[80%] lg:min-w-[40%] h-64 flex-shrink-0 ">
                    <button  onClick={() => {navigateToPath("certificates")}}>
                    <div
                        className="cardFront absolute w-full h-full bg-gray-700 text-white flex items-center justify-center backface-hidden rounded-3xl text-center text-wrap">
                        <h1 className="text-4xl lg:text-5xl font-bold">My Certificates</h1>
                    </div>
                    <div
                        className="cardBack absolute w-full h-full bg-gray-700 text-white flex items-center justify-center backface-hidden rounded-3xl text-center text-wrap">
                        <h1 className="m-20 text-2xl lg:text-3xl">Showcasing all the key certificates I have earned over
                            the years, highlighting my journey from a young age. Click on me to access</h1>
                    </div>
                    </button>
                </a>
                <a  className="flipbox relative min-w-[80%] lg:min-w-[40%] h-64 flex-shrink-0">

                                        <button  onClick={() => {navigateToPath("certificates")}}>

                    <div
                        className="cardFront absolute w-full h-full bg-gray-700 text-white flex items-center justify-center backface-hidden rounded-3xl text-center text-wrap">
                        <h1 className="text-4xl lg:text-5xl font-bold">My Experiences</h1>
                    </div>
                    <div
                        className="cardBack absolute w-full h-full bg-gray-700 text-white flex items-center justify-center backface-hidden rounded-3xl text-center text-wrap">
                        <h1 className="m-20 text-2xl lg:text-3xl">Showcasing all the key experiencess I have gained over
                            the years, highlighting my journey from a young age. Click on me to access</h1>
                    </div>
                                                                </button>

                </a>
            </div>
            <h1>Hong Yu AI about my life will be added soon!</h1>
            <form onSubmit={handleSubmit}
                  className=" max-w-small sm:max-w-medium md:max-w-large lg:max-w-large2 xl:max-w-screen-xl mx-auto border-8 border-white rou shadow-md rounded-3xl p-6 w-full m-4">
                <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-white font-bold text-center m-4">
                    Contact Me</h1>
                <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-white font-light text-center m-4">
                    I will get in touch soon! Talk to you soon!</h1>
                <div className="mb-4">
                    <label htmlFor="email" className="block text-sm font-medium text-white mb-1">
                        Email Address
                    </label>
                    <input
                        id="email"
                        type="email"
                        name="email"
                        placeholder="Enter your email"
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-800 bg-gray-100"
                    />
                    <ValidationError
                        prefix="Email"
                        field="email"
                        errors={state.errors}
                        className="text-red-600 text-sm mt-1"
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="message" className="block text-sm font-medium text-white mb-1">
                        Your Message
                    </label>

                    <textarea
                        id="message"
                        name="message"
                        placeholder="Write your message here"
                        required
                        rows="4"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-800 bg-gray-100"
                    />
                    <ValidationError
                        prefix="Message"
                        field="message"
                        errors={state.errors}
                        className="text-red-600 text-sm mt-1"
                    />
                </div>

                <h1 className="mb-4">Submit the form only if you agree that all data stored in our server is always at
                    risk of a data leak</h1>
                <button
                    type="submit"
                    disabled={state.submitting}
                    className={`w-full px-4 py-2 text-white font-medium rounded-lg hover:scale-105 lg:hover:scale-100 hover:transition-all hover:transition-colors
    ${state.submitting ? "bg-gray-400 cursor-not-allowed" : "bg-gradient-1 hover:bg-gradient-3 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"}`}
                >
                    {state.submitting ? "Sending..." : "Submit"}
                </button>
            </form>
            <section>
                {githubData || <p>Loading GitHub data...</p>}
            </section>
        </div>

    );
}
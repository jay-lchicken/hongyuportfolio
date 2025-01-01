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
                    y: -10,
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
                duration: 3,
                ease: "steps(40)",
                delay: 0.5,
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
            }
        );

        return () => {
            ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
        };
    }, []);

    return (
        <div
            className="grid grid-rows-[auto_1fr_auto] items-center justify-center align-middle justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20  bg-gray-800"
        >
            {/* Top Row */}
            <div className="flex flex-row items-center w-full">
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
            <div className="section relative flex justify-center align-middle items-center bg-gray-800">
                <div className="relative w-full h-full max-w-screen-xl rounded-3xl overflow-hidden bg-gray-800">
                    <img
                        src="/IMG_0927.jpeg"
                        alt="Hong Yu"
                        className="w-full rounded-3xl item-img"
                    />
                    <h1
                        className="absolute bottom-0 text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold text-white w-full text-center bg-black bg-opacity-50 py-4 typewriter"
                        style={{ whiteSpace: "nowrap", overflow: "hidden", borderRight: "2px solid white" }}
                    >
                        LAI HONG YU
                    </h1>
                </div>
            </div>

            {/* Description Section */}
            <div className="section relative flex flex-col sm:flex-row justify-center items-center bg-gray-700 w-full h-full rounded-3xl space-y-4 sm:space-y-0 sm:space-x-4 p-6">
                <div className="w-full max-w-4xl">
                    <h1 className="text-xl sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-semibold text-white text-center m-4">
                        Hello, I'm Lai Hong Yu. I'm a{" "}
                        <span className="bg-custom-gradient">software developer</span>,{" "}
                        <span className="bg-text-gradient bg-clip-text text-transparent">
                            hardware engineer
                        </span>
                        , and a{" "}
                        <span className="bg-custom-gradient">tech enthusiast</span> too!
                    </h1>
                </div>
                <div className="w-full max-w-4xl">
                    <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-white font-thin text-center m-4">
                        With over 6 years of experience in the technology field, I have learned
                        many coding languages.
                    </h1>
                </div>
            </div>
            <div className="panels">
            </div>
        </div>

    );
}
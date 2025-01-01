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

        // GSAP Typewriter Animation
        gsap.fromTo(
            ".typewriter",
            { width: "0ch" }, // Starting width (0 characters visible)
            {
                width: "100%", // Adjust this based on the name's length
                duration: 3,
                ease: "steps(40)", // Number of steps matching the length of the text
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
            className="grid grid-rows-[auto_1fr_auto] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] bg-gray-800"
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
            <div className="relative flex justify-center items-center bg-black item-img">
                <div className="relative w-full h-full max-w-screen-xl rounded-3xl overflow-hidden">
                    <img
                        src="/IMG_0927.jpeg"
                        alt="Hong Yu"
                        className="w-full rounded-3xl"
                    />
                    <h1
                        className="absolute bottom-0 text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold text-white w-full text-center bg-black bg-opacity-50 py-4 typewriter"
                        style={{whiteSpace: "nowrap", overflow: "hidden", borderRight: "2px solid white"}}
                    >
                        LAI HONG YU
                    </h1>
                </div>
            </div>
            <div
                className="relative flex flex-col sm:flex-row justify-center items-center bg-gray-700 w-full h-full rounded-3xl space-y-4 sm:space-y-0 sm:space-x-4 p-6">
                <div className="w-full max-w-4xl">
                    <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-white text-center m-4">
                        Hello, I'm Lai Hong Yu. I'm a software developer, hardware engineer, and a tech enthusiast too!
                    </h1>
                </div>
                <div className="w-full max-w-4xl">
                    <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-white text-center m-4">
                        With over 6 years of experience in the technology field, I have learned many coding languages.
                    </h1>
                </div>
            </div>
        </div>
    );
}
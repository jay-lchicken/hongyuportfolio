"use client";

import React, { useEffect, useState } from "react";

const LoadingBar = () => {
    const [progress, setProgress] = useState(1); // Start at 1
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setProgress((prev) => {
                if (prev < 100) {
                    return prev + 1; // Increment progress by 1
                }
                clearInterval(interval); // Clear interval when progress reaches 100
                setTimeout(() => setIsLoaded(true), 500); // Delay to show full bar
                return prev;
            });
        }, 1); // Slower interval for smoother counting

        return () => clearInterval(interval); // Clean up interval
    }, []);

    return (
        !isLoaded && (
            <div className="loading-container">
                <div className="loading-bar-wrapper">
                    <div className="loading-bar " style={{ width: `${progress}%` }}></div>
                </div>
                <div className="loading-text text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-9xl">{progress}%</div>
                <style jsx>{`
                    .loading-container {
                        position: fixed;
                        top: 0;
                        left: 0;
                        width: 100%;
                        height: 100vh;
                        background-color: #0a0a0a; /* Black background */
                        z-index: 9999;
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        justify-content: center;
                    }
                    .loading-bar-wrapper {
                        position: absolute;
                        top: 0;
                        left: 0;
                        width: 100%;
                        height: 5px;
                        background-color: rgba(255, 255, 255, 0.1); /* Light background for bar container */
                    }
                    .loading-bar {
                        height: 100%;
                        background-color: #4caf50; /* Green loading bar */
                        transition: width 0.05s ease; /* Smooth transition */
                    }
                    .loading-text {
                        font-weight: bold;
                        color: white;
                        text-align: center;
                        margin-top: 20px;
                    }
                `}</style>
            </div>
        )
    );
};

export default LoadingBar;
"use client";

import React, { useEffect, useState } from "react";

const LoadingBar = () => {
    const [progress, setProgress] = useState(0);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setProgress((prev) => {
                if (prev < 90) {
                    return prev + 5; // Increment progress
                }
                return prev;
            });
        }, 100);

        const handleLoad = () => {
            clearInterval(interval);
            setProgress(100); // Set progress to 100% once the website loads
            setTimeout(() => {
                setIsLoaded(true); // Mark as loaded to hide the bar and text
            }, 500); // Small delay to show completion
        };

        if (document.readyState === "complete") {
            handleLoad();
        } else {
            window.addEventListener("load", handleLoad);
        }

        return () => {
            clearInterval(interval);
            window.removeEventListener("load", handleLoad);
        };
    }, []);

    return (
        !isLoaded && (
            <div className="loading-container">
                <div className="loading-bar-wrapper">
                    <div className="loading-bar" style={{ width: `${progress}%` }}></div>
                </div>
                <div className="loading-text">{progress}%</div>
                <style jsx>{`
                    .loading-container {
                        position: fixed;
                        top: 0;
                        left: 0;
                        width: 100%;
                        height: 100vh; /* Full viewport height */
                        background-color: #ffffff; /* White background */
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
                        background-color: rgba(0, 0, 0, 0.1);
                    }
                    .loading-bar {
                        height: 100%;
                        background-color: #4caf50; /* Green loading bar */
                        transition: width 0.2s ease;
                    }
                    .loading-text {
                        font-size: 24px; /* Larger font size */
                        font-weight: bold;
                        color: #000; /* Black text for contrast */
                        text-align: center;
                    }
                `}</style>
            </div>
        )
    );
};

export default LoadingBar;
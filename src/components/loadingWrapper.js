"use client";

import { useState, useEffect } from "react";
import LoadingBar from "@/components/loadingBar";
export default function LoadingWrapper({ children }) {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Add a small delay to ensure the loading bar is visible briefly
        const handleLoading = () => {
            setTimeout(() => {
                if (document.readyState === "complete") {
                    setIsLoading(false);
                } else {
                    // Add an event listener to track when the document is fully loaded
                    const handleReadyStateChange = () => {
                        if (document.readyState === "complete") {
                            setIsLoading(false);
                        }
                    };

                    document.addEventListener("readystatechange", handleReadyStateChange);

                    return () => {
                        document.removeEventListener("readystatechange", handleReadyStateChange);
                    };
                }
            }, 500); // Adjust the delay (in ms) if needed
        };

        handleLoading();
    }, []);

    return <>{isLoading ? <LoadingBar /> : children}</>;
}
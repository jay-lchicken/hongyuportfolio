"use client";

import { Document, Page, pdfjs } from "react-pdf";
import { useState } from "react";

// Set workerSrc for react-pdf

// Set the worker source
pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;
export default function Certificates() {
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);

    // Callback for when the PDF loads
    const onDocumentLoadSuccess = ({ numPages }) => {
        setNumPages(numPages);
    };

    return (
        <div
            className="items-center min-w-full justify-center align-middle justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 bg-gray-800 min-w-full"
            style={{ fontFamily: "MyCustomFont" }}
        >
            <div
                className="flex flex-row items-center w-full max-w-small sm:max-w-medium md:max-w-large lg:max-w-large2 xl:max-w-screen-xl"
            >
                <img
                    src="/profile.png"
                    alt="Hong Yu"
                    width="50"
                    height="50"
                    className="rounded-full"
                />
                <div className="text-4xl ml-4 font">My Certificates</div>
            </div>
            <div className="justify-between bg-gray-700 min-h-24 mt-16 flex flex-row justify-start items-center w-full max-w-small sm:max-w-medium md:max-w-large lg:max-w-large2 xl:max-w-screen-xl h-full rounded-3xl">
                <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-white font-bold text-center m-4">Apple Teacher </h1>
                <button className="rounded-xl w-40 h-10 bg-amber-200 items-center justify-center m-4">
                    <a href="/AppleTeacherCertificate.pdf" className="text-black" >
                        View Certificate
                    </a>
                </button>
            </div>
            <div className="justify-between bg-gray-700 min-h-24 mt-16 flex flex-row justify-start items-center w-full max-w-small sm:max-w-medium md:max-w-large lg:max-w-large2 xl:max-w-screen-xl h-full rounded-3xl">
                <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-white font-bold text-center m-4">Apple Teacher Swift Playground </h1>
                <button className="rounded-xl w-40 h-10 bg-amber-200 items-center justify-center m-4">
                    <a href="/AppleTeacherSwiftPlaygroundsCertificate.pdf" className="text-black" >
                        View Certificate
                    </a>
                </button>
            </div>
            <div className="justify-between bg-gray-700 min-h-24 mt-16 flex flex-row justify-start items-center w-full max-w-small sm:max-w-medium md:max-w-large lg:max-w-large2 xl:max-w-screen-xl h-full rounded-3xl">
                <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-white font-bold text-center m-4">Build Portfolio With Google Sites </h1>
                <button className="rounded-xl w-40 h-10 bg-amber-200 items-center justify-center m-4">
                    <a href="/Certificate/Google%20Certificate/Build%20Portfolio%20with%20Google%20Sites.pdf" className="text-black" >
                        View Certificate
                    </a>
                </button>
            </div>
            <div className="justify-between bg-gray-700 min-h-24 mt-16 flex flex-row justify-start items-center w-full max-w-small sm:max-w-medium md:max-w-large lg:max-w-large2 xl:max-w-screen-xl h-full rounded-3xl">
                <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-white font-bold text-center m-4">Create a guessing game with google forms</h1>
                <button className="rounded-xl w-40 h-10 bg-amber-200 items-center justify-center m-4">
                    <a href="/Certificate/Google%20Certificate/Create%20a%20Guessing%20Game%20with%20Google%20Forms.pdf" className="text-black" >
                        View Certificate
                    </a>
                </button>
            </div>
            <div className="justify-between bg-gray-700 min-h-24 mt-16 flex flex-row justify-start items-center w-full max-w-small sm:max-w-medium md:max-w-large lg:max-w-large2 xl:max-w-screen-xl h-full rounded-3xl">
                <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-white font-bold text-center m-4">Create a Animation in Google Slides</h1>
                <button className="rounded-xl w-40 h-10 bg-amber-200 items-center justify-center m-4">
                    <a href="/Certificate/Google%20Certificate/Create%20an%20Animation%20in%20Google%20Slides.pdf" className="text-black" >
                        View Certificate
                    </a>
                </button>
            </div>
        </div>
    );
}
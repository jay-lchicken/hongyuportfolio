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
            <div
                className="content mt-5 relative w-full min-w-full flex flex-col bg-gray-700 w-full min-w-full h-full rounded-3xl space-y-4 p-6 h-three md:h-six overflow-hidden"
            >
                <h1
                    className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white"
                >
                    Apple Teacher Certificate
                </h1>
                {/* PDF Viewer */}
                <div className="pdf-viewer w-full flex justify-center items-center bg-white p-4 rounded-lg">
                    <Document
                        file="/Certificate/AppleTeacherCertificate.pdf"
                        onLoadSuccess={onDocumentLoadSuccess}
                    >
                        <Page pageNumber={pageNumber} />
                    </Document>
                </div>
                {/* Pagination Controls */}
                <div className="text-white mt-4 flex justify-center items-center space-x-4">
                    <button
                        className="px-4 py-2 bg-gray-600 rounded hover:bg-gray-500"
                        onClick={() => setPageNumber((prev) => Math.max(prev - 1, 1))}
                        disabled={pageNumber <= 1}
                    >
                        Previous
                    </button>
                    <span>
                        Page {pageNumber} of {numPages}
                    </span>
                    <button
                        className="px-4 py-2 bg-gray-600 rounded hover:bg-gray-500"
                        onClick={() =>
                            setPageNumber((prev) => Math.min(prev + 1, numPages))
                        }
                        disabled={pageNumber >= numPages}
                    >
                        Next
                    </button>
                </div>
            </div>
        </div>
    );
}
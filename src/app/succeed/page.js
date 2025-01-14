"use client";



export default function succeed() {
    return (

        <div
            className="  grid grid-rows-[auto_1fr_auto] items-center justify-center align-middle justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20  bg-gray-800  " style={{fontFamily:"MyCustomFont"}}
        >
            <div className="w-96 h-96 rounded-3xl bg-white flex items-center flex-col justify-center">
                <h1 className="text-4xl text-black font-bold text-center m-4">
                    Success!
                </h1>
                <img className="flex w-44 " src="/Green-Tick-No-Background.png"/>
            </div>
        </div>

);
}
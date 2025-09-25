import React, { useState } from "react";

const TestModal = () => {
    const modals = [1,2,3,4]; // try [1,2,3,4] to test multiple
    const [fullscreenIndex, setFullscreenIndex] = useState<number | null>(null);
    const count = modals.length;

    const toggleFullscreen = (index: number) => {
        setFullscreenIndex(fullscreenIndex === index ? null : index);
    };

    return (
        <div
            style={{ zIndex: 9999 }}
            className="fixed inset-0 bg-black/50 flex justify-center items-center overflow-auto p-2"
        >
            <div
                className={`w-full h-full gap-1
                    ${count === 1 || count === 2 ? "flex justify-center items-center" : "grid grid-cols-1 md:grid-cols-2"}`}
            >
                {modals.map((i, index) => (
                    <div
                        key={index}
                        className={`relative bg-white rounded shadow p-4 flex flex-col justify-center items-center
                            ${fullscreenIndex === index ? "w-full h-full" : `h-[48vh]`}`}
                    >
                        <button
                            className="absolute top-2 right-2 px-2 py-1 bg-blue-500 text-white rounded"
                            onClick={() => toggleFullscreen(index)}
                        >
                            {fullscreenIndex === index ? "Exit Fullscreen" : "Fullscreen"}
                        </button>
                        Modal {i}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TestModal;

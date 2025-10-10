import { Input } from "anshu-reactui/lib";
import React, { useState, useEffect } from "react";

const ComingSoonPage: React.FC = () => {
    const [countdown, setCountdown] = useState<string>("00:00:00");

    useEffect(() => {
        const launchDate = new Date("2025-12-01T00:00:00").getTime();

        const interval = setInterval(() => {
            const now = new Date().getTime();
            const distance = launchDate - now;

            if (distance < 0) {
                clearInterval(interval);
                setCountdown("00:00:00");
                return;
            }

            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);

            setCountdown(
                `${hours.toString().padStart(2, "0")}:${minutes
                    .toString()
                    .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`
            );
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="min-h-screen w-full flex flex-col justify-center items-center px-4 bg-Background">

            {/* Header */}
            <h1 className="text-5xl md:text-7xl font-extrabold mb-4 text-center">
                Coming Soon
            </h1>
            <p className="text-lg md:text-2xl mb-8 text-center max-w-xl">
                We are working hard to bring something amazing. Stay tuned for updates!
            </p>

            {/* Countdown */}
            <div className="flex justify-center items-center space-x-4 text-3xl md:text-5xl font-bold mb-8">
                <span>{countdown}</span>
            </div>
            {/* Email input and button */}
            <div className="flex gap-2 items-center w-lg">
                <Input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1"
                    size="sm"
                />
                <button className="px-4 py-1 btn-animate btn-animate-secondary whitespace-nowrap w-xs">
                    Notify Me
                </button>
            </div>

            {/* Footer */}
            <p className="text-sm my-4">
                © {new Date().getFullYear()} All Rights Reserved | Author:{" "}
                <span className="font-semibold">Anshu Kumar</span>
            </p>
        </div>
    );
};

export default ComingSoonPage;

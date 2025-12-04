import Button from "@/components/Button";
import Image from "next/image";

export default function LandingSection() {
    return (
        <section className="min-h-screen w-screen bg-primary">
            {/* Top Info Bar */}
            <div className="container mx-auto flex min-h-screen flex-col justify-between pt-8 pb-8">
                {/* Top row */}
                <div className="grid grid-cols-2 lg:grid-cols-4 items-center gap-4">
                    {/* Column 1 - Pakistan Based - Hidden on small, visible on large */}
                    <div className="hidden lg:flex flex-col items-start">
                        <span className="landing-top-row">Pakistan</span>
                        <span className="landing-bottom-row">Based</span>
                    </div>

                    {/* Column 2 - Building at - Always visible */}
                    <div className="flex flex-col items-start">
                        <span className="landing-top-row">Building at</span>
                        <span className="landing-bottom-row">Bridgeframe</span>
                    </div>

                    {/* Column 3 - Freelance availability - Hidden on small, visible on large */}
                    <div className="hidden lg:flex flex-col items-start">
                        <span className="landing-top-row">Freelance availability</span>
                        <span className="landing-bottom-row">November 2025</span>
                    </div>

                    {/* Column 4 - Button - Always visible, right-aligned */}
                    <div className="flex justify-end">
                        <Button href="/contact">Get in touch</Button>
                    </div>
                </div>

                {/* Middle sections */}
                <div className="flex flex-col items-center gap-8 w-full">
                    {/* Top container - Black rounded rectangle */}
                    <div className="w-2/3 rounded-lg bg-secondary h-96"></div>

                    {/* Bottom container - Hero text */}
                    <div className="flex flex-col items-center gap-4 w-full">
                        {/* A, Seriously, good row - using same 4-column grid */}
                        <div className="grid grid-cols-4 items-center gap-4 w-full">
                            {/* Column 1 - A aligned with Pakistan/Based */}
                            <div className="flex justify-start">
                                <span className="landing-hero-text uppercase">A</span>
                            </div>
                            {/* Column 2 - Seriously centered */}
                            <div className="col-span-2 flex justify-center">
                                <span className="landing-hero-text uppercase">Seriously</span>
                            </div>
                            {/* Column 4 - good aligned with button */}
                            <div className="flex justify-end">
                                <span className="landing-hero-text uppercase">good</span>
                            </div>
                        </div>

                        {/* WEB DEVELOPER */}
                        <div className="flex justify-center mt-10">
                            <span className="landing-hero-title uppercase">WEB DEVELOPER</span>
                        </div>
                    </div>
                </div>

                {/* Bottom row */}
                <div className="flex items-center justify-between">
                    {/* Bottom left - Scroll for */}
                    <div className="flex items-center gap-2">
                        <Image
                            src="/assets/home/Arrow_down.svg"
                            alt="Arrow down"
                            width={16}
                            height={16}
                            className="h-4 w-4"
                        />
                        <span className="landing-top-row">Scroll for</span>
                    </div>

                    {/* Bottom right - cool sh*t */}
                    <div className="flex items-center gap-2">
                        <span className="landing-top-row">cool sh*t</span>
                        <Image
                            src="/assets/home/Arrow_down.svg"
                            alt="Arrow down"
                            width={16}
                            height={16}
                            className="h-4 w-4"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}


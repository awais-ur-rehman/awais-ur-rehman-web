"use client";

import Image from "next/image";
import workData from "@/lib/workData.json";

type WorkItem = {
    id: number;
    company: string;
    jobType: string;
    year: string;
    image: string;
    technologies: string[];
};

export default function WorkSection() {
    const displayedWork = (workData as WorkItem[]).slice(0, 2);

    return (
        <section className="min-h-screen w-screen bg-primary py-16 sm:py-24">
            <div className="container mx-auto px-4 sm:px-6">
                {/* Top Section - WORK and '25 */}
                <div className="flex items-center justify-between mb-4">
                    <h2 className="work-title">WORK</h2>
                    <span className="work-year">'25</span>
                </div>

                {/* Cards Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-12">
                    {displayedWork.map((work) => (
                        <div
                            key={work.id}
                            className="rounded-lg bg-secondary p-3 sm:p-4 lg:p-5"
                        >
                            {/* Image Section */}
                            <div className="w-full h-80 sm:h-96 lg:h-[500px] bg-secondary relative overflow-hidden rounded-lg mb-3 sm:mb-4 lg:mb-5">
                                <Image
                                    src={work.image}
                                    alt={`${work.company} - ${work.jobType}`}
                                    fill
                                    className="object-cover"
                                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 50vw"
                                />
                            </div>

                            {/* Details Section */}
                            <div>
                                <div className="flex items-start justify-between mb-4 sm:mb-6">
                                    <p className="work-card-info">
                                        {work.company}
                                    </p>
                                    <p className="work-card-info text-right">
                                        {work.jobType} {work.year}
                                    </p>
                                </div>
                                <div className="relative overflow-hidden w-full">
                                    {/* Left fade shadow */}
                                    <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-secondary to-transparent z-10 pointer-events-none" />

                                    {/* Right fade shadow */}
                                    <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-secondary to-transparent z-10 pointer-events-none" />

                                    <div className="inline-flex animate-marquee whitespace-nowrap">
                                        {[...work.technologies, ...work.technologies].map((tech, index) => (
                                            <span key={index} className="work-tech mr-2">
                                                {tech}
                                                {index < work.technologies.length * 2 - 1 && <span className="mx-1">,</span>}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* See All Section */}
                <div className="flex items-center justify-center">
                    <button className="work-see-all flex items-center gap-2 hover:opacity-80 transition-opacity">
                        <span>See all</span>
                        <Image
                            src="/assets/home/Arrow_right.svg"
                            alt="Arrow right"
                            width={24}
                            height={24}
                            className="h-6 w-6"
                        />
                    </button>
                </div>
            </div>
        </section>
    );
}


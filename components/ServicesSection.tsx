"use client";

import Image from "next/image";
import servicesData from "@/lib/servicesData.json";

type ServiceItem = {
    id: number;
    name: string;
    description: string;
    image: string;
    tags: string[];
};

export default function ServicesSection() {
    return (
        <section className="min-h-screen w-screen bg-primary py-16 sm:py-24">
            <div className="container mx-auto px-4">
                {/* Main Container with dark background */}
                <div className="bg-secondary rounded-lg p-6 sm:p-8 lg:p-6 text-center">
                    {/* Top Section - Services Heading and Description */}
                    <div className="mb-12 sm:mb-16 text-left">
                        <h2 className="services-heading mb-6 sm:mb-8">Services</h2>
                        <p className="services-description">
                            Evolving with every brief and built for impact, my process spans design, development, and brand strategy—aligning vision with execution to bring clarity and edge to every project.
                        </p>
                    </div>

                    {/* Services List */}
                    <div className="bg-[#262626] rounded-lg text-left ">
                        {servicesData.map((service: ServiceItem, index: number) => (
                            <div
                                key={service.id}
                                className={`grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-6 p-6 sm:p-8 lg:p-10 ${index < servicesData.length - 1 ? 'border-b border-primary/20' : ''}`}
                            >
                                {/* Column 1: Index */}
                                <div className="lg:col-span-1">
                                    <span className="services-index">{(index + 1).toString().padStart(2, '0')}</span>
                                </div>

                                {/* Column 2: Name */}
                                <div className="lg:col-span-3">
                                    <h3 className="services-name">{service.name}</h3>
                                </div>

                                {/* Column 3: Description and Tags */}
                                <div className="lg:col-span-4">
                                    <p className="services-item-description mb-6 sm:mb-8">
                                        {service.description}
                                    </p>
                                    {/* Tags - Static, not marquee */}
                                    <div className="flex flex-wrap gap-2 sm:gap-3">
                                        {service.tags.map((tag, tagIndex) => (
                                            <span key={tagIndex} className="services-tag">
                                                {tag}
                                                {tagIndex < service.tags.length - 1 && <span className="mx-1">,</span>}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* Column 4: Image */}
                                <div className="lg:col-span-4">
                                    <div className="w-full h-64 sm:h-80 lg:h-72 bg-[#262626] relative overflow-hidden rounded-lg">
                                        <Image
                                            src={service.image}
                                            alt={service.name}
                                            fill
                                            className="object-cover"
                                            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                        />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}


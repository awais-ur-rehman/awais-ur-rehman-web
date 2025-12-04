export default function AboutSection() {
    return (
        <section className="min-h-screen w-screen bg-primary py-16 sm:py-24">
            <div className="container mx-auto px-4 sm:px-6">
                <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">
                    {/* Left side - 60% */}
                    <div className="w-full lg:w-[60%]">
                        <h2 className="about-heading uppercase mb-6">MYSELF</h2>
                        <p className="about-content">
                            Passionate about merging design and engineering, I craft smooth, interactive experiences with purpose. As a full stack developer with a focus on motion, performance, and detail, I help bring digital products to life for forward-thinking brands around the world.
                        </p>
                    </div>

                    {/* Right side - 40% */}
                    <div className="w-full lg:w-[40%]">
                        <div className="aspect-square w-full bg-secondary rounded-lg"></div>
                    </div>
                </div>
            </div>
        </section>
    );
}


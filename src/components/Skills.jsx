import { useEffect, useRef, useState } from "react"

const skills = [
    { name: "React Js", percentage: 90, color: "#61DAFB" },
    { name: "Tailwind CSS", percentage: 98, color: "#06B6D4" },
    { name: "Vue Js", percentage: 80, color: "#4FC08D" },
    { name: "Javascript", percentage: 75, color: "#F7DF1E" },
];

const Skills = () => {
    // Rings fill up when the section scrolls into view
    const sectionRef = useRef(null)
    const [visible, setVisible] = useState(false)

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => setVisible(entry.isIntersecting),
            { threshold: 0.3 }
        )
        if (sectionRef.current) observer.observe(sectionRef.current)
        return () => observer.disconnect()
    }, [])

    return (
        <section
            ref={sectionRef}
            id="skills"
            className="min-h-screen flex items-center py-20 px-4 sm:px-6 overflow-x-clip relative"
        >
            <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
                <div className="absolute -top-40 -right-40 w-80 h-80 bg-red-500/5 rounded-full blur-3xl"></div>
                <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-red-500/5 rounded-full blur-3xl"></div>
            </div>

            <div className="max-w-6xl mx-auto w-full relative z-10">
                <div className="text-center mb-16" data-aos="fade-up">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-500/10 border border-red-500/20 mb-5">
                        <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
                        <span className="text-sm font-medium dark:text-gray-300 text-gray-700">
                            Expertise
                        </span>
                    </div>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold dark:text-white text-gray-900">
                        My <span className="text-red-500 dark:text-red-400">Skills</span>
                    </h2>
                    <p className="mt-4 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                        Lorem ipsum dolor sit amet consectetur
                        adipiscing elit.
                    </p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
                    {skills.map((skill, index) => {
                        const radius = 60;
                        const circumference = 2 * Math.PI * radius;
                        const filled = (skill.percentage / 100) * circumference;
                        const offset = visible ? circumference - filled : circumference;
                        const size = 150;
                        return (
                            <div
                                key={index}
                                className="flex flex-col items-center"
                                data-aos="fade-up"
                                data-aos-delay={index * 100}
                            >
                                <div className="relative" style={{ width: size, height: size }}>
                                    <svg className="transform -rotate-90" width={size} height={size} aria-hidden="true">
                                        <circle
                                            cx={size / 2}
                                            cy={size / 2}
                                            r={radius}
                                            fill="none"
                                            stroke="#e5e7eb"
                                            strokeWidth="10"
                                            className="dark:stroke-gray-700"
                                        ></circle>
                                        <circle
                                            cx={size / 2}
                                            cy={size / 2}
                                            r={radius}
                                            fill="none"
                                            stroke={skill.color}
                                            strokeDasharray={circumference}
                                            strokeDashoffset={offset}
                                            strokeLinecap="round"
                                            strokeWidth="10"
                                            className="transition-all duration-1000 ease-out"
                                        ></circle>
                                    </svg>
                                    <div className='absolute inset-0 flex items-center
                                    justify-center' role="img" aria-label={`${skill.name}: ${skill.percentage}%`}>
                                        <div className='text-center'>
                                            <span className='text-3xl font-bold dark:text-white
                                            text-gray-900'>
                                                {skill.percentage}%
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <h3 className='mt-4 text-base
                                 font-medium text-center dark:text-gray-200 text-gray-900'>
                                    {skill.name}
                                </h3>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Skills;
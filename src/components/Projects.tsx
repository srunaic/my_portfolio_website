import { motion } from 'framer-motion';
import { Github, FileText, ExternalLink } from 'lucide-react';

const projects = [
    {
        title: "Virtual Server Architecture",
        type: "Backend / Game Server",
        desc: "A custom game server implementation using Django REST Framework. Handles user authentication, data synchronization for game clients, and API architecture design.",
        tech: ["Python", "Django", "Rest API", "MySQL"],
        link: "https://github.com/srunaic/Virtual-Server---Test?tab=readme-ov-file",
        isRepo: true
    },
    {
        title: "Luna AI Agent",
        type: "AI / Desktop Application",
        desc: "An intelligent desktop assistant powered by LLM. Features natural language processing to execute system tasks and provide interactive responses.",
        tech: ["Python", "LangChain", "PyQt", "LLM"],
        link: "https://github.com/srunaic/Luna-AI-Agent",
        isRepo: true
    },
    {
        title: "AI Big Data Dashboard",
        type: "Web / Data Visualization",
        desc: "Interactive dashboard for visualizing AI and Big Data analytics. Demonstrates React capability and data binding proficiency.",
        tech: ["React", "JavaScript", "Charts.js"],
        link: "https://github.com/srunaic/my_DashBoard_AI_BigData",
        isRepo: true
    },
    {
        title: "My Tech Blog",
        type: "Web / Knowledge Sharing",
        desc: "A personal blog platform built to share technical insights and project updates. Deployment and CI/CD practice.",
        tech: ["Web", "GitHub Actions", "Markdown"],
        link: "https://github.com/srunaic/MyTestBlog",
        isRepo: true
    },
    {
        title: "Project Specification Note #1",
        type: "Documentation",
        desc: "Detailed project planning and technical specification document.",
        tech: ["PDF", "Architecture"],
        link: "https://drive.google.com/file/d/1BclOv8S7KH_gkG-2oa4jo2rvKITX3xVo/view?usp=drive_link",
        isRepo: false
    },
    {
        title: "Project Specification Note #2",
        type: "Documentation",
        desc: "Technical design document covering system flow and logic.",
        tech: ["PDF", "System Design"],
        link: "https://drive.google.com/file/d/1CSflhuA75dAJCB6kMGngqIIMF04ucXrj/view?usp=drive_link",
        isRepo: false
    },
    {
        title: "Project Specification Note #3",
        type: "Documentation",
        desc: "Additional technical documentation and portfolio assets.",
        tech: ["PDF", "Portfolio"],
        link: "https://drive.google.com/file/d/15Y0hztE1ScD6eXezsbjoZV8lUOhlKvdj/view?usp=drive_link",
        isRepo: false
    },
    {
        title: "Sensor & PLC Raspberry Pi",
        type: "Hardware Integration / IoT",
        desc: "Integration of sensors and PLC systems using Raspberry Pi. Features real-time data monitoring and automation control logic.",
        tech: ["Raspberry Pi", "PLC", "Python", "Sensors"],
        link: "https://github.com/srunaic/sensor_plc_rasberrypie-",
        isRepo: true
    },
    {
        title: "DirectX Game Engine",
        type: "Game Engine / Graphics",
        desc: "Custom game engine development using DirectX 11/12. Implemented rendering pipeline, component-based object system, and physics integration.",
        tech: ["C++", "DirectX", "HLSL", "Win32 API"],
        link: "https://github.com/srunaic/DirectX_Game_EngineMaker",
        isRepo: true
    },
    {
        title: "AI Hacker Protection",
        type: "AI / Security",
        desc: "Advanced security system utilizing AI to detect and prevent hacking attempts. Features real-time threat analysis and automated defense response.",
        tech: ["Python", "TensorFlow", "Cyber Security", "AI"],
        link: "https://github.com/srunaic/AI_Hacker_Protection",
        isRepo: true
    },
    {
        title: "Traffic GIS Controller",
        type: "GIS / System Control",
        desc: "Traffic control system utilizing GIS (Geographic Information System) data. Real-time traffic flow monitoring and signal control optimization logic.",
        tech: ["GIS", "C#", ".NET", "System Control"],
        link: "https://github.com/srunaic/TrafficGIS_Controller",
        isRepo: true
    }
];

export const Projects = () => {
    return (
        <section id="projects" className="py-20 bg-black">
            <div className="max-w-6xl mx-auto px-4">
                <h2 className="text-3xl font-bold mb-4 text-white">Featured Projects</h2>
                <p className="text-zinc-500 mb-12">Exploration of code, architecture, and documentation.</p>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projects.map((project, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            whileHover={{ y: -5 }}
                            className="bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden hover:border-zinc-600 transition-all group"
                        >
                            <div className="p-6 h-full flex flex-col">
                                <div className="flex justify-between items-start mb-4">
                                    <div className="p-2 bg-zinc-800 rounded-lg text-white transition-colors">
                                        {project.isRepo ? <Github size={24} /> : <FileText size={24} />}
                                    </div>
                                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-white transition-colors">
                                        <ExternalLink size={20} />
                                    </a>
                                </div>

                                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-zinc-200 transition-colors">
                                    {project.title}
                                </h3>
                                <p className="text-sm text-zinc-400 font-medium mb-3">{project.type}</p>
                                <p className="text-zinc-500 text-sm mb-6 flex-grow">{project.desc}</p>

                                <div className="flex flex-wrap gap-2 mt-auto">
                                    {project.tech.map((tag, i) => (
                                        <span key={i} className="text-xs px-2 py-1 bg-zinc-800 text-zinc-400 rounded border border-zinc-700">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

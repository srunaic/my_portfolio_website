import { motion } from 'framer-motion';

const skills = [
    {
        category: "게임 클라이언트 (Game Client)",
        items: ["Unity 3D", "C#", "UGUI", "3D Max", "Blender", "Oculus SDK"]
    },
    {
        category: "서버 & 백엔드 (Server & Backend)",
        items: ["Python", "Django REST Framework", "MSSQL", "MySQL", "REST API", "JSON"]
    },
    {
        category: "웹 & 개발 도구 (Web & Tools)",
        items: ["React", "TypeScript", "HTML/CSS", "Git/GitHub", "Docker", "Slack"]
    }
];

export const Skills = () => {
    return (
        <section id="skills" className="py-24 bg-bg-card/25 border-t border-bg-accent/40 relative">
            <div className="max-w-6xl mx-auto px-4 sm:px-6">
                <h2 className="font-serif text-3xl md:text-4xl font-bold mb-12 text-center text-text-primary tracking-tight">수행 기술 스택</h2>

                <div className="grid md:grid-cols-3 gap-8">
                    {skills.map((skillGroup, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 25 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ delay: idx * 0.15, duration: 0.6 }}
                            className="bg-bg-base/80 p-8 rounded-2xl border border-bg-accent/60 shadow-sm hover:shadow-md hover:border-brand-accent/30 transition-all"
                        >
                            <h3 className="font-serif text-lg font-bold mb-6 text-text-primary border-b border-bg-accent/30 pb-3">{skillGroup.category}</h3>
                            <div className="flex flex-wrap gap-2.5">
                                {skillGroup.items.map((item, i) => (
                                    <span key={i} className="px-3.5 py-1.5 bg-bg-card/40 text-text-primary/95 rounded-lg text-xs font-semibold border border-bg-accent/50 hover:bg-brand-accent-light/40 hover:border-brand-accent/25 transition-all font-mono">
                                        {item}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

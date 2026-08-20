import React from 'react';
import { motion } from 'framer-motion';
import { Terminal } from 'lucide-react';

const skills = [
    {
        category: "게임 클라이언트 & 엔진 (Client & Engine)",
        badge: "GRAPHICS & XR",
        badgeColor: "text-cyan-400 border-cyan-500/30 bg-cyan-500/10",
        items: ["Unity 3D", "DirectX 11/12", "C#", "HLSL Shaders", "UGUI", "3D Max", "Blender", "Oculus SDK"]
    },
    {
        category: "서버 & 데이터베이스 (Server & Database)",
        badge: "BACKEND & CLOUD",
        badgeColor: "text-blue-400 border-blue-500/30 bg-blue-500/10",
        items: ["Python", "Django REST Framework", "MySQL", "MSSQL", "REST API", "JSON", "Socket Sync", "Docker"]
    },
    {
        category: "AI, IoT & 개발 도구 (AI, IoT & Tools)",
        badge: "AUTOMATION & TOOLS",
        badgeColor: "text-purple-400 border-purple-500/30 bg-purple-500/10",
        items: ["LangChain / LLM", "TensorFlow", "Raspberry Pi", "PLC Sensors", "React", "TypeScript", "Git / GitHub", "Linux"]
    }
];

export const Skills: React.FC = () => {
    return (
        <section id="skills" className="py-24 bg-bg-card/25 border-t border-bg-accent/40 relative">
            <div className="max-w-6xl mx-auto px-4 sm:px-6">
                <div className="flex flex-col items-center text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-mono font-semibold mb-3">
                        <Terminal size={14} />
                        <span>TECH STACK & ARCHITECTURE</span>
                    </div>
                    <h2 className="font-serif text-3xl md:text-4xl font-bold text-text-primary tracking-tight mb-3">
                        보유 기술 및 엔지니어링 스택
                    </h2>
                    <p className="text-text-muted font-sans text-sm md:text-base max-w-xl">
                        실무와 R&D 프로젝트를 통해 검증된 기술 스택과 아키텍처 역량입니다.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {skills.map((skillGroup, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 25 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ delay: idx * 0.15, duration: 0.5 }}
                            className="bg-bg-base/90 p-8 rounded-2xl border border-bg-accent/70 shadow-sm hover:border-brand-accent/40 hover:shadow-[0_0_20px_rgba(0,240,255,0.06)] transition-all flex flex-col justify-between backdrop-blur-sm"
                        >
                            <div>
                                <div className="flex items-center justify-between mb-5 border-b border-bg-accent/40 pb-4">
                                    <span className={`text-[10px] font-mono font-semibold px-2.5 py-0.5 rounded-full border ${skillGroup.badgeColor}`}>
                                        {skillGroup.badge}
                                    </span>
                                </div>
                                <h3 className="font-serif text-lg font-bold mb-6 text-text-primary">
                                    {skillGroup.category}
                                </h3>
                                <div className="flex flex-wrap gap-2">
                                    {skillGroup.items.map((item, i) => (
                                        <span key={i} className="px-3 py-1.5 bg-bg-card/70 text-text-primary rounded-lg text-xs font-semibold border border-bg-accent/60 hover:border-cyan-500/40 hover:bg-cyan-500/10 transition-all font-mono">
                                            {item}
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
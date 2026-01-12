import { motion } from 'framer-motion';

const skills = [
    {
        category: "Game Client",
        items: ["Unity 3D", "C#", "UGUI", "3D Max", "Blender", "Oculus SDK"]
    },
    {
        category: "Server & Backend",
        items: ["Python", "Django REST Framework", "MSSQL", "MySQL", "Rest API", "JSON"]
    },
    {
        category: "Web & Tools",
        items: ["React", "TypeScript", "HTML/CSS", "Git/GitHub", "Docker", "Slack"]
    }
];

export const Skills = () => {
    return (
        <section className="py-20 bg-zinc-950 border-t border-zinc-900">
            <div className="max-w-6xl mx-auto px-4">
                <h2 className="text-3xl font-bold mb-12 text-center text-white">Technical Arsenal</h2>

                <div className="grid md:grid-cols-3 gap-8">
                    {skills.map((skillGroup, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.2 }}
                            className="bg-zinc-900/50 p-6 rounded-2xl border border-zinc-800 hover:border-white/20 transition-colors"
                        >
                            <h3 className="text-xl font-semibold mb-6 text-white">{skillGroup.category}</h3>
                            <div className="flex flex-wrap gap-2">
                                {skillGroup.items.map((item, i) => (
                                    <span key={i} className="px-3 py-1 bg-zinc-800 text-zinc-300 rounded-full text-sm font-medium border border-zinc-700">
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

import { motion } from 'framer-motion';
import { ChevronDown, Gamepad2, Server } from 'lucide-react';

export const Hero = () => {
    return (
        <section className="relative h-screen flex items-center justify-center overflow-hidden bg-[url('https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center">
            {/* Overlay */}
            <div className="absolute inset-0 bg-slate-900/90 backdrop-blur-sm"></div>

            {/* Content */}
            <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="flex justify-center gap-4 mb-8">
                        <span className="p-3 bg-zinc-800 rounded-full text-white border border-zinc-700">
                            <Gamepad2 size={32} />
                        </span>
                        <span className="p-3 bg-zinc-800 rounded-full text-white border border-zinc-700">
                            <Server size={32} />
                        </span>
                    </div>

                    <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white tracking-tight">
                        Choi Seong-hyo
                    </h1>
                    <h2 className="text-2xl md:text-3xl text-zinc-400 font-light mb-8">
                        Unity Client & Server Full-stack Developer
                    </h2>
                    <p className="text-zinc-500 max-w-2xl mx-auto mb-10 text-lg leading-relaxed">
                        Bridging the gap between immersive Game Clients and robust Server Architectures.
                        Specialized in RPG Systems, Data Visualization, and 3D Pipelines.
                    </p>

                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => {
                            document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
                        }}
                        className="px-8 py-4 bg-white hover:bg-zinc-200 text-black rounded-full font-semibold transition-all"
                    >
                        View Projects
                    </motion.button>
                </motion.div>
            </div>

            <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 text-gray-500"
            >
                <ChevronDown size={32} />
            </motion.div>
        </section>
    );
};

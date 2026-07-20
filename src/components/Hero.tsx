import { motion } from 'framer-motion';
import { ChevronDown, Gamepad2, Server } from 'lucide-react';

export const Hero = () => {
    const handleScrollDown = () => {
        document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section id="hero" className="relative min-h-[min(100vh,900px)] py-16 md:py-0 flex items-center justify-center overflow-hidden bg-bg-base bg-grid-lines radial-glow">
            {/* Ambient decorative glowing spots */}
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-accent-light/30 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-brand-accent-light/20 rounded-full blur-3xl pointer-events-none" />

            {/* Content */}
            <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <div className="flex justify-center gap-4 mb-6">
                        <span className="p-4 bg-bg-card rounded-2xl text-brand-accent border border-bg-accent/60 shadow-sm">
                            <Gamepad2 size={28} />
                        </span>
                        <span className="p-4 bg-bg-card rounded-2xl text-brand-accent border border-bg-accent/60 shadow-sm">
                            <Server size={28} />
                        </span>
                    </div>

                    <h1 className="font-serif text-5xl md:text-7xl font-bold mb-6 text-text-primary tracking-tight">
                        최성효
                    </h1>
                    <h2 className="text-xl md:text-3xl text-brand-accent font-medium tracking-wide mb-6 font-sans">
                        Unity Client & Server Full-stack Developer
                    </h2>
                    <p className="text-text-muted max-w-2xl mx-auto mb-10 text-sm md:text-base leading-relaxed">
                        몰입감 넘치는 게임 클라이언트 구축부터 대규모 분산 데이터 처리가 가능한 안정적인 서버 설계까지,<br className="hidden sm:inline" />
                        개발 전주기를 아우르는 풀스택 엔지니어입니다. RPG 시스템, 데이터 시각화, 3D 파이프라인 개발에 특화되어 있습니다.
                    </p>

                    <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => {
                            document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
                        }}
                        className="px-8 py-4 bg-brand-accent hover:bg-brand-accent-hover text-white rounded-xl font-semibold shadow-md transition-all inline-flex items-center gap-2 cursor-pointer border border-brand-accent/10"
                    >
                        포트폴리오 프로젝트 보기
                    </motion.button>
                </motion.div>
            </div>

            <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                onClick={handleScrollDown}
                className="absolute bottom-6 left-1/2 -translate-x-1/2 text-brand-accent/60 hover:text-brand-accent cursor-pointer transition-colors p-2 hidden md:block"
            >
                <ChevronDown size={28} />
            </motion.div>
        </section>
    );
};

import { motion } from 'framer-motion';
import { ChevronDown, Activity, Layers, ArrowUpRight, Zap } from 'lucide-react';

export const Hero = () => {
    const handleScrollDown = () => {
        document.getElementById('divisions')?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section id="hero" className="relative min-h-[92vh] py-20 md:py-28 flex items-center justify-center overflow-hidden bg-bg-base bg-grid-lines radial-glow">
            {/* Ambient High-Tech Glow Spheres */}
            <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-1/3 right-1/4 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[120px] pointer-events-none" />

            {/* Main Hero Container */}
            <div className="relative z-10 px-4 sm:px-6 max-w-6xl mx-auto text-center flex flex-col items-center">
                <motion.div
                    initial={{ opacity: 0, y: 25 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="w-full flex flex-col items-center"
                >
                    {/* Top Enterprise Badge */}
                    <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-slate-900/90 border border-cyan-500/30 text-cyan-300 text-xs font-mono font-semibold mb-6 shadow-sm backdrop-blur-md">
                        <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
                        <span>ENGINEERING PORTFOLIO & R&D PLATFORM</span>
                    </div>

                    {/* Main Headline */}
                    <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-extrabold mb-6 text-text-primary tracking-tight leading-[1.15] max-w-5xl">
                        NEXT-GEN VIRTUAL REALITY & <br className="hidden sm:inline" />
                        <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
                            DISTRIBUTED SERVER SYSTEMS
                        </span>
                    </h1>

                    {/* Developer Name & Subtitle */}
                    <div className="flex flex-wrap items-center justify-center gap-3 mb-6">
                        <span className="text-xl md:text-2xl font-bold text-text-primary font-serif">
                            최성효 (SeongHyo Choi)
                        </span>
                        <span className="text-text-muted/60 hidden sm:inline">|</span>
                        <span className="text-sm md:text-base font-mono text-cyan-400 font-semibold px-3 py-1 bg-cyan-500/10 rounded-lg border border-cyan-500/20">
                            Client Engine & Cloud Backend Engineer
                        </span>
                    </div>

                    {/* Mission / Philosophy Description */}
                    <p className="text-text-muted max-w-3xl mx-auto mb-10 text-sm md:text-base leading-relaxed">
                        몰입감 넘치는 가상세계를 구현하는 <strong>DirectX & Unity 3D 게임 엔진</strong>부터, 대규모 동시 접속을 지탱하는 <strong>고성능 분산 백엔드 서버</strong>, 그리고 지능형 <strong>AI 에이전트 자동화 시스템</strong>까지—견고한 아키텍처와 엔지니어링 철학으로 차세대 소프트웨어를 창조합니다.
                    </p>

                    {/* Key Metrics Stats Dashboard (Impact KPIs) */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full max-w-3xl mb-10">
                        <div className="bg-bg-card/60 backdrop-blur-md border border-bg-accent/80 rounded-2xl p-5 text-left flex flex-col justify-between hover:border-cyan-500/40 transition-colors shadow-sm">
                            <div className="flex items-center justify-between text-cyan-400 mb-2">
                                <span className="font-mono text-xs text-text-muted">Server Availability</span>
                                <Activity size={16} />
                            </div>
                            <div className="font-mono text-2xl md:text-3xl font-bold text-text-primary mb-1">
                                99.9%
                            </div>
                            <span className="text-[11px] text-text-muted font-sans">고가용성 분산 아키텍처</span>
                        </div>

                        <div className="bg-bg-card/60 backdrop-blur-md border border-bg-accent/80 rounded-2xl p-5 text-left flex flex-col justify-between hover:border-blue-500/40 transition-colors shadow-sm">
                            <div className="flex items-center justify-between text-blue-400 mb-2">
                                <span className="font-mono text-xs text-text-muted">Graphics Latency</span>
                                <Zap size={16} />
                            </div>
                            <div className="font-mono text-2xl md:text-3xl font-bold text-text-primary mb-1">
                                60+ FPS
                            </div>
                            <span className="text-[11px] text-text-muted font-sans">실시간 렌더링 & 셰이더 최적화</span>
                        </div>

                        <div className="bg-bg-card/60 backdrop-blur-md border border-bg-accent/80 rounded-2xl p-5 text-left flex flex-col justify-between hover:border-purple-500/40 transition-colors shadow-sm">
                            <div className="flex items-center justify-between text-purple-400 mb-2">
                                <span className="font-mono text-xs text-text-muted">R&D Initiatives</span>
                                <Layers size={16} />
                            </div>
                            <div className="font-mono text-2xl md:text-3xl font-bold text-text-primary mb-1">
                                12+ Active
                            </div>
                            <span className="text-[11px] text-text-muted font-sans">핵심 도메인 기술 프로젝트</span>
                        </div>
                    </div>

                    {/* CTA Actions */}
                    <div className="flex flex-wrap items-center justify-center gap-4">
                        <motion.button
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            onClick={() => {
                                document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
                            }}
                            className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white rounded-xl font-semibold shadow-lg shadow-cyan-500/20 transition-all inline-flex items-center gap-2 cursor-pointer border border-cyan-400/20 text-sm md:text-base"
                        >
                            <span>프로젝트 포트폴리오 탐색</span>
                            <ArrowUpRight size={18} />
                        </motion.button>

                        <motion.button
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            onClick={() => {
                                document.getElementById('divisions')?.scrollIntoView({ behavior: 'smooth' });
                            }}
                            className="px-7 py-4 bg-bg-card/80 hover:bg-bg-card text-text-primary rounded-xl font-semibold border border-bg-accent/80 transition-all inline-flex items-center gap-2 cursor-pointer text-sm md:text-base"
                        >
                            <span>핵심 엔지니어링 도메인</span>
                        </motion.button>
                    </div>
                </motion.div>
            </div>

            {/* Bottom Scroll Indicator */}
            <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                onClick={handleScrollDown}
                className="absolute bottom-6 left-1/2 -translate-x-1/2 text-cyan-400/60 hover:text-cyan-400 cursor-pointer transition-colors p-2 hidden md:block"
            >
                <ChevronDown size={28} />
            </motion.div>
        </section>
    );
};
import React from 'react';
import { motion } from 'framer-motion';
import { Gamepad2, Server, Brain, ShieldCheck, Cpu } from 'lucide-react';

const divisions = [
    {
        id: 'client',
        step: '01',
        title: 'Game Client & 3D Graphics',
        subtitle: '몰입형 게임 클라이언트 및 그래픽스 엔진',
        desc: 'DirectX 11/12 및 Unity 3D 기반 자체 물리 엔진, 셰이더 및 드로우콜 최적화, 컴포넌트 기반 오브젝트 아키텍처 및 XR 솔루션 구축.',
        icon: Gamepad2,
        badge: 'ENGINE & CLIENT',
        metrics: '60+ FPS Realtime',
        techs: ['Unity 3D', 'DirectX 11/12', 'C#', 'HLSL', '3D Max/Blender'],
        accentGradient: 'from-cyan-500/20 via-blue-500/10 to-transparent',
        borderGlow: 'hover:border-cyan-400/50 hover:shadow-[0_0_30px_rgba(0,240,255,0.12)]',
        color: 'text-cyan-400',
        bgPill: 'bg-cyan-500/10 border-cyan-500/30 text-cyan-300'
    },
    {
        id: 'server',
        step: '02',
        title: 'Distributed Game Server Architecture',
        subtitle: '대규모 분산 서버 및 실시간 데이터 동기화',
        desc: 'Django REST Framework 및 실시간 소켓 기반 게임 서버 구축. 사용자 인증, 클라이언트 간 데이터 무결성 동기화, RESTful API 최적화 및 MySQL/MSSQL DB 설계.',
        icon: Server,
        badge: 'BACKEND & CLOUD',
        metrics: '99.9% High Availability',
        techs: ['Python', 'Django REST', 'MySQL / MSSQL', 'RESTful API', 'Docker'],
        accentGradient: 'from-blue-600/20 via-indigo-600/10 to-transparent',
        borderGlow: 'hover:border-blue-400/50 hover:shadow-[0_0_30px_rgba(59,130,246,0.12)]',
        color: 'text-blue-400',
        bgPill: 'bg-blue-500/10 border-blue-500/30 text-blue-300'
    },
    {
        id: 'ai-iot',
        step: '03',
        title: 'AI Agent & IoT Automation',
        subtitle: '지능형 AI 에이전트 및 하드웨어 제어',
        desc: 'LangChain & LLM 기반 데스크톱 AI 비서, 신경망 이상 감지 보안 모니터링, Raspberry Pi & PLC 센서 연동 자동화 및 GIS 공간 데이터 제어 시스템.',
        icon: Brain,
        badge: 'AI & HARDWARE',
        metrics: 'Intelligent Automation',
        techs: ['LangChain / LLM', 'TensorFlow', 'Raspberry Pi', 'PLC / Sensors', 'GIS Control'],
        accentGradient: 'from-purple-600/20 via-pink-600/10 to-transparent',
        borderGlow: 'hover:border-purple-400/50 hover:shadow-[0_0_30px_rgba(168,85,247,0.12)]',
        color: 'text-purple-400',
        bgPill: 'bg-purple-500/10 border-purple-500/30 text-purple-300'
    }
];

export const CoreDivisions: React.FC = () => {
    return (
        <section id="divisions" className="py-24 bg-bg-base/60 border-t border-bg-accent/40 relative overflow-hidden">
            {/* Ambient Lighting */}
            <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl pointer-events-none" />

            <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
                {/* Section Header */}
                <div className="flex flex-col items-center text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-semibold mb-3 tracking-wider font-mono">
                        <Cpu size={14} />
                        <span>CORE ENGINEERING DIVISIONS</span>
                    </div>
                    <h2 className="font-serif text-3xl md:text-5xl font-bold text-text-primary tracking-tight mb-4">
                        핵심 엔지니어링 도메인
                    </h2>
                    <p className="text-text-muted font-sans text-sm md:text-base max-w-2xl leading-relaxed">
                        게임 클라이언트 엔진부터 대규모 분산 서버 아키텍처, 지능형 AI 에이전트까지 체계적인 풀스택 개발 파이프라인을 구축합니다.
                    </p>
                </div>

                {/* Division Cards */}
                <div className="grid lg:grid-cols-3 gap-8">
                    {divisions.map((div, index) => {
                        const IconComponent = div.icon;
                        return (
                            <motion.div
                                key={div.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-80px" }}
                                transition={{ duration: 0.5, delay: index * 0.15 }}
                                className={`group relative bg-bg-card/40 border border-bg-accent/70 rounded-2xl p-8 flex flex-col justify-between backdrop-blur-md transition-all duration-300 ${div.borderGlow}`}
                            >
                                {/* Card Top Glow Gradient */}
                                <div className={`absolute inset-0 bg-gradient-to-b ${div.accentGradient} rounded-2xl opacity-60 pointer-events-none`} />

                                <div className="relative z-10">
                                    {/* Header & Step Number */}
                                    <div className="flex items-center justify-between mb-6">
                                        <div className={`p-3.5 rounded-xl bg-bg-base border border-bg-accent/80 ${div.color} shadow-sm group-hover:scale-105 transition-transform`}>
                                            <IconComponent size={26} />
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-mono font-semibold border ${div.bgPill}`}>
                                                {div.badge}
                                            </span>
                                            <span className="font-mono text-xl font-bold text-text-muted/40">
                                                {div.step}
                                            </span>
                                        </div>
                                    </div>

                                    {/* Titles */}
                                    <h3 className="font-serif text-xl font-bold text-text-primary mb-2 group-hover:text-cyan-300 transition-colors">
                                        {div.title}
                                    </h3>
                                    <p className={`text-xs font-semibold mb-4 tracking-wide ${div.color}`}>
                                        {div.subtitle}
                                    </p>

                                    {/* Description */}
                                    <p className="text-text-muted text-[13px] leading-relaxed mb-6">
                                        {div.desc}
                                    </p>
                                </div>

                                {/* Bottom Tech Stack & Metrics */}
                                <div className="relative z-10 pt-6 border-t border-bg-accent/40 mt-auto">
                                    <div className="flex items-center justify-between mb-3 text-xs">
                                        <span className="font-mono text-text-muted text-[11px]">Key Metric</span>
                                        <span className="font-mono font-bold text-emerald-400 flex items-center gap-1">
                                            <ShieldCheck size={13} /> {div.metrics}
                                        </span>
                                    </div>
                                    <div className="flex flex-wrap gap-1.5">
                                        {div.techs.map((tech, i) => (
                                            <span key={i} className="text-[10px] px-2 py-0.5 bg-bg-base/80 text-text-muted rounded border border-bg-accent/50 font-mono">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};
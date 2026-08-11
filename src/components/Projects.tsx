import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, FileText, ExternalLink, Layers } from 'lucide-react';

interface Project {
    id: string;
    category: 'game-server' | 'ai' | 'web-iot' | 'docs';
    title: string;
    type: string;
    desc: string;
    tech: string[];
    link: string;
    isRepo: boolean;
}

const CATEGORIES = [
    { id: 'all', label: '전체' },
    { id: 'game-server', label: '게임 & 서버' },
    { id: 'ai', label: '인공지능 & 자동화' },
    { id: 'web-iot', label: '웹, IoT & GIS' },
    { id: 'docs', label: '기획 & 문서' }
] as const;

const projects: Project[] = [
    {
        id: "virtual-server",
        category: "game-server",
        title: "Virtual Server Architecture",
        type: "백엔드 / 게임 서버 (Backend & Game Server)",
        desc: "Django REST Framework를 이용한 게임 서버 구축 프로젝트. 사용자 인증, 게임 클라이언트 간 데이터 동기화, RESTful API 설계 및 데이터베이스 최적화 구현.",
        tech: ["Python", "Django", "REST API", "MySQL"],
        link: "https://github.com/srunaic/Virtual-Server---Test?tab=readme-ov-file",
        isRepo: true
    },
    {
        id: "luna-ai",
        category: "ai",
        title: "Luna AI Agent",
        type: "인공지능 / 데스크톱 애플리케이션 (AI Desktop App)",
        desc: "LLM 기반 데스크톱 AI 인텔리전트 비서 프로그램. 자연어 분석 기반의 시스템 제어 및 상호작용형 대안 작업 구현.",
        tech: ["Python", "LangChain", "PyQt", "LLM"],
        link: "https://github.com/srunaic/Luna-AI-Agent",
        isRepo: true
    },
    {
        id: "ai-dashboard",
        category: "web-iot",
        title: "AI Big Data Dashboard",
        type: "웹 / 데이터 시각화 대시보드 (Web & Charts)",
        desc: "AI 및 빅데이터 분석 결과 시각화를 위한 대시보드 웹 애플리케이션. React 바인딩 및 다양한 동적 차트 라이브러리 프로토타입.",
        tech: ["React", "JavaScript", "Charts.js"],
        link: "https://github.com/srunaic/my_DashBoard_AI_BigData",
        isRepo: true
    },
    {
        id: "tech-blog",
        category: "web-iot",
        title: "My Tech Blog",
        type: "웹 / 개인 기술 블로그 (Web Blog)",
        desc: "기술 지식 공유 및 개발 성과물 기록용 개인 기술 블로그. GitHub Actions를 이용한 CI/CD 정적 호스팅 구축.",
        tech: ["Web", "GitHub Actions", "Markdown"],
        link: "https://github.com/srunaic/MyTestBlog",
        isRepo: true
    },
    {
        id: "spec-note-1",
        category: "docs",
        title: "Project Specification Note #1",
        type: "기술 설계 기획 문서 (Documentation)",
        desc: "실시간 아키텍처 및 상세 컴포넌트 설계 방향을 기술한 프로젝트 기획/설계 기술 명세서.",
        tech: ["PDF", "Architecture", "Design Spec"],
        link: "https://drive.google.com/file/d/1BclOv8S7KH_gkG-2oa4jo2rvKITX3xVo/view?usp=drive_link",
        isRepo: false
    },
    {
        id: "spec-note-2",
        category: "docs",
        title: "Project Specification Note #2",
        type: "기술 설계 기획 문서 (Documentation)",
        desc: "시스템 제어 흐름 설계와 모바일 연동 핵심 로직에 대한 기술 설계서.",
        tech: ["PDF", "System Design", "Spec Note"],
        link: "https://drive.google.com/file/d/1CSflhuA75dAJCB6kMGngqIIMF04ucXrj/view?usp=drive_link",
        isRepo: false
    },
    {
        id: "spec-note-3",
        category: "docs",
        title: "Project Specification Note #3",
        type: "기술 설계 기획 문서 (Documentation)",
        desc: "개발 진행 과정에서의 핵심 문제 해결 방식과 포트폴리오 에셋 리포트.",
        tech: ["PDF", "Portfolio", "Asset Report"],
        link: "https://drive.google.com/file/d/15Y0hztE1ScD6eXezsbjoZV8lUOhlKvdj/view?usp=drive_link",
        isRepo: false
    },
    {
        id: "sensor-plc",
        category: "web-iot",
        title: "Sensor & PLC Raspberry Pi",
        type: "IoT 하드웨어 연동 (Hardware & IoT)",
        desc: "라즈베리 파이를 활용한 센서 및 PLC 하드웨어 연동 프로젝트. 실시간 데이터 수집 및 제어 자동화 로직 구현.",
        tech: ["Raspberry Pi", "PLC", "Python", "Sensors"],
        link: "https://github.com/srunaic/sensor_plc_rasberrypie-",
        isRepo: true
    },
    {
        id: "directx-engine",
        category: "game-server",
        title: "DirectX Game Engine",
        type: "게임 엔진 / 그래픽스 (Game Engine Graphics)",
        desc: "DirectX 11/12 기반 자체 물리/렌더링 게임 엔진 제작. 드로우콜 최적화, 기하 변환 기법, 컴포넌트 기반 오브젝트 아키텍처 적용.",
        tech: ["C++", "DirectX", "HLSL", "Win32 API"],
        link: "https://github.com/srunaic/DirectX_Game_EngineMaker",
        isRepo: true
    },
    {
        id: "ai-hacker-protection",
        category: "ai",
        title: "AI Hacker Protection",
        type: "인공지능 / 시스템 보안 (Security AI)",
        desc: "신경망 이상 감지 엔진을 활용한 실시간 에이전트 해킹 모니터링 및 방어 탐지 시스템.",
        tech: ["Python", "TensorFlow", "Security", "AI"],
        link: "https://github.com/srunaic/AI_Hacker_Protection",
        isRepo: true
    },
    {
        id: "traffic-gis",
        category: "web-iot",
        title: "Traffic GIS Controller",
        type: "GIS 시스템 / 인프라 제어 (GIS Controls)",
        desc: "GIS 인프라 공간 데이터 분석을 기반으로 하는 교통 제어 최적화 및 신호 모니터링 컨트롤러.",
        tech: ["GIS", "C#", ".NET", "System Control"],
        link: "https://github.com/srunaic/TrafficGIS_Controller",
        isRepo: true
    },
    {
        id: "design-ai-support",
        category: "ai",
        title: "Design AI Agent Support",
        type: "인공지능 / 작업 자동화 (AI Automation)",
        desc: "워크플로우 자동화 및 크리에이티브 시각 디자인 영역을 보조하는 기계학습 기반의 설계 시스템.",
        tech: ["Python", "AI", "Automation", "LLM"],
        link: "https://github.com/srunaic/design-ai-agent-support",
        isRepo: true
    }
];

export const Projects = () => {
    const [activeCategory, setActiveCategory] = useState<string>('all');

    const filteredProjects = activeCategory === 'all'
        ? projects
        : projects.filter(p => p.category === activeCategory);

    return (
        <section id="projects" className="py-24 bg-bg-base border-t border-bg-accent/40 relative">
            <div className="max-w-6xl mx-auto px-4 sm:px-6">
                <div className="flex flex-col items-center text-center mb-10">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-accent-light/50 border border-brand-accent/20 text-brand-accent text-xs font-semibold mb-3">
                        <Layers size={14} />
                        <span>PORTFOLIO DIRECTORY</span>
                    </div>
                    <h2 className="font-serif text-3xl md:text-4xl font-bold text-text-primary tracking-tight mb-3">
                        주요 프로젝트
                    </h2>
                    <p className="text-text-muted font-sans text-sm md:text-base max-w-xl">
                        분야별 핵심 프로젝트, 시스템 아키텍처 및 기술 명세서 모음
                    </p>
                </div>

                {/* Corporate Header Category Navigation Box */}
                <div className="flex justify-center mb-12">
                    <div className="inline-flex items-center gap-1.5 bg-bg-card/60 backdrop-blur-md border border-bg-accent/70 rounded-2xl p-1.5 max-w-full overflow-x-auto shadow-sm">
                        {CATEGORIES.map((tab) => {
                            const isActive = activeCategory === tab.id;
                            const count = tab.id === 'all' 
                                ? projects.length 
                                : projects.filter(p => p.category === tab.id).length;

                            return (
                                <button
                                    key={tab.id}
                                    onClick={() => setActiveCategory(tab.id)}
                                    className={`relative px-4 py-2.5 rounded-xl font-sans text-xs md:text-sm font-semibold transition-colors duration-200 flex items-center gap-2 whitespace-nowrap cursor-pointer select-none ${
                                        isActive ? 'text-brand-accent' : 'text-text-muted hover:text-text-primary'
                                    }`}
                                >
                                    <span className="relative z-10">{tab.label}</span>
                                    <span className={`relative z-10 text-[10px] px-1.5 py-0.2 rounded-full font-mono transition-colors ${
                                        isActive ? 'bg-brand-accent/15 text-brand-accent font-bold' : 'bg-bg-accent/50 text-text-muted'
                                    }`}>
                                        {count}
                                    </span>

                                    {isActive && (
                                        <motion.div
                                            layoutId="activeProjectCategory"
                                            className="absolute inset-0 rounded-xl bg-bg-base border border-bg-accent/80 shadow-xs"
                                            transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                                        />
                                    )}
                                </button>
                            );
                        })}
                    </div>
                </div>

                {/* Filtered Projects Grid */}
                <motion.div 
                    layout
                    className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                    <AnimatePresence mode="popLayout">
                        {filteredProjects.map((project) => (
                            <motion.div
                                key={project.id}
                                layout
                                initial={{ opacity: 0, scale: 0.94 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.94 }}
                                transition={{ duration: 0.3 }}
                                className="bg-bg-card/30 border border-bg-accent/60 rounded-xl overflow-hidden hover:border-brand-accent/40 hover:bg-bg-card/65 transition-all group flex flex-col"
                            >
                                <div className="p-6 h-full flex flex-col">
                                    <div className="flex justify-between items-start mb-4">
                                        <div className="p-2.5 bg-bg-base border border-bg-accent/60 rounded-lg text-brand-accent transition-colors">
                                            {project.isRepo ? <Github size={22} /> : <FileText size={22} />}
                                        </div>
                                        <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-text-muted hover:text-brand-accent transition-colors p-1" aria-label="Learn more about this project">
                                            <ExternalLink size={18} />
                                        </a>
                                    </div>

                                    <h3 className="font-serif text-lg font-bold text-text-primary mb-2 group-hover:text-brand-accent transition-colors">
                                        {project.title}
                                    </h3>
                                    <p className="text-xs text-brand-accent font-semibold mb-3 tracking-wide select-none">{project.type}</p>
                                    <p className="text-text-muted text-[13px] leading-relaxed mb-6 flex-grow">{project.desc}</p>

                                    <div className="flex flex-wrap gap-2 mt-auto">
                                        {project.tech.map((tag, i) => (
                                            <span key={i} className="text-[10px] px-2 py-0.5 bg-bg-base text-text-muted rounded border border-bg-accent/60 font-mono hover:bg-brand-accent-light/40 transition-colors">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>
            </div>
        </section>
    );
};


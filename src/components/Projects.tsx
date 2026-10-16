import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, FileText, ExternalLink, Layers } from 'lucide-react';
import { ProjectThumbnail } from './ProjectThumbnails';

interface Project {
    id: string;
    category: 'game-server' | 'ai' | 'web-iot' | 'docs' | 'egov-nexacro';
    title: string;
    type: string;
    desc: string;
    tech: string[];
    link: string;
    isRepo: boolean;
    hidden?: boolean;
}

interface CategoryItem {
    id: 'all' | 'game-server' | 'ai' | 'web-iot' | 'docs' | 'egov-nexacro';
    label: string;
    hidden?: boolean;
}

const CATEGORIES: CategoryItem[] = [
    { id: 'all', label: '전체' },
    { id: 'egov-nexacro', label: 'eGovFrame & Nexacro' },
    { id: 'game-server', label: '게임 & 서버' },
    { id: 'ai', label: '인공지능 & 자동화' },
    { id: 'web-iot', label: '웹, IoT & GIS' },
    { id: 'docs', label: '기획 & 문서', hidden: true } // UI 숨김 처리 (추후 복원 및 백업 가능)
];

const projects: Project[] = [
    {
        id: "korea-history-cbt",
        category: "web-iot",
        title: "Korea History CBT & Excel System",
        type: "온라인 교구재 개발 (EdTech & CBT System)",
        desc: "국사편찬위원회 기출 빅데이터 기반 77개 불변 출제 공식 엑셀 DB와 1:1 연동되는 무설치 웹 CBT 문제은행 프로그램. 1초 즉각 채점, OMR 번호판, 단축키 지원 및 엑셀 일체형 뷰어를 갖춘 실전 맞춤형 디지털 교구재.",
        tech: ["JavaScript", "HTML5/CSS3", "Excel DB", "EdTech", "CBT Engine"],
        link: "https://github.com/srunaic/Korea_History_Exel_CBT_System",
        isRepo: true
    },
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
        isRepo: true,
        hidden: true
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
        id: "integrated-learning-materials",
        category: "egov-nexacro",
        title: "Integrated Learning Materials",
        type: "전자정부 & 넥사크로 시스템 (eGovFrame & Nexacro)",
        desc: "전자정부표준프레임워크(eGovFramework)와 투비소프트 Nexacro UI 솔루션 기반의 엔터프라이즈 통합 실무 학습 시스템 및 아키텍처 아카이브. 공공/기업용 웹 프레임워크와 UI/UX 컴포넌트 연동 로직 구현.",
        tech: ["eGovFramework", "Nexacro", "Spring Framework", "Java", "MyBatis"],
        link: "https://github.com/srunaic/Integrated_learning_materials",
        isRepo: true
    },
    /* 
     * [기획 & 문서 백업 데이터 - UI 제거 완료] 
     * KOG 엘소드 등 기획 문서는 src/data/backup_docs.ts에 백업 보관되어 있습니다.
     * 추후 복원 시 backup_docs.ts를 import하거나 아래 주석을 해제하시면 됩니다.
     *
    {
        id: "spec-note-1",
        category: "docs",
        title: "[KOG 엘소드] 콤보 액션 메커니즘 및 손맛 개선 Fun QA 분석서",
        type: "게임성 검증 & 역기획서 (Fun QA & Reverse Planning)",
        desc: "KOG <엘소드>의 횡스크롤 콤보 액션 및 히트스톱(역경직) 연출 심층 분석. 후반 레이드 광역 스킬 난사로 인한 '조작 손맛 희석' 원인 규명 및 커맨드 콤보-기믹 연계 보상 밸런스 개선안 제안.",
        tech: ["KOG Elsword", "Fun QA", "Hit-stop Analysis", "Combo Balance"],
        link: "https://drive.google.com/file/d/1BclOv8S7KH_gkG-2oa4jo2rvKITX3xVo/view?usp=drive_link",
        isRepo: false,
        hidden: true
    },
    {
        id: "spec-note-2",
        category: "docs",
        title: "[액션 RPG] 공방(패링/회피) 판정 및 카메라 UX 검증 리포트",
        type: "전투 메커니즘 & UX 분석 (Combat UX & Balance Audit)",
        desc: "<명조>, <드래곤소드(하운드13)>, <로스트아크>의 공방 시스템 비교 분석. 저스트 회피·패링 판정 프레임 검증, 거대 보스전 카메라 앵글 이탈 및 공격 전조 가림 현상 해결을 위한 스마트 줌아웃 가이드.",
        tech: ["Parry & Evade", "Camera UX", "Hitbox Audit", "Action Balance"],
        link: "https://drive.google.com/file/d/1CSflhuA75dAJCB6kMGngqIIMF04ucXrj/view?usp=drive_link",
        isRepo: false,
        hidden: true
    },
    {
        id: "spec-note-3",
        category: "docs",
        title: "[3D 최적화] Unity 엔진 기반 인풋렉 및 렌더링 성능 Fun QA 보고서",
        type: "기술 기반 QA & 최적화 (Technical QA & Latency Audit)",
        desc: "Unity 3D 기반 액션 게임 개발 및 실무 최적화 경험을 바탕으로, 드로우콜 병목과 프레임 드랍이 입력 지연(인풋렉) 및 조작 쾌감에 미치는 영향 정량 분석. 타격 손맛을 유지하는 리소스 경량화 표준 수립.",
        tech: ["Unity 3D", "Input Latency", "DrawCall Optimization", "Tech QA"],
        link: "https://drive.google.com/file/d/15Y0hztE1ScD6eXezsbjoZV8lUOhlKvdj/view?usp=drive_link",
        isRepo: false,
        hidden: true
    },
    */
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

    // 화면에 표시할 활성 카테고리 및 프로젝트 목록
    const visibleCategories = CATEGORIES.filter(c => !c.hidden);
    const visibleProjects = projects.filter(p => !p.hidden);

    const filteredProjects = activeCategory === 'all'
        ? visibleProjects
        : visibleProjects.filter(p => p.category === activeCategory);

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
                        {visibleCategories.map((tab) => {
                            const isActive = activeCategory === tab.id;
                            const count = tab.id === 'all' 
                                ? visibleProjects.length 
                                : visibleProjects.filter(p => p.category === tab.id).length;

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
                    className="grid md:grid-cols-2 lg:grid-cols-3 gap-7"
                >
                    <AnimatePresence mode="popLayout">
                        {filteredProjects.map((project) => (
                            <motion.div
                                key={project.id}
                                layout
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.95 }}
                                transition={{ duration: 0.35 }}
                                className="bg-bg-card/40 border border-bg-accent/70 rounded-2xl overflow-hidden hover:border-brand-accent/60 hover:shadow-[0_0_25px_rgba(0,240,255,0.08)] hover:bg-bg-card/75 transition-all group flex flex-col backdrop-blur-sm"
                            >
                                {/* Project Visual Thumbnail Banner */}
                                <div className="relative overflow-hidden border-b border-bg-accent/50 group-hover:scale-[1.01] transition-transform duration-300">
                                    <ProjectThumbnail projectId={project.id} />
                                    
                                    {/* Action Link Top-Right Floating Icon */}
                                    <a 
                                        href={project.link} 
                                        target="_blank" 
                                        rel="noopener noreferrer" 
                                        className="absolute top-3 right-3 p-2 rounded-xl bg-slate-900/80 hover:bg-brand-accent text-text-muted hover:text-white border border-bg-accent/60 transition-all backdrop-blur-md shadow-sm" 
                                        aria-label="View Project Source / Documentation"
                                    >
                                        <ExternalLink size={15} />
                                    </a>
                                </div>

                                <div className="p-6 flex flex-col flex-grow">
                                    <div className="flex items-center gap-2 mb-2.5">
                                        <div className="p-1.5 bg-bg-base border border-bg-accent/60 rounded-md text-brand-accent">
                                            {project.isRepo ? <Github size={15} /> : <FileText size={15} />}
                                        </div>
                                        <span className="text-[11px] text-brand-accent font-semibold tracking-wide font-mono select-none">
                                            {project.type}
                                        </span>
                                    </div>

                                    <h3 className="font-serif text-lg font-bold text-text-primary mb-2.5 group-hover:text-brand-accent transition-colors leading-snug">
                                        {project.title}
                                    </h3>
                                    
                                    <p className="text-text-muted text-[13px] leading-relaxed mb-6 flex-grow">
                                        {project.desc}
                                    </p>

                                    {/* Tech Tags */}
                                    <div className="flex flex-wrap gap-1.5 mt-auto pt-4 border-t border-bg-accent/40">
                                        {project.tech.map((tag, i) => (
                                            <span key={i} className="text-[10px] px-2.5 py-1 bg-bg-base/90 text-text-muted rounded-md border border-bg-accent/60 font-mono group-hover:border-brand-accent/20 transition-colors">
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


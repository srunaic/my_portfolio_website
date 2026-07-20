import { motion } from 'framer-motion';
import { Github, FileText, ExternalLink } from 'lucide-react';

const projects = [
    {
        title: "Virtual Server Architecture",
        type: "백엔드 / 게임 서버 (Backend & Game Server)",
        desc: "Django REST Framework를 이용한 게임 서버 구축 프로젝트. 사용자 인증, 게임 클라이언트 간 데이터 동기화, RESTful API 설계 및 데이터베이스 최적화 구현.",
        tech: ["Python", "Django", "REST API", "MySQL"],
        link: "https://github.com/srunaic/Virtual-Server---Test?tab=readme-ov-file",
        isRepo: true
    },
    {
        title: "Luna AI Agent",
        type: "인공지능 / 데스크톱 애플리케이션 (AI Desktop App)",
        desc: "LLM 기반 데스크톱 AI 인텔리전트 비서 프로그램. 자연어 분석 기반의 시스템 제어 및 상호작용형 대안 작업 구현.",
        tech: ["Python", "LangChain", "PyQt", "LLM"],
        link: "https://github.com/srunaic/Luna-AI-Agent",
        isRepo: true
    },
    {
        title: "AI Big Data Dashboard",
        type: "웹 / 데이터 시각화 대시보드 (Web & Charts)",
        desc: "AI 및 빅데이터 분석 결과 시각화를 위한 대시보드 웹 애플리케이션. React 바인딩 및 다양한 동적 차트 라이브러리 프로토타입.",
        tech: ["React", "JavaScript", "Charts.js"],
        link: "https://github.com/srunaic/my_DashBoard_AI_BigData",
        isRepo: true
    },
    {
        title: "My Tech Blog",
        type: "웹 / 개인 기술 블로그 (Web Blog)",
        desc: "기술 지식 공유 및 개발 성과물 기록용 개인 기술 블로그. GitHub Actions를 이용한 CI/CD 정적 호스팅 구축.",
        tech: ["Web", "GitHub Actions", "Markdown"],
        link: "https://github.com/srunaic/MyTestBlog",
        isRepo: true
    },
    {
        title: "Project Specification Note #1",
        type: "기술 설계 기획 문서 (Documentation)",
        desc: "실시간 아키텍처 및 상세 컴포넌트 설계 방향을 기술한 프로젝트 기획/설계 기술 명세서.",
        tech: ["PDF", "Architecture", "Design Spec"],
        link: "https://drive.google.com/file/d/1BclOv8S7KH_gkG-2oa4jo2rvKITX3xVo/view?usp=drive_link",
        isRepo: false
    },
    {
        title: "Project Specification Note #2",
        type: "기술 설계 기획 문서 (Documentation)",
        desc: "시스템 제어 흐름 설계와 모바일 연동 핵심 로직에 대한 기술 설계서.",
        tech: ["PDF", "System Design", "Spec Note"],
        link: "https://drive.google.com/file/d/1CSflhuA75dAJCB6kMGngqIIMF04ucXrj/view?usp=drive_link",
        isRepo: false
    },
    {
        title: "Project Specification Note #3",
        type: "기술 설계 기획 문서 (Documentation)",
        desc: "개발 진행 과정에서의 핵심 문제 해결 방식과 포트폴리오 에셋 리포트.",
        tech: ["PDF", "Portfolio", "Asset Report"],
        link: "https://drive.google.com/file/d/15Y0hztE1ScD6eXezsbjoZV8lUOhlKvdj/view?usp=drive_link",
        isRepo: false
    },
    {
        title: "Sensor & PLC Raspberry Pi",
        type: "IoT 하드웨어 연거 (Hardware & IoT)",
        desc: "라즈베리 파이를 활용한 센서 및 PLC 하드웨어 연동 프로젝트. 실시간 데이터 수집 및 제어 자동화 로직 구현.",
        tech: ["Raspberry Pi", "PLC", "Python", "Sensors"],
        link: "https://github.com/srunaic/sensor_plc_rasberrypie-",
        isRepo: true
    },
    {
        title: "DirectX Game Engine",
        type: "게임 엔진 / 그래픽스 (Game Engine Graphics)",
        desc: "DirectX 11/12 기반 자체 물리/렌더링 게임 엔진 제작. 드로우콜 최적화, 기하 변환 기법, 컴포넌트 기반 오브젝트 아키텍처 적용.",
        tech: ["C++", "DirectX", "HLSL", "Win32 API"],
        link: "https://github.com/srunaic/DirectX_Game_EngineMaker",
        isRepo: true
    },
    {
        title: "AI Hacker Protection",
        type: "인공지능 / 시스템 보안 (Security AI)",
        desc: "신경망 이상 감지 엔진을 활용한 실시간 에이전트 해킹 모니터링 및 방어 탐지 시스템.",
        tech: ["Python", "TensorFlow", "Security", "AI"],
        link: "https://github.com/srunaic/AI_Hacker_Protection",
        isRepo: true
    },
    {
        title: "Traffic GIS Controller",
        type: "GIS 시스템 / 인프라 제어 (GIS Controls)",
        desc: "GIS 인프라 공간 데이터 분석을 기반으로 하는 교통 제어 최적화 및 신호 모니터링 컨트롤러.",
        tech: ["GIS", "C#", ".NET", "System Control"],
        link: "https://github.com/srunaic/TrafficGIS_Controller",
        isRepo: true
    },
    {
        title: "Design AI Agent Support",
        type: "인공지능 / 작업 자동화 (AI Automation)",
        desc: "워크플로우 자동화 및 크리에이티브 시각 디자인 영역을 보조하는 기계학습 기반의 설계 시스템.",
        tech: ["Python", "AI", "Automation", "LLM"],
        link: "https://github.com/srunaic/design-ai-agent-support",
        isRepo: true
    }
];

export const Projects = () => {
    return (
        <section id="projects" className="py-24 bg-bg-base border-t border-bg-accent/40 relative">
            <div className="max-w-6xl mx-auto px-4 sm:px-6">
                <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4 text-text-primary tracking-tight">주요 프로젝트</h2>
                <p className="text-text-muted mb-12 font-sans text-sm md:text-base">설계, 개발 및 아키텍처 기술 명세서 모음</p>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projects.map((project, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, scale: 0.96 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true, margin: "-50px" }}
                            whileHover={{ y: -6 }}
                            transition={{ duration: 0.4 }}
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
                </div>
            </div>
        </section>
    );
};
